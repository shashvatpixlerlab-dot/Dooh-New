"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { updateVenueAction } from "@/app/admin/actions";
import type { AdminVenue } from "@/lib/types";
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

const editVenueSchema = z.object({
  name: z.string().min(1, "Name is required"),
  contactEmail: z.string().email("Enter a valid email"),
  contactPhone: z.string().min(1, "Phone is required"),
  revenueModel: z.enum(["percentage", "flat"]),
  revenueValue: z.coerce.number().min(0, "Must be 0 or more"),
  defaultImageUrl: z.string().url("Enter a valid image URL"),
  status: z.enum(["ACTIVE", "INACTIVE"]),
});

type EditVenueInput = z.infer<typeof editVenueSchema>;

export function EditVenueDialog({
  venue,
  open,
  onOpenChange,
  onSaved,
}: {
  venue: AdminVenue | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved: () => void;
}) {
  const form = useForm<EditVenueInput>({
    resolver: zodResolver(editVenueSchema),
    defaultValues: {
      name: "",
      contactEmail: "",
      contactPhone: "",
      revenueModel: "percentage",
      revenueValue: 0.3,
      defaultImageUrl: "",
      status: "ACTIVE",
    },
  });

  useEffect(() => {
    if (!venue || !open) return;
    form.reset({
      name: venue.name,
      contactEmail: venue.contactEmail,
      contactPhone: venue.contactPhone ?? "",
      revenueModel: (venue.revenueModel === "flat" ? "flat" : "percentage") as
        | "percentage"
        | "flat",
      revenueValue: Number(venue.revenueValue ?? 0.3),
      defaultImageUrl: venue.defaultImageUrl ?? "",
      status: venue.status === "INACTIVE" ? "INACTIVE" : "ACTIVE",
    });
  }, [venue, open, form]);

  async function onSubmit(values: EditVenueInput) {
    if (!venue) return;
    try {
      await updateVenueAction(venue.id, values);
      toast.success("Venue updated");
      onOpenChange(false);
      onSaved();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to update venue");
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit venue</DialogTitle>
          <DialogDescription>Update contact details, revenue terms, and default image.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact phone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="revenueModel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Revenue model</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="percentage">Percentage</SelectItem>
                        <SelectItem value="flat">Flat</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="revenueValue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Revenue value</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" min={0} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
