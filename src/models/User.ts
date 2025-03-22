import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  handle:{
    type:String,
    trim:true,
    unique:true,
    require:true
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
    unique: true
  },
  password: {
    type: String,
    trim: true,
    require: true,
  }
})


export const User = mongoose.model('User', userSchema);