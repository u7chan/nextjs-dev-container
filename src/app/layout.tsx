import * as React from 'react'
import ThemeRegistry from '@/themes/ThemeRegistry'
import AdminLayout from '@/components/AdminLayout'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isloggedIn = true // TODO: auth check
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry>{isloggedIn ? <AdminLayout>{children}</AdminLayout> : <>{children}</>}</ThemeRegistry>
      </body>
    </html>
  )
}
