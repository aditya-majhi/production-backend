import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`Mongo DB connected = ${connection.connection.host}`);
  } catch (err) {
    console.log({ mongoError: err });
    process.exit(1);
  }
};

export default connectToDB;
