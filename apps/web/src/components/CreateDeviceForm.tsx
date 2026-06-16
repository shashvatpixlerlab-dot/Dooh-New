"use client";

import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import type { AdminVenue } from "@/lib/types";
import { createDeviceAction } from "@/app/admin/actions";
import { ADMIN_INVENTORY_CHANGED } from "@/components/CreateVenueForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const createDeviceSchema = z.object({
  venueId: z.string().min(1, "Select a venue"),
  name: z.string().min(1, "Device name is required"),
  locationLabel: z.string().min(1, "Location is required"),
  resolution: z.string().min(1, "Resolution is required"),
  orientation: z.enum(["landscape", "portrait"]),
  slotDayPrice: z.coerce.number().min(0, "Price must be 0 or more"),
});

type CreateDeviceInput = z.infer<typeof createDeviceSchema>;

const emptyValues: CreateDeviceInput = {
  venueId: "",
  name: "",
  locationLabel: "",
  resolution: "1920x1080",
  orientation: "landscape",
  slotDayPrice: 500,
};

function showPairingCredentialToast(credential: string) {
  toast.custom(
    (id) => (
      <div className="flex w-full max-w-md items-start gap-3 rounded-lg border border-input bg-card p-4 text-foreground shadow-lg">
        <div className="min-w-0 flex-1 space-y-1">
          <p className="text-sm font-semibold">Device created</p>
          <p className="text-xs text-muted-foreground">Pairing credential for Android TV</p>
          <code className="block break-all rounded-md bg-secondary px-2 py-1.5 text-xs font-mono">
            {credential}
          </code>
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="shrink-0"
          aria-label="Copy pairing credential"
          onClick={() => {
            void navigator.clipboard.writeText(credential).then(
              () => toast.dismiss(id),
              () => toast.error("Could not copy to clipboard")
            );
          }}
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    ),
    { duration: Infinity }
  );
}

type Props = {
  venues: AdminVenue[];
  venuesLoading?: boolean;
  defaultVenueId?: string;
  onCreated?: () => void;
  onCancel?: () => void;
};

export function CreateDeviceForm({
  venues,
  venuesLoading = false,
  defaultVenueId,
  onCreated,
  onCancel,
}: Props) {
  const form = useForm<CreateDeviceInput>({
    resolver: zodResolver(createDeviceSchema),
    defaultValues: emptyValues,
  });

  useEffect(() => {
    if (defaultVenueId) {
      form.setValue("venueId", defaultVenueId, { shouldValidate: true });
    }
  }, [defaultVenueId, form]);

  const resetForm = useCallback(() => {
    const venueId = defaultVenueId ?? form.getValues("venueId") ?? "";
    form.reset({ ...emptyValues, venueId });
  }, [defaultVenueId, form]);

  async function onSubmit(values: CreateDeviceInput) {
    try {
      const res = await createDeviceAction(values);
      resetForm();
      showPairingCredentialToast(res.credential);
      window.dispatchEvent(new CustomEvent(ADMIN_INVENTORY_CHANGED));
      onCreated?.();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to create device");
    }
  }

  const venueId = form.watch("venueId");
  const canSubmit = venues.length > 0 && !venuesLoading;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="min-w-0 space-y-4">
        <FormField
          control={form.control}
          name="venueId"
          render={({ field }) => (
            <FormItem className="min-w-0">
              <FormLabel>Venue</FormLabel>
              {venuesLoading ? (
                <p className="text-sm text-muted-foreground">Loading venues…</p>
              ) : venues.length === 0 ? (
                <p className="text-sm text-muted-foreground">Create a venue first.</p>
              ) : (
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select venue…" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {venues.map((v) => (
                      <SelectItem key={v.id} value={v.id}>
                        {v.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="min-w-0">
                <FormLabel>Device name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Main entrance screen" disabled={!canSubmit} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="locationLabel"
            render={({ field }) => (
              <FormItem className="min-w-0">
                <FormLabel>Location label</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Connaught Place, Delhi"
                    disabled={!canSubmit}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="resolution"
            render={({ field }) => (
              <FormItem className="min-w-0">
                <FormLabel>Resolution</FormLabel>
                <FormControl>
                  <Input placeholder="1920x1080" disabled={!canSubmit} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="orientation"
            render={({ field }) => (
              <FormItem className="min-w-0">
                <FormLabel>Orientation</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={!canSubmit}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="landscape">Landscape</SelectItem>
                    <SelectItem value="portrait">Portrait</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slotDayPrice"
            render={({ field }) => (
              <FormItem className="min-w-0">
                <FormLabel>Daily slot price (INR)</FormLabel>
                <FormControl>
                  <Input type="number" min={0} disabled={!canSubmit} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button
            type="submit"
            disabled={!canSubmit || !venueId || form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Creating…" : "Create device"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
