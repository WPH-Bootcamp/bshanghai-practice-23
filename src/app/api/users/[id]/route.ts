import { axiosClientInstance } from "@/api/axiosClientInstance";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const res = await axiosClientInstance.get(`/users/${id}`);
    return NextResponse.json(res.data);
  } catch (error: Error | unknown) {
    console.error(error);
    return NextResponse.error();
  }
}
