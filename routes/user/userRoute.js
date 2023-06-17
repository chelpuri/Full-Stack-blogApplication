const express = require("express");
const multer = require("multer");
const storage = require("../../config/cloudinary");
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
const protected = require("../../middleware/protected");
const userRoute = express.Router();
const upload = multer({ storage });
//CRUD
//create User
userRoute.post("/register", registerUserController);

//login
userRoute.post("/login", loginController);

//get user profile
userRoute.get("/profile", protected, profileController);

//get user Details
userRoute.get("/:id", userDetailsController);

//profile photo upload
userRoute.put(
    "/profile-photo-upload/", protected, 
    upload.single("profile"), uploadProfilePhotoController);

//cover photo upload
userRoute.put("/cover-photo-upload/:id", uploadCoverImgController);

//update password
userRoute.put("/update-password/:id", updatePasswordController);

//update user details
userRoute.put("/update/:id", updateUserController);

//logout user
userRoute.get("/logout", logoutController);

module.exports = userRoute;