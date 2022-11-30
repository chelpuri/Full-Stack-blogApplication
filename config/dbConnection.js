const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    console.log(process.env);
    await mongoose.connect(process.env.Mongo_URL);
    console.log("DB Connection Successful");
  } catch (error) {
    console.log(error.message);
  }
};

dbConnection();
