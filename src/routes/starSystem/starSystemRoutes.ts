import { Router } from "express";
import starSystemControllers from "../../controllers/starSystem/starSystemControllers";

const router = Router();

router.post("/", starSystemControllers.create);

export default router;
