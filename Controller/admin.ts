import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient(
    { log : ["query"]}
);
const admin = express();

admin.use(express.json());


export const createAdmin = async (req: Request, res: Response) =>{
    const { email,name,password } = req.body;
   
    if(!email || !name || !password){
     return res.status(400).json({ error: "Admin must contains email, name, password"})
    }
    
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user_admin = await prisma.admin.create({
            data: {
                email:email,
                name:name,
                password:hashedPassword,
            },
        });
        res.json({ user_admin });
        console.log(user_admin);
}


export const getAllAdmin = async (req: Request, res: Response) =>{
    const admin = await prisma.admin.findMany({})
       return  res.json({ admin})  
}



export default admin;