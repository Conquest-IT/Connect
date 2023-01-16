import { PrismaClient } from "@prisma/client";
import { Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import config from "../config/config";
import { exclude } from "../helpers/utils";
import { IGetUserAuthInfoRequest } from "../helpers/definitionfile";
const { user } = new PrismaClient();

const signIn = async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
        const { email, password } = req.body;
        const userData = await user.findUnique({ where: { email: email } });

        if (!userData) {
            return res.status(400).json({ success: false, message: "No user found" });
        }

        if (userData.password) {
            const passwordMatched = bcrypt.compareSync(password, userData.password);
            if (!passwordMatched) {
                return res.status(403).json({ success: false, message: "Wrong password" });
            }
            const userWithoutPassword = exclude(userData, ["password"]);
            const token = jwt.sign({ data: userWithoutPassword }, config.ACCESS_TOKEN, { expiresIn: 24 * 60 * 60 });

            return res.status(200).json({ success: true, message: "Successfully logged in", data: { token, user: userWithoutPassword } });
        } else {
            return res.status(403).json({ success: false, message: "Password can't be empty" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const authorizeUser = async (req: IGetUserAuthInfoRequest, res: Response, next: Function) => {
    try {
        const Authorization = req.headers.Authorization;
        if (!Authorization) return res.status(404).json({ success: false, message: "Authorization field not used in headers" });

        const accessToken = (<string>Authorization).split(" ")[1];
        if (!accessToken) return res.status(404).json({ success: false, message: "Access token not found" });

        jwt.verify(accessToken, config.ACCESS_TOKEN, function (err: any, user: any) {
            if (err) return res.status(404).json({ success: false, message: "Error occured while verifying token with jwt", error: err.message });

            req.user = user;
            next();
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

export { signIn, authorizeUser };
