"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createScreenSchema, updateScreenSchema } from "@dooh/shared";
import type { OwnerScreen } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { uploadOwnerImageToBunny } from "@/lib/bunny-upload";
import { ImageUploader } from "./ImageUploader";

type Props = {
  mode: "create" | "edit";
  screen?: OwnerScreen;
};

export function ScreenForm({ mode, screen }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [credential, setCredential] = useState<string | null>(null);

  const [name, setName] = useState(screen?.name ?? "");
  const [locationLabel, setLocationLabel] = useState(screen?.locationLabel ?? "");
  const [resolution, setResolution] = useState(screen?.resolution ?? "1920x1080");
  const [orientation, setOrientation] = useState(screen?.orientation ?? "landscape");
  const [slotDayPrice, setSlotDayPrice] = useState(
    screen ? String(screen.slotDayPrice) : "500"
  );
  const [status, setStatus] = useState(screen?.status ?? "ACTIVE");
  const [imageUrls, setImageUrls] = useState<string[]>(
    screen?.images?.map((i) => i.imageUrl) ?? []
  );
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  function fieldHint(field: string): string | undefined {
    return fieldErrors[field]?.[0];
  }

  useEffect(() => {
    return () => {
      document.body.style.pointerEvents = "";
      document.body.removeAttribute("data-scroll-locked");
    };
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setFieldErrors({});

    const parsed =
      mode === "create"
        ? createScreenSchema.safeParse({
            name,
            locationLabel,
            resolution,
            orientation,
            slotDayPrice: Number(slotDayPrice),
            imageUrls,
          })
        : updateScreenSchema.safeParse({
            name,
            locationLabel,
            resolution,
            orientation,
            slotDayPrice: Number(slotDayPrice),
            imageUrls,
            status,
          });

    if (!parsed.success) {
      setFieldErrors(parsed.error.flatten().fieldErrors as Record<string, string[]>);
      const first =
        parsed.error.errors[0]?.message ?? "Please fix the highlighted fields";
      setError(first);
      return;
    }

    setLoading(true);
    try {
      const body = parsed.data;

      const url =
        mode === "create" ? "/api/owner/screens" : `/api/owner/screens/${screen!.id}`;
      const res = await fetch(url, {
        method: mode === "create" ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg = data.message;
        throw new Error(
          Array.isArray(msg) ? msg.join(", ") : (msg ?? "Failed to save screen")
        );
      }

      if (mode === "create" && data.credential) {
        setCredential(data.credential);
        toast.success("Screen submitted — pending admin approval");
      } else {
        toast.success("Screen updated");
        router.push("/owner/screens");
        router.refresh();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setLoading(false);
    }
  }

  if (credential) {
    return (
      <Card className="max-w-xl border-input bg-card">
        <CardHeader>
          <CardTitle>Screen created</CardTitle>
          <CardDescription>
            Your screen is pending review and will appear on the marketplace once approved. Save
            this pairing credential — you will need it to connect the physical player.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <code className="block rounded-lg border border-input bg-secondary px-4 py-3 text-sm font-mono">
            {credential}
          </code>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              onClick={() => {
                void navigator.clipboard.writeText(credential);
                toast.success("Copied to clipboard");
              }}
            >
              Copy credential
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                router.push("/owner/screens");
                router.refresh();
              }}
            >
              Go to screens
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <Card className="border-input bg-card shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Screen details</CardTitle>
            <CardDescription>
              Name and location shown to advertisers on the marketplace.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Screen name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Main lobby display"
                required
                aria-invalid={Boolean(fieldHint("name"))}
              />
              {fieldHint("name") && (
                <p className="text-xs text-destructive">{fieldHint("name")}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={locationLabel}
                onChange={(e) => setLocationLabel(e.target.value)}
                placeholder="e.g. Connaught Place, Delhi"
                required
                aria-invalid={Boolean(fieldHint("locationLabel"))}
              />
              {fieldHint("locationLabel") && (
                <p className="text-xs text-destructive">{fieldHint("locationLabel")}</p>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="resolution">Resolution</Label>
                <Input
                  id="resolution"
                  value={resolution}
                  onChange={(e) => setResolution(e.target.value)}
                  placeholder="1920x1080"
                  required
                  aria-invalid={Boolean(fieldHint("resolution"))}
                />
                {fieldHint("resolution") && (
                  <p className="text-xs text-destructive">{fieldHint("resolution")}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label>Orientation</Label>
                <Select value={orientation} onValueChange={setOrientation}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="landscape">Landscape</SelectItem>
                    <SelectItem value="portrait">Portrait</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-input bg-card shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Photos</CardTitle>
            <CardDescription>
              Upload at least 3 high-quality images. Files are stored on Bunny CDN
              via secure presigned upload.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ImageUploader
              imageUrls={imageUrls}
              onChange={setImageUrls}
              uploadFile={uploadOwnerImageToBunny}
            />
            {fieldHint("imageUrls") && (
              <p className="mt-2 text-xs text-destructive">{fieldHint("imageUrls")}</p>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="border-input bg-card shadow-sm lg:sticky lg:top-8">
          <CardHeader>
            <CardTitle className="text-lg">Pricing & status</CardTitle>
            <CardDescription>Daily rate per 10-second slot on this screen.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price per slot / day</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                  ₹
                </span>
                <Input
                  id="price"
                  type="number"
                  min={0}
                  step="1"
                  className="pl-7"
                  value={slotDayPrice}
                  onChange={(e) => setSlotDayPrice(e.target.value)}
                  required
                  aria-invalid={Boolean(fieldHint("slotDayPrice"))}
                />
              </div>
              {fieldHint("slotDayPrice") && (
                <p className="text-xs text-destructive">{fieldHint("slotDayPrice")}</p>
              )}
            </div>

            {mode === "edit" && (
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ACTIVE">Active</SelectItem>
                    <SelectItem value="INACTIVE">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <Separator />

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Saving…" : mode === "create" ? "Create screen" : "Save changes"}
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="w-full"
              onClick={() => router.push("/owner/screens")}
            >
              Cancel
            </Button>
          </CardContent>
        </Card>
      </div>
    </form>
  );
}
