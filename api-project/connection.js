const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/react-project-batch3");
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
}
module.exports = connect;
