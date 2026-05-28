import {
  Hero,
  LogoMarquee,
  Services,
  Odoo,
  Philosophy,
  Testimonials,
  FaqSection,
} from "@/src/modules/landing/ui"
import { faqGeneral } from "@/src/shared/config/site"

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
