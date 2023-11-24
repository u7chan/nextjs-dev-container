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

// NOTE: middleware メソッドを定義すると next-auth の　middleware（認証）が機能しなくなる
//
// export function middleware(request: Request) {
//   console.log('# middleware: ', request.url)
//   NextResponse.next()
// }
