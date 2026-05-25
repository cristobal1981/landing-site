"use client"

import Image from "next/image"
import { FadeIn, StaggerContainer, StaggerItem, FloatingElement, ScaleIn } from "@/components/animations"
import { SectionShell } from "@/components/layout/section-shell"
import { about, images } from "@/content/site"

export function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-section-dark py-20 md:py-28">
      <div className="absolute inset-0 z-0">
        <Image src={images.about} alt="" fill className="object-cover opacity-5" />
      </div>

      <FloatingElement
        className="absolute top-1/3 right-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        duration={9}
      />

      <SectionShell>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            <div className="badge-on-dark mb-6">
              <span className="badge-label-on-dark">{about.badge}</span>
            </div>
            <h2 className="mb-6 text-3xl leading-[1.2] font-bold text-on-dark sm:text-4xl lg:text-5xl">
              {about.title[0]}
              <br />
              <span className="text-turquesa">{about.title[1]}</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-on-dark">
              {about.paragraphs[0]}
            </p>
            <p className="mb-8 leading-relaxed text-muted-on-dark">{about.paragraphs[1]}</p>

            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {about.features.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="group flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-turquesa transition-transform group-hover:scale-150" />
                    <span className="text-on-dark/90">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-card to-agua/50 p-8 md:p-12">
                <StaggerContainer className="grid grid-cols-2 gap-8" staggerDelay={0.1}>
                  {about.stats.map((stat, i) => (
                    <StaggerItem key={stat.label}>
                      <ScaleIn delay={i * 0.1}>
                        <div className="rounded-xl border border-agua/30 bg-surface-dark/30 p-6 text-center transition-all duration-300 hover:scale-105 hover:border-turquesa/40">
                          <div className="mb-2 text-4xl font-bold text-turquesa md:text-5xl">
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-on-dark">{stat.label}</div>
                        </div>
                      </ScaleIn>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <div className="absolute top-4 left-4 h-12 w-12 rounded-tl-lg border-t-2 border-l-2 border-turquesa/30" />
                <div className="absolute right-4 bottom-4 h-12 w-12 rounded-br-lg border-r-2 border-b-2 border-turquesa/30" />
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionShell>
    </section>
  )
}
