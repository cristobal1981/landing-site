import Link from "next/link"
import { FadeIn } from "@/components/animations"
import { SectionShell } from "@/components/layout/section-shell"
import { logoMarquee } from "@/content/site"

export function LogoMarquee() {
  const logos = [...logoMarquee.items, ...logoMarquee.items, ...logoMarquee.items]

  return (
    <section className="relative overflow-hidden border-y border-agua/30 bg-background py-12 md:py-16">
      <SectionShell>
        <FadeIn className="mb-8 text-center">
          <div className="badge-on-dark mb-4">
            <span className="badge-label-on-dark">{logoMarquee.badge}</span>
          </div>
          <p className="text-lg font-medium text-muted-on-dark">{logoMarquee.title}</p>
        </FadeIn>

        <div className="logo-marquee-mask">
          <ul className="logo-marquee-track" aria-label="Empresas con las que trabajamos">
            {logos.map((logo, index) => {
              const key = `${logo.name}-${index}`
              const logoImage = (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={56}
                  loading="lazy"
                  className="h-10 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-12"
                />
              )

              return (
                <li key={key} className="logo-marquee-item">
                  {logo.href ? (
                    <Link href={logo.href} aria-label={logo.name} target="_blank" rel="noreferrer">
                      {logoImage}
                    </Link>
                  ) : (
                    logoImage
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </SectionShell>
    </section>
  )
}
