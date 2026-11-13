import { site } from "@/content/site"

const links = [
  { href: site.emailHref, label: "Email" },
  { href: site.linkedin, label: "LinkedIn" },
  { href: site.github, label: "GitHub" },
  { href: site.reworx, label: "Reworx" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-heading text-xl">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {site.role} · {site.location}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
