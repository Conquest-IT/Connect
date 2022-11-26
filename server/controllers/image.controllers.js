const { PrismaClient } = require("@prisma/client");
const { image } = new PrismaClient();

const createImage = async (req, res) => {
    try {
        const { source, type, post_id } = req.body;
        const imageData = await image.create({
            data: {
                source: source,
                type: type,
                post: { connect: { post_id: post_id } },
            },
        });

        return res.status(200).json({ success: true, message: "Successfully created image record", data: imageData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const getImages = async (req, res) => {
    try {
        const imagesData = await image.findMany({});

        return res.status(200).json({ success: true, message: "All the images found", data: imagesData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const getImageByID = async (req, res) => {
    try {
        const { image_id } = req.params;
        const imageData = await image.findUnique({ where: { image_id: image_id } });

        return res.status(200).json({ success: true, message: "Image found by id", data: imageData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const getImagesByPostID = async (req, res) => {
    try {
        const { post_id } = req.params;
        const imagesData = await image.findMany({ where: { post_id: post_id } });

        return res.status(200).json({ success: true, message: "Images found by post id", data: imagesData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const updateImageByID = async (req, res) => {
    try {
        const { image_id } = req.params;
        const { source, type } = req.body;

        const imageData = await image.update({
            where: { image_id: image_id },
            data: { source: source, type: type },
        });

        return res.status(200).json({ success: true, message: "Image updated by id", data: imageData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const deleteImageByID = async (req, res) => {
    try {
        const { image_id } = req.params;
        await image.delete({ where: { image_id: image_id } });

        return res.status(200).json({ success: true, message: "Image deleted by id" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

module.exports = {
    createImage,
    getImages,
    getImageByID,
    getImagesByPostID,
    updateImageByID,
    deleteImageByID,
};
