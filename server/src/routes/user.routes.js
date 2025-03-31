import express from "express";

const userRouter = express.Router();

userRouter.get("/register", );
userRouter.get("/login", (req, res) => {
  res.send("user will login here");
});
userRouter.get("/logout", (req, res) => {
  res.send("user will logout...!");
});
userRouter.get("/profile", (req, res) => {
  res.send("user profile will be fetched");
});
userRouter.get("/update-profile", (req, res) => {
  res.send("user will update profile...!");
});

export default userRouter;
