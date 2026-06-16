import { Injectable } from "@nestjs/common";
import { mkdir, writeFile } from "fs/promises";
import { dirname, join } from "path";

@Injectable()
export class LocalUploadService {
  private readonly uploadDir = join(process.cwd(), "uploads");

  async save(path: string, body: Buffer): Promise<string> {
    const fullPath = join(this.uploadDir, path);
    await mkdir(dirname(fullPath), { recursive: true });
    await writeFile(fullPath, body);
    return fullPath;
  }

  getPublicUrl(path: string, port: string | number): string {
    return `http://localhost:${port}/api/uploads/${path}`;
  }
}
