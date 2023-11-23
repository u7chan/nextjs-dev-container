import type { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import crypto from 'crypto'

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  // see: https://next-auth.js.org/configuration/options#theme
  theme: {
    colorScheme: 'light', // "auto" | "dark" | "light"
    brandColor: '#ff8000', // Hex color code
    logo: '/images/next.svg', // Absolute URL to image
    buttonText: '#0000ff', // Hex color code
  },
  callbacks: {
    // Redirect if authenticated with `/api/auth/signin`
    redirect: ({ baseUrl }) => {
      return `${baseUrl}/starred`
    },
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
        if (!(credentials.email === 'test@example.com' && credentials.password === 'hoge')) return null
        const user: User = {
          id: crypto.randomUUID(),
          name: `dummy_${crypto.randomUUID()}`,
          email: 'test@example.com',
        }
        return user
      },
    }),
  ],
}

export default authOptions
