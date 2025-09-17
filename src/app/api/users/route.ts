import { axiosClientInstance } from "@/api/axiosClientInstance";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await axiosClientInstance.get("/users");
    return NextResponse.json(res.data);
  } catch (error: Error | unknown) {
    console.error(error);
    return NextResponse.error();
  }
}
