-- CreateEnum
CREATE TYPE "status" AS ENUM ('true', 'false');

-- AlterTable
ALTER TABLE "Emergency" ALTER COLUMN "subject" DROP NOT NULL;
