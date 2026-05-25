# Cursor Rules for landing-site

## Stack
- Framework: Next.js 16 (App Router)
- Styling: Tailwind CSS 4
- Components: React 19 + shadcn/ui (mínimo: button, input, textarea)
- Animaciones: framer-motion (scroll) + CSS (floating blobs)
- Contenido: `content/site.ts`

## Estructura

```bash
app/
├── layout.tsx
├── page.tsx
└── globals.css
components/
├── layout/section-shell.tsx
├── landing/          (header, hero, services, etc.)
├── animations.tsx
└── ui/               (solo componentes usados)
content/
└── site.ts
lib/
└── utils.ts
public/
```

## Convenciones
- Ancho máximo unificado: `max-w-7xl` vía `SectionShell`
- Colores marca: `#041d23`, `#01dea2`, `#f0f6f6`, `#01635c`
- Teléfono solo en sección contacto, no en header
- `scroll-behavior: smooth` en `globals.css`
- Textos centralizados en `content/site.ts`

## Comandos
- `pnpm dev` — desarrollo
- `pnpm build` — producción

## Fase posterior
- API `app/api/submit-lead` + Odoo para formulario de contacto
