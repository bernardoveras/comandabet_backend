/*
  Warnings:

  - You are about to drop the column `createdAt` on the `market` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `market` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `tenant` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `tenant` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `tip` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `tip` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `market` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `tenant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `tip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `user_bets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "market" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "tenant" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "tip" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "user_bets" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
