import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const admin = express();

admin.use(express.json());


export const createAdmin = async (req: Request, res: Response) =>{
    const { email,name,password } = req.body;
   
    
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user_admin = await prisma.admin.create({
            data: {
                email:email,
                name:name,
                password:hashedPassword,
            },
        });
        res.json({ user_admin });
}


export const getAllAdmin = async (req: Request, res: Response) =>{
    try{
        const admin = prisma.admin.findFirst();
        res.json({ admin})
    }catch(error){
        res.status(500).json({ error: 'Could no find admin'})
    }
}

admin.post("/admin", createAdmin);
export default admin;