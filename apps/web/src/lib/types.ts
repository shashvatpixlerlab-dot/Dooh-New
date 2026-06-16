export type MarketplaceDevice = {
  id: string;
  name: string;
  locationLabel: string;
  venueName: string;
  slotDayPrice: number;
  isOnline: boolean;
  resolution: string;
  orientation: string;
  defaultImageUrl: string;
  lastSeenAt?: string | null;
};

export type AvailabilityResponse = {
  deviceId: string;
  dateStart: string;
  dateEnd: string;
  slots: { slotIndex: number; available: boolean }[];
  bookable: boolean;
};

export type AdvertiserBookingListItem = {
  id: string;
  status: string;
  slotIndex: number;
  dateStart: string;
  dateEnd: string;
  priceTotal: string | number;
  device: { name: string; locationLabel: string };
  creative?: {
    moderationStatus: string;
    imageUrl: string;
    rejectionReason?: string | null;
  } | null;
};

export type AdvertiserBookingDetail = {
  id: string;
  status: string;
  slotIndex: number;
  dateStart: string;
  dateEnd: string;
  priceTotal: string | number;
  device: { name: string; locationLabel: string };
  creative?: {
    imageUrl: string;
    moderationStatus: string;
    rejectionReason?: string | null;
  } | null;
  payment?: { status: string } | null;
};

export type BookingDetail = {
  id: string;
  status: string;
  slotIndex: number;
  dateStart: string;
  dateEnd: string;
  priceTotal: string | number;
  advertiser: { name: string; email: string };
  device: { name: string };
  creative?: {
    imageUrl: string;
    moderationStatus: string;
    rejectionReason?: string | null;
  };
};

export type AdminVenue = {
  id: string;
  name: string;
  contactEmail: string;
  contactPhone?: string;
  revenueModel?: string;
  revenueValue?: string | number;
  defaultImageUrl?: string;
  status: string;
};

export type AdminDevice = {
  id: string;
  venueId: string;
  name: string;
  locationLabel: string;
  resolution: string;
  orientation: string;
  defaultImageUrl: string;
  slotDayPrice: string | number;
  status: string;
  approvalStatus: string;
  venue: { id: string; name: string };
};

export type OwnerScreenImage = {
  id: string;
  imageUrl: string;
  sortOrder: number;
};

export type OwnerScreen = {
  id: string;
  name: string;
  locationLabel: string;
  resolution: string;
  orientation: string;
  slotDayPrice: string | number;
  status: string;
  approvalStatus: "PENDING" | "APPROVED" | "REJECTED";
  rejectionReason?: string | null;
  defaultImageUrl: string;
  lastSeenAt?: string | null;
  images: OwnerScreenImage[];
};

export type AdminScreen = {
  id: string;
  name: string;
  locationLabel: string;
  resolution: string;
  orientation?: string;
  slotDayPrice: string | number;
  status: string;
  approvalStatus: "PENDING" | "APPROVED" | "REJECTED";
  rejectionReason?: string | null;
  defaultImageUrl: string;
  createdAt: string;
  venue: { name: string; contactEmail: string };
  images: { imageUrl: string }[];
};
