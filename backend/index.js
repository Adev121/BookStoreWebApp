import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from 'cors';
dotenv.config();

const app = express();
const port = process.env.PORT;
const uri=process.env.URI;

try {
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Database connected");
    
} catch (error) {
    console.log("Error Occurred:",error);
}

app.use(cors());
app.use(express.json());
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

// Defining routes
app.use("/bookCol",bookRoute)
app.use("/userCol",userRoute)