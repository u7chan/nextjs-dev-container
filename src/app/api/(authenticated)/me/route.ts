import { NextResponse } from 'next/server'
import { getUserSession } from '@/auth/getUserSession'

export async function GET() {
  const user = await getUserSession()
  if (!user) {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
  }
  return NextResponse.json({
    name: user.name,
    email: user.email,
  })
}
