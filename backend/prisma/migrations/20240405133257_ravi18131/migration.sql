/*
  Warnings:

  - You are about to drop the column `date` on the `DoctorTimeSlot` table. All the data in the column will be lost.
  - You are about to drop the column `paymentMethod` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `vat` on the `Payment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DoctorTimeSlot" DROP COLUMN "date";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "paymentMethod",
DROP COLUMN "vat",
ADD COLUMN     "Gst" INTEGER,
ADD COLUMN     "PaymentId" TEXT;
