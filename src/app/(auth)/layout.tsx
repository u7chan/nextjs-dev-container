import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import options from '@/auth/authOptions'
import AdminLayout from '@/components/AdminLayout'

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(options)
  if (!session) redirect('/login')
  return <AdminLayout>{children}</AdminLayout>
}
