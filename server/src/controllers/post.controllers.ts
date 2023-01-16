import { PrismaClient } from "@prisma/client";
import { Response } from "express";

import { IGetUserAuthInfoRequest } from "../helpers/definitionfile";
const { post } = new PrismaClient();

const createPost = async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
        const { post_content, user_id, images } = req.body;

        const postData = await post.create({
            data: {
                user: { connect: { user_id: user_id } },
                post_content: post_content,
                images: { createMany: { data: images } },
            },
        });

        return res.status(200).json({ success: true, message: "Successfully created the post", data: postData });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const getPosts = async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
        const postsData = await post.findMany({});

        return res.status(200).json({ success: true, message: "All the posts found", data: postsData });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const getPostByID = async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
        const { post_id } = req.params;
        const postData = await post.findUnique({ where: { post_id: post_id } });

        if (!postData) {
            return res.status(404).json({ success: false, message: "Post not found" });
        }

        return res.status(200).json({ success: true, message: "Post found by id", data: postData });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const getPostsByUserID = async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
        const { user_id } = req.params;
        const postsData = await post.findMany({ where: { user_id: user_id } });

        if (!postsData) {
            return res.status(404).json({ success: false, message: "Posts not found" });
        }

        return res.status(200).json({ success: true, message: "All the posts found by user id", data: postsData });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const updatePostByID = async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
        const { post_id } = req.params;
        const { post_content, images } = req.body;

        const postData = await post.update({
            where: { post_id: post_id },
            data: {
                post_content: post_content,
                images: { createMany: { data: images } },
            },
        });

        if (!postData) {
            return res.status(404).json({ success: false, message: "Post not found" });
        }

        return res.status(200).json({ success: true, message: "Updated the post by id", data: postData });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const deletePostByID = async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
        const { post_id } = req.params;
        const postData = await post.delete({ where: { post_id: post_id } });

        if (!postData) {
            return res.status(404).json({ success: false, message: "Post not found" });
        }

        return res.status(200).json({ success: true, message: "Deleted the post by id" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

export { createPost, getPosts, getPostByID, getPostsByUserID, updatePostByID, deletePostByID };
