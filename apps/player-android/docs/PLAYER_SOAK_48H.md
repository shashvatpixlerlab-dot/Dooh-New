# Player soak test (48 hours) — V1

This runbook is for the **native Kotlin + ExoPlayer loop** behaving correctly on a real Android TV box under imperfect network conditions.

## Goals

1. The 6-position loop never blanks (default image always renders on failures).
2. Heartbeat keeps updating the device `last_seen_at` and `currently_showing_slot`.
3. The player recovers from:
   - wifi drops / reconnection
   - backend schedule fetch failures
   - brief Activity freezes (watchdog restart)

## Preconditions

- Backend API running (apps/api) and database migrated.
- At least one device paired and serving schedule for a fixed date range.
- One or more booked images uploaded and approved.
- Monitoring method:
  - optional: logcat collection
  - admin screen-health view running at `/admin/health`

## Test steps (two phases)

### Phase A — stability (first 24 hours)

1. Pair the TV once (LoginActivity) using the credential generated in admin onboarding.
2. Verify:
   - The marketplace shows the device as online (post-heartbeat).
   - The admin screen-health shows current slot updating every ~60s.
3. Leave the player running continuously.
4. At least once, force a schedule refresh by restarting the API or toggling connectivity.

### Phase B — resilience (second 24 hours)

Repeat these disruptions at least 3–5 times over the remaining 24 hours:

1. Network drop:
   - disable wifi for 2–10 minutes
   - re-enable wifi
2. Backend delay:
   - restart apps/api while the player is running
3. Cold restart:
   - power-cycle the TV box (watch `BOOT_COMPLETED` flow)

## Success criteria

- No “blank screen” events:
  - if image load fails, the player continues showing the last cached frame or default image.
- Admin health view:
  - `last_seen_at` updates at least once per minute.
  - `currently_showing_slot` advances 1→6 every loop.
- After each disruption:
  - the loop resumes within 30–60s.
  - schedule images reload when connectivity returns.

## Failure triage checklist

When something breaks, capture:

1. Time of incident (server + local rough time).
2. Admin health snapshot (device online/offline and current slot).
3. Any relevant `apps/api` logs (schedule endpoint and heartbeat endpoint).
4. logcat from the TV box (PlayerActivity restart / exceptions).

