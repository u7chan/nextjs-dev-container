'use client'
import * as React from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  React.useEffect(() => {
    signOut()
    router.push('/signin')
  }, [router])
  return <></>
}
