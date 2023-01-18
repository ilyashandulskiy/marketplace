-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('TEMPLATE', 'PUBLISHED', 'MODERATION_FAILED');

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "store_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "status" "ProductStatus" NOT NULL DEFAULT 'TEMPLATE',
    "price" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "color" TEXT,
    "weight_kg" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "amount_avaliable" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
