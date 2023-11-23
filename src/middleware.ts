import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

// issues: https://github.com/vercel/next.js/issues/56398

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|forgot-password).*)'],
}

export default withAuth({
  pages: {
    signIn: '/login', // Default signIn URL: http://localhost:3000/api/auth/signin
  },
})
