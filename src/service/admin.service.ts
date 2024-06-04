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
        Id: parseInt(id),
      },
    }),
  update: (id: string, admin: Admin): Promise<Admin> =>
    prismaClient.admin.update({
      where: {
        Id: parseInt(id),
      },
      data: admin,
    }),
  delete: (id: string): Promise<Admin> =>
    prismaClient.admin.delete({
      where: {
        Id: parseInt(id),
      },
    }),
};
