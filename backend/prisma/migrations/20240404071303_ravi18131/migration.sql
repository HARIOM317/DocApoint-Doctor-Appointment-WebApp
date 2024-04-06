/*
  Warnings:

  - The primary key for the `ScheduleDay` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ScheduleDay" DROP CONSTRAINT "ScheduleDay_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ScheduleDay_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ScheduleDay_id_seq";
