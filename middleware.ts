import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token");

  //   console.log("token", token);

  //   if (pathname.startsWith("/admin")) {
  //     // console.log("middleware called", pathname);
  //     // perbedannya rewrite dengan redirect kaalau rewrite hanya menganti tampilan , kalau redirect menganti tampilan beserta urlnya
  //     return NextResponse.rewrite(new URL("/forbidden", request.nextUrl));
  //     // return NextResponse.redirect(new URL("/forbidden", request.nextUrl));
  //   }
  //   console.log("middleware called", pathname);
  //   await new Promise((r) => setTimeout(r, 3000));
  //   return NextResponse.redirect(new URL("/home", request.url));

  if (pathname.startsWith("/admin") && !token?.value) {
    // console.log("middleware called", pathname);
    // perbedannya rewrite dengan redirect kaalau rewrite hanya menganti tampilan , kalau redirect menganti tampilan beserta urlnya
    return NextResponse.rewrite(new URL("/forbidden", request.nextUrl));
    // return NextResponse.redirect(new URL("/forbidden", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
// export const config = {
//   //   matcher: "/posts/:path*",
//   matcher: ["/posts/:path*", "/about/:path*"],
// };
