const express = require("express");
const connect = require("./connection");
const cors = require("cors");
const user = require("./routes/user");
const app = express();
app.use(cors());
connect();
app.use(user);

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running on 3000");
  }
});
