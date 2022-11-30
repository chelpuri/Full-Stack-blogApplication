//register
const registerUserController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User registered",
    });
  } catch (error) {
    res.json(error);
  }
};

//login
const loginController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User login",
    });
  } catch (error) {
    res.json(error);
  }
};

//details
const userDetailsController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User Details",
    });
  } catch (error) {
    res.json(error);
  }
};
//profile
const profileController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User profile",
    });
  } catch (error) {
    res.json(error);
  }
};

//upload profile photo
const uploadProfilePhotoController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User profile image upload",
    });
  } catch (error) {
    res.json(error);
  }
};

//upload cover image

const uploadCoverImgController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User cover image upload",
    });
  } catch (error) {
    res.json(error);
  }
};

//update password
const updatePasswordController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User password update",
    });
  } catch (error) {
    res.json(error);
  }
};

//update user
const updateUserController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User  update",
    });
  } catch (error) {
    res.json(error);
  }
};

//logout
const logoutController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User logout",
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  registerUserController,
  loginController,
  userDetailsController,
  profileController,
  uploadProfilePhotoController,
  uploadCoverImgController,
  updatePasswordController,
  updateUserController,
  logoutController,
};
