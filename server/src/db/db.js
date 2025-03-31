import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const mongodbConnection = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connection.connection.host}`
    );
  } catch (error) {
    console.log("ERROR: MONGODB NOT CONNECTED -- ", error);
    process.exit(1);
  }
};

export default mongodbConnection;
