import express from "express"
import { signUp } from "../controllers/auth.controller.js"


const router = express()

router.post("/sign-up" , signUp)

export default router