import type { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import crypto from 'crypto'

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
        if (!(credentials.email === 'test' && credentials.password === 'hoge')) return null
        const user: User = {
          id: crypto.randomUUID(),
          name: 'dummy dummy',
          email: 'dummy@example.com',
        }
        return user
      },
    }),
  ],
}

export default authOptions
