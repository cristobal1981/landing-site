"use client"

import { Star, Quote } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem, FloatingElement } from "@/components/animations"
import { SectionShell } from "@/components/layout/section-shell"
import { testimonials } from "@/content/site"

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative py-20 md:py-28 bg-gradient-to-b from-[#01635c]/40 via-[#041d23] to-[#041d23] overflow-hidden"
    >
      <FloatingElement
        className="absolute top-20 left-10 w-48 h-48 bg-[#01dea2]/5 rounded-full blur-3xl"
        duration={11}
      />
      <FloatingElement
        className="absolute bottom-20 right-10 w-64 h-64 bg-[#01635c]/30 rounded-full blur-3xl"
        duration={9}
        delay={2}
      />

      <SectionShell>
        <FadeIn className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#01dea2]/10 border border-[#01dea2]/30 mb-6">
            <span className="text-xs text-[#01dea2] font-medium uppercase tracking-wide">
              {testimonials.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f0f6f6] leading-tight mb-6">
            {testimonials.title[0]}
            <br />
            <span className="text-[#f0f6f6]/50">{testimonials.title[1]}</span>
          </h2>
          <p className="text-lg text-[#f0f6f6]/70 leading-relaxed">{testimonials.subtitle}</p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {testimonials.items.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-[#052a32] to-[#01635c]/20 border border-[#01635c]/30 hover:border-[#01dea2]/40 transition-all duration-300 relative hover:translate-y-[-4px] hover:shadow-xl hover:shadow-[#01dea2]/5">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-[#01dea2]/20" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#01dea2] text-[#01dea2]" />
                  ))}
                </div>
                <p className="text-[#f0f6f6]/80 mb-6 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#01635c]/30">
                  <div className="w-10 h-10 rounded-full bg-[#01dea2]/20 flex items-center justify-center">
                    <span className="text-[#01dea2] font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#f0f6f6]">{testimonial.name}</div>
                    <div className="text-sm text-[#f0f6f6]/60">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionShell>
    </section>
  )
}
