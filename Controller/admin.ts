import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import bcrypt from 'bcrypt';
import Admin from "../Model/InterfaceAdmin";

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


export const loginAdmin = async(req: Request, res: Response)=>{
    const {email, password } = req.body;

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