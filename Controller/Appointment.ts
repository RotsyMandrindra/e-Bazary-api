import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const prisma = new PrismaClient();
const appointment = express();
appointment.use(express.json());

export const createAppointment = async (req : Request, res : Response)=>{
    const {username, firstname, email, contact, appointmentDate, status } = req.body;

    const user = await prisma.appointment.create({
        data: {
            username : username,
            firstname : firstname,
            email : email,
            contact : contact,
            appointmentDate : appointmentDate,
            status : status
        }
    });

    return res.json({ user });
}

export const getAllAppointment = async (req : Request, res: Response) => {
    const appointment = await prisma.appointment.findFirst({});

    res.json({ appointment })
}

export const updateAppointment = async (req: Request, res: Response) => {
    const appointmentId = req.params.id;
    const {username, firstname, email, contact, appointmentDate, status } = req.body;
    const appointment = await prisma.appointment.update({
        where: {
            appointmentId: Number(appointmentId)
        },
        data:{
            username : username,
            firstname : firstname,
            email : email,
            contact : contact,
            appointmentDate : appointmentDate,
            status : status
        }
    })
  res.json({appointment})
}

export const deleteAppointment = async (req: Request, res: Response)=>{
    const appointmentId = req.params.id;

    const appointment = await prisma.appointment.delete({
        where: {
           appointmentId : Number(appointmentId) 
        }
    })

    res.json({ appointment })
}

export default appointment;