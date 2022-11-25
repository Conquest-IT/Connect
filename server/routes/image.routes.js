const router = require("express").Router();

router.route("/").post().get();

router.route("/:image_id").get().put().delete();

module.exports = router;
