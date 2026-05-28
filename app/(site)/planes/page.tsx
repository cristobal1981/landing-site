import type { Metadata } from "next"
import { PlansPage } from "@/components/pages/plans-page"
import { site } from "@/src/shared/config/site"

export const metadata: Metadata = {
  title: "Planes | tenaasesores",
  description:
    "Planes mensuales orientativos para autónomos y pymes: cobertura fiscal, contable y laboral con precios claros y escalables.",
  openGraph: {
    title: "Planes | tenaasesores",
    description: site.description,
    url: `${site.url}/planes`,
  },
}

export default function PlanesRoute() {
  return <PlansPage />
}
