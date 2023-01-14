import express from "express";
const router = express.Router();

import { signin, getUser, signup } from "../controllers/user.js";

router.get('/:id', getUser);
router.post("/signin", signin);
router.post("/signup", signup);

export default router;