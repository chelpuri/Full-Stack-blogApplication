const createCommentController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "comment created",
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
  try {
    res.json({
      status: "success",
      user: "comment deleted",
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
