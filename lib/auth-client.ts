import { createAuthClient } from "better-auth/react"

const bassUrl = process.env.BETTER_AUTH_URL

export const authClient = createAuthClient({
  baseURL: bassUrl,
})

export const { signIn, signUp, signOut, getSession, useSession } = authClient
