import { Router } from "express";
import { goodbyeWorld, helloWorld } from "../controllers/index.controller.server.js";

const router = Router();

router.get('/hello', helloWorld);
router.get('/goodbye', goodbyeWorld);

export default router;