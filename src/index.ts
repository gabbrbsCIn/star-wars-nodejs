import express, { Request, Response } from "express";

require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}...`);
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Olá mundo");
});

module.exports = app;
