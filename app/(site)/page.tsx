import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { Odoo } from "@/components/landing/odoo"
import { Philosophy } from "@/components/landing/philosophy"
import { Testimonials } from "@/components/landing/testimonials"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Odoo />
      <Philosophy />
      <Testimonials />
    </main>
  )
}
