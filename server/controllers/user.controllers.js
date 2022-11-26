const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const { user } = new PrismaClient();

const { exclude } = require("../helpers/utils");

const createUser = async (req, res) => {
    try {
        const requestObject = req.body;
        requestObject.password = bcrypt.hashSync(requestObject.password, 6);

        const userData = await user.create({ data: requestObject });
        const userWithoutPassword = exclude(userData, ["password"]);

        res.status(200).json({ success: true, message: "User created", data: userWithoutPassword });
    } catch (error) {
        console.error(error);
    }
};

const getUsers = async (req, res) => {
    try {
        const usersData = await user.findMany({});
        const usersWithoutPassword = usersData.map(user => {
            return exclude(user, ["password"]);
        });

        res.status(200).json({ success: true, message: "Users found", data: usersWithoutPassword });
    } catch (error) {
        console.error(error);
    }
};

const getUserByID = async (req, res) => {
    try {
        const user_id = req.params.user_id;
        const userData = await user.findUnique({ where: { user_id: user_id } });
        const userWithoutPassword = exclude(userData, ["password"]);

        res.status(200).json({ success: true, message: "User found", data: userWithoutPassword });
    } catch (error) {
        console.error(error);
    }
};

const updateUserBasicInformationByID = async (req, res) => {
    try {
        const user_id = req.params.user_id;
        const userData = await user.update({
            data: req.body,
            where: { user_id: user_id },
        });
        const userWithoutPassword = exclude(userData, ["password"]);

        res.status(200).json({ success: true, message: "User updated", data: userWithoutPassword });
    } catch (error) {
        console.error(error);
    }
};

const deleteUserByID = async (req, res) => {
    try {
        const user_id = req.params.user_id;
        await user.delete({ where: { user_id: user_id } });

        res.status(200).json({ success: true, message: "User deleted" });
    } catch (error) {
        console.error(error);
    }
};

module.exports = { createUser, getUsers, getUserByID, updateUserBasicInformationByID, deleteUserByID };
