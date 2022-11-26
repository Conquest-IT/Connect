require("dotenv").config();

const config = {
    PORT: process.env.PORT || 80,
    ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN,
};

module.exports = config;
