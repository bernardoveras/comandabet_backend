-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_tenant_id_fkey";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "tenant_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
