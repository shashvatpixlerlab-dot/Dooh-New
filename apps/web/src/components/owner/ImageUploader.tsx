"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { ImagePlus, Loader2, Trash2, Upload } from "lucide-react";
import { uploadOwnerImageToBunny } from "@/lib/bunny-upload";
import { resolveImageUrl } from "@/lib/image-url";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Props = {
  imageUrls: string[];
  onChange: (urls: string[]) => void;
  minImages?: number;
  uploadFile?: (file: File) => Promise<string>;
};

export function ImageUploader({
  imageUrls,
  onChange,
  minImages = 3,
  uploadFile = uploadOwnerImageToBunny,
}: Props) {
  const [uploading, setUploading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deletingIndex, setDeletingIndex] = useState<number | null>(null);

  const uploadFiles = useCallback(
    async (files: FileList | File[] | null) => {
      if (!files?.length) return;

      setError(null);
      setUploading(true);

      const newUrls = [...imageUrls];

      try {
        for (const file of Array.from(files)) {
          const cdnUrl = await uploadFile(file);
          newUrls.push(cdnUrl);
        }
        onChange(newUrls);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed");
      } finally {
        setUploading(false);
      }
    },
    [imageUrls, onChange, uploadFile]
  );

  async function removeAt(index: number) {
    const url = imageUrls[index];
    if (!url) return;

    setDeletingIndex(index);
    setError(null);

    try {
      const res = await fetch("/api/owner/upload", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl: url }),
      });
      if (!res.ok && res.status !== 404) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message ?? "Failed to delete image");
      }
      onChange(imageUrls.filter((_, i) => i !== index));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete image");
    } finally {
      setDeletingIndex(null);
    }
  }

  const metMinimum = imageUrls.length >= minImages;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <Label>Screen photos</Label>
        <span
          className={cn(
            "text-xs font-medium",
            metMinimum ? "text-emerald-500" : "text-muted-foreground"
          )}
        >
          {imageUrls.length} / {minImages}+ uploaded
        </span>
      </div>

      {imageUrls.length > 0 && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {imageUrls.map((url, i) => {
            const displayUrl = resolveImageUrl(url);
            return (
              <div
                key={`${url}-${i}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-input bg-secondary"
              >
                <Image
                  src={displayUrl}
                  alt={`Screen ${i + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 z-10 rounded-lg bg-black/70 p-1.5 text-white shadow-sm transition hover:bg-destructive disabled:opacity-50"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    void removeAt(i);
                  }}
                  disabled={deletingIndex === i}
                  aria-label={`Remove image ${i + 1}`}
                >
                  {deletingIndex === i ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {!metMinimum && imageUrls.length > 0 && (
        <p className="text-xs text-muted-foreground">
          Add {minImages - imageUrls.length} more photo
          {minImages - imageUrls.length === 1 ? "" : "s"} before saving.
        </p>
      )}

      <label
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          void uploadFiles(e.dataTransfer.files);
        }}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-10 text-center transition",
          dragging
            ? "border-primary bg-primary/5"
            : "border-input bg-secondary/30 hover:border-primary/40 hover:bg-secondary/50"
        )}
      >
        <input
          type="file"
          accept="image/jpeg,image/png"
          multiple
          disabled={uploading}
          className="sr-only"
          onChange={(e) => {
            void uploadFiles(e.target.files);
            e.target.value = "";
          }}
        />
        {uploading ? (
          <Loader2 className="mb-3 h-8 w-8 animate-spin text-primary" />
        ) : (
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Upload className="h-5 w-5" />
          </div>
        )}
        <p className="text-sm font-medium text-foreground">
          {uploading ? "Uploading…" : "Drag & drop photos here"}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          or click to browse · JPG/PNG · max 5 MB each
        </p>
        <span className="mt-4 inline-flex items-center gap-2 rounded-md border border-input bg-secondary px-3 py-1.5 text-sm font-medium text-foreground">
          <ImagePlus className="h-4 w-4" />
          Choose files
        </span>
      </label>

      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
