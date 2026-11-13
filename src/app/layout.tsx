import type { Metadata } from "next"
import "@fontsource-variable/newsreader/wght.css"
import "@fontsource-variable/source-sans-3/wght.css"
import "./globals.css"

const description =
  "Jake Lara, founder of Reworx in Lander, Wyoming. A short intro, a note on digital transformation, and a link to book a time."

export const metadata: Metadata = {
  title: "Jake Lara",
  description,
  openGraph: {
    title: "Jake Lara",
    description,
    type: "profile",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
