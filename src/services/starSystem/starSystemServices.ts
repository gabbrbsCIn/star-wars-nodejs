import prisma from "../../prismaClient";
import { StarSystem } from "../../types/starSystem/starSystemTypes";

export const createStarSystem = async (data: StarSystem) => {
  const starSystem = await prisma.sistemaEstelar.create({ data: data });
  return starSystem;
};
