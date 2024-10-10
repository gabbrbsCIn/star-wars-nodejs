import express, { Request, Response } from "express";
import authRoutes from "../src/routes/auth/authRoutes";
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
app.use(express.json());

app.use("/", authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}...`);
});

module.exports = app;
