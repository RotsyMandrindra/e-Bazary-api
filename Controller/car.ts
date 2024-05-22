import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const prisma = new PrismaClient();
const car = express();
car.use(express.json());

interface car {
    productName: string,
    description: string,
    brand: string,
    model: string,
    price: number,
    color: string,
    motorType: string,
    power: string,
    placeNumber: number,
    status: boolean,
    type: string
};

export const createCar = async (req: Request, res: Response) => {
    const car: car = req.body;

    const carData = await prisma.car.create({
        data: car,
    });
    return res.json(carData);
}

export const getAllCar = async(req: Request, res: Response) =>{
    try{
        const carData = await prisma.car.findFirst();
        res.json({carData})
    }catch(error){
        res.status(500).json({ error: 'Could not find car'})
    }
}

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
      res.status(500).json({ message: "An error occurred while deleting the car" });
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
        data: car
      });
  
      res.json({ message: `Car with ID ${carId} updated successfully` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred while updating the car" });
    }
};
  
export default car;