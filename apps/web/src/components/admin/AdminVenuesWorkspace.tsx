"use client";

import { useCallback, useEffect, useState } from "react";
import { Monitor, Pencil, Plus, Store } from "lucide-react";
import type { AdminDevice, AdminVenue } from "@/lib/types";
import { CreateVenueForm, ADMIN_INVENTORY_CHANGED } from "@/components/CreateVenueForm";
import { CreateDeviceForm } from "@/components/CreateDeviceForm";
import { EditVenueDialog } from "@/components/admin/EditVenueDialog";
import { EditDeviceDialog } from "@/components/admin/EditDeviceDialog";
import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type InventoryView = "venues" | "devices";

export function AdminVenuesWorkspace() {
  const [venues, setVenues] = useState<AdminVenue[]>([]);
  const [devices, setDevices] = useState<AdminDevice[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<InventoryView>("venues");
  const [editVenue, setEditVenue] = useState<AdminVenue | null>(null);
  const [editDevice, setEditDevice] = useState<AdminDevice | null>(null);
  const [venueModalOpen, setVenueModalOpen] = useState(false);
  const [deviceModalOpen, setDeviceModalOpen] = useState(false);
  const [presetVenueId, setPresetVenueId] = useState<string | undefined>();

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [venuesRes, devicesRes] = await Promise.all([
        fetch("/api/admin/proxy/venues"),
        fetch("/api/admin/proxy/devices"),
      ]);
      const venuesData = venuesRes.ok ? ((await venuesRes.json()) as AdminVenue[]) : [];
      const devicesData = devicesRes.ok ? ((await devicesRes.json()) as AdminDevice[]) : [];
      setVenues(venuesData);
      setDevices(devicesData);
    } catch {
      setVenues([]);
      setDevices([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    const refresh = () => void load();
    window.addEventListener(ADMIN_INVENTORY_CHANGED, refresh);
    return () => window.removeEventListener(ADMIN_INVENTORY_CHANGED, refresh);
  }, [load]);

  async function handleVenueCreated(venueId: string) {
    setVenueModalOpen(false);
    await load();
    setPresetVenueId(venueId);
    setView("devices");
    setDeviceModalOpen(true);
  }

  function openDeviceModal(venueId?: string) {
    setPresetVenueId(venueId);
    setView("devices");
    setDeviceModalOpen(true);
  }

  const isVenuesView = view === "venues";
  const ViewIcon = isVenuesView ? Store : Monitor;
  const viewTitle = isVenuesView ? "Venues" : "Devices";
  const viewCount = isVenuesView ? venues.length : devices.length;

  return (
    <div className="w-full min-w-0 space-y-6">
      <DashboardPageHeader
        title="Venues & devices"
        description="Manage venues and screens. Add a venue, then add devices and pairing credentials."
        action={
          <div className="flex flex-wrap items-center justify-end gap-2">
            <Button type="button" onClick={() => setVenueModalOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add venue
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => openDeviceModal()}
              disabled={venues.length === 0 && !loading}
            >
              <Monitor className="mr-2 h-4 w-4" />
              Add device
            </Button>
          </div>
        }
      />

      <div className="flex w-full items-center gap-3">
        <label htmlFor="inventory-view" className="sr-only">
          Show table
        </label>
        <Select value={view} onValueChange={(v) => setView(v as InventoryView)}>
          <SelectTrigger id="inventory-view" className="w-[200px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="venues">Venues ({venues.length})</SelectItem>
            <SelectItem value="devices">Devices ({devices.length})</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card className="w-full min-w-0 border-input bg-card shadow-sm">
        <CardHeader className="flex flex-row items-center gap-2 border-b border-input px-6 py-4">
          <ViewIcon className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">{viewTitle}</CardTitle>
          <Badge variant="secondary" className="ml-auto font-normal">
            {viewCount}
          </Badge>
        </CardHeader>
        <CardContent className="p-0">
          {loading ? (
            <p className="px-6 py-10 text-sm text-muted-foreground">
              Loading {isVenuesView ? "venues" : "devices"}…
            </p>
          ) : isVenuesView ? (
            venues.length === 0 ? (
              <div className="flex flex-col items-center gap-3 px-6 py-12 text-center">
                <p className="text-sm text-muted-foreground">No venues yet.</p>
                <Button type="button" size="sm" onClick={() => setVenueModalOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add your first venue
                </Button>
              </div>
            ) : (
              <div className="w-full overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Revenue</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[72px] text-right">Edit</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {venues.map((venue) => (
                      <TableRow key={venue.id}>
                        <TableCell className="font-medium">{venue.name}</TableCell>
                        <TableCell className="text-muted-foreground">{venue.contactEmail}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {venue.contactPhone ?? "—"}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {venue.revenueModel === "flat" ? "Flat " : ""}
                          {venue.revenueValue != null ? Number(venue.revenueValue) : "—"}
                          {venue.revenueModel === "percentage" ? "%" : ""}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={venue.status === "ACTIVE" ? "success" : "secondary"}
                            className="font-normal"
                          >
                            {venue.status === "ACTIVE" ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            aria-label={`Edit ${venue.name}`}
                            onClick={() => setEditVenue(venue)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )
          ) : devices.length === 0 ? (
            <div className="flex flex-col items-center gap-3 px-6 py-12 text-center">
              <p className="text-sm text-muted-foreground">No devices yet.</p>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => openDeviceModal()}
                disabled={venues.length === 0}
              >
                <Plus className="mr-2 h-4 w-4" />
                Add device
              </Button>
            </div>
          ) : (
            <div className="w-full overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Screen</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Venue</TableHead>
                    <TableHead>Resolution</TableHead>
                    <TableHead>Orientation</TableHead>
                    <TableHead>Price/day</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[72px] text-right">Edit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {devices.map((device) => (
                    <TableRow key={device.id}>
                      <TableCell className="font-medium">{device.name}</TableCell>
                      <TableCell className="text-muted-foreground">{device.locationLabel}</TableCell>
                      <TableCell>{device.venue.name}</TableCell>
                      <TableCell className="text-muted-foreground">{device.resolution}</TableCell>
                      <TableCell className="capitalize text-muted-foreground">
                        {device.orientation ?? "landscape"}
                      </TableCell>
                      <TableCell>₹{Number(device.slotDayPrice)}</TableCell>
                      <TableCell>
                        <Badge
                          variant={device.status === "ACTIVE" ? "success" : "secondary"}
                          className="font-normal"
                        >
                          {device.status === "ACTIVE" ? "Active" : "Inactive"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          aria-label={`Edit ${device.name}`}
                          onClick={() => setEditDevice(device)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={venueModalOpen} onOpenChange={setVenueModalOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Create venue</DialogTitle>
            <DialogDescription>
              Add a new venue. You will be prompted to add a screen device next.
            </DialogDescription>
          </DialogHeader>
          <CreateVenueForm
            onCreated={handleVenueCreated}
            onCancel={() => setVenueModalOpen(false)}
          />
        </DialogContent>
      </Dialog>

      <Dialog
        open={deviceModalOpen}
        onOpenChange={(open) => {
          setDeviceModalOpen(open);
          if (!open) setPresetVenueId(undefined);
        }}
      >
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Create device</DialogTitle>
            <DialogDescription>
              Add a screen under a venue and get a TV pairing credential.
            </DialogDescription>
          </DialogHeader>
          <CreateDeviceForm
            venues={venues}
            venuesLoading={loading}
            defaultVenueId={presetVenueId}
            onCreated={() => {
              setDeviceModalOpen(false);
              setPresetVenueId(undefined);
              setView("devices");
              void load();
            }}
            onCancel={() => {
              setDeviceModalOpen(false);
              setPresetVenueId(undefined);
            }}
          />
        </DialogContent>
      </Dialog>

      <EditVenueDialog
        venue={editVenue}
        open={editVenue !== null}
        onOpenChange={(open) => {
          if (!open) setEditVenue(null);
        }}
        onSaved={() => {
          void load();
          window.dispatchEvent(new CustomEvent(ADMIN_INVENTORY_CHANGED));
        }}
      />

      <EditDeviceDialog
        device={editDevice}
        open={editDevice !== null}
        onOpenChange={(open) => {
          if (!open) setEditDevice(null);
        }}
        onSaved={() => {
          void load();
          window.dispatchEvent(new CustomEvent(ADMIN_INVENTORY_CHANGED));
        }}
      />
    </div>
  );
}
