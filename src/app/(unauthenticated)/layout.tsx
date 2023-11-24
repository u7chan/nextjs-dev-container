import { PropsWithChildren } from 'react'
import { redirect } from 'next/navigation'
import { getUserSession } from '@/auth/getUserSession'

export default async function Layout({ children }: PropsWithChildren) {
  if (await getUserSession()) {
    redirect('/')
  }
  return <>{children}</>
}
