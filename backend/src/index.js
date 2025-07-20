// import express from "express";
// import dotenv from "dotenv";
// import {connectDB} from "./lib/db.js"

// import authRoutes from "./routes/auth.route.js"

// dotenv.config()
// const app = express();
// const PORT = process.env.PORT
// app.use(express.json());

// app.use("/api/auth", authRoutes)

// app.listen(PORT, () =>{
//     console.log("server is running on PORT:" + PORT);
//     connectDB()
// });
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // fallback if .env is missing or undefined

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Default root route (optional but useful)
app.get("/", (req, res) => {
  res.send("API is up and running 🚀");
});

// Start server and connect to DB
app.listen(PORT, async () => {
  console.log(`✅ Server is running on PORT: ${PORT}`);
  await connectDB(); // make sure DB connects before proceeding
});



