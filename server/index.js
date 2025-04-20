import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { errorHandler, routeNotFound } from "./middleware/errorMiddleware.js";
import routes from "./routes/index.js";
import dbConnection from "./utils/connectDB.js";

dotenv.config();

dbConnection();

const port = process.env.PORT || 8000;

const app = express();

// Middleware should be defined BEFORE routes
app.use(cors({
  origin: ['http://localhost:3000' ,'https://symphonious-bublanina-3d75dc.netlify.app'], // Add all your frontend origins
  credentials: true // This is important for cookies
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// Routes come after middleware
app.use("/api", routes);

// Error handling middleware should be last
app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on ${port}`));
