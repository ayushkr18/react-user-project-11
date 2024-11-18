const User = require("../models/User");
async function addUser(req, res) {
  try {
    console.log(req.body, "req.body");
    let user = new User(req.body, "req.body");
    await user.save();
    let users = await User.find({}); // sare users ko lekar aa raha hai.
    console.log(users); // testing purpose
    res.status(200).send({ success: true, message: "Data sent successfully...",users: users });
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ success: true, message: "Something went wrong..." });
  }
}
module.exports = {
  addUser,
};
