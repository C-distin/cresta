import { defineConfig } from "drizzle-kit"

const url = process.env.DATABASE_URL as string

export default defineConfig({
  out: "./db/drizzle/migrations",
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: url,
  },
})
