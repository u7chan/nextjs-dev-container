import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
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
      async authorize(credentials, req) {
        console.log('#authorize', { credentials, req })
        const user = {
          id: 'dummy',
          email: 'dummy@example.com',
        }
        return user
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      console.log('#callbacks.jst', { token, user, account })
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
      console.log('#callbacks.session', { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      }
    },
  },
}
