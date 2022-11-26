const router = require("express").Router();
const { signIn } = require("../controllers/auth.controllers");

router.route("/sign-in").post(signIn);

module.exports = router;
