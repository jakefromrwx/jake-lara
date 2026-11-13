import Image from "next/image"
import { Clock, MapPin } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/content/site"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-[minmax(22rem,32rem)_1fr]">
      <section className="flex flex-col justify-center bg-white px-6 py-10 sm:px-12 lg:px-14">
        <div className="flex items-center gap-3">
          <Image
            src="/jake.jpg"
            alt="Jake Lara"
            width={960}
            height={960}
            priority
            className="size-11 rounded-full object-cover"
          />
          <p className="text-[15px] font-medium">Jake</p>
        </div>

        <h1 className="mt-6 text-[2rem] font-semibold tracking-tight text-balance">
          {site.name}
        </h1>
        <p className="mt-2 text-[15px] text-muted-foreground">{site.title}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          <p className="inline-flex items-center gap-1.5 rounded-lg bg-muted px-2.5 py-1.5 text-sm text-muted-foreground">
            <MapPin className="size-3.5" aria-hidden />
            {site.location}
          </p>
          <p className="inline-flex items-center gap-1.5 rounded-lg bg-muted px-2.5 py-1.5 text-sm text-muted-foreground">
            <Clock className="size-3.5" aria-hidden />
            45 minutes
          </p>
        </div>

        <div className="mt-6 max-w-sm space-y-3 text-[15px] leading-relaxed text-foreground/80">
          {site.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Or email{" "}
          <a className="text-foreground underline-offset-4 hover:underline" href={site.emailHref}>
            {site.email}
          </a>
        </p>
      </section>

      <section className="flex items-center bg-[#f2f2f4] px-4 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-md rounded-[28px] bg-white p-3 shadow-[0_10px_40px_-24px_rgba(20,16,40,0.45)] sm:p-4">
          <p className="px-3 pt-2 pb-3 text-sm font-medium">Pick a place to start</p>
          <ul className="flex flex-col gap-2.5">
            {site.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-auto w-full flex-col gap-0.5 rounded-xl border-[#e7e7ea] bg-white px-4 py-3.5 font-medium whitespace-normal text-[#3a3a42] shadow-none hover:border-[#d8d8de] hover:bg-[#fafafa]",
                    link.primary && "border-primary/35",
                  )}
                >
                  <span className="text-[15px]">{link.label}</span>
                  <span className="text-xs font-normal text-muted-foreground">
                    {link.note}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
