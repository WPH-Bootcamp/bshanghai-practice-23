import { axiosClientInstance } from "@/api/axiosClientInstance";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("userId");
  try {
    const res = await axiosClientInstance.get(`/posts?userId=${id}`);
    return NextResponse.json(res.data);
  } catch (error: Error | unknown) {
    console.error(error);
    return NextResponse.error();
  }
}
