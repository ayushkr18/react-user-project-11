const express = require("express");
const usercontroller = require("../controllers/usercontroller");
const bodyParser = require("body-parser");
const router = express.Router();
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
router.post("/add/user", (req, res) => {
  console.log("we are in add user route");
  usercontroller.addUser(req, res);
});
module.exports = router;
