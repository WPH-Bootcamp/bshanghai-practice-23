/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { loginSchema } from "@/lib/validation/auth.validation";
// import { axiosClientInstance } from "@/api/axiosClientInstance";

export async function POST(request: Request) {
  const body = await request.json();

  const validation = loginSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json({
      error: validation.error.flatten().fieldErrors,
    });
  }

  const { email, password } = validation.data;
  try {
    // const response = await axiosClientInstance.post("/auth/login", {
    //     email,
    //     password
    // })

    // dummy api
    return NextResponse.json({
      status: 200,
      message: "success",
      user: { email, token: "abcd" },
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    });
  }
}
