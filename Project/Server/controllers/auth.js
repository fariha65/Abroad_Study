import User from "../models/user.js";
import {  comparePassword , hashPassword } from "../helpers/auth.js";
import { validationResult } from 'express-validator';  // Add express-validator to handle validation
import jwt from "jsonwebtoken";

// Register User
export const register = async (req, res) => {
  const { name, email, password, secret } = req.body;

  // Validate inputs using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use. Please choose another email." });
    }

    // Hash the password before saving
    const hashedPassword = await hashPassword(password);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      secret
    });

    // Save the user
    await user.save();
    return res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("Error during registration:", err);
    return res.status(500).json({ error: "Something went wrong, please try again later." });
  }
};



// Login User
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("No user found");

    const match = await comparePassword(password, user.password);
    if (!match) return res.status(400).send("Wrong password");

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    user.password = undefined;
    user.secret = undefined;

    res.json({ token, user });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

// Forgot Password
export const forgot_Password = async (req, res) => {
  try {
    const { email, secret, newPassword } = req.body;

    const user = await User.findOne({ email, secret });
    if (!user) return res.status(400).send("Incorrect email or answer to the security question");

    // Password validation for reset (same criteria as above)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!newPassword || !passwordRegex.test(newPassword))
      return res.status(400).send("Password must be 6+ characters, including uppercase, lowercase, number, and special character");

    const hashedPassword = await hashPassword(newPassword);
    user.password = hashedPassword;
    await user.save();

    res.json({ message: "Password reset successful!" });
  } catch (err) {
    console.log("FORGOT PASSWORD FAILED =>", err);
    return res.status(400).send("Error. Try again.");
  }
};
