const express = require("express");
const {
  createCommentController,
  commentDetailsController,
  deleteCommentController,
  updateCommentController,
} =  require("../../controllers/comment/commentsController");
const protected = require("../../middleware/protected");
const commentRoute = express.Router();
//CRUD
//create comment
commentRoute.post("/:id", protected, createCommentController);

//read comment
commentRoute.get("/:id", commentDetailsController);

//update comment
commentRoute.put("/:id", updateCommentController);

//delete Comment
commentRoute.delete("/:id", protected, deleteCommentController);


module.exports = commentRoute;