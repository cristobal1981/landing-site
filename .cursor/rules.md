# Cursor Rules for empresa-landing

## Tecnología Stack
- Framework: Astro 4.x
- Styling: Tailwind CSS
- Components: React (client-side only) + Astro
- API: Astro endpoints para Odoo

## Estructura de Carpetas
```bash
src/
├── components/
│   ├── sections/       (Hero, Features, CTA, etc)
│   ├── ui/            (Navbar, Button, Card, etc)
│   └── forms/         (ContactForm.jsx)
├── layouts/
│   └── Layout.astro   (plantilla base)
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── contact.astro
│   └── api/
│       └── submit-lead.ts
├── styles/
│   ├── globals.css
│   └── animations.css
└── utils/
└── odoo.ts
```
## Reglas de Codificación

### Componentes Astro
- Ubicación: `src/components/`
- Nombrado: PascalCase (Hero.astro, Features.astro)
- Estructura:
```astro
  ---
  // Lógica TypeScript aquí
  interface Props {
    title: string;
  }
  const { title } = Astro.props;
  ---
  
  <!-- HTML aquí -->
  <section>
    <h1>{title}</h1>
  </section>
  
  <style>
    /* Estilos scoped aquí */
  </style>
```

### Componentes React (Solo para interactividad)
- Ubicación: `src/components/forms/` o `src/components/interactive/`
- Usar `client:load` solo cuando sea necesario
- Nombrado: PascalCase.jsx
- Ejemplo: `ContactForm.jsx`

### Tailwind CSS
- NO crear clases custom en globals.css
- Usar solo utility classes de Tailwind
- Responsive: mobile-first (sm:, md:, lg:)
- Colores: usar variables de tema en tailwind.config.mjs
  - `text-primary`
  - `bg-secondary`
  - `hover:bg-primary`

### Animaciones
- Animaciones CSS complejas en `src/styles/animations.css`
- Animaciones simples inline en componentes
- Para scroll triggers: usar AOS library
```astro
  <div data-aos="fade-up" data-aos-duration="1000">
    Content
  </div>
```

## Convenciones

### Nombres de Archivos
- Componentes: `PascalCase.astro` o `PascalCase.jsx`
- Utilidades: `camelCase.ts`
- Estilos: `kebab-case.css`

### Imports
```typescript
// Componentes Astro
import Hero from '../components/sections/Hero.astro';

// Componentes React
import ContactForm from '../components/forms/ContactForm';

// Utilidades
import { submitLeadToOdoo } from '../utils/odoo';

// Librerías
import AOS from 'aos';
```

### TypeScript
- Usar tipos siempre que sea posible
- Interfaces para props
- Tipos para funciones
```typescript
interface ContactData {
  name: string;
  email: string;
  message: string;
}

async function sendLead(data: ContactData): Promise<Response> {
  // ...
}
```

## Formularios y Odoo

### ContactForm.jsx
- Validación en el cliente
- Enviar a `/api/submit-lead`
- Estados: loading, success, error
- No guardar credenciales de Odoo en el cliente

### /api/submit-lead.ts
- Validar datos del lado del servidor
- Llamar a `submitLeadToOdoo()` desde utils
- Manejar errores correctamente
- Nunca exponer credenciales de Odoo

## SEO y Performance

- Todos los componentes deben tener títulos descriptivos
- Usar `<meta>` tags en Layout.astro
- Imágenes optimizadas (usar webp)
- Lazy loading en imágenes
- HTML semántico (<section>, <article>, <header>, etc)

## Git Workflow

- Ramas feature: `feature/nombre-descriptivo`
- Commits: `feat:`, `fix:`, `style:`, `refactor:`
- PRs a `develop` primero
- Después merge a `main` para producción

## Variables de Entorno

- NO commiter `.env.local`
- Usar `.env.example` como plantilla
- Variables necesarias:
  - `ODOO_API_URL`
  - `ODOO_API_KEY`
