const express = require("express");
//require("dotenv").config();
//require("./config/dbConnection");
const userRoute = require("./routes/user/userRoute");
const postRoute = require("./routes/post/postRoute");
const commentRoute = require("./routes/comment/commentRoute");
const app = express();

// User Route
app.use("/api/v1/user", userRoute);

// Post Route
app.use("/api/v1/post", postRoute);

// Comment Route
app.use("/api/v1/comment", commentRoute);

app.listen(9000);
console.log(process.env);