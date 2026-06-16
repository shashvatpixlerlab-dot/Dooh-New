import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Booking, Advertiser, Device } from "@dooh/db";

type BookingWithRelations = Booking & {
  advertiser: Advertiser;
  device: Device;
};

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(private config: ConfigService) {}

  async notifyNewBooking(booking: BookingWithRelations) {
    const message = `New booking ${booking.id} from ${booking.advertiser.email} on ${booking.device.name}. Amount: ₹${booking.priceTotal}. Pending approval.`;

    await Promise.allSettled([
      this.sendEmail(message),
      this.sendWhatsApp(message),
    ]);
  }

  private async sendEmail(message: string) {
    const apiKey = this.config.get<string>("RESEND_API_KEY");
    const to = this.config.get<string>("ADMIN_NOTIFY_EMAIL");
    if (!apiKey || !to) {
      this.logger.warn(`Email skipped (not configured): ${message}`);
      return;
    }
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "DOOH Network <bookings@doohnetwork.local>",
          to: [to],
          subject: "New booking pending approval",
          text: message,
        }),
      });
    } catch (e) {
      this.logger.error("Email failed", e);
    }
  }

  private async sendWhatsApp(message: string) {
    const url = this.config.get<string>("WHATSAPP_API_URL");
    const token = this.config.get<string>("WHATSAPP_API_TOKEN");
    const phone = this.config.get<string>("ADMIN_NOTIFY_PHONE");
    if (!url || !token || !phone) {
      this.logger.warn(`WhatsApp skipped (not configured): ${message}`);
      return;
    }
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to: phone, message }),
      });
    } catch (e) {
      this.logger.error("WhatsApp failed", e);
    }
  }
}
