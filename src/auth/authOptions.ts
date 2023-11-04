import type { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import crypto from 'crypto'
import { UserSession } from './UserSession'

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, _req) {
        if (!credentials?.email || !credentials?.password) return null
        const isLoggedIn = credentials.email === 'test' && credentials.password === 'hoge' // dummy auth
        if (!isLoggedIn) return null
        const user: UserSession = {
          id: crypto.randomUUID(),
          companyId: crypto.randomUUID(),
          name: 'dummy dummy',
          email: 'dummy@example.com',
        }
        return user
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (user) {
        token.user = user
        token.id = user.id
      }
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    session: ({ session, token }) => {
      const tokenInUser = token.user as UserSession
      const newSession = {
        ...session,
        user: {
          ...tokenInUser,
          ...session.user,
        },
      }
      return newSession
    },
  },
}

export default authOptions
