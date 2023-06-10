const express = require("express");
require("dotenv").config();
require("./config/dbConnection");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const userRoute = require("./routes/user/userRoute");
const postRoute = require("./routes/post/postRoute");
const commentRoute = require("./routes/comment/commentRoute");
const app = express();

app.use(express.json()); // to parse incoming data
//session config
app.use(
    session({
      secret: process.env.SESSION_KEY,
      resave: false,
      saveUninitialized: true,
      store: new MongoStore({
        mongoUrl: process.env.MONGO_URL,
        ttl: 24 * 60 * 60, //1 day
      }),
    })
  );
// User Route
app.use("/api/v1/user", userRoute);

// Post Route
app.use("/api/v1/post", postRoute);

// Comment Route
app.use("/api/v1/comment", commentRoute);

app.listen(9000, console.log("server runnig on 9000"));
//console.log(process.env);