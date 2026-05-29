import { contactHref, plans } from "@/content/site"
import { normalizeText } from "./normalize"
import type { ChatReply } from "./types"

const CONSULTATION_HOWTO_PATTERNS = [
  /como\s+(solicito|pido|puedo|hago|reservo)/,
  /(solicitar|pedir|reservar)\s+(una\s+)?consulta/,
  /donde\s+(dejo|envio|relleno)\s+(la\s+)?consulta/,
  /formulario\s+de\s+consulta/,
]

const PLANS_PATTERNS = [
  /\bplanes\b/,
  /\bplan\b/,
  /\bsuscrip/,
  /\btarifas?\b/,
  /\bprecios?\b/,
  /cuanto\s+cuesta/,
  /cuanto\s+vale/,
  /\bmes\b.*\beur/,
]

function matchesAny(normalized: string, patterns: RegExp[]): boolean {
  return patterns.some((pattern) => pattern.test(normalized))
}

export function matchConsultationHowTo(query: string): ChatReply | null {
  const normalized = normalizeText(query)
  if (!normalized || !matchesAny(normalized, CONSULTATION_HOWTO_PATTERNS)) return null

  return {
    source: "intent",
    text: "Deja tu caso en el formulario de contacto. Primera consulta gratuita y sin compromiso; respondemos en menos de 24h laborables.",
    href: contactHref,
    linkLabel: "Ir al formulario",
  }
}

export function matchPlansIntent(query: string): ChatReply | null {
  const normalized = normalizeText(query)
  if (!normalized || !matchesAny(normalized, PLANS_PATTERNS)) return null

  const tierSummary = plans.tiers
    .map((tier) => `${tier.name} (${tier.price}€/${tier.period})`)
    .join(", ")

  return {
    source: "intent",
    text: `Tenemos 3 planes mensuales: ${tierSummary}. Precios orientativos; la propuesta final depende de tu volumen.`,
    href: "/planes",
    linkLabel: "Ver planes",
  }
}

export function matchGuidedIntent(query: string): ChatReply | null {
  return matchConsultationHowTo(query) ?? matchPlansIntent(query)
}
