"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, ArrowRight, Clock } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem, FloatingElement } from "@/components/animations"
import { SectionShell } from "@/components/layout/section-shell"
import { contact, images, site } from "@/content/site"

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    content: site.phone.display,
    action: site.phone.href,
  },
  {
    icon: Mail,
    title: "Email",
    content: site.email,
    action: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    title: "Oficina",
    content: site.location,
    action: "#",
  },
]

export function Contact() {
  return (
    <section id="contacto" className="relative py-20 md:py-28 bg-[#f0f6f6] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={images.contact} alt="" fill className="object-cover opacity-5" />
      </div>

      <FloatingElement
        className="absolute top-20 right-20 w-96 h-96 bg-[#01dea2]/10 rounded-full blur-3xl"
        duration={12}
      />

      <SectionShell>
        <FadeIn className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#041d23]/10 border border-[#041d23]/20 mb-6">
            <span className="text-xs text-[#041d23] font-medium uppercase tracking-wide">
              {contact.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041d23] leading-tight mb-6">
            {contact.title[0]}
            <br />
            <span className="text-[#041d23]/50">{contact.title[1]}</span>
          </h2>
          <p className="text-lg text-[#041d23]/70 leading-relaxed">{contact.subtitle}</p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          <FadeIn direction="left">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#041d23] to-[#01635c]/80 border border-[#01635c]/30 shadow-2xl shadow-[#041d23]/20">
              <h3 className="text-xl font-semibold text-[#f0f6f6] mb-6">{contact.formTitle}</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[#f0f6f6]/80">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      className="bg-[#f0f6f6]/10 border-[#01635c]/30 focus:border-[#01dea2] text-[#f0f6f6] placeholder:text-[#f0f6f6]/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-[#f0f6f6]/80">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+34 600 000 000"
                      className="bg-[#f0f6f6]/10 border-[#01635c]/30 focus:border-[#01dea2] text-[#f0f6f6] placeholder:text-[#f0f6f6]/40"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#f0f6f6]/80">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-[#f0f6f6]/10 border-[#01635c]/30 focus:border-[#01dea2] text-[#f0f6f6] placeholder:text-[#f0f6f6]/40"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-[#f0f6f6]/80">
                    ¿En qué podemos ayudarte?
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntanos brevemente tu situación..."
                    rows={4}
                    className="bg-[#f0f6f6]/10 border-[#01635c]/30 focus:border-[#01dea2] text-[#f0f6f6] placeholder:text-[#f0f6f6]/40 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#01dea2] hover:bg-[#01dea2]/90 text-[#041d23] font-semibold transition-transform hover:scale-[1.02]"
                >
                  Enviar consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-[#f0f6f6]/50 text-center">{contact.privacyNote}</p>
              </form>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col justify-center h-full">
              <div className="rounded-2xl bg-white border border-[#041d23]/10 shadow-xl shadow-[#041d23]/5 overflow-hidden">
                <div className="px-6 py-5 border-b border-[#041d23]/10">
                  <h3 className="text-lg font-semibold text-[#041d23]">Datos de contacto</h3>
                  <p className="text-sm text-[#041d23]/60 mt-1">
                    Respuesta en menos de 24 horas laborables
                  </p>
                </div>

                <StaggerContainer staggerDelay={0.08}>
                  {contactInfo.map((info, index) => (
                    <StaggerItem key={info.title}>
                      <a
                        href={info.action}
                        className={`flex items-center gap-4 px-6 py-5 transition-colors duration-200 group hover:bg-[#01dea2]/5 ${
                          index < contactInfo.length - 1 ? "border-b border-[#041d23]/8" : ""
                        }`}
                      >
                        <div className="w-11 h-11 rounded-xl bg-[#01dea2]/15 flex items-center justify-center shrink-0 group-hover:bg-[#01dea2]/25 transition-colors">
                          <info.icon className="h-5 w-5 text-[#01635c]" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-medium uppercase tracking-wide text-[#041d23]/50 mb-0.5">
                            {info.title}
                          </div>
                          <div className="font-medium text-[#041d23] group-hover:text-[#01635c] transition-colors truncate">
                            {info.content}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-[#01dea2] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0 ml-auto" />
                      </a>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <div className="px-6 py-5 bg-[#041d23]/[0.03] border-t border-[#041d23]/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#01dea2]/15 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-[#01635c]" />
                    </div>
                    <h4 className="font-semibold text-[#041d23]">Horario de atención</h4>
                  </div>
                  <div className="space-y-2 text-sm pl-[52px]">
                    <div className="flex justify-between text-[#041d23]/70 gap-4">
                      <span>Lunes - Viernes</span>
                      <span className="text-[#041d23] font-medium text-right">{site.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between text-[#041d23]/70">
                      <span>Sábados y Domingos</span>
                      <span className="text-[#041d23]/50">{site.hours.weekend}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionShell>
    </section>
  )
}
