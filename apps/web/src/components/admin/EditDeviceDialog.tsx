"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { updateDeviceAction } from "@/app/admin/actions";
import type { AdminDevice } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const editDeviceSchema = z.object({
  name: z.string().min(1, "Device name is required"),
  locationLabel: z.string().min(1, "Location is required"),
  resolution: z.string().min(1, "Resolution is required"),
  orientation: z.enum(["landscape", "portrait"]),
  defaultImageUrl: z.string().url("Enter a valid image URL"),
  slotDayPrice: z.coerce.number().min(0, "Price must be 0 or more"),
  status: z.enum(["ACTIVE", "INACTIVE"]),
});

type EditDeviceInput = z.infer<typeof editDeviceSchema>;

export function EditDeviceDialog({
  device,
  open,
  onOpenChange,
  onSaved,
}: {
  device: AdminDevice | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved: () => void;
}) {
  const form = useForm<EditDeviceInput>({
    resolver: zodResolver(editDeviceSchema),
    defaultValues: {
      name: "",
      locationLabel: "",
      resolution: "1920x1080",
      orientation: "landscape",
      defaultImageUrl: "",
      slotDayPrice: 500,
      status: "ACTIVE",
    },
  });

  useEffect(() => {
    if (!device || !open) return;
    form.reset({
      name: device.name,
      locationLabel: device.locationLabel,
      resolution: device.resolution,
      orientation: device.orientation === "portrait" ? "portrait" : "landscape",
      defaultImageUrl: device.defaultImageUrl,
      slotDayPrice: Number(device.slotDayPrice),
      status: device.status === "INACTIVE" ? "INACTIVE" : "ACTIVE",
    });
  }, [device, open, form]);

  async function onSubmit(values: EditDeviceInput) {
    if (!device) return;
    try {
      await updateDeviceAction(device.id, values);
      toast.success("Device updated");
      onOpenChange(false);
      onSaved();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to update device");
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit device</DialogTitle>
          <DialogDescription>
            Update screen details for {device?.venue.name ?? "this venue"}. Pairing credential is
            unchanged.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Device name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="locationLabel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location label</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="resolution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resolution</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="orientation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Orientation</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
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
                <FormItem>
                  <FormLabel>Price per slot per day (INR)</FormLabel>
                  <FormControl>
                    <Input type="number" min={0} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="defaultImageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Default image URL</FormLabel>
                  <FormControl>
                    <Input type="url" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ACTIVE">Active</SelectItem>
                      <SelectItem value="INACTIVE">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Saving…" : "Save changes"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
