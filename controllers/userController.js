const user = require("../models/userModel");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sekretKey = "whatever";

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const oldUser = await user.findOne({ email });
    if (!oldUser) res.status(404).json({ message: "User doesn't exsist" });
    const isPasswordCorrect = await bycrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) {
      if (!oldUser) res.status(404).json({ message: "Password doesn't match" });
    } else {
      const token = jwt.sign(
        {
          email: oldUser.email,
          _id: oldUser._id,
        },
        sekretKey,
        { expiresIn: "1h" }
      );

      const result = {
        name: oldUser.name,
        email: oldUser.email,
        _id: oldUser._id,
        isAdmin: oldUser.isAdmin,
      };
      console.log("login wroking");
      res.status(200).json({ token, result });
    }
  } catch (err) {
    res.json({ message: "something went wrong" });
  }
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const oldUser = await user.findOne({ email: email });

    if (!oldUser) {
      const hashPassword = await bycrypt.hash(password, 12);
      const newUesr = await user.create({
        name,
        email,
        password: hashPassword,
      });
      const result = await {
        name: newUesr.name,
        email: newUesr.email,
        isAdmin: newUesr.isAdmin,
        _id: newUesr._id,
      };
      const token = await jwt.sign(
        { email: newUesr.email, _id: newUesr._id },
        sekretKey,
        { expiresIn: "1h" }
      );
      console.log("working");
      res.status(201).json({ result, token });
    } else {
      res.status(400).json({ meassage: "You already have an account" });
    }
  } catch (error) {
    res.json(error);
  }
};
