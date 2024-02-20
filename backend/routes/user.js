const express = require("express");
const router = express.Router();
const { z } = require("zod");
const { User } = require("../db");
const { JWT_SECRET } = require("../config");

const signupBody = z.object({
  username: z.string().min(4),
  password: z.string().min(6),
  firstName: z.string().min(4),
  lastName: z.string().min(3),
});

router.post("/signup", async (req, res) => {
  const userData = signupBody.safeParse(req.body);
  if (!userData.success) {
    return res.status(411).json({
      message: "Invalid input",
    });
  }
  const existingUser = await User.findOne({
    username: req.body.username,
  });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  const userId = user._id;
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token,
  });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({
    username,
  });
  if (password !== existingUser.password) {
    return res.status(401).json({ message: "Invalid password" });
  }
  const token = jwt.sign(
    {
      userId: existingUser._id,
    },
    JWT_SECRET
  );
  return res.status(200).json({
    token,
  });
});

module.exports = router;
