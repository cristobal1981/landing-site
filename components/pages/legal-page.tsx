import { FadeIn } from "@/components/animations"
import { LegalPageContent } from "@/components/legal/legal-page-content"
import { SectionShell } from "@/components/layout/section-shell"
import { legalPages, type LegalPageSlug } from "@/content/legal"

type LegalPageProps = {
  slug: LegalPageSlug
}

export function LegalPage({ slug }: LegalPageProps) {
  const page = legalPages[slug]

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden border-b border-agua/30 py-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(1,222,162,0.14),transparent_36%),radial-gradient(circle_at_88%_12%,rgba(1,99,92,0.16),transparent_40%),linear-gradient(to_bottom,rgba(6,42,51,0.72),rgba(4,29,35,0.94))]"
        />
        <SectionShell>
          <FadeIn className="relative mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
              Información legal
            </p>
            <h1 className="mb-4 text-3xl leading-[1.15] font-bold text-balance text-on-dark sm:text-4xl">
              {page.title}
            </h1>
            <p className="text-lg leading-relaxed text-muted-on-dark">{page.intro}</p>
          </FadeIn>
        </SectionShell>
      </section>

      <LegalPageContent slug={slug} />
    </main>
  )
}
