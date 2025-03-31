import app from "./app.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import mongodbConnection from "./db/db.js";
dotenv.config({
  path: "./env",
});
mongodbConnection();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", userRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Your server is running on ${process.env.PORT}`);
});
