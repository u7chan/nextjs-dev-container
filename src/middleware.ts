import { withAuth } from 'next-auth/middleware'

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|forgot-password).*)'],
}

export default withAuth({
  pages: {
    signIn: '/login',
  },
})
