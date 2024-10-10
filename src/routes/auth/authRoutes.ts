import { Router } from "express";
import authControllers from "../../controllers/auth/authControllers";
const router = Router();

router.get("/", authControllers.register);

export default router;
