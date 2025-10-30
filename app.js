import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";

import dotenv from "dotenv";
import { dbConnection } from "./config/db.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

dbConnection();


app.get("/", async (req, res) => {
  res.send("Server running successful");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);


app.listen(5000, () => console.log("✅ Server running on port 5000"));
