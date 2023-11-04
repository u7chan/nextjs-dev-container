import NextAuth from 'next-auth/next'
import options from '@/auth/authOptions'

const handler = NextAuth(options)
export { handler as GET, handler as POST }
