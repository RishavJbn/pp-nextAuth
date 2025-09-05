import connectDB from "@/db/dbconfig";
import { datafromToken } from "@/helpers/datafromToken";
import { User } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(req: NextRequest) {
  try {
    const userId = await datafromToken(req);
    const user = await User.findOne({ _id: userId }).select("-password");
    console.log("user is here :",user);
    if (!user) {
      return NextResponse.json({ error: "user not found ji for genius" }, { status: 400 });
    }
    return NextResponse.json({
      message: "User found ",
      data: user,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
