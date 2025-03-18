import mongoose, { mongo, Schema } from "mongoose";

interface IUser {
  handle: string;
  email: string;
  name: string;
  password: string;
}

const userSchema = new Schema({
  handle: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  name: {
    type: String,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
});

export const User = mongoose.model<IUser>("User", userSchema);
