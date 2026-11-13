import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/content/site"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)] lg:items-end">
          <div>
            <p className="text-sm tracking-[0.18em] text-copper uppercase">
              {site.location}
            </p>
            <h1 className="mt-4 max-w-xl font-heading text-[2.6rem] leading-[1.05] text-balance sm:text-6xl">
              {site.hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {site.hero.sub}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className={cn(buttonVariants({ size: "lg" }), "h-12 px-5 text-base")} href="#contact">
                Book a conversation
              </a>
              <a
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-5 text-base")}
                href="#work"
              >
                See the work
              </a>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_20px_50px_-32px_rgba(40,32,20,0.45)]">
            <Ridge />
            <p className="relative font-heading text-2xl leading-snug">{site.name}</p>
            <p className="relative mt-2 text-sm text-muted-foreground">
              {site.title}
              <span className="mx-2 text-border">/</span>
              {site.role}
            </p>
            <dl className="relative mt-8 grid gap-4 text-sm">
              <div>
                <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Based in</dt>
                <dd className="mt-1">{site.location}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Practice</dt>
                <dd className="mt-1">Human-centered systems for public agencies and local businesses</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="font-heading text-2xl leading-snug text-balance sm:text-3xl">
              {site.problem}
            </p>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.18em] text-copper uppercase">The work</p>
            <h2 className="mt-3 font-heading text-4xl leading-tight text-balance">
              Build the system around the organization.
            </h2>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {site.practices.map((item, index) => (
              <li key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-heading text-sm text-copper">0{index + 1}</p>
                <h3 className="mt-3 font-heading text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ul>

          <article className="mt-6 grid gap-8 rounded-3xl bg-secondary p-6 sm:p-10 lg:grid-cols-[16rem_1fr] lg:items-center">
            <div>
              <p className="text-sm tracking-[0.16em] text-copper uppercase">{site.engagement.kicker}</p>
              <h3 className="mt-3 font-heading text-3xl leading-tight">{site.engagement.org}</h3>
            </div>
            <p className="text-base leading-relaxed text-foreground/80">{site.engagement.body}</p>
          </article>

          <div className="mt-10">
            <p className="text-sm text-muted-foreground">Organizations I work with</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.audiences.map((audience) => (
                <li
                  key={audience}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm"
                >
                  {audience}
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {site.audienceNote}
            </p>
          </div>
        </section>

        <section id="approach" className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <div className="max-w-2xl">
              <p className="text-sm tracking-[0.18em] text-copper uppercase">Approach</p>
              <h2 className="mt-3 font-heading text-4xl leading-tight">Hands-off or hands-on.</h2>
              <p className="mt-4 text-muted-foreground">
                Some teams want a workspace they can shape themselves. Others want a full implementation: we map the work, build it with their key people, and stay through go-live.
              </p>
            </div>
            <ol className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
              {site.steps.map((step, index) => (
                <li key={step.name} className="bg-card p-5">
                  <p className="font-heading text-sm text-copper">0{index + 1}</p>
                  <h3 className="mt-3 font-heading text-2xl">{step.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_18rem]">
          <div>
            <p className="text-sm tracking-[0.18em] text-copper uppercase">About</p>
            <h2 className="mt-3 font-heading text-4xl leading-tight">
              Built by someone who stays for the adoption.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/85">
              {site.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <ul className="flex flex-col gap-4">
            {site.values.map((value) => (
              <li key={value.title} className="rounded-2xl border border-border p-5">
                <h3 className="font-heading text-xl">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="px-5 pb-20 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-heading text-4xl leading-tight text-balance">{site.contact.heading}</h2>
              <p className="mt-4 text-primary-foreground/80">{site.contact.body}</p>
            </div>
            <a
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "h-12 bg-primary-foreground px-5 text-base text-primary hover:bg-primary-foreground/90",
              )}
              href={site.emailHref}
            >
              Email {site.email}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

function Ridge() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -top-6 right-0 h-40 w-56 text-primary/15"
      viewBox="0 0 240 140"
      fill="none"
    >
      <path
        d="M0 110 C40 90 50 40 90 48 C130 56 140 100 180 78 C210 62 220 30 240 22"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M0 124 C48 108 70 70 112 78 C154 86 168 118 208 100 C224 92 232 70 240 64"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M20 28 C60 20 78 52 118 40 C150 30 170 8 210 16"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}
