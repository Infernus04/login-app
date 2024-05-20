import express from "express"
import { google, signUp } from "../controllers/auth.controller.js"
import { signIn } from "../controllers/auth.controller.js"


const router = express()

router.post("/sign-up" , signUp)
router.post("/sign-in" , signIn)
router.post("/google" , google)

export default router