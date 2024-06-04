import { Images } from "@prisma/client";
import { prismaClient } from "../config/prisma";

export const imageService = {
  create: (image: Images): Promise<Images> => {
    return prismaClient.images.create({
      data: image,
    });
  },
  getAll: (): Promise<Images[]> => prismaClient.images.findMany(),
  getById: (id: string): Promise<Images | null> =>
    prismaClient.images.findUnique({
      where: {
        id: parseInt(id),
      },
    }),
  update: (id: string, image: Images): Promise<Images> =>
    prismaClient.images.update({
      where: {
        id: parseInt(id),
      },
      data: image,
    }),
  delete: (id: string): Promise<Images> =>
    prismaClient.images.delete({
      where: {
        id: parseInt(id),
      },
    }),
};
