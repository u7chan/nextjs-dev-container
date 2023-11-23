'use client'
import ThemeRegistry from '@/themes/ThemeRegistry'
import { SessionProvider } from 'next-auth/react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry>
          <SessionProvider>{children}</SessionProvider>
        </ThemeRegistry>
      </body>
    </html>
  )
}
