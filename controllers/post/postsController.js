const Post = require("../../models/post/post");
const User = require("../../models/user/user");
const { post } = require("../../routes/post/postRoute");

const createPostController = async (req, res) => {
  const {title, description, category, user} = req.body;
  try {
    const userId = req.session.userAuth;
    const userFound = await User.findById(userId);
    const postCreated = await Post.create({
      title,
      description,
      category,
      user: userFound._id,
      image: req.file.path,
    });

    userFound.posts.push(postCreated._id);
    await userFound.save();
    res.json({
      status: "success",
      data: postCreated,
    });
  } catch (error) {
    res.json(error);
  }
};

//all
const fetchAllPostsController = async (req, res) => {
  const posts = await Post.find().populate('comments');
  try {
    res.json({
      status: "success",
      user: "Posts list",
    });
  } catch (error) {
    res.json(error);
  }
};

//details
const fetchPostController = async (req, res) => {
  const postId = req.params.id;
  const userPost = Post.findById(postId).populate('comments');
  try {
    res.json({
      status: "success",
      data: userPost,
    });
  } catch (error) {
    res.json(error);
  }
};

//delete a post
const deletePostController = async (req, res) => {
  const postByUser = await Post.findByIdAndDelete(req.params.id);
  try {
    res.json({
      status: "success",
      user: "Post deleted successfully",
    });
  } catch (error) {
    res.json(error);
  }
};

//update
const updatePostController = async (req, res) => {
  const {title, description, category} = req.body;
  const post = await Post.findById(req.params.id);
  if(post.user.toString() !== req.session.userAuth.toString()){
    return res.json({
      status: "invalid login"
    });
  }
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, 
  {
    title,
    description,
    category,
    image: req.file.path,
  });
  try {
    res.json({
      status: "success",
      user: updatedPost,
    });
  } catch (error) {
    res.json(error);
  }
};
module.exports = {
  createPostController,
  fetchAllPostsController,
  fetchPostController,
  deletePostController,
  updatePostController,
};
