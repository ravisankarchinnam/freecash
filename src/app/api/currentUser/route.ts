import { NextRequest, NextResponse } from "next/server";
import { AxiosError } from "@/types";
import strapiApiClient from "@/services/strapiApiClient";

export async function GET(request: NextRequest) {
  try {
    const cookie = request.cookies.get(process.env.TOKEN as string);
    const token = cookie?.value;

    const userResponse = await strapiApiClient.get("/users/me?populate=*", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (userResponse.data) {
      return NextResponse.json(userResponse.data, { status: 200 });
    } else {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
  } catch (err) {
    const error = err as AxiosError;
    return NextResponse.json(error.response?.data || {}, {
      status: error.response?.status || 500,
    });
  }
}
