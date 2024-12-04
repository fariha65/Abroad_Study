// routes/auth.js
import express from 'express';
import { register, login, forgot_Password } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", (req, res) => {
    console.log("Login route hit");
    login(req, res);
});
router.post("/forgotpassword", forgot_Password); // New route for forgot password

export default router;
