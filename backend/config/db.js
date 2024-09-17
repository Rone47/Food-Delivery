import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const connectDB = async () => {
  const dbURI = process.env.MONGO_URI;

  if (!dbURI) {
    console.error("MONGO_URI not found in environment variables");
    return;
  }

  await mongoose
    .connect(dbURI)
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("Database connection failed:", err));
};
