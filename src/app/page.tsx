import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/content/site"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-12 sm:py-16">
      <header className="flex flex-col items-center text-center">
        <Image
          src="/jake.jpg"
          alt="Jake Lara"
          width={960}
          height={960}
          priority
          className="size-28 rounded-full object-cover ring-4 ring-card"
        />
        <h1 className="mt-5 font-heading text-4xl tracking-tight">{site.name}</h1>
        <p className="mt-2 text-sm tracking-wide text-muted-foreground">{site.title}</p>
        <p className="mt-1 text-sm text-copper">{site.location}</p>
      </header>

      <div className="mt-8 space-y-3 text-center text-base leading-relaxed text-foreground/85">
        {site.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        {site.socials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
          >
            {social.icon === "linkedin" ? <LinkedInIcon /> : <XIcon />}
          </a>
        ))}
      </div>

      <ul className="mt-4 flex flex-col gap-3">
        {site.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className={cn(
                buttonVariants({
                  variant: link.primary ? "default" : "outline",
                  size: "lg",
                }),
                "h-auto w-full flex-col gap-0.5 px-4 py-3 whitespace-normal",
                link.primary ? "hover:bg-primary/90" : "bg-card hover:bg-muted",
              )}
            >
              <span className="text-base">{link.label}</span>
              <span
                className={cn(
                  "text-xs font-normal",
                  link.primary ? "text-primary-foreground/75" : "text-muted-foreground",
                )}
              >
                {link.note}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-[18px]" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.13 20.45H3.55V9h3.58v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.23 0z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-[16px]" fill="currentColor">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-4.71-6.23-5.4 6.23H2.74l7.73-8.84L1.25 2.25h6.83l4.26 5.62 5.9-5.62zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
    </svg>
  )
}
