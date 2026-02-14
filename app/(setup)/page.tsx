import { db } from '@/lib/db'
import { getProfile } from '@/lib/profile'
import { redirect } from 'next/navigation'
import { UserButton, SignOutButton } from '@clerk/nextjs'

const SetupPage = async () => {
  const profile = await getProfile()
  const server = await db.server.findFirst({
    where: {
      Members: {
        some: {
          profileId: profile.id,
        }
      }
    }
  })

  if (server) {
    return redirect(`/servers/${server.id}`)
  }

  return (
    <>
    <div>Create a Server</div>
    <div>
      <UserButton />
      <SignOutButton />
    </div>
    </>
  )
}

export default SetupPage