import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    fullName: {
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
      required: [true, "Password is required!"],
      min: 8,
    },
    avatar: {
      type: String, // Cloudinary url
      default: "",
    },
    phoneNumber: {
      type: Number,
      required: true,
      match: [/^\d{10}$/, "Invalid mobile number"], // Mobile number validation (10 digits)
    },
    refreshTokens: {
      type: String,
    },
    tripsDetails: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Othe  rModel",
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

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const rounds = 10;
    this.password = bcrypt.hash(this.password, rounds);
    next();
  }
  return next;
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      userName: this.userName,
      fullName: this.fullName,
    },
    process.env.USER_ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.USER_ACCESS_TOKEN_EXPIRY,
    }
  );
};
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.USER_REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.USER_REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
