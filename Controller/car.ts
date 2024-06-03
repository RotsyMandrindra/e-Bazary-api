import { PrismaClient, Car } from "@prisma/client";
import express, { Request, Response } from "express";

const prisma = new PrismaClient();
const car = express();
car.use(express.json());

type car = Omit<Car, "productId">;

export const createCar = async (req: Request, res: Response) => {
  const car: car = req.body;

  const carData = await prisma.car.create({
    data: car,
  });
  return res.json(carData);
};

export const getAllCar = async (req: Request, res: Response) => {
  try {
    const carData = await prisma.car.findMany();
    res.json(carData.map((car) => ({ ...car, id: car.productId })));
  } catch (error) {
    res.status(500).json({ error: "Could not found car" });
  }
};

export const deleteCar = async (req: Request, res: Response) => {
  const carId = parseInt(req.params.id, 10);

  try {
    const deleteCar = await prisma.car.delete({
      where: {
        productId: carId,
      },
    });

    res.json({ message: `Car with ID ${carId} deleted successfully` });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the car" });
  }
};

export const updateCar = async (req: Request, res: Response) => {
  const carId = parseInt(req.params.id, 10);
  const car = req.body;
  try {
    const updateCar = await prisma.car.update({
      where: {
        productId: carId,
      },
      data: car,
    });

    res.json({ message: `Car with ID ${carId} updated successfully` });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the car" });
  }
};

export default car;
