import express from "express";
import { signIn } from "../controllers/auth.controllers";

const router = express.Router();

router.route("/sign-in").post(signIn);

export default router;
