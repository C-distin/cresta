import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { db } from "@/db"
import * as schema from "@/db/schema"
import argon2 from "argon2"
import { nextCookies } from "better-auth/next-js"

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),

  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: false,
    password: {
      hash: async (password: string) => {
        return await argon2.hash(password)
      },

      verify: async ({ hash, password }: { hash: string; password: string }) => {
        return await argon2.verify(hash, password)
      },
    },

    user: {
      deleteUser: {
        enabled: true,
      },
      additionalFields: {
        role: {
          type: "string",
          required: true,
          defaultValue: "user",
          input: false,
        },
        username: {
          type: "string",
          required: true,
          input: true,
        },
      },
    },

    rateLimit: {
      enabled: true,
      storage: "database",
      modelName: "RateLimit",
    },

    session: {
      expiresIn: 60 * 60 * 24 * 7, // 7 days
      updateAge: 60 * 60 * 24, // 1 day
    },

    plugins: [nextCookies()],
  })
