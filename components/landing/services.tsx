"use client"

import { Calculator, FileText, Users, Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FadeIn, StaggerContainer, StaggerItem, FloatingElement } from "@/components/animations"
import { SectionShell } from "@/components/layout/section-shell"
import { images, services } from "@/content/site"

const serviceIcons = [Calculator, FileText, Users, Briefcase]

export function Services() {
  return (
    <section
      id="servicios"
      className="relative py-20 md:py-28 bg-gradient-to-b from-[#01635c]/20 via-[#041d23] to-[#041d23] overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image src={images.services} alt="" fill className="object-cover opacity-5" />
      </div>

      <FloatingElement
        className="absolute top-1/4 right-0 w-72 h-72 bg-[#01dea2]/5 rounded-full blur-3xl"
        duration={10}
      />
      <FloatingElement
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#01635c]/20 rounded-full blur-3xl"
        duration={12}
        delay={3}
      />

      <SectionShell>
        <FadeIn className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#01dea2]/10 border border-[#01dea2]/30 mb-6">
            <span className="text-xs text-[#01dea2] font-medium uppercase tracking-wide">
              {services.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f0f6f6] leading-tight mb-6">
            {services.title[0]}
            <br />
            <span className="text-[#f0f6f6]/50">{services.title[1]}</span>
          </h2>
          <p className="text-lg text-[#f0f6f6]/70 leading-relaxed">{services.subtitle}</p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {services.items.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <StaggerItem key={service.title}>
                <div className="group h-full p-8 rounded-2xl bg-gradient-to-br from-[#052a32] to-[#01635c]/20 border border-[#01635c]/30 hover:border-[#01dea2]/50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-[#01dea2]/5">
                  <div className="w-12 h-12 rounded-xl bg-[#01dea2]/20 flex items-center justify-center mb-6 group-hover:bg-[#01dea2]/30 group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-6 w-6 text-[#01dea2]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#f0f6f6] mb-3">{service.title}</h3>
                  <p className="text-[#f0f6f6]/60 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-[#f0f6f6]/70"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#01dea2]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#01dea2] hover:text-[#01dea2]/80 transition-colors group-hover:gap-3"
                  >
                    Más información
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </SectionShell>
    </section>
  )
}
