"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { createVenueAction } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const VENUE_CREATED_EVENT = "dooh:venue-created";
export const ADMIN_INVENTORY_CHANGED = "dooh:admin-inventory-changed";

const createVenueSchema = z.object({
  name: z.string().min(1, "Name is required"),
  contactEmail: z.string().email("Enter a valid email"),
  contactPhone: z.string().min(1, "Phone is required"),
  revenueModel: z.enum(["percentage", "flat"]),
  revenueValue: z.coerce.number().min(0, "Must be 0 or more"),
  defaultImageUrl: z.string().url("Enter a valid image URL (https://…)"),
});

type CreateVenueInput = z.infer<typeof createVenueSchema>;

type Props = {
  onCreated?: (venueId: string) => void;
  onCancel?: () => void;
};

export function CreateVenueForm({ onCreated, onCancel }: Props) {
  const form = useForm<CreateVenueInput>({
    resolver: zodResolver(createVenueSchema),
    defaultValues: {
      name: "",
      contactEmail: "",
      contactPhone: "",
      revenueModel: "percentage",
      revenueValue: 0.3,
      defaultImageUrl: "",
    },
  });

  async function onSubmit(values: CreateVenueInput) {
    try {
      const venue = await createVenueAction(values);
      form.reset();
      toast.success("Venue created");
      window.dispatchEvent(
        new CustomEvent(VENUE_CREATED_EVENT, { detail: { venueId: venue.id } })
      );
      window.dispatchEvent(new CustomEvent(ADMIN_INVENTORY_CHANGED));
      onCreated?.(venue.id);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to create venue");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="min-w-0 space-y-4">
        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="min-w-0 sm:col-span-2">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Bean Brew Café" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactEmail"
            render={({ field }) => (
              <FormItem className="min-w-0">
                <FormLabel>Contact email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="venue@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactPhone"
            render={({ field }) => (
              <FormItem className="min-w-0">
                <FormLabel>Contact phone</FormLabel>
                <FormControl>
                  <Input placeholder="+919999990001" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="revenueModel"
            render={({ field }) => (
              <FormItem className="min-w-0">
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
              <FormItem className="min-w-0">
                <FormLabel>Revenue value</FormLabel>
                <FormControl>
                  <Input type="number" step="0.01" min={0} placeholder="0.30" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="defaultImageUrl"
            render={({ field }) => (
              <FormItem className="min-w-0 sm:col-span-2">
                <FormLabel>Default image URL</FormLabel>
                <FormControl>
                  <Input
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    {...field}
                  />
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
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Creating…" : "Create venue"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
