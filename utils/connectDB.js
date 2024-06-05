import mongoose from "mongoose";

export default async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("MongoDB Connected")
    } catch (error) {
        console.log("Error while connecting MongoDB")
        process.exit(1)
    }
}