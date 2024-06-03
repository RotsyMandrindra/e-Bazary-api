
import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import Car from "../Model/InterfaceCar";

const prisma = new PrismaClient();
const car = express();
car.use(express.json());




export const createCar = async (req: Request, res: Response) => {
    const { ImageId,productName,
      description,
      brand,
      model,
      price,
      color,
      motorType,
      power,
      placeNumber,
      status,
      type} = req.body;

    const carData = await prisma.car.create({
        data:{
          imageId : ImageId,
          productName : productName,
          description : description,
          brand : brand,
          model : model,
          price : price,
          color : color,
          motorType : motorType,
          power : power,
          placeNumber : placeNumber,
          status : status,
          type : type
        },
    });
    return res.json(carData);
}




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
    const {ImageId,productName,
      description,
      brand,
      model,
      price,
      color,
      motorType,
      power,
      placeNumber,
      status,
      type} = req.body;
    try {
      const updateCar = await prisma.car.update({
        where: {
          productId: carId,
        },
        data: {
          imageId : ImageId,
          productName : productName,
          description : description,
          brand : brand,
          model : model,
          price : price,
          color : color,
          motorType : motorType,
          power : power,
          placeNumber : placeNumber,
          status : status,
          type : type
        },
      });
  
      res.json({ message: `Car with ID ${carId} updated successfully`, updateCar });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred while updating the car" });
    }


};

export default car;
