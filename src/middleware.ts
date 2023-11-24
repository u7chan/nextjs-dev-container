//import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

// Literal templates for `matcher` not working
// see: https://github.com/vercel/next.js/issues/56398

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico|forgot-password).*)'],
}

export default withAuth({
  pages: {
    signIn: '/login',
  },
})

// NOTE: middleware と withAuth を併用する場合
//
// export async function middleware(request: Request) {
//   console.log('# middleware: ', request.url)
//   return withAuth(request as NextRequestWithAuth)
// }
