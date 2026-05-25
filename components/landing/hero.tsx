"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Users } from "lucide-react"
import { FadeIn, FloatingElement, StaggerContainer, StaggerItem } from "@/components/animations"
import { SectionShell } from "@/components/layout/section-shell"
import { hero, images } from "@/content/site"

const trustIcons = [Users, Clock, Shield]

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#041d23] via-[#052a32] to-[#01635c]">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero}
          alt=""
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <FloatingElement
        className="absolute top-20 right-10 w-96 h-96 bg-[#01dea2]/10 rounded-full blur-3xl"
        duration={8}
      />
      <FloatingElement
        className="absolute bottom-0 left-0 w-80 h-80 bg-[#01635c]/40 rounded-full blur-3xl"
        duration={10}
        delay={2}
      />
      <FloatingElement
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#01dea2]/5 rounded-full blur-2xl"
        duration={12}
        delay={4}
      />

      <SectionShell innerClassName="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#01dea2]/10 border border-[#01dea2]/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#01dea2] animate-pulse" />
              <span className="text-[#01dea2] text-sm font-medium">{hero.badge}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f0f6f6] leading-tight mb-6 text-balance">
              {hero.title.before}{" "}
              <span className="text-[#01dea2]">{hero.title.highlight1}</span>{" "}
              {hero.title.middle}{" "}
              <span className="text-[#01dea2]">{hero.title.highlight2}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-[#f0f6f6]/70 max-w-2xl mx-auto mb-10 text-pretty">
              {hero.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-[#01dea2] text-[#041d23] hover:bg-[#01dea2]/90 font-semibold text-base px-8 transition-transform hover:scale-105"
              >
                <Link href="#contacto">
                  {hero.ctaPrimary}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#f0f6f6]/30 text-[#f0f6f6] hover:bg-[#f0f6f6]/10 font-semibold text-base px-8 transition-transform hover:scale-105"
              >
                <Link href="#servicios">{hero.ctaSecondary}</Link>
              </Button>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            staggerDelay={0.15}
          >
            {hero.trust.map((item, index) => {
              const Icon = trustIcons[index]
              return (
                <StaggerItem key={item.title}>
                  <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[#041d23]/50 border border-[#01635c]/30 backdrop-blur-sm hover:border-[#01dea2]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#01dea2]/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#01dea2]" />
                    </div>
                    <div className="text-left">
                      <p className="text-[#f0f6f6] font-bold">{item.title}</p>
                      <p className="text-[#f0f6f6]/60 text-sm">{item.subtitle}</p>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </SectionShell>
    </section>
  )
}
