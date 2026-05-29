import type { Metadata } from "next"
import { LegalPage } from "@/components/pages/legal-page"
import { site } from "@/src/shared/config/site"

export const metadata: Metadata = {
  title: "Política de cookies | tenaasesores",
  description:
    "Política de cookies de tenaasesores. Tipos de cookies, finalidades, terceros y cómo gestionar tu consentimiento.",
  openGraph: {
    title: "Política de cookies | tenaasesores",
    description: site.description,
    url: `${site.url}/cookies`,
  },
  robots: { index: true },
}

export default function CookiesRoute() {
  return <LegalPage slug="cookies" />
}
