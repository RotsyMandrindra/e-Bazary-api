/*
  Warnings:

  - The primary key for the `Images` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `imagesId` on the `Images` table. All the data in the column will be lost.
  - Added the required column `imageId` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "imageId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Images" DROP CONSTRAINT "Images_pkey",
DROP COLUMN "imagesId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Images_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
