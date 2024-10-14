import { Router } from "express";
import characterControllers from "../../controllers/character/characterControllers";
const router = Router();

router.post("/", characterControllers.create);

export default router;
