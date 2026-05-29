import type { ContactInquiry } from "@/src/modules/contact/domain/contact-inquiry"

export type ContactEmailGateway = {
  sendInquiry: (inquiry: ContactInquiry) => Promise<void>
}

export function createNoopContactEmailGateway(): ContactEmailGateway {
  return {
    async sendInquiry(inquiry) {
      if (process.env.NODE_ENV !== "production") {
        console.info("[contact] inquiry received (noop gateway)", inquiry)
      }
    },
  }
}

export function createWebhookContactEmailGateway(webhookUrl: string): ContactEmailGateway {
  return {
    async sendInquiry(inquiry) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiry),
        signal: AbortSignal.timeout(10_000),
      })

      if (!response.ok) {
        throw new Error(`Contact webhook failed with status ${response.status}`)
      }
    },
  }
}

export function createContactEmailGateway(): ContactEmailGateway {
  const webhookUrl = process.env.CONTACT_INQUIRY_WEBHOOK_URL?.trim()
  if (webhookUrl) {
    return createWebhookContactEmailGateway(webhookUrl)
  }

  return createNoopContactEmailGateway()
}
