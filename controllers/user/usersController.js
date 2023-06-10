const User = require('../../models/user/user');
const brcrypt = require("bcryptjs");
const appErr = require("../../utils/appError")
//register controller
const registerUserController = async (req, res) => {
  const {fullname, email, password} = req.body;
  try {
    const userFound = await User.findOne({email});
    if(userFound){
     return res.json({
        status: 'failed',
        data: 'user already exists',
      });
    }
    const salt = await brcrypt.genSalt(3);
    const hashedPassword = await brcrypt.hash(password, salt);
    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
    })
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.json(error);
  }
};

//login controller
const loginController = async (req, res) => {
  const {email, password} = req.body;
  try {
    const isUserFound = await User.findOne({email});
    if(!isUserFound) {
      return next(appErr("Invalid login credentials"));
    }
    const isPasswordValid = await brcrypt.compare(password, isUserFound.password);
    if(!isPasswordValid) {
      return next(appErr("Invalid login credentials"));
    }
    else {
      req.session.userAuth = isUserFound._id;
      console.log(req.session);
      res.json({
        status: "success",
        data: isUserFound,
      });
    }
  } catch (error) {
    res.json(error);
  }
};

//details
const userDetailsController = async (req, res) => {
  try {
    const userId = req.params.id;
    //find the user
    const user = await User.findById(userId);
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.json(error);
  }
};
//profile
const profileController = async (req, res) => {
  try {
    const userID = req.session.userAuth;
    //find the user
    const user = await User.findById(userID);
    res.json({
      status: "success",
      data: user,
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
  const { fullname, email } = req.body;
  try {
    if (email) {
      const emailTaken = await User.findOne({ email });
      if (emailTaken) {
        return next(appErr("Email is taken", 400));
      }
    }
    //update the user
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        fullname,
        email,
      },
      {
        new: true,
      }
    );
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.json(next(appErr(error.message)));
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
