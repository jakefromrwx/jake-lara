import type { Metadata } from "next"
import Link from "next/link"
import { post } from "@/content/post"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: `${post.title} | ${site.name}`,
  description: post.description,
  openGraph: {
    title: post.title,
    description: post.description,
    type: "article",
    locale: "en_US",
  },
}

export default function PostPage() {
  return (
    <main className="mx-auto w-full max-w-xl px-5 py-10 sm:py-16">
      <Link
        href="/"
        className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
      >
        {site.name}
      </Link>
      <h1 className="mt-6 font-heading text-4xl leading-tight tracking-tight text-balance">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-copper">{site.location}</p>

      <article className="mt-8 space-y-5 text-base leading-relaxed text-foreground/90">
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {post.sections.map((section) => (
          <section key={section.heading} className="space-y-4 pt-3">
            <h2 className="font-heading text-2xl tracking-tight">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {"steps" in section ? (
              <ol className="list-decimal space-y-3 pl-5">
                {section.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            ) : null}
          </section>
        ))}
      </article>

      <p className="mt-10">
        <a
          href={site.links[0].href}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-foreground underline underline-offset-4"
        >
          Book a time
        </a>
      </p>
    </main>
  )
}
