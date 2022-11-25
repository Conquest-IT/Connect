const router = require("express").Router();
const { createUser, getUsers, getUserByID, updateUserBasicInformationByID, deleteUserByID } = require("../controllers/user.controllers");

router.route("/").post(createUser).get(getUsers);

router.route("/:user_id").get(getUserByID).put(updateUserBasicInformationByID).delete(deleteUserByID);

module.exports = router;
