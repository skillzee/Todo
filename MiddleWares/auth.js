import jwt from "jsonwebtoken"
import { User } from "../models/user.js";

export const isAuthentacated = async (req,res,next) =>{
    const  {token} = req.cookies;

    if(!token){
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
    }



    const decodedData  = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decodedData._id);
    next()
}