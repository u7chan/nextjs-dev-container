import { getServerSession } from 'next-auth'
import options from './authOptions'
import { UserSession } from './UserSession'

export async function getUserSession(): Promise<UserSession | null> {
  const session = await getServerSession(options)
  if (!session) return null
  return session.user as UserSession
}
