import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const prisma = new PrismaClient();
const car = express();
car.use(express.json());

interface Image {
    productId: number,
    url: string
};

export const createImage = async (req: Request, res: Response) => {
    const image: Image = req.body;

    const imageData = await prisma.images.create({
        data: image,
    });
    return res.json(imageData);
}

export const getAllImage = async(req: Request, res: Response) =>{
    try{
        const imageData = await prisma.images.findFirst();
        res.json({imageData})
    }catch(error){
        res.status(500).json({ error: 'Could not find image'})
    }
}

export default Image;