import { getServerSession, Session } from 'next-auth'
import options from './authOptions'

export async function getUserSession() {
  const session: Session | null = await getServerSession(options)
  if (!session || !session.user) return null
  return {
    name: session.user.name,
    email: session.user.email,
  }
}
