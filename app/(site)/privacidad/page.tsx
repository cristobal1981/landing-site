import type { Metadata } from "next"
import { LegalPage } from "@/components/pages/legal-page"
import { site } from "@/src/shared/config/site"

export const metadata: Metadata = {
  title: "Política de privacidad | tenaasesores",
  description:
    "Política de privacidad y protección de datos de tenaasesores. Información sobre el tratamiento de datos personales conforme al RGPD.",
  openGraph: {
    title: "Política de privacidad | tenaasesores",
    description: site.description,
    url: `${site.url}/privacidad`,
  },
  robots: { index: true },
}

export default function PrivacidadRoute() {
  return <LegalPage slug="privacidad" />
}
