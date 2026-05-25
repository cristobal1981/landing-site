# Tena Asesores — Landing Site

Landing page para [Tena Asesores](https://tenaasesores.es).

## Stack

- Next.js 16 (App Router)
- React 19 + Tailwind CSS 4
- Framer Motion (animaciones al scroll)
- Contenido centralizado en `content/site.ts`

## Desarrollo

```sh
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción

```sh
pnpm build
pnpm start
```

## Estructura principal

- `components/landing/` — secciones de la página
- `components/layout/section-shell.tsx` — contenedor `max-w-7xl` unificado
- `content/site.ts` — textos y datos de contacto
