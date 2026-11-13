import type { Metadata } from "next"
import "@fontsource-variable/newsreader/wght.css"
import "@fontsource-variable/source-sans-3/wght.css"
import "./globals.css"
import { site } from "@/content/site"

const description =
  "Jake Lara is the founder of Reworx in Lander, Wyoming. He helps organizations replace paper and scattered tools with systems their teams will actually use."

export const metadata: Metadata = {
  title: "Jake Lara | Systems people actually use",
  description,
  openGraph: {
    title: "Jake Lara | Systems people actually use",
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Jake Lara | Systems people actually use",
    description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    email: site.email,
    url: site.linkedin,
    homeLocation: site.location,
    worksFor: {
      "@type": "Organization",
      name: "Reworx",
      url: site.reworx,
    },
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
        {children}
      </body>
    </html>
  )
}
