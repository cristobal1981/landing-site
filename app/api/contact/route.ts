import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { contactForm } from "@/content/contact-form"
import { submitContactInquiry } from "@/src/modules/contact/application/submit-contact-inquiry"
import { createContactEmailGateway } from "@/src/modules/contact/infrastructure/contact-email-gateway"
import {
  checkContactSubmissionRateLimit,
  isContactBodyWithinLimit,
} from "@/lib/contact/rate-limit"
import { getClientIp, isContactRequestOriginAllowed } from "@/lib/contact/request-security"
import {
  validateContactInquiry,
  type ContactInquiryPayload,
} from "@/lib/contact/validate-inquiry"

function json(data: Record<string, unknown>, status = 200, headers?: HeadersInit) {
  return NextResponse.json(data, { status, headers })
}

function honeypotSuccess() {
  return json({ ok: true })
}

export async function POST(request: NextRequest) {
  if (!isContactRequestOriginAllowed(request)) {
    return json({ ok: false, error: "forbidden" }, 403)
  }

  if (!isContactBodyWithinLimit(request.headers.get("content-length"))) {
    return json({ ok: false, error: "payload_too_large" }, 413)
  }

  let body: ContactInquiryPayload
  try {
    body = (await request.json()) as ContactInquiryPayload
  } catch {
    return json({ ok: false, error: "invalid_body" }, 400)
  }

  const validation = validateContactInquiry(body)
  if (!validation.ok) {
    if (validation.code === "honeypot" || validation.code === "too_fast") {
      return honeypotSuccess()
    }

    return json(
      {
        ok: false,
        error: "validation",
        message: contactForm.messages.validation,
      },
      400
    )
  }

  const ip = getClientIp(request)
  const rate = checkContactSubmissionRateLimit({
    ip,
    email: validation.data.email,
  })

  if (!rate.allowed) {
    return json(
      {
        ok: false,
        error: "rate_limit",
        message: contactForm.messages.rateLimit,
      },
      429,
      { "Retry-After": String(rate.retryAfterSec) }
    )
  }

  try {
    await submitContactInquiry(createContactEmailGateway(), validation.data)
  } catch {
    return json(
      {
        ok: false,
        error: "delivery",
        message: contactForm.messages.genericError,
      },
      503
    )
  }

  return json({ ok: true, message: contactForm.messages.success })
}
