import { cn } from "@/lib/utils"

/** Decoración geométrica por tarjeta — variantes fijas, estilo carnet. */
const variants = [
  /* 0 — arco superior izquierda + anillo derecha */
  () => (
    <>
      <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full border border-primary/30 bg-primary/10" />
      <div className="absolute top-4 right-4 h-16 w-16 rounded-full border-2 border-primary/25 bg-transparent" />
      <div className="absolute bottom-0 right-0 h-20 w-20 rounded-tl-[3rem] bg-agua/12" />
    </>
  ),
  /* 1 — bloque curvo derecha + círculo pequeño abajo */
  () => (
    <>
      <div className="absolute -right-6 top-1/4 h-28 w-28 rounded-full border border-agua/35 bg-agua/10" />
      <div className="absolute bottom-6 left-6 h-10 w-10 rounded-full bg-primary/15" />
      <div className="absolute top-0 left-0 h-14 w-14 rounded-br-[2rem] border border-primary/20 bg-primary/5" />
    </>
  ),
  /* 2 — semicírculo inferior + línea vertical */
  () => (
    <>
      <div className="absolute -bottom-12 left-1/2 h-24 w-48 -translate-x-1/2 rounded-t-full border border-primary/25 bg-primary/8" />
      <div className="absolute top-6 right-8 h-20 w-px bg-gradient-to-b from-primary/40 to-transparent" />
      <div className="absolute top-3 right-3 h-12 w-12 rounded-full border border-agua/30" />
    </>
  ),
  /* 3 — esquina superior derecha recortada + disco izquierda */
  () => (
    <>
      <div className="absolute -top-4 right-8 h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
      <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-[4rem] bg-agua/15" />
      <div className="absolute bottom-8 -left-4 h-16 w-16 rounded-full border border-primary/20 bg-card/50" />
    </>
  ),
  /* 4 — doble anillo + franja horizontal */
  () => (
    <>
      <div className="absolute top-5 right-5 h-14 w-14 rounded-full border border-primary/30 bg-primary/8" />
      <div className="absolute top-8 right-8 h-8 w-8 rounded-full border border-agua/40 bg-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-agua/25 to-transparent" />
    </>
  ),
  /* 5 — curva izquierda tipo badge */
  () => (
    <>
      <div className="absolute -left-8 top-1/3 h-24 w-24 rounded-full border border-agua/30 bg-agua/8" />
      <div className="absolute top-0 right-0 h-10 w-24 rounded-bl-2xl bg-primary/10" />
      <div className="absolute bottom-4 right-4 h-6 w-6 rotate-45 border border-primary/25 bg-primary/10" />
    </>
  ),
  /* 6 — arco inferior derecho + punto superior */
  () => (
    <>
      <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full border border-agua/30 bg-agua/10" />
      <div className="absolute top-6 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary/50" />
      <div className="absolute top-0 left-8 h-12 w-px bg-gradient-to-b from-primary/35 to-transparent" />
    </>
  ),
] as const

export function TeamCardGeometries({
  index,
  className,
}: {
  index: number
  className?: string
}) {
  const Variant = variants[index % variants.length]

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <Variant />
    </div>
  )
}
