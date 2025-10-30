import express from 'express'
import { aiRoadMap } from '../controller/userController.js'


const userRouter = express.Router()
userRouter.post("/generate-roadmap",aiRoadMap)

export default userRouter