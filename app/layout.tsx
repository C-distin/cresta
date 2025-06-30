import type { Metadata } from "next"
import { montserrat } from "@/components/fonts"
import "./globals.css"

const title = "Agile Project Management"
const description =
  "A modern agile project management web app, featuring a sleek ui, sprint planning, task management, team collaboration and progress trracking"

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords:
    "agile, project, management, web, app, nextjs, react, typescript, project management, task management, sprint, kanban",
  robots: "follow, index",
  openGraph: {
    title: title,
    description: description,
    writers: "@ataa_nkpa1",
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    creator: "@ataa_nkpa1",
    site: "@ataa_nkpa1",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  )
}
