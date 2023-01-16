import express from "express";
import { createPost, getPosts, getPostByID, getPostsByUserID, updatePostByID, deletePostByID } from "../controllers/post.controllers";

const router = express.Router();

router.route("/").post(createPost).get(getPosts);

router.route("/user/:user_id").get(getPostsByUserID);

router.route("/:post_id").get(getPostByID).put(updatePostByID).delete(deletePostByID);

export default router;
