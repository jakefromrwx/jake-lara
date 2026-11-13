import type { Metadata } from "next"
import "@fontsource-variable/inter/wght.css"
import "./globals.css"

const description =
  "Jake Lara, founder of Reworx in Lander, Wyoming. A short intro and the links to book a time, read, or get in touch."

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
