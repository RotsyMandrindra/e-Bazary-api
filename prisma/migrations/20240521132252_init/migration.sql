-- CreateTable
CREATE TABLE "Car" (
    "productId" SERIAL NOT NULL,
    "productName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "color" TEXT NOT NULL,
    "motorType" TEXT NOT NULL,
    "power" TEXT NOT NULL,
    "placeNumber" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "Images" (
    "imagesId" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("imagesId")
);

-- CreateTable
CREATE TABLE "Admin" (
    "userAdminId" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("userAdminId")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "appointmentId" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "appointmentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" BOOLEAN NOT NULL,
    "userAdminId" INTEGER NOT NULL,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("appointmentId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_adminId_key" ON "Appointment"("adminId");

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("userAdminId") ON DELETE RESTRICT ON UPDATE CASCADE;
