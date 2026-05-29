import { chatbotUi } from "@/content/chatbot"
import { matchFaqReply } from "./faq-map"
import { matchGuidedIntent } from "./guided-intents"
import { isExplicitContactIntent, matchIntent } from "./intents"
import { matchServiceIntent } from "./match-service"
import { extractSnippet } from "./normalize"
import { searchKnowledge } from "./search"
import type { ChatReply } from "./types"

const MAX_REPLY_LENGTH = 190

function conciseText(value: string): string {
  const compact = value.replace(/\s+/g, " ").trim()
  if (compact.length <= MAX_REPLY_LENGTH) return compact
  return `${compact.slice(0, MAX_REPLY_LENGTH).trim()}…`
}

function makeConcise(reply: ChatReply): ChatReply {
  return {
    ...reply,
    text: conciseText(reply.text),
  }
}

export function respondToQuery(query: string): ChatReply {
  if (isExplicitContactIntent(query)) {
    return {
      source: "intent",
      text: "Perfecto. Si quieres hablar con equipo, usa formulario y te responden en menos de 24h laborables.",
      href: "/contacto",
      linkLabel: "Ir a contacto",
    }
  }

  const guidedReply = matchGuidedIntent(query)
  if (guidedReply) return makeConcise(guidedReply)

  const faqReply = matchFaqReply(query)
  if (faqReply) return makeConcise(faqReply)

  const serviceReply = matchServiceIntent(query)
  if (serviceReply) return makeConcise(serviceReply)

  const intentReply = matchIntent(query)
  if (intentReply) return makeConcise(intentReply)

  const hits = searchKnowledge(query, 1)
  if (hits.length > 0) {
    const { chunk } = hits[0]
    const snippet = extractSnippet(chunk.body, query)
    return {
      source: "search",
      text: conciseText(`${chunk.title}: ${snippet}`),
      href: chunk.href,
      linkLabel: chatbotUi.linkLabel,
    }
  }

  return makeConcise({
    source: "fallback",
    text: chatbotUi.fallback.text,
    href: chatbotUi.fallback.href,
    linkLabel: chatbotUi.fallback.linkLabel,
  })
}
