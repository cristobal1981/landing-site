import type { Metadata } from "next"
import { WebIssueReportPage } from "@/components/pages/web-issue-report-page"
import { site } from "@/src/shared/config/site"

type PageProps = {
  searchParams: Promise<{ pagina?: string }>
}

export const metadata: Metadata = {
  title: "Reportar problema web | tenaasesores",
  description:
    "Canal para reportar incidencias técnicas del sitio web de tenaasesores. No utilices este formulario para consultas de asesoría.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Reportar problema web | tenaasesores",
    description: site.description,
    url: `${site.url}/reportar-problema`,
  },
}

export default async function ReportarProblemaRoute({ searchParams }: PageProps) {
  const params = await searchParams
  const initialPageUrl = typeof params.pagina === "string" ? params.pagina : ""

  return <WebIssueReportPage initialPageUrl={initialPageUrl} />
}
