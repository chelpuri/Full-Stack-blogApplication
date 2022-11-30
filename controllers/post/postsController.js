//create
const createPostController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Post created",
    });
  } catch (error) {
    res.json(error);
  }
};

//all
const fetchAllPostsController = async (req, res) => {
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
  try {
    res.json({
      status: "success",
      user: "Post details",
    });
  } catch (error) {
    res.json(error);
  }
};

//delete
const deletePostController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Post deleted",
    });
  } catch (error) {
    res.json(error);
  }
};

//update
const updatePostController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Post updated",
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
