const router = require("express").Router();
const { createImage, getImages, getImageByID, getImagesByPostID, updateImageByID, deleteImageByID } = require("../controllers/image.controllers");

router.route("/").post(createImage).get(getImages);

router.route("/post/:post_id").get(getImagesByPostID);

router.route("/:image_id").get(getImageByID).put(updateImageByID).delete(deleteImageByID);

module.exports = router;
