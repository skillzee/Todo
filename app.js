import express from "express"

import userRouter from "./Routes/user.js"
import taskRouter from "./Routes/task.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { errorMiddleWare } from "./MiddleWares/error.js";
import cors from "cors"


config({
    path:"./data/config.env"
})

export const app = express();
// Middle ware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: [process.env.FRONTEND_URI],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))



// Using routes
app.use("/users",userRouter)
app.use("/tasks",taskRouter)



app.get("/", (req,res)=>{
    res.send("Working")
})



// Using errorMiddleWare
app.use(errorMiddleWare)
