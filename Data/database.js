import mongoose from "mongoose";


export const dbConnect = () =>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName: "backendApi",
}).then(()=>{
    console.log("Database connected");
}).catch((e)=>{
    console.log(e);
})
}
