import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  name: { type: String },
  count: { type: Number, default: 0 },
});

const Data = mongoose.models.Data || mongoose.model("Data", dataSchema);

export default Data;
