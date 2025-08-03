import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // ensure this is above process.env.MONGO_URI

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(" MongoDB connected:", conn.connection.host);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};
