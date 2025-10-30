import express from 'express';
import { loginController, otpVerification, resendOtp, signUpController } from '../controller/authController.js';
const authRouter = express.Router()



authRouter.post("/signup",signUpController)

authRouter.post("/login",loginController)

authRouter.post("/otp-verification",otpVerification)
authRouter.post("/otp-resend",resendOtp)
export default authRouter
