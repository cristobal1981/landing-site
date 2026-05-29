import type { NextRequest } from "next/server"
import { site } from "@/content/site"

function normalizeOrigin(value: string): string | null {
  try {
    return new URL(value).origin
  } catch {
    return null
  }
}

function allowedOrigins(): Set<string> {
  const origins = new Set<string>([normalizeOrigin(site.url)].filter(Boolean) as string[])

  const envUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL
  if (envUrl) {
    const normalized = normalizeOrigin(envUrl.startsWith("http") ? envUrl : `https://${envUrl}`)
    if (normalized) origins.add(normalized)
  }

  if (process.env.NODE_ENV !== "production") {
    origins.add("http://localhost:3000")
    origins.add("http://127.0.0.1:3000")
  }

  return origins
}

export function isContactRequestOriginAllowed(request: NextRequest): boolean {
  const allowed = allowedOrigins()
  const origin = request.headers.get("origin")
  const referer = request.headers.get("referer")

  if (origin) {
    const normalized = normalizeOrigin(origin)
    return normalized ? allowed.has(normalized) : false
  }

  if (referer) {
    const normalized = normalizeOrigin(referer)
    return normalized ? allowed.has(normalized) : false
  }

  return process.env.NODE_ENV !== "production"
}

export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim()
    if (first) return first
  }

  const realIp = request.headers.get("x-real-ip")?.trim()
  if (realIp) return realIp

  return "unknown"
}
