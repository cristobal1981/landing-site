import type { ContactInquiry } from "@/src/modules/contact/domain/contact-inquiry"

export type ContactEmailGateway = {
  sendInquiry: (inquiry: ContactInquiry) => Promise<void>
}

export function createNoopContactEmailGateway(): ContactEmailGateway {
  return {
    async sendInquiry() {
      // Placeholder adapter. Real implementation should be wired to Resend/SMTP.
    },
  }
}
