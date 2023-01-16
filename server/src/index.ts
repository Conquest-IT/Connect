import bodyParser from "body-parser";
import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import config from "./config/config";

const app: Express = express();
const PORT: string = config.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(bodyParser.json());

// Implement Routes
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import postRoutes from "./routes/post.routes";
import imageRoutes from "./routes/image.routes";

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/image", imageRoutes);

app.listen(PORT, () => {
    console.log(`App running on localhost:${PORT}`);
});

app.get("/", (request: Request, response: Response) => {
    response.status(200).json({ success: true, message: "Welcome to Connect API" });
});
