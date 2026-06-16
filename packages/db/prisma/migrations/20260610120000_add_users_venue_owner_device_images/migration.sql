-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'SCREEN_OWNER');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- Migrate admin_users to users
INSERT INTO "users" ("id", "email", "password_hash", "name", "phone", "role", "created_at")
SELECT "id", "email", "password_hash", "name", '', 'ADMIN', "created_at"
FROM "admin_users";

-- DropTable
DROP TABLE "admin_users";

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AlterTable
ALTER TABLE "venues" ADD COLUMN "owner_id" UUID;

-- CreateIndex
CREATE INDEX "venues_owner_id_idx" ON "venues"("owner_id");

-- AddForeignKey
ALTER TABLE "venues" ADD CONSTRAINT "venues_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "device_images" (
    "id" UUID NOT NULL,
    "device_id" UUID NOT NULL,
    "image_url" TEXT NOT NULL,
    "sort_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "device_images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "device_images_device_id_idx" ON "device_images"("device_id");

-- AddForeignKey
ALTER TABLE "device_images" ADD CONSTRAINT "device_images_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "devices"("id") ON DELETE CASCADE ON UPDATE CASCADE;
