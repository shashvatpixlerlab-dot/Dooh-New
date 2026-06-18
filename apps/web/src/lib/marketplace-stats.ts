export type MarketplaceStats = {
  screensOnline: number;
  screensLive: number;
  liveCampaigns: number;
  revenueGenerated: number;
  activeVenues: number;
};

export function formatRevenue(amount: number): string {
  if (amount <= 0) return "₹0";
  if (amount >= 100_000) {
    const lakhs = amount / 100_000;
    return `₹${lakhs >= 10 ? Math.round(lakhs) : lakhs.toFixed(1)}L+`;
  }
  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}
