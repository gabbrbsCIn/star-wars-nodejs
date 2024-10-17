import { Request, Response } from "express";
import prisma from "../../prismaClient";

const create = async (req: Request, res: Response) => {
  const createCharacter = await prisma.personagem.create({
    data: req.body,
  });

  res.status(200).send({ oi: createCharacter });
};

export default {
  create,
};
