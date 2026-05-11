import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

    console.log("Linked database succesfully !!!");
  } catch (error) {
    console.log("Error when connect database:", error);
    process.exit(1); // close db when error
  }
};
