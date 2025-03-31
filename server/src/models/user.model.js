import mongoose from "mongoose";

// Define User Schema
const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
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
      default: "", // URL of the profile picture
    },
    tripsDetails: {
      type: String,
      default: "", // Optional field
    },
    saved: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OtherModel", // Refers to another collection (e.g., saved trips/items)
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create and export the User model
export const User = mongoose.model("User", userSchema);
