import Router from "koa-router";
import User from "../models/usersModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// instantiating the router
const router = new Router();

// Register Route
router.post("/register", async (ctx) => {
  const {
    firstname,
    lastname,
    username,
    password: userPassword,
    email,
  } = ctx.request.body;

  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(userPassword, salt);

    const newUser = new User({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const { password, isAdmin, ...userDetails } = newUser.toObject();

    ctx.status = 201;
    ctx.body = { message: "User created successfully!", userDetails };
  } catch (error) {
    ctx.throw(400, error.message);
  }
});

// Login Route
router.post("/login", async (ctx) => {
  const { username, password: userPassword } = ctx.request.body;

  try {
    const foundUser = await User.findOne({ username });
    if (!foundUser) ctx.throw(401, "No user found");

    const isPasswordCorrect = await bcrypt.compare(
      userPassword,
      foundUser.password
    );
    if (!isPasswordCorrect) ctx.throw(400, "Incorrect Credentials");

    const token = jwt.sign(
      { id: foundUser._id, isAdmin: foundUser.isAdmin },
      process.env.JWT_KEY
    );

    ctx.cookies.set("access_token", token, { httpOnly: true });

    const { password, isAdmin, ...userDetails } = foundUser.toObject();

    ctx.status = 200;
    ctx.body = { message: "Successfully signed in!", userDetails };
  } catch (error) {
    ctx.throw(400, error.message);
  }
});

export default router;
