import { contactForm } from "@/content/contact-form"

type Bucket = {
  count: number
  resetAt: number
}

const ipBuckets = new Map<string, Bucket>()
const emailBuckets = new Map<string, Bucket>()

const MAX_BODY_BYTES = 16_384

function pruneBuckets(store: Map<string, Bucket>, now: number) {
  if (store.size < 500) return
  for (const [key, bucket] of store) {
    if (bucket.resetAt <= now) store.delete(key)
  }
}

function consumeToken(
  store: Map<string, Bucket>,
  key: string,
  max: number,
  windowMs: number,
  now: number
): { allowed: boolean; retryAfterSec: number } {
  pruneBuckets(store, now)

  const existing = store.get(key)
  if (!existing || existing.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true, retryAfterSec: 0 }
  }

  if (existing.count >= max) {
    return {
      allowed: false,
      retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    }
  }

  existing.count += 1
  return { allowed: true, retryAfterSec: 0 }
}

const HOUR_MS = 60 * 60 * 1000

export function checkContactSubmissionRateLimit(input: {
  ip: string
  email: string
  now?: number
}): { allowed: boolean; retryAfterSec: number; reason?: "ip" | "email" } {
  const now = input.now ?? Date.now()
  const ipKey = `ip:${input.ip}`
  const emailKey = `email:${input.email.toLowerCase()}`

  const ipResult = consumeToken(
    ipBuckets,
    ipKey,
    contactForm.rateLimit.maxPerIpPerHour,
    HOUR_MS,
    now
  )
  if (!ipResult.allowed) {
    return { allowed: false, retryAfterSec: ipResult.retryAfterSec, reason: "ip" }
  }

  const emailResult = consumeToken(
    emailBuckets,
    emailKey,
    contactForm.rateLimit.maxPerEmailPerHour,
    HOUR_MS,
    now
  )
  if (!emailResult.allowed) {
    return { allowed: false, retryAfterSec: emailResult.retryAfterSec, reason: "email" }
  }

  return { allowed: true, retryAfterSec: 0 }
}

export function isContactBodyWithinLimit(contentLength: string | null): boolean {
  if (!contentLength) return true
  const bytes = Number.parseInt(contentLength, 10)
  if (!Number.isFinite(bytes)) return true
  return bytes > 0 && bytes <= MAX_BODY_BYTES
}

export const contactClientStorageKey = "tenaasesores-contact-submissions" as const

type ClientSubmissionLog = {
  timestamps: number[]
}

export function canSubmitContactFromClient(): boolean {
  if (typeof window === "undefined") return true

  try {
    const raw = sessionStorage.getItem(contactClientStorageKey)
    if (!raw) return true

    const parsed = JSON.parse(raw) as ClientSubmissionLog
    const now = Date.now()
    const windowMs = contactForm.rateLimit.clientWindowMs
    const recent = (parsed.timestamps ?? []).filter((t) => now - t < windowMs)
    return recent.length < contactForm.rateLimit.clientMaxPerWindow
  } catch {
    return true
  }
}

export function recordContactClientSubmission(): void {
  if (typeof window === "undefined") return

  try {
    const raw = sessionStorage.getItem(contactClientStorageKey)
    const now = Date.now()
    const parsed: ClientSubmissionLog = raw
      ? (JSON.parse(raw) as ClientSubmissionLog)
      : { timestamps: [] }
    const windowMs = contactForm.rateLimit.clientWindowMs
    const recent = (parsed.timestamps ?? []).filter((t) => now - t < windowMs)
    recent.push(now)
    sessionStorage.setItem(contactClientStorageKey, JSON.stringify({ timestamps: recent }))
  } catch {
    /* private mode */
  }
}
