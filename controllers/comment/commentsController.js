const Post = require("../../models/post/post");
const User = require("../../models/user/user");
const Comment = require("../../models/comment/comment");
const createCommentController = async (req, res) => {
  const {message} = req.body;
  try {
    const post = await Post.findById(req.params.id);
    const comment = await Comment.create({
      user: req.session.userAuth,
      message,
    });
    post.comments.push(comment._id);
    await post.save({validateBeforeSave: false});

    const user = User.findById(req.session.userAuth);
    user.comments.push(comment._id);
    await user.save({validateBeforeSave: false});

    return res.json({
      status: "success",
      user: comment,
    });
  } catch (error) {
    res.json(error);
  }
};

//
const commentDetailsController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Post comments",
    });
  } catch (error) {
    res.json(error);
  }
};

//delete
const deleteCommentController = async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  if(comment.user.toString() != req.session.userAuth.toString()){
    res.json({
      status: "failed",
      data: "You are not allowed",
    });
  }

  await Comment.findByIdAndDelete(req.params.id);
  try {
    res.json({
      status: "success",
      user: "comment deleted successfully",
    });
  } catch (error) {
    res.json(error);
  }
};

//Update
const updateCommentController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "comment updated",
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createCommentController,
  commentDetailsController,
  deleteCommentController,
  updateCommentController,
};
