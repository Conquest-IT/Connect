import express from "express";
import { createImage, getImages, getImageByID, getImagesByPostID, updateImageByID, deleteImageByID } from "../controllers/image.controllers";

const router = express.Router();

router.route("/").post(createImage).get(getImages);

router.route("/post/:post_id").get(getImagesByPostID);

router.route("/:image_id").get(getImageByID).put(updateImageByID).delete(deleteImageByID);

export default router;
