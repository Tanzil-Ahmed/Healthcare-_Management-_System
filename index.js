import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("API is working");
});

// Database connection
const mongoURI =
  process.env.MONGO_URL || "mongodb://localhost:27017/your_database";
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Add useUnifiedTopology option back
    });
    console.log("MongoDB database connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.listen(port, async () => {
  try {
    await connectDB();
    console.log("Server is running on port " + port);
  } catch (err) {
    console.error("Server failed to start:", err);
  }
});
