"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navItems } from "@/content/site"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#041d23] border-b border-[#01635c]/30">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-20">
          <Link href="/" className="flex items-center gap-3 justify-self-start">
            <div className="w-10 h-10 rounded-lg bg-[#01dea2] flex items-center justify-center">
              <span className="text-[#041d23] font-bold text-xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#f0f6f6] font-bold text-lg leading-tight">TENA</span>
              <span className="text-[#01dea2] text-xs tracking-wider">ASESORES</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 justify-self-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#f0f6f6]/80 hover:text-[#01dea2] transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex justify-self-end">
            <Button
              asChild
              className="bg-[#01dea2] text-[#041d23] hover:bg-[#01dea2]/90 font-semibold"
            >
              <Link href="#contacto">Consulta Gratis</Link>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-[#f0f6f6] justify-self-end col-start-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#01635c]/30">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[#f0f6f6]/80 hover:text-[#01dea2] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-[#01dea2] text-[#041d23] hover:bg-[#01dea2]/90 font-semibold w-full mt-2"
              >
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
