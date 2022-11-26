const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const app = express();

const port = process.env.PORT || 80;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(bodyParser.json());

// Static Files
app.use(express.static(path.join(__dirname, "../dist")));

// Implement Routes
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");
const imageRoutes = require("./routes/image.routes");

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/image", imageRoutes);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

app.get("/", (request, response) => {
    response.json("Welcome to Connect");
});
