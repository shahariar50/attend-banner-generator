import connectionToDatabase from "@/be/connectDb";
import SubmissionData from "@/be/submissionData";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  await connectionToDatabase();
  const { name, batch } = await req.json();

  const formData = new SubmissionData({ name, batch });
  await formData.save();

  return NextResponse.json({ message: "Form data saved successfully" });
};
