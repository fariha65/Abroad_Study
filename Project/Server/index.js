import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { readdirSync } from "fs";
import path from "path";

dotenv.config();

const app = express();

// Async function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("DB connected");
  } catch (err) {
    console.log("DB CONNECTION ERROR =>", err);
  }
};
connectDB();

// Middleware
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"], // Allow requests from React frontend
  })
);
app.use(morgan("dev"));

// Auto-load routes using dynamic import
const routerPath = path.resolve('./routes');
readdirSync(routerPath).forEach(async (file) => {
  if (file.endsWith(".js")) { // Only import .js files
    const route = await import(`./routes/${file}`);
    app.use(`/api/${file.split(".")[0]}`, route.default); // Set up route for each file
  }
});

// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
