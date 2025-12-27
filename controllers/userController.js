const User = require("../models/User");
const bcrypt = require("bcryptjs");

// CREATE
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ name, email, password: hashedPassword });
  await user.save();

  res.json({ message: "User Created" });
};

// READ
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// UPDATE
exports.updateUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "User Updated" });
};

// DELETE
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User Deleted" });
};
