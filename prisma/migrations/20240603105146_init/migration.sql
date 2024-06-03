/*
  Warnings:

  - You are about to drop the column `adminId` on the `Appointment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_adminId_fkey";

-- DropIndex
DROP INDEX "Appointment_adminId_key";

-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "urlImage" TEXT;

-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "adminId";
