const express = require("express");
const multer = require("multer");
const storage = require("../../config/cloudinary");
const protected = require("../../middleware/protected");
const upload = multer({ storage });
const {
    createPostController,
    fetchPostController,
    fetchAllPostsController,
    updatePostController,
    deletePostController,
} = require("../../controllers/post/postsController");
const postRoute = express.Router();
//CRUD
//Create a post
postRoute.post("/", protected, upload.single("file"), createPostController),

//fetch all posts
postRoute.get("/", fetchAllPostsController);

//Read a post
postRoute.get("/:id", fetchPostController);

//update a Post
postRoute.put("/:id", updatePostController);

//delete a post
postRoute.delete("/:id", deletePostController);

module.exports = postRoute;