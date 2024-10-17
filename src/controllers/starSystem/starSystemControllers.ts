import { Request, Response } from "express";
import { validateStarSystemData } from "../../utils/starSystem/starSystemUtils";
import { createStarSystem } from "../../services/starSystem/starSystemServices";

const create = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    validateStarSystemData(data);
    const starSystem = createStarSystem(data);
    res.status(201).send({ data: starSystem });
  } catch (error) {
    res.status(500).send({ error: error });
    console.log(error);
  }
};

export default {
  create,
};
