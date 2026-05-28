import { Hero } from "@/components/landing/hero"
import { LogoMarquee } from "@/components/landing/logo-marquee"
import { Services } from "@/components/landing/services"
import { Odoo } from "@/components/landing/odoo"
import { Philosophy } from "@/components/landing/philosophy"
import { Testimonials } from "@/components/landing/testimonials"
import { FaqSection } from "@/components/landing/faq-section"
import { faqGeneral } from "@/content/site"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LogoMarquee />
      <Services />
      <Odoo />
      <Philosophy />
      <Testimonials />
      <FaqSection
        badge={faqGeneral.badge}
        title={faqGeneral.title}
        subtitle={faqGeneral.subtitle}
        items={faqGeneral.items}
      />
    </main>
  )
}
