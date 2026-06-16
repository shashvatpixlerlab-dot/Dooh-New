-- Add ADVERTISER to UserRole enum
ALTER TYPE "UserRole" ADD VALUE IF NOT EXISTS 'ADVERTISER';

-- Link advertisers to user accounts
ALTER TABLE "advertisers" ADD COLUMN IF NOT EXISTS "user_id" UUID;

CREATE UNIQUE INDEX IF NOT EXISTS "advertisers_user_id_key" ON "advertisers"("user_id");

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'advertisers_user_id_fkey'
  ) THEN
    ALTER TABLE "advertisers"
      ADD CONSTRAINT "advertisers_user_id_fkey"
      FOREIGN KEY ("user_id") REFERENCES "users"("id")
      ON DELETE SET NULL ON UPDATE CASCADE;
  END IF;
END $$;
