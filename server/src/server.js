import app from "./app.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import mongodbConnection from "./db/db.js";
dotenv.config({
  path: "./env",
});

mongodbConnection()
  .then(() => {
    app.on("Error", (error) => {
        console.log("Error:: ", error);
        throw error
    })
    app.listen(process.env.PORT || 3000, () => {
      console.log(
        `Your server is running on http://localhost:${process.env.PORT || 3000}`
      );
    });
  })
  .catch((error) => {
    console.log("MONGO DB CONNECTION FAILED !!!", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", userRouter);
