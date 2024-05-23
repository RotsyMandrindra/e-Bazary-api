import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import bcrypt from 'bcrypt';
import Admin from "../Model/InterfaceAdmin";
import { z } from 'zod';

const prisma = new PrismaClient(
    { log : ["query"]}
);
const admin = express();

const loginSchema = z.object({
    email: z.string().email(),
    name: z.string().min(3),
    password: z.string().min(8, "Password must be at least 8 characters long")
  });

admin.use(express.json());


export const createAdmin = async (req: Request, res: Response) =>{
    const parseResult = loginSchema.safeParse(req.body);

    if (!parseResult.success) {
      return res.status(400).json({ error: parseResult.error.errors });
    }
    const { email,name,password } = parseResult.data;
   
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


export const loginAdmin = async(req: Request, res: Response)=>{
   
   const { email, password } = req.body;

    const admin = await prisma.admin.findFirst({
        where:{
            email : email
        }
    })

    if(!admin){
        return res.status(401).json({ error: "Email or password doesn't exist"});
    }

    const typedAdmin = admin as unknown as Admin;

    const passwordMatch = await bcrypt.compare(password, typedAdmin.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "incorect password" });
    }

    res.json({admin})
} 


export const getAllAdmin = async (req: Request, res: Response) =>{
    const admin = await prisma.admin.findMany({})
       return  res.json({ admin })  
}



export default admin;