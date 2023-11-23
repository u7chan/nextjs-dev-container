import { getServerSession } from 'next-auth'
import options, { type UserSession} from './authOptions'

export async function getUserSession(): Promise<UserSession | null> {
  const session = await getServerSession(options)
  if (!session) return null
  return session.user as UserSession
}
