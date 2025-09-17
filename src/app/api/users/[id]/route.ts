import { axiosClientInstance } from "@/api/axiosClientInstance";
import { NextResponse } from "next/server";

type Param = {
  params: { id: string };
};

export async function GET(req: Request, { params }: Param) {
  try {
    const { id } = params;
    const res = await axiosClientInstance.get(`/users/${id}`);
    return NextResponse.json(res.data);
  } catch (error: Error | unknown) {
    console.error(error);
    return NextResponse.error();
  }
}
