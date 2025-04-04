import app from "./app.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import mongodbConnection from "./db/db.js";
dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 3000;

mongodbConnection()
  .then(() => {
    app.on("Error", (error) => {
      console.log("Error:: ", error);
      throw error;
    });
    app.listen(port, () => {
      console.log(`Your server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("MONGO DB CONNECTION FAILED !!!", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", userRouter);