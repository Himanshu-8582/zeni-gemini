import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import chatRoutes from './routes/chat.js';
import cors from 'cors';

dotenv.config();


const app = express();

app.use(cors());
const PORT = 5000;

app.use(express.json());

app.use("/api", chatRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Zeni backend running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

startServer();

// app.post("/api/chat", async (req, res) => {
  
// });

