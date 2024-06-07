-- CreateEnum
CREATE TYPE "MotorType" AS ENUM ('DIESEL', 'ELETRIC', 'GASOIL', 'OTHER');

-- CreateEnum
CREATE TYPE "AppointmentType" AS ENUM ('PENDING', 'VALIDATE', 'REJECTED');

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "model" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "color" TEXT NOT NULL,
    "power" TEXT NOT NULL,
    "placeNumber" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "motorType" "MotorType" NOT NULL,
    "brandId" INTEGER NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "Id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "urlImage" TEXT,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "Id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "appointmentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "AppointmentType" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "_CarToImages" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_CarToImages_AB_unique" ON "_CarToImages"("A", "B");

-- CreateIndex
CREATE INDEX "_CarToImages_B_index" ON "_CarToImages"("B");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarToImages" ADD CONSTRAINT "_CarToImages_A_fkey" FOREIGN KEY ("A") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarToImages" ADD CONSTRAINT "_CarToImages_B_fkey" FOREIGN KEY ("B") REFERENCES "Images"("id") ON DELETE CASCADE ON UPDATE CASCADE;
