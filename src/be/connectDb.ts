import mongoose from "mongoose";

const connectionToDatabase = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://shahariartouhid:sahariartouhid@cluster0.3ssg1.mongodb.net/",
      { dbName: "counter" }
    );
  } catch (err) {
    console.log(err);
  }
};

export default connectionToDatabase;
