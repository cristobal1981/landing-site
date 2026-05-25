"use client"

import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animations"
import { SectionShell } from "@/components/layout/section-shell"
import { philosophy } from "@/content/site"

export function Philosophy() {
  return (
    <section className="py-20 md:py-28 bg-[#f0f6f6] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23041d23' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <SectionShell>
        <FadeIn className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#041d23]/10 border border-[#041d23]/20 mb-6">
            <span className="text-xs text-[#041d23] font-medium uppercase tracking-wide">
              {philosophy.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041d23] leading-tight mb-6">
            {philosophy.title[0]}
            <br />
            <span className="text-[#041d23]/50">{philosophy.title[1]}</span>
          </h2>
          <p className="text-lg text-[#041d23]/70 leading-relaxed">
            {philosophy.subtitle}{" "}
            <span className="text-[#01635c] font-bold">{philosophy.acronym}</span>:
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4"
          staggerDelay={0.08}
        >
          {philosophy.values.map((value, index) => (
            <StaggerItem key={value.letter}>
              <div className="group h-full p-6 rounded-2xl bg-gradient-to-br from-[#041d23] to-[#01635c]/80 border border-[#01635c]/30 hover:border-[#01dea2]/50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-[#041d23]/20">
                <ScaleIn delay={index * 0.05}>
                  <div className="text-5xl font-bold text-[#01dea2] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.letter}
                  </div>
                </ScaleIn>
                <h3 className="text-sm font-semibold text-[#f0f6f6] uppercase tracking-wide mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[#f0f6f6]/70 leading-relaxed">{value.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionShell>
    </section>
  )
}
