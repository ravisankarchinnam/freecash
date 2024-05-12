import { NextRequest, NextResponse } from "next/server";
import { AxiosError } from "@/types";
import strapiApiClient from "@/services/strapiApiClient";
import { token } from "@/services/apiClient";

export async function POST(request: NextRequest) {
  const { identifier, password } = await request.json();

  try {
    const strapiRes = await strapiApiClient.post(`/auth/local`, {
      identifier,
      password,
    });

    const { jwt, user } = strapiRes.data;
    const response = NextResponse.json({ jwt, user }, { status: 200 });

    response.cookies.set(token, jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: "strict",
      path: "/",
    });

    return response;
  } catch (err) {
    const error = err as AxiosError;
    // Check if the error response has the expected format
    if (error.response?.data?.error?.message) {
      const errorMessage = error.response.data.error.message;
      const statusCode = error.response.data.error.status;

      return NextResponse.json({ error: errorMessage }, { status: statusCode });
    }

    console.error("Error Sign In:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: error.response?.status || 500 }
    );
  }
}
