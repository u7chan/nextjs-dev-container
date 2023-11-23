'use client'
import { useEffect} from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  useEffect(() => {
    signOut()
    router.push('/login')
  }, [router])
  return <></>
}
