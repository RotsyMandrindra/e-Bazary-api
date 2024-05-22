import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { error } from "console";

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
    
   const findAmin = await prisma.admin.findUnique({
    where: {
        email : email
    }
   })

    if(findAmin){
        return res.status(500).json({ error: "Email already taken, use an another email"});
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
       
}


export const getAllAdmin = async (req: Request, res: Response) =>{
    const admin = await prisma.admin.findMany({})
       return  res.json({ admin })  
}



export default admin;