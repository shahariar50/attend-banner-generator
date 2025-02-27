import mongoose from "mongoose";

const submissionDataSchema = new mongoose.Schema({
  name: { type: String },
  batch: { type: String },
});

const SubmissionData =
  mongoose.models.SubmissionData ||
  mongoose.model("SubmissionData", submissionDataSchema);

export default SubmissionData;
