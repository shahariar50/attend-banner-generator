import connectionToDatabase from "@/be/connectDb";
import Data from "@/be/dataModel";
import { NextResponse } from "next/server";

export async function GET() {
  await connectionToDatabase();
  const counter = (await Data.findOne()) || new Data();
  return NextResponse.json({ value: counter.count });
}

export const POST = async () => {
  await connectionToDatabase();
  let counter = await Data.findOne();
  if (!counter) counter = new Data();
  counter.count += 1;
  await counter.save();
  return NextResponse.json({ value: counter.count });
};
