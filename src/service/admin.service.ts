import { Admin } from "@prisma/client";
import { prismaClient } from "../config/prisma";

export const adminService = {
  create: (admin: Admin): Promise<Admin> =>
    prismaClient.admin.create({
      data: admin,
    }),
  getAll: (): Promise<Admin[]> => prismaClient.admin.findMany(),
  getById: (id: string): Promise<Admin | null> =>
    prismaClient.admin.findUnique({
      where: {
        id: parseInt(id),
      },
    }),
  update: (id: string, admin: Admin): Promise<Admin> =>
    prismaClient.admin.update({
      where: {
        id: parseInt(id),
      },
      data: admin,
    }),
  delete: (id: string): Promise<Admin> =>
    prismaClient.admin.delete({
      where: {
        id: parseInt(id),
      },
    }),
};
