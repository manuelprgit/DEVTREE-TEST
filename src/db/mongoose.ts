import mongoose from "mongoose";
import colors, { bgRed } from 'colors'
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(colors.bgGreen.white(` ${connect.connection.port} ${connect.connection.host} `));
  } catch (error) {
    console.log(colors.bgRed.white(error.message));
  }
};

export default connectDB;
