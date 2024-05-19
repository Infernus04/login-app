import User from "../models/User.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  const { password, email, username } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ password: hashedPassword, email, username });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created Successfully" });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const {password : hashedPassword , ...rest} = validUser._doc
    const expiryDate = new Date(Date.now() + 3600000);// 1 Hour
    res
      .cookie("access_token", token, { httpOnly: true,expires : expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
