import { Request, Response } from "express";

const register = (req: Request, res: Response) => {
  res.status(200).send("Heyy");
};

export default { register };
