const router = require("express").Router();
const { createPost, getPosts, getPostByID, getPostsByUserID, updatePostByID, deletePostByID } = require("../controllers/post.controllers");

router.route("/").post(createPost).get(getPosts);

router.route("/user/:user_id").get(getPostsByUserID);

router.route("/:post_id").get(getPostByID).put(updatePostByID).delete(deletePostByID);

module.exports = router;
