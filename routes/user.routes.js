import { Router } from "express";

const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(registerUser)

export default router;