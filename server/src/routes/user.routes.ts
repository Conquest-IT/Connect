import express from "express";
import { createUser, getUsers, getUserByID, updateUserBasicInformationByID, deleteUserByID } from "../controllers/user.controllers";

const router = express.Router();

router.route("/").post(createUser).get(getUsers);

router.route("/:user_id").get(getUserByID).put(updateUserBasicInformationByID).delete(deleteUserByID);

export default router;
