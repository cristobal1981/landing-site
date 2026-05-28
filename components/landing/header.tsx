"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button, marketingCtaBaseClassName, marketingCtaVariantClassName } from "@/components/ui/button"
import { BrandLogo } from "@/components/layout/brand-logo"
import { contactHref, navItems } from "@/content/site"
import { cn } from "@/lib/utils"

function isNavActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const linkClass = (href: string) =>
    cn(
      "font-sans text-base font-medium transition-colors hover:text-primary",
      isNavActive(pathname, href) ? "text-primary" : "text-muted-on-dark"
    )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-agua/30 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center">
          <BrandLogo className="justify-self-start" priority />

          <nav className="hidden items-center gap-8 justify-self-center md:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden justify-self-end md:flex">
            <Button
              asChild
              className={cn(marketingCtaBaseClassName, marketingCtaVariantClassName.primary)}
            >
              <Link href={contactHref}>Consulta Gratis</Link>
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

        <div
          className={cn(
            "grid overflow-hidden border-agua/30 transition-[grid-template-rows,border-top-width] duration-300 ease-out motion-reduce:transition-none md:hidden",
            isMenuOpen ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr] border-t-0"
          )}
          aria-hidden={!isMenuOpen}
        >
          <div className="min-h-0">
            <nav
              className={cn(
                "flex flex-col gap-4 py-4 transition-[opacity,transform] duration-250 ease-out motion-reduce:transition-none",
                isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
              )}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn("py-2 transition-colors hover:text-primary", linkClass(item.href))}
                  onClick={() => setIsMenuOpen(false)}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className={cn(
                  "mt-2 w-full",
                  marketingCtaBaseClassName,
                  marketingCtaVariantClassName.primary
                )}
              >
                <Link href={contactHref} onClick={() => setIsMenuOpen(false)} tabIndex={isMenuOpen ? 0 : -1}>
                  Consulta Gratis
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
