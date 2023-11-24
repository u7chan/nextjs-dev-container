import { PropsWithChildren } from 'react'
import AdminLayout from '@/components/AdminLayout'

export default async function Layout({ children }: PropsWithChildren) {
  return <AdminLayout>{children}</AdminLayout>
}
