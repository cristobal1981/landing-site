"use client"

import Image from "next/image"
import { FadeIn, StaggerContainer, StaggerItem, FloatingElement, ScaleIn } from "@/components/animations"
import { SectionShell } from "@/components/layout/section-shell"
import { about, images } from "@/content/site"

export function About() {
  return (
    <section
      id="nosotros"
      className="relative py-20 md:py-28 bg-gradient-to-b from-[#041d23] to-[#01635c]/40 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image src={images.about} alt="" fill className="object-cover opacity-5" />
      </div>

      <FloatingElement
        className="absolute top-1/3 right-10 w-64 h-64 bg-[#01dea2]/8 rounded-full blur-3xl"
        duration={9}
      />

      <SectionShell>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#01dea2]/10 border border-[#01dea2]/30 mb-6">
              <span className="text-xs text-[#01dea2] font-medium uppercase tracking-wide">
                {about.badge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f0f6f6] leading-tight mb-6">
              {about.title[0]}
              <br />
              <span className="text-[#01dea2]">{about.title[1]}</span>
            </h2>
            <p className="text-lg text-[#f0f6f6]/70 mb-6 leading-relaxed">
              {about.paragraphs[0]}
            </p>
            <p className="text-[#f0f6f6]/60 mb-8 leading-relaxed">{about.paragraphs[1]}</p>

            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {about.features.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-[#01dea2] group-hover:scale-150 transition-transform" />
                    <span className="text-[#f0f6f6]/80">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#052a32] to-[#01635c]/50 p-8 md:p-12">
                <StaggerContainer className="grid grid-cols-2 gap-8" staggerDelay={0.1}>
                  {about.stats.map((stat, i) => (
                    <StaggerItem key={stat.label}>
                      <ScaleIn delay={i * 0.1}>
                        <div className="text-center p-6 rounded-xl bg-[#041d23]/30 border border-[#01635c]/30 hover:border-[#01dea2]/40 transition-all duration-300 hover:scale-105">
                          <div className="text-4xl md:text-5xl font-bold text-[#01dea2] mb-2">
                            {stat.value}
                          </div>
                          <div className="text-sm text-[#f0f6f6]/70">{stat.label}</div>
                        </div>
                      </ScaleIn>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#01dea2]/30 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#01dea2]/30 rounded-br-lg" />
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionShell>
    </section>
  )
}
