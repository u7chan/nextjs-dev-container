import * as React from 'react'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth/authOptions'
import AdminLayout from '@/components/AdminLayout'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/signin')
  return <AdminLayout>{children}</AdminLayout>
}
