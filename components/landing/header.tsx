"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BrandLogo } from "@/components/layout/brand-logo"
import { navItems } from "@/content/site"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-agua/30 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center">
          <BrandLogo className="justify-self-start" priority />

          <nav className="hidden items-center gap-8 justify-self-center md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-sans text-sm font-medium text-muted-on-dark transition-colors hover:text-turquesa"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden justify-self-end md:flex">
            <Button asChild className="font-semibold">
              <Link href="#contacto">Consulta Gratis</Link>
            </Button>
          </div>

          <button
            type="button"
            className="col-start-3 justify-self-end p-2 text-on-dark md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-agua/30 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="py-2 font-sans text-muted-on-dark transition-colors hover:text-turquesa"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-2 w-full font-semibold">
                <Link href="#contacto" onClick={() => setIsMenuOpen(false)}>
                  Consulta Gratis
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
