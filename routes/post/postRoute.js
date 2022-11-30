const express = require("express");
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
postRoute.post("/", createPostController),

//Read a post
postRoute.get("/:id", fetchPostController);

//fetch all posts
postRoute.get("/", fetchAllPostsController);

//update a Post
postRoute.put("/:id", updatePostController);

//delete a post
postRoute.delete("/:id", deletePostController);

module.exports = postRoute;