const express = require("express");
const {
  createCommentController,
  commentDetailsController,
  deleteCommentController,
  updateCommentController,
} =  require("../../controllers/comment/commentsController");

const commentRoute = express.Router();
//CRUD
//create comment
commentRoute.post("/", createCommentController);

//read comment
commentRoute.get("/:id", commentDetailsController);

//update comment
commentRoute.put("/:id", updateCommentController);

//delete Comment
commentRoute.delete("/:id", deleteCommentController);


module.exports = commentRoute;