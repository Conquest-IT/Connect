const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;

require("dotenv").config();

module.exports = (env, argv) => {
    return {
        entry: "./src/index.js",

        output: {
            path: path.join(__dirname, "/dist"),
            filename: "bundle.js",
        },

        devServer: {
            historyApiFallback: true,
            host: "localhost",
            port: port,
            open: true,
            hot: true,
        },

        externals: {
            config: JSON.stringify({
                baseURL: argv.mode === "production" ? process.env.HEROKU_URL : process.env.LOCAL_URL,
                cloudName: process.env.CLOUDINARY_CLOUD_NAME,
                apiKey: process.env.CLOUDINARY_API_KEY,
                apiSecret: process.env.CLOUDINARY_API_SECRET,
            }),
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
            }),
        ],

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: "style-loader" },
                        {
                            loader: "css-loader",
                        },
                    ],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: ["file-loader", "image-webpack-loader"],
                },
            ],
        },
        resolve: {
            extensions: ["*", ".js", ".jsx"],
        },
    };
};
