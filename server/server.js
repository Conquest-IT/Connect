const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(bodyParser.json());

// Static Files
app.use(express.static(path.join(__dirname, "../dist")));

// Implement Routes
const authRoutes = require("./routes/auth.routes");

// Use Routes
app.use("/api/auth", authRoutes);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

app.get("/", (request, response) => {
    response.json("Welcome to Connect");
});
