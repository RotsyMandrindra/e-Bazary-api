import { Brand } from "@prisma/client";
import { prismaClient } from "../config/prisma";

export const brandService = {
  getAll: (): Promise<Brand[]> => prismaClient.brand.findMany(),
  create: (brand: Brand): Promise<Brand> =>
    prismaClient.brand.create({
      data: brand,
    }),
  update: (id: string, brand: Brand): Promise<Brand> =>
    prismaClient.brand.update({
      where: {
        id: parseInt(id),
      },
      data: brand,
    }),
  getById: (id: string): Promise<Brand | null> =>
    prismaClient.brand.findUnique({
      where: {
        id: parseInt(id),
      },
    }),
  delete: (id: string): Promise<Brand> =>
    prismaClient.brand.delete({
      where: {
        id: parseInt(id),
      },
    }),
};
