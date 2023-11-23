'use client'
import ThemeRegistry from '@/themes/ThemeRegistry'
import { SessionProvider } from '@/auth/SessionProvider'

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
