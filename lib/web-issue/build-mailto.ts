import { site } from "@/content/site"
import { webIssueReport } from "@/content/web-issue"

type BuildWebIssueMailtoParams = {
  issueTypeLabel: string
  pageUrl: string
  description: string
  reportedFrom: string
}

export function buildWebIssueMailto({
  issueTypeLabel,
  pageUrl,
  description,
  reportedFrom,
}: BuildWebIssueMailtoParams): string {
  const subject = `${webIssueReport.mailtoSubjectPrefix} Incidencia en ${site.name}`
  const body = [
    "Incidencia técnica reportada desde la web",
    "========================================",
    "",
    `Página afectada: ${pageUrl || "(no indicada)"}`,
    `Tipo: ${issueTypeLabel}`,
    `Reportado desde: ${reportedFrom}`,
    "",
    "Descripción:",
    description.trim(),
    "",
    "Navegador / dispositivo (opcional):",
    "",
    "---",
    "Mensaje generado desde el formulario de reporte web.",
  ].join("\n")

  const params = new URLSearchParams({
    subject,
    body,
  })

  return `mailto:${site.technicalEmail}?${params.toString()}`
}

export const webIssueMailtoStorageKey = "tenaasesores-web-issue-mailto" as const

const MAX_OPENS_PER_WINDOW = 3
const WINDOW_MS = 60 * 60 * 1000

type MailtoLog = {
  timestamps: number[]
}

export function canOpenWebIssueMailto(): boolean {
  if (typeof window === "undefined") return true

  try {
    const raw = localStorage.getItem(webIssueMailtoStorageKey)
    if (!raw) return true

    const parsed = JSON.parse(raw) as MailtoLog
    const now = Date.now()
    const recent = (parsed.timestamps ?? []).filter((t) => now - t < WINDOW_MS)
    return recent.length < MAX_OPENS_PER_WINDOW
  } catch {
    return true
  }
}

export function recordWebIssueMailtoOpen(): void {
  if (typeof window === "undefined") return

  try {
    const raw = localStorage.getItem(webIssueMailtoStorageKey)
    const now = Date.now()
    const parsed: MailtoLog = raw ? (JSON.parse(raw) as MailtoLog) : { timestamps: [] }
    const recent = (parsed.timestamps ?? []).filter((t) => now - t < WINDOW_MS)
    recent.push(now)
    localStorage.setItem(webIssueMailtoStorageKey, JSON.stringify({ timestamps: recent }))
  } catch {
    /* private mode */
  }
}
