import express from "express";
import authRoutes from "../src/routes/auth/authRoutes";
import characterRoutes from "./routes/character/characterRoutes"
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
app.use(express.json());

app.use("/characters", characterRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}...`);
});

module.exports = app;
