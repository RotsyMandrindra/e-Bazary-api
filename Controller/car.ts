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