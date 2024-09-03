import authRoute from "./routes/auth.route";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import postRoute from "./routes/post.route";

dotenv.config();

const app = express();
const port = 8800;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/api/post", postRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
