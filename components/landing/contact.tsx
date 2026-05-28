"use client"

import { useRef } from "react"
import { Button, marketingCtaBaseClassName, marketingCtaVariantClassName } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, ArrowRight, Clock, LinkedinIcon, InstagramIcon, Sparkles } from "lucide-react"
import { FadeIn } from "@/components/animations"
import { FaqSection } from "@/components/landing/faq-section"
import { SectionShell } from "@/components/layout/section-shell"
import { contact, faqContact, site } from "@/content/site"
import { cn } from "@/lib/utils"

const socialIcons = {
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
} as const

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} id="contacto" className="relative overflow-x-hidden bg-brisa py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_12%_14%,rgba(1,222,162,0.24),transparent_32%),radial-gradient(circle_at_86%_20%,rgba(1,99,92,0.15),transparent_30%),radial-gradient(circle_at_72%_88%,rgba(43,192,169,0.18),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.92),rgba(214,242,232,0.95))]"
      />
      <div aria-hidden className="pointer-events-none absolute -top-24 right-12 h-60 w-60 rotate-12 rounded-[2rem] border border-agua/20 bg-white/55" />
      <div aria-hidden className="pointer-events-none absolute top-1/3 -left-16 h-44 w-44 rounded-full border border-primary/35 bg-primary/10" />
      <div aria-hidden className="pointer-events-none absolute bottom-12 right-1/3 h-24 w-24 rotate-45 border border-agua/30 bg-white/70" />

      <SectionShell>
        <FadeIn className="mx-auto mb-14 max-w-3xl text-center">
          <div className="badge-on-light mb-6">
            <span className="badge-label-on-light">{contact.badge}</span>
          </div>
          <h2 className="mb-5 text-3xl leading-[1.15] font-bold text-on-light sm:text-4xl lg:text-5xl">
            {contact.title[0]}
            <br />
            <span className="text-on-light-muted">{contact.title[1]}</span>
          </h2>
          <p className="prose-width mx-auto text-lg leading-relaxed text-muted-on-light">
            {contact.subtitle}
          </p>
        </FadeIn>

        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="overflow-hidden rounded-3xl border border-agua/25 bg-white/90 shadow-xl shadow-agua/10 backdrop-blur-sm">
              <div className="grid gap-0 lg:grid-cols-12">
                <div className="relative border-b border-agua/20 bg-surface-dark p-6 sm:p-8 lg:col-span-7 lg:border-r lg:border-b-0 lg:p-9">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-20 right-6 h-52 w-52 rounded-full bg-primary/20 blur-3xl"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute bottom-8 left-10 h-36 w-36 rounded-full bg-turquesa/18 blur-3xl"
                  />
                  <div className="mb-7 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-on-dark">{contact.formTitle}</h3>
                      <p className="mt-2 text-sm text-muted-on-dark">
                        Cuéntanos tu caso. Te respondemos con propuesta clara en menos de 24h laborables.
                      </p>
                    </div>
                  </div>

                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-on-dark/95">
                          Nombre
                        </label>
                        <Input id="name" name="name" placeholder="Tu nombre" className="input-on-dark" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-on-dark/95">
                          Teléfono
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+34 600 000 000"
                          className="input-on-dark"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-on-dark/95">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="input-on-dark"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-on-dark/95">
                        ¿En qué podemos ayudarte?
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Cuéntanos brevemente tu situación..."
                        rows={4}
                        className="input-on-dark resize-none overflow-hidden"
                        onInput={(event) => {
                          const target = event.currentTarget
                          target.style.height = "auto"
                          target.style.height = `${target.scrollHeight}px`
                        }}
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className={cn(
                        "w-full",
                        marketingCtaBaseClassName,
                        marketingCtaVariantClassName.primary
                      )}
                    >
                      Enviar consulta
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-center text-xs text-muted-on-dark">{contact.privacyNote}</p>
                  </form>

                  <div className="mt-6 rounded-xl border border-agua/35 bg-on-dark/8 px-4 py-3 text-center text-sm text-muted-on-dark motion-safe:animate-pulse [animation-duration:4.8s]">
                    ¿Tienes dudas antes de enviar? Mira las preguntas frecuentes justo debajo.
                  </div>
                </div>
                <div className="relative bg-surface-dark p-6 sm:p-8 lg:col-span-5">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-14 -left-4 h-44 w-44 rounded-full bg-primary/16 blur-3xl"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute bottom-6 right-6 h-32 w-32 rounded-full bg-turquesa/14 blur-3xl"
                  />
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-on-dark">Canales directos</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl border border-agua/30 bg-on-dark/8 p-4">
                      <p className="mb-1 flex items-center gap-2 text-xs font-semibold tracking-wide text-muted-on-dark uppercase">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/25">
                          <Phone className="h-4 w-4 text-primary motion-safe:animate-pulse" />
                        </span>
                        Teléfono
                      </p>
                      <p className="text-sm font-semibold text-on-dark">{site.phone.display}</p>
                    </div>
                    <div className="rounded-xl border border-agua/30 bg-on-dark/8 p-4">
                      <p className="mb-1 flex items-center gap-2 text-xs font-semibold tracking-wide text-muted-on-dark uppercase">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/25">
                          <Mail className="h-4 w-4 text-primary motion-safe:animate-pulse" />
                        </span>
                        Email
                      </p>
                      <p className="text-sm font-semibold text-on-dark">{site.email}</p>
                    </div>
                    <div className="rounded-xl border border-agua/30 bg-on-dark/8 p-4">
                      <p className="mb-1 flex items-center gap-2 text-xs font-semibold tracking-wide text-muted-on-dark uppercase">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/25">
                          <MapPin className="h-4 w-4 text-primary motion-safe:animate-pulse" />
                        </span>
                        Oficina
                      </p>
                      <p className="text-sm font-semibold text-on-dark">
                        C/ El Toscal, 29, 1º pta 7, Los Realejos (Tenerife)
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-xs text-muted-on-dark">
                        <Clock className="h-3.5 w-3.5 text-accent-on-light" />
                        <span>Lunes a Viernes · {site.hours.weekdays}</span>
                      </div>
                      <div className="mt-1 text-xs text-muted-on-dark">
                        Puede variar por festivos y dias especiales.
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl border border-primary/35 bg-primary/14 p-4">
                    <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold tracking-wide text-on-dark uppercase">
                      <Sparkles className="h-4 w-4 text-primary" />
                      Siguenos
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {contact.socials
                        .filter((social) => social.label === "LinkedIn" || social.label === "Instagram")
                        .map((social) => {
                          const Icon = socialIcons[social.label as keyof typeof socialIcons]
                          if (!Icon) return null

                          return (
                            <a
                              key={social.label}
                              href={social.href}
                              target="_blank"
                              rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-agua/35 bg-on-dark/10 px-3 py-1.5 text-xs font-semibold text-on-dark transition-all hover:-translate-y-0.5 hover:border-primary/45 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-on-light/40"
                              aria-label={social.label}
                            >
                              <Icon className="h-3.5 w-3.5" />
                              <span>{social.label}</span>
                            </a>
                          )
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-8">
            <div className="rounded-3xl border border-agua/20 bg-white/85 p-6 shadow-lg shadow-agua/8 md:p-8">
              <div className="mb-6 text-center">
                <p className="text-xs font-semibold tracking-[0.18em] text-on-light-muted uppercase">
                  Resuelve dudas comunes
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-on-light">Preguntas frecuentes</h3>
              </div>
              <FaqSection
                embedded
                compact
                items={faqContact.items}
                className="mx-auto max-w-none"
              />
            </div>
          </FadeIn>
        </div>
      </SectionShell>
    </section>
  )
}
