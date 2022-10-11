-- CreateEnum
CREATE TYPE "TipResult" AS ENUM ('GAIN', 'HALF_GAIN', 'LOSE', 'HALF_LOST', 'CANCELED', 'REFUND');

-- CreateTable
CREATE TABLE "tip" (
    "id" TEXT NOT NULL,
    "tenant_id" TEXT NOT NULL,
    "suggested_odd" DECIMAL(65,30),
    "details" TEXT,
    "match" TEXT NOT NULL,
    "market_id" TEXT NOT NULL,
    "time" TEXT,
    "url" TEXT NOT NULL,
    "image_url" TEXT,
    "result" "TipResult" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "market" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "market_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tip" ADD CONSTRAINT "tip_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tip" ADD CONSTRAINT "tip_market_id_fkey" FOREIGN KEY ("market_id") REFERENCES "market"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
