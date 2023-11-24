// NOTE: middleware.ts で withAuth を定義する場合は default はエクスポートしない
export { default } from 'next-auth/middleware'

//import { NextResponse } from 'next/server'
//import { withAuth } from 'next-auth/middleware'

// Literal templates for `matcher` not working
// see: https://github.com/vercel/next.js/issues/56398

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico|login|forgot-password).*)'],
}

// NOTE: withAuth で signIn ページを定義した場合、matcher にパスを含めなくても良い
//
// export default withAuth({
//   pages: {
//     signIn: '/login',
//   },
// })

// NOTE: middleware と withAuth を併用する場合
//
// export async function middleware(request: Request) {
//   console.log('# middleware: ', request.url)
//   return withAuth(request as NextRequestWithAuth)
// }
