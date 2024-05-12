import { NextRequest, NextResponse } from "next/server";
import strapiApiClient from "@/services/strapiApiClient";
import { AxiosError } from "@/types";
import { token } from "@/services/apiClient";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  try {
    const strapiRes = await strapiApiClient.post("/auth/local/register", {
      username: email,
      email,
      password,
    });

    const { jwt, user } = strapiRes.data;
    const response = NextResponse.json({ user }, { status: 200 });

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

    if (error.response?.data?.error?.message) {
      const errorMessage = error.response.data.error.message;
      const statusCode = error.response.data.error.status;

      return NextResponse.json({ error: errorMessage }, { status: statusCode });
    }

    console.error("Error Sign Up:", error);
    return NextResponse.json(
      {
        error: "An unexpected error occurred.",
      },
      {
        status: error.response?.status || 500,
      },
    );
  }
}
