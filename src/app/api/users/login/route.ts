import connectDB from "@/db/dbconfig";
import jwt from "jsonwebtoken";
import { User } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

connectDB();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;

    console.log(reqBody);

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User is not registered !" },
        { status: 400 }
      );
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Check your credentials" },
        { status: 400 }
      );
    }

    console.log(user);
    //generate token
    const token = jwt.sign(
      {
        user: user._id,
        email: user.email,
      },
      process.env.ACCESS_TOKEN_SECRET!,
      {
        expiresIn:"1d",
      }
    );
    const response = NextResponse.json({
      message: "Login Successful",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
