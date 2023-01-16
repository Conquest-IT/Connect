import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { Response } from "express";
import { IGetUserAuthInfoRequest } from "../helpers/definitionfile";
import { exclude } from "../helpers/utils";

const { user } = new PrismaClient();

const createUser = async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
        const requestObject = req.body;

        if (!requestObject.password || !requestObject.email) {
            return res.status(200).json({ success: true, message: "Please input email and password correctly" });
        }

        requestObject.password = bcrypt.hashSync(requestObject.password, 6);

        const userData = await user.create({ data: requestObject });
        const userWithoutPassword = exclude(userData, ["password"]);

        return res.status(200).json({ success: true, message: "User created", data: userWithoutPassword });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const getUsers = async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
        const usersData = await user.findMany({});
        const usersWithoutPassword = usersData.map(user => {
            return exclude(user, ["password"]);
        });

        return res.status(200).json({ success: true, message: "Users found", data: usersWithoutPassword });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const getUserByID = async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
        const user_id = req.params.user_id;
        const userData = await user.findUnique({ where: { user_id: user_id } });

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        } else {
            const userWithoutPassword = exclude(userData, ["password"]);
            return res.status(200).json({ success: true, message: "User found", data: userWithoutPassword });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const updateUserBasicInformationByID = async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
        const user_id = req.params.user_id;
        const userData = await user.update({
            data: req.body,
            where: { user_id: user_id },
        });

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const userWithoutPassword = exclude(userData, ["password"]);

        return res.status(200).json({ success: true, message: "User updated", data: userWithoutPassword });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const deleteUserByID = async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
        const user_id = req.params.user_id;
        const userData = await user.delete({ where: { user_id: user_id } });

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({ success: true, message: "User deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

export { createUser, getUsers, getUserByID, updateUserBasicInformationByID, deleteUserByID };
