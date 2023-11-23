import { withAuth } from 'next-auth/middleware'

// Literal templates for `matcher` not working
// see: https://github.com/vercel/next.js/issues/56398

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|forgot-password).*)'],
}

export default withAuth({
  pages: {
    signIn: '/login', // http://localhost:3000/api/auth/signin
    //signOut: '', // http://localhost:3000/api/auth/signout
    //error: '', // http://localhost:3000/api/auth/error
    //verifyRequest: '', //  bhttp://localhost:3000/api/auth/verify-request
    //newUser: '', // http://localhost:3000/api/auth/new-user
  },
})
