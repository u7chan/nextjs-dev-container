import { withAuth } from "next-auth/middleware"

export const config = { matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"] }

export default withAuth({
    pages: {
      signIn: '/login'
    }
  })