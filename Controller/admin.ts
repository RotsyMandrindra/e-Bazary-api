import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();
const amdin = express();

amdin.use(express.json());

export const createAdmin = async (req: Request, res: Response) =>{
    const {email,name,password} = req.body;

     
    try{
        const hashedPassword = await bcrypt.hash(password,10);
        const user_admin = await prisma.admin.create({
            data:{
                email: email,
                name: name,
                password: hashedPassword,
            }
        })
        res.json({user_admin});
    }catch(error){
       res.status(500).json({ error: 'An error occurred while creating the administrator.'})
    }
    
}


export const getAllAdmin = async (req: Request, res: Response) =>{
    try{
        const admin = prisma.admin.findMany();
        res.json({ admin})
    }catch(error){
        res.status(500).json({ error: 'Could no find admin'})
    }
}

export default amdin;