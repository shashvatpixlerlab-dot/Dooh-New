import {

  BadRequestException,

  Injectable,

  Logger,

  OnModuleInit,

  ServiceUnavailableException,

} from "@nestjs/common";

import { ConfigService } from "@nestjs/config";

import { randomUUID } from "crypto";

import { existsSync } from "fs";

import { unlink } from "fs/promises";

import { join } from "path";

import { LocalUploadService } from "./local-upload.service";



@Injectable()

export class BunnyService implements OnModuleInit {

  private readonly logger = new Logger(BunnyService.name);

  private cdnAvailable: boolean | null = null;
  private cdnHostnameChecked: string | null = null;



  constructor(

    private config: ConfigService,

    private localUpload: LocalUploadService

  ) {}



  async onModuleInit() {

    if (!this.hasBunnyStorage()) return;



    const available = await this.isCdnAvailable();

    const hostname = this.getCdnHostname();

    if (!hostname) {

      this.logger.warn(

        "BUNNY_CDN_HOSTNAME is not set. Create a pull zone linked to your storage zone, then set the hostname (e.g. dooh.b-cdn.net). Run: pnpm --filter @dooh/db setup:bunny-cdn"

      );

      return;

    }

    if (!available) {

      this.logger.warn(

        `Bunny CDN hostname "${hostname}" is suspended or not configured. Image URLs will use the API proxy until fixed. Run: pnpm --filter @dooh/db setup:bunny-cdn — use the hostname it prints (often differs from the storage zone name).`

      );

    } else {

      this.logger.log(`Bunny CDN active at https://${hostname}`);

    }

  }



  getUploadPath(prefix: "venues" | "devices" | "creatives", filename: string): string {

    const ext = filename.split(".").pop()?.toLowerCase() ?? "jpg";

    return `${prefix}/${randomUUID()}.${ext}`;

  }



  private getStorageZone(): string | undefined {

    const raw = this.config.get<string>("BUNNY_STORAGE_ZONE");

    if (!raw?.trim()) return undefined;



    let value = raw.trim().replace(/^["']|["']$/g, "");

    if (value.includes("storage.bunnycdn.com")) {

      const match = value.match(/storage\.bunnycdn\.com\/([^/?#]+)/i);

      if (match?.[1]) return match[1];

    }

    if (value.startsWith("http://") || value.startsWith("https://")) {

      try {

        const segment = new URL(value).pathname.replace(/^\//, "").split("/")[0];

        if (segment) return segment;

      } catch {

        /* ignore */

      }

    }

    return value;

  }



  private hasBunnyStorage(): boolean {

    return Boolean(

      this.getStorageZone() && this.config.get<string>("BUNNY_STORAGE_API_KEY")

    );

  }



  private getStorageHostname(): string {

    const raw =

      this.config.get<string>("BUNNY_STORAGE_HOSTNAME") ??

      "storage.bunnycdn.com";

    return raw.replace(/^https?:\/\//, "").replace(/\/$/, "");

  }



  /** Pull zone hostname only — must match a real pull zone linked to storage. */

  private getCdnHostname(): string | undefined {

    const raw = this.config.get<string>("BUNNY_CDN_HOSTNAME")?.trim();

    const cleaned = raw?.replace(/^https?:\/\//, "").replace(/\/$/, "");



    if (

      !cleaned ||

      cleaned === "storage.bunnycdn.com" ||

      cleaned.includes("storage.bunnycdn.com")

    ) {

      return undefined;

    }



    return cleaned;

  }



  private getApiBaseUrl(): string {

    const apiUrl = this.config.get<string>("API_URL");

    if (apiUrl) return apiUrl.replace(/\/$/, "");

    const port = process.env.API_PORT ?? 3001;

    return `http://localhost:${port}`;

  }



  private getApiProxyUrl(path: string): string {

    return `${this.getApiBaseUrl()}/api/creatives/file/${path}`;

  }



  async isCdnAvailable(): Promise<boolean> {

    const cdn = this.getCdnHostname();

    if (!cdn || !this.hasBunnyStorage()) {

      this.cdnAvailable = false;

      this.cdnHostnameChecked = cdn ?? null;

      return false;

    }

    if (this.cdnHostnameChecked === cdn && this.cdnAvailable !== null) {

      return this.cdnAvailable;

    }



    try {

      const res = await fetch(`https://${cdn}/`, {

        method: "GET",

        signal: AbortSignal.timeout(8000),

      });

      const text = await res.text();

      this.cdnAvailable =

        !text.includes("Domain suspended or not configured") &&

        !text.includes("unconfigured.css");

    } catch {

      this.cdnAvailable = false;

    }

    this.cdnHostnameChecked = cdn;

    return this.cdnAvailable;

  }



  /** Public URL stored in DB — Bunny CDN when pull zone is active, else API proxy. */

  async getStoredImageUrl(path: string): Promise<string> {

    const cdn = this.getCdnHostname();

    if (cdn && (await this.isCdnAvailable())) {

      return `https://${cdn}/${path}`;

    }

    return this.getApiProxyUrl(path);

  }



  /** Canonical Bunny CDN URL (only valid when pull zone is configured). */

  getBunnyCdnUrl(path: string): string {

    const cdn = this.getCdnHostname();

    if (cdn && this.cdnAvailable !== false) {

      return `https://${cdn}/${path}`;

    }

    return this.getApiProxyUrl(path);

  }



  getPublicUrl(path: string): string {

    return this.getBunnyCdnUrl(path);

  }



  getCdnUrl(path: string): string {

    return this.getPublicUrl(path);

  }



  /** Normalize any stored/proxy URL to the canonical public URL for DB persistence. */

  async toStoredImageUrl(imageUrl: string): Promise<string> {

    const path = this.extractStoragePath(imageUrl);

    if (!path) return imageUrl;

    if (this.hasBunnyStorage()) {

      return this.getStoredImageUrl(path);

    }

    return imageUrl;

  }



  extractStoragePath(imageUrl: string): string | null {

    try {

      const parsed = new URL(imageUrl);

      const prefix = "/api/creatives/file/";

      if (parsed.pathname.startsWith(prefix)) {

        return decodeURIComponent(parsed.pathname.slice(prefix.length));

      }

      return decodeURIComponent(parsed.pathname.replace(/^\//, ""));

    } catch {

      return null;

    }

  }



  private async uploadToLocal(path: string, data: Buffer): Promise<string> {

    await this.localUpload.save(path, data);

    return this.getPublicUrl(path);

  }



  async uploadBuffer(

    path: string,

    data: Buffer,

    contentType: string

  ): Promise<string> {

    const zone = this.getStorageZone();

    const apiKey = this.config.get<string>("BUNNY_STORAGE_API_KEY");

    const hostname = this.getStorageHostname();



    if (!zone || !apiKey) {

      return this.uploadToLocal(path, data);

    }



    const uploadUrl = `https://${hostname}/${zone}/${path}`;

    const res = await fetch(uploadUrl, {

      method: "PUT",

      headers: {

        AccessKey: apiKey,

        "Content-Type": contentType,

      },

      body: data,

    });



    if (res.status === 401) {

      throw new BadRequestException(

        "Invalid Bunny storage password. Set BUNNY_STORAGE_API_KEY to your storage zone password (FTP & API Access tab), not your account API key."

      );

    }



    if (!res.ok) {

      const detail = await res.text().catch(() => "");

      throw new ServiceUnavailableException(

        `Bunny storage upload failed (${res.status})${detail ? `: ${detail.slice(0, 120)}` : ""}`

      );

    }



    return this.getStoredImageUrl(path);

  }



  async fetchFile(

    path: string

  ): Promise<{ buffer: Buffer; contentType: string } | null> {

    const localPath = join(process.cwd(), "uploads", path);

    if (existsSync(localPath)) {

      const { readFile } = await import("fs/promises");

      const buffer = await readFile(localPath);

      const ext = path.split(".").pop()?.toLowerCase();

      const contentType =

        ext === "png"

          ? "image/png"

          : ext === "jpg" || ext === "jpeg"

            ? "image/jpeg"

            : "application/octet-stream";

      return { buffer, contentType };

    }



    const zone = this.getStorageZone();

    const apiKey = this.config.get<string>("BUNNY_STORAGE_API_KEY");

    if (!zone || !apiKey) return null;



    const hostname = this.getStorageHostname();

    const res = await fetch(`https://${hostname}/${zone}/${path}`, {

      headers: { AccessKey: apiKey },

    });

    if (!res.ok) return null;



    const buffer = Buffer.from(await res.arrayBuffer());

    const contentType =

      res.headers.get("content-type") ?? "application/octet-stream";

    return { buffer, contentType };

  }



  async deleteFile(path: string): Promise<boolean> {

    const localPath = join(process.cwd(), "uploads", path);

    if (existsSync(localPath)) {

      await unlink(localPath);

      return true;

    }



    const zone = this.getStorageZone();

    const apiKey = this.config.get<string>("BUNNY_STORAGE_API_KEY");

    if (!zone || !apiKey) return false;



    const hostname = this.getStorageHostname();

    const res = await fetch(`https://${hostname}/${zone}/${path}`, {

      method: "DELETE",

      headers: { AccessKey: apiKey },

    });

    return res.ok;

  }



  async getPresignedUpload(

    path: string,

    contentType = "application/octet-stream"

  ): Promise<{

    uploadUrl: string;

    cdnUrl: string;

    headers: Record<string, string>;

  }> {

    const zone = this.getStorageZone();

    const apiKey = this.config.get<string>("BUNNY_STORAGE_API_KEY");

    const hostname = this.getStorageHostname();

    const publicUrl = await this.getStoredImageUrl(path);



    if (!zone || !apiKey) {

      const port = process.env.API_PORT ?? 3001;

      return {

        uploadUrl: `http://localhost:${port}/api/creatives/upload/${path}`,

        cdnUrl: publicUrl,

        headers: { "Content-Type": contentType },

      };

    }



    return {

      uploadUrl: `https://${hostname}/${zone}/${path}`,

      cdnUrl: publicUrl,

      headers: {

        AccessKey: apiKey,

        "Content-Type": contentType,

      },

    };

  }

}

