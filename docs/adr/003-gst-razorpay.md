# ADR 003: GST & Razorpay Invoicing (V1)

**Status:** Accepted  
**Date:** 2026-06-05

## Decision

- Razorpay issues GST-compliant invoices when business GSTIN is configured in Razorpay dashboard.
- API stores `amount` as GST-inclusive total charged to advertiser.
- V1: no automated GST breakdown in app; confirm GST registration details with accountant before go-live.
- Razorpay order notes include `booking_id` for reconciliation.

## V1 Manual Process

Refunds processed manually in Razorpay dashboard; admin marks booking `REFUNDED` in admin panel.
