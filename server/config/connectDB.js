import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

if (!process.env.MONGODB_URI){
    throw new Error(
        "Please provide MONGODB_URI in .env file"
    )
}

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongoDB connected Sucessfully!!")
    } catch (error) {
        console.log("MongoDb connection Failed",error)
        process.exit(1)   //it stops the server
    }
    
}

export default connectDB