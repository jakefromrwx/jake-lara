"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { site } from "@/content/site"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
          <span className="grid size-9 place-items-center rounded-full bg-primary font-heading text-sm text-primary-foreground">
            JL
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-base text-foreground">{site.name}</span>
            <span className="block text-xs tracking-wide text-muted-foreground">{site.role}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a className={cn(buttonVariants({ size: "lg" }), "h-10 px-4")} href={site.emailHref}>
            Book a conversation
          </a>
        </nav>

        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </Button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-border px-5 py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-base hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                className={cn(buttonVariants({ size: "lg" }), "h-11 w-full")}
                href={site.emailHref}
                onClick={() => setOpen(false)}
              >
                Book a conversation
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
