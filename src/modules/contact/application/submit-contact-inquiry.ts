import { createContactInquiry } from "@/src/modules/contact/domain/contact-inquiry"
import type { ContactEmailGateway } from "@/src/modules/contact/infrastructure/contact-email-gateway"

export async function submitContactInquiry(
  gateway: ContactEmailGateway,
  input: {
    name: string
    phone?: string
    email: string
    message: string
  }
) {
  const inquiry = createContactInquiry(input)
  await gateway.sendInquiry(inquiry)
  return inquiry
}
