import mongoose from "mongoose";
import { type } from "os";

//defining schema for users

const userSchema =new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 8,
  },
});

const UserCol = mongoose.model("UserCol", userSchema); //UserCol  is colletion name

export default UserCol;
