import connectionToDatabase from "@/be/connectDb";
import SubmissionData from "@/be/submissionData";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  await connectionToDatabase();
  const { name, batch } = await req.json();

  const existingRecord = await SubmissionData.findOne({
    name: name.trim(),
    batch: batch.trim(),
  });

  if (existingRecord) {
    return NextResponse.json(
      { message: "Record already exists!" },
      { status: 400 }
    );
  }

  const formData = new SubmissionData({
    name: name.trim(),
    batch: batch.trim(),
  });
  await formData.save();

  return NextResponse.json({ message: "Form data saved successfully" });
};
