import { currentUser } from '@clerk/nextjs/server'
import { auth } from '@clerk/nextjs/server'
import { db } from './db'

export async function getProfile() {
    const { isAuthenticated, redirectToSignIn } = await auth()
    const user = await currentUser()

    if (!isAuthenticated || !user) return redirectToSignIn()
    const profile = await db.profile.findUnique({
        where: { userId: user.id },
    })
    if (profile) return profile
    const newProfile = await db.profile.create({
        data: {
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageURL: user.imageUrl,
            email: user.emailAddresses[0].emailAddress,
        },
    })
    return newProfile
}