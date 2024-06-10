import { Appointment } from "@prisma/client";
import { prismaClient } from "../config/prisma";

export const appointmentService = {
  create: (appointment: Appointment): Promise<Appointment> => {
    return prismaClient.appointment.create({
      data: appointment,
    });
  },
  getAll: (): Promise<Appointment[]> => prismaClient.appointment.findMany(),
  getById: (id: string): Promise<Appointment | null> =>
    prismaClient.appointment.findUnique({
      where: {
        id: parseInt(id),
      },
    }),
  update: (id: string, appointment: Appointment): Promise<Appointment> =>
    prismaClient.appointment.update({
      where: {
        id: parseInt(id),
      },
      data: appointment,
    }),
  delete: (id: string): Promise<Appointment> =>
    prismaClient.appointment.delete({
      where: {
        id: parseInt(id),
      },
    }),
};
