export type ContactInquiry = {
  name: string
  phone?: string
  email: string
  message: string
  createdAtIso: string
}

export function createContactInquiry(input: {
  name: string
  phone?: string
  email: string
  message: string
}): ContactInquiry {
  return {
    name: input.name.trim(),
    phone: input.phone?.trim() || undefined,
    email: input.email.trim().toLowerCase(),
    message: input.message.trim(),
    createdAtIso: new Date().toISOString(),
  }
}
