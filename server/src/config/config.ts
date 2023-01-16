import dotenv from "dotenv";
dotenv.config();

interface ConfigInterface {
    PORT: string;
    ACCESS_TOKEN: string;
}

const config: ConfigInterface = {
    PORT: process.env.PORT || "5000",
    ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN || "ACCESS_TOKEN_OF_CONNECT",
};

export default config;
