import mongoose, { Schema } from "mongoose";

interface IUser {
  handle:string;
  name:string;
  password:string;
  email:string;
}

const userSchema = new Schema({
  handle:{
    type:String,
    trim:true,
    unique:true,
    require:true,
    lowercase: true
  },
  name: {
    type: String,
    trim: true,
    require: true,
  },
  email: {
    type: String,
    trim: true,
    require: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    require: true,
  }
})

export const User = mongoose.model<IUser>('User', userSchema);