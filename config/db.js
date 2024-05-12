const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect(
      `${process.env.MONGO}`,
      {}
    )
    .then(() => {
      console.log("Connected to MongoDB Atlas");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB Atlas:", err.message);
    });
};
module.exports = connectDB;
