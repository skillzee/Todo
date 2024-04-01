import { app } from "./app.js";
import { dbConnect } from "./Data/database.js";


dbConnect()
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port num ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})

