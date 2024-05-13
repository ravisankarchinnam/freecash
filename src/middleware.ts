import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/profile", "/earn/(.*)"];
const pathsRegex = protectedRoutes.map((path) => new RegExp(path));

export default async function middleware(
  request: NextRequest
): Promise<NextResponse> {
  const { pathname } = request.nextUrl.clone();
  const cookie = request.cookies.get(process.env.TOKEN as string);
  const token = cookie?.value;
  const matches = pathsRegex.some((regex) => regex.test(pathname));

  if (!token && matches) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
