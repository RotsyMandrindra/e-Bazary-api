import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
const prisma = new PrismaClient();
const amdin = express();

amdin.use(express.json());

export const createAdmin = async (req: Request, res: Response) =>{
    const {email,name,password} = req.body;

    const user_admin = await prisma.admin.create({
        data:{
            email: email,
            name: name,
            password: password,
        }
    })

    res.json({user_admin});
}

export default amdin;