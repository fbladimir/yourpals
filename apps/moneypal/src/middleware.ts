import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!.*\\..*|_next|welcome|sign-in|sign-up).*)",
    "/dashboard(.*)",
    "/api(.*)"
  ],
};
