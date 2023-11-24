import { redirect } from 'next/navigation'
import { getUserSession } from '@/auth/getUserSession'
import Layout from './_components/layout'

export default async function Page() {
  if (await getUserSession()) {
    redirect('/')
  }
  return <Layout />
}
