import connectDB from "@/db/dbconfig";
import { User } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";



connectDB();
export async function POST(req:NextRequest){
    try {
        const reqBody = await req.json();
        const{token} =reqBody
        console.log(token);
        const user = await User.findOne({verifyToken:token,verifyTokenExpiry:{$gt:Date.now()}})

       if(!user){
        return NextResponse.json({error:"Invalid TOken"},{status:400})
       }
      console.log(user);
      
      user.isVerified =true;
      user.verifyToken = undefined;
      user.verifyTokenExpiry =undefined;
      await user.save();

      return NextResponse.json({message: "Email Verified Successfully",
        success:true
      })
      
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}