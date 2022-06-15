import { Router } from "express"

import { sayHello } from "../controllers/common.controller.js"
const router = Router()

router.get("/", sayHello)

export default router
