import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import userSignInSchema from "@/lib/userSchema";
import { z } from "zod";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log(data);

    const validateData = userSignInSchema.parse(data);

    console.log("validate data", validateData);

    // stored database
    // const existingUser = await prisma.user.findUnique({
    //   where: { email: validateData.email },
    // });

    // console.log("existing user:", existingUser);

    // if (existingUser) {
    //   return NextResponse.json(
    //     { message: "User already exists" },
    //     { status: 400 }
    //   );
    // }

    const user = await prisma.user.create({
      data: {
        name: validateData.name,
        email: validateData.email,
        password: validateData.password,
        // phone: validateData.phone,
      },
    });

    return NextResponse.json({ message: "Sign up successful", user });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: error.errors }, { status: 400 });
    }

    console.error("Error during sign-up:", error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
