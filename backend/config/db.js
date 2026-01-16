import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://shubhamgavali1711_db_user:resume123@cluster0.un9uxht.mongodb.net/RESUME"
    )
    .then(() => {
      console.log("MongoDB connected");
    });
};
