'use client'
import CssBaseline from '@mui/material/CssBaseline'
import ThemeRegistry from '@/themes/ThemeRegistry'
import { SessionProvider } from 'next-auth/react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry>
          <SessionProvider>
            <CssBaseline />
            {children}
          </SessionProvider>
        </ThemeRegistry>
      </body>
    </html>
  )
}
