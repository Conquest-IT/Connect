const router = require("express").Router();

router.route("/").post().get();

router.route("/:post_id").get().put().delete();

module.exports = router;
