import Link from "next/link"
import { footer, site } from "@/content/site"
import { SectionShell } from "@/components/layout/section-shell"

export function Footer() {
  return (
    <footer className="bg-[#041d23] border-t border-[#01635c]/30">
      <SectionShell innerClassName="py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#01dea2] flex items-center justify-center">
                <span className="text-[#041d23] font-bold text-xl">T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#f0f6f6] font-bold text-lg leading-tight">TENA</span>
                <span className="text-[#01dea2] text-xs tracking-wider">ASESORES</span>
              </div>
            </Link>
            <p className="text-[#f0f6f6]/60 text-sm leading-relaxed mt-4">
              {footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-[#f0f6f6] font-semibold mb-4 text-sm">Servicios</h4>
            <ul className="space-y-3">
              {footer.services.map((service) => (
                <li key={service}>
                  <Link
                    href="#servicios"
                    className="text-[#f0f6f6]/60 hover:text-[#01dea2] transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#f0f6f6] font-semibold mb-4 text-sm">Empresa</h4>
            <ul className="space-y-3">
              {footer.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#f0f6f6]/60 hover:text-[#01dea2] transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#f0f6f6] font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-3">
              {footer.legal.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[#f0f6f6]/60 hover:text-[#01dea2] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#01635c]/30 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#f0f6f6]/50 text-sm">
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-[#f0f6f6]/50 hover:text-[#01dea2] transition-colors text-sm"
            >
              LinkedIn
            </Link>
            <Link
              href="#"
              className="text-[#f0f6f6]/50 hover:text-[#01dea2] transition-colors text-sm"
            >
              Instagram
            </Link>
          </div>
        </div>
      </SectionShell>
    </footer>
  )
}
