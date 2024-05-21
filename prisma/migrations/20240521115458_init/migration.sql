/*
  Warnings:

  - A unique constraint covering the columns `[adminId]` on the table `Appointment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `adminId` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "adminId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_adminId_key" ON "Appointment"("adminId");

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("userAdminId") ON DELETE RESTRICT ON UPDATE CASCADE;
