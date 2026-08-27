import {connect} from  "@/dbconfig/dbConfig";
import User, { IUser } from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcryptjs"

connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password, username } = reqBody;
    if(!email||!password||!username){
        return NextResponse.json({
            message:"All fields are required",
           
        },
    {status:400});
    }
    const userExisted=await User.findOne({email});
    if(userExisted){
         return NextResponse.json({
            message:"User already exists",
        }),
        {status:400};
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user:IUser = new User({
      email,
      password: hashedPassword,
      username,
    });

    const savedUser = await user.save();

    return NextResponse.json(
      {
        message: "User created successfully",
        success: true,
        user: savedUser,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.log("ERROR SIGNING UP",error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}