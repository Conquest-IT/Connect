const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { user } = new PrismaClient();
const config = require("../config/config");
const { exclude } = require("../helpers/utils");

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await user.findUnique({ where: { email: email } });

        if (!userData) {
            return res.status(400).json({ success: false, message: "No user found" });
        }

        const passwordMatched = bcrypt.compareSync(password, userData.password);
        if (!passwordMatched) {
            return res.status(403).json({ success: false, message: "Wrong password" });
        }

        const userWithoutPassword = exclude(userData, ["password"]);
        const token = jwt.sign({ data: userWithoutPassword }, config.ACCESS_TOKEN, { expiresIn: 24 * 60 * 60 });

        return res.status(200).json({ success: true, message: "Successfully logged in", data: { token, user: userWithoutPassword } });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};

const authorizeUser = async (req, res, next) => {
    try {
        const Authorization = req.headers.Authorization;
        if (!Authorization) return res.status(404).json({ success: false, message: "Authorization field not used in headers" });

        const accessToken = Authorization.split(" ")[1];
        if (!accessToken) return res.status(404).json({ success: false, message: "Access token not found" });

        jwt.verify(accessToken, config.ACCESS_TOKEN, function (err, user) {
            if (err) return res.status(404).json({ success: false, message: "Error occured while verifying token with jwt", error: err.message });

            req.user = user;
            next();
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};

module.exports = {
    signIn,
    authorizeUser,
};
