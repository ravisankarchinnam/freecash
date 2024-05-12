import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/profile"];

export default async function middleware(
  request: NextRequest
): Promise<NextResponse> {
  const { pathname } = request.nextUrl.clone();
  const cookie = request.cookies.get(process.env.TOKEN as string);
  const token = cookie?.value;

  if (!token && protectedRoutes.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
