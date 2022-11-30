const express = require("express");
const {
    loginController,
    profileController,
    registerUserController,
    userDetailsController,
    updateUserController,
    uploadProfilePhotoController,
    uploadCoverImgController,
    updatePasswordController,
    logoutController,
} = require("../../controllers/user/usersController");
const userRoute = express.Router();

//CRUD
//create User
userRoute.post("/register", registerUserController);

//login
userRoute.post("/login", loginController);

//get user Details
userRoute.get("/:id", userDetailsController);

//get user profile
userRoute.get("/profile/:id", profileController);

//profile photo upload
userRoute.put("/profile-photo-upload/:id", uploadProfilePhotoController);

//cover photo upload
userRoute.put("/cover-photo-upload/:id", uploadCoverImgController);

//update password
userRoute.put("/update-password/:id", updatePasswordController);

//update user details
userRoute.put("/update/:id", updateUserController);

//logout user
userRoute.get("/logout", logoutController);

module.exports = userRoute;