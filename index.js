dotenv.config();
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRoute from "./routes/users.js"
import bookingsRoute from"./routes/booking.js";
import roomRoute from "./routes/room.js"


import cors from "cors"

const app = express();

app.use(express.json())
app.use(cors())


mongoose.connect(process.env.baseUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("________Mongodb Atlas Connected_________");
}).catch((err)=>{
    console.log(`........mogodb connection error.........${err}`);
})
//middleware
// app.use(cookieParser())




app.use("/api/booking",bookingsRoute)
app.use("/api/users",usersRoute)
// app.use("/api/hotels",hotelsRoute)
app.use("/api/room",roomRoute)



const port=8000|| process.env.port
app.listen(port,()=>{
    console.log(`--------------hotel server started At Port Number ${port}------`);
})


