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

      <ul className="mt-8 flex flex-col gap-3">
        {site.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
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

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Or email{" "}
        <a className="underline underline-offset-4 hover:text-foreground" href={site.emailHref}>
          {site.email}
        </a>
      </p>
    </main>
  )
}
