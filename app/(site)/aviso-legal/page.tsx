import type { Metadata } from "next"
import { LegalPage } from "@/components/pages/legal-page"
import { site } from "@/src/shared/config/site"

export const metadata: Metadata = {
  title: "Aviso legal | tenaasesores",
  description:
    "Aviso legal e información del titular del sitio web de tenaasesores. Condiciones de uso, propiedad intelectual y legislación aplicable.",
  openGraph: {
    title: "Aviso legal | tenaasesores",
    description: site.description,
    url: `${site.url}/aviso-legal`,
  },
  robots: { index: true },
}

export default function AvisoLegalRoute() {
  return <LegalPage slug="aviso-legal" />
}
