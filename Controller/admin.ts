import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
const prisma = new PrismaClient();
const amdin = express();

amdin.use(express.json());

export const createAdmin = async (req: Request, res: Response) =>{
    const {} = req.body;
}