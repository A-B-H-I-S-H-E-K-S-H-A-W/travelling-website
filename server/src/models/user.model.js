import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/.+@.+\..+/, "Invalid email format"], // Email validation
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      match: [/^\d{10}$/, "Invalid mobile number"], // Mobile number validation (10 digits)
    },
    profilePicture: {
      type: String,
      required: true,
      default: "",
    },
    tripsDetails: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OtherModel",
      },
    ],
    saved: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OtherModel",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
