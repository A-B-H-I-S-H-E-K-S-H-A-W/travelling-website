import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Handle validation with a plugin
      lowercase: true, // Convert automatically
      match: [/.+@.+\..+/, "Invalid email format"], // Email regex validation
    },
    enterpriseName: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
      minlength: [8, "Password must be at least 8 characters long!"],
    },
    avatar: {
      type: String, // Cloudinary URL
      default: "",
    },
    mobile: {
      type: String,
      required: true,
      match: [/^\d{10}$/, "Invalid mobile number"], // Mobile number validation
    },
    panCard: {
      type: String,
      required: [true, "PAN card number is required"],
      maxlength: [10, "PAN card number must be 10 characters"],
      match: [/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN card number!"], // PAN regex validation
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
    EnterpriseDocs: {
      type: String,
      required: true,
    },
    verification: {
      type: String,
      required: true,
    },
    refreshTokens: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const rounds = 10;
  this.password = bcrypt.hash(this.password, rounds);
  next();
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
    process.env.ADMIN_ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ADMIN_ACCESS_TOKEN_EXPIRY,
    }
  );
};
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.ADMIN_REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.ADMIN_REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const Admin = mongoose.model("Admin", adminSchema);
