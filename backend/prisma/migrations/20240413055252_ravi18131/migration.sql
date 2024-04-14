/*
  Warnings:

  - You are about to drop the column `appointmentMode` on the `Appointments` table. All the data in the column will be lost.
  - Made the column `subject` on table `Emergency` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Appointments" DROP COLUMN "appointmentMode";

-- AlterTable
ALTER TABLE "Emergency" ALTER COLUMN "subject" SET NOT NULL;
