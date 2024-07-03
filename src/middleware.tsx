//middleware.tsx
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookies = request.cookies.get("ca_userInfo");
//   console.log('INI COOKIES', cookies)
  // if (!cookies) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
}

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|favicon.ico|login).*)",
//   ],
// };
