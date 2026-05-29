export function formatStatValue(value: number, prefix = "", suffix = ""): string {
  return `${prefix}${Math.round(value)}${suffix}`
}
