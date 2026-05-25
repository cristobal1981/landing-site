export const brand = {
  wordmark: "tenaasesores",
  wordmarkHighlight: "tena",
  wordmarkRest: "asesores",
  logoSrc: "/syntia-isotipo.svg",
} as const

export const site = {
  name: "tenaasesores",
  tagline: "Asesores y Abogados",
  description:
    "Asesoramiento y consultoría empresarial en Tenerife. Servicios profesionales especializados en empresas digitales: fiscalidad, contabilidad, laboral y constitución de empresas.",
  url: "https://tenaasesores.es",
  location: "Tenerife, España",
  email: "info@tenaasesores.es",
  phone: {
    display: "+34 922 38 81 92",
    href: "tel:+34922388192",
  },
  hours: {
    weekdays: "9:00 - 15:00",
    weekend: "Cerrado",
  },
} as const

export const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const

export const hero = {
  badge: "Tu asesoría de confianza",
  title: {
    before: "Gestoría moderna y cercana: números",
    highlight1: "al día",
    middle: ", decisiones con",
    highlight2: "quien te entiende",
  },
  subtitle:
    "Consulta tu situación cuando quieras; nosotros supervisamos, revisamos y te acompañamos en contable, fiscal y laboral con el mismo trato de siempre. Para autónomos, pymes y empresas digitales que buscan eficiencia sin perder el contacto humano ni la claridad de saber a quién acudir.",
  ctaPrimary: "Solicitar Consulta Gratis",
  ctaSecondary: "Ver Servicios",
  trust: [
    { title: "Acceso 24/7", subtitle: "Tus datos cuando los necesites" },
    { title: "Partners Odoo", subtitle: "Implementación y supervisión" },
    { title: "Automatización", subtitle: "Menos errores, más tiempo" },
  ],
} as const

export const odoo = {
  badge: "Odoo · Partners oficiales",
  title: ["Contabilidad descentralizada,", "control profesional de verdad"],
  subtitle:
    "Tú tienes visibilidad y acceso en tiempo real; nosotros nos encargamos de que todo esté bien hecho, revisado y al día con la normativa.",
  benefits: [
    {
      title: "Contabilidad descentralizada",
      description:
        "Consulta tu situación contable cuando quieras, desde cualquier dispositivo.",
    },
    {
      title: "Supervisión profesional",
      description:
        "Controlamos, revisamos y garantizamos el cumplimiento normativo de tu negocio.",
    },
    {
      title: "Automatización de procesos",
      description:
        "Menos tareas manuales, menos errores y más tiempo para lo que importa.",
    },
  ],
  stepsTitle: "Tres pasos para arrancar en Odoo",
  steps: [
    {
      title: "Paquete fiscal a medida",
      description:
        "Definimos plan contable, impuestos y obligaciones desde el primer día.",
    },
    {
      title: "Bancos sincronizados",
      description:
        "Conectamos tus cuentas para importar movimientos y evitar errores manuales.",
    },
    {
      title: "Facturas automáticas",
      description:
        "Captura OCR o recepción por email para centralizar la documentación de proveedores.",
    },
  ],
  cta: "Hablemos de tu migración a Odoo",
} as const

export const services = {
  badge: "Nuestros Servicios",
  title: ["Todo lo que necesitas", "en un solo lugar"],
  subtitle:
    "¿Quieres trabajar con Odoo pero no sabes por dónde empezar? Un solo equipo para contabilidad, fiscal, laboral y puesta en marcha.",
  items: [
    {
      title: "Área Contable",
      description:
        "Contabilidad en Odoo con acceso 24/7 y supervisión profesional. Registro, informes y cumplimiento normativo sin sorpresas.",
    },
    {
      title: "Área Fiscal",
      description:
        "Estrategias fiscales personalizadas, fiscalidad de startups, IVA/IGIC y cumplimiento tributario sin sorpresas.",
    },
    {
      title: "Área Laboral",
      description:
        "Gestionamos nóminas, contratos y todo lo relacionado con tu equipo de manera eficiente.",
    },
    {
      title: "Constitución de Empresas",
      description:
        "Te ayudamos a dar de alta tu negocio, eligiendo la forma jurídica más adecuada para ti.",
    },
  ],
} as const

export const philosophy = {
  badge: "Nuestra filosofía",
  title: ["Tu asesoría debería ayudarte,", "no convertirse en un problema más"],
  subtitle:
    "Si tu gestoría actual no responde a tiempo, te genera más dudas que soluciones o simplemente no te entiende, quizá es momento de cambiar. Trabajamos con una filosofía",
  acronym: "CLAVE",
  values: [
    { letter: "C", title: "CERCANÍA", description: "Conocemos tu negocio como si fuera el nuestro. Trato directo y personal." },
    { letter: "L", title: "CLARIDAD", description: "Sin letra pequeña ni sorpresas. Tarifas claras desde el primer día." },
    { letter: "A", title: "AGILIDAD", description: "Respuestas rápidas cuando más las necesitas. Máximo 24 horas." },
    { letter: "V", title: "VALOR", description: "No solo cumplimos, te ayudamos a crecer y optimizar tu negocio." },
    { letter: "E", title: "EXPERIENCIA", description: "Años resolviendo lo que otros complican. Sabemos lo que hacemos." },
  ],
} as const

export const about = {
  badge: "Sobre tenaasesores",
  title: ["Pequeños pero", "muy comprometidos."],
  paragraphs: [
    "No somos una gran corporación, y eso es precisamente nuestra ventaja. Cada cliente tiene acceso directo a profesionales con experiencia, no a un call center. Conocemos tu negocio, tu sector y tus preocupaciones.",
    "Llevamos años ayudando a pymes, autónomos y empresas digitales en Tenerife a gestionar su día a día fiscal, contable y laboral. Como partners oficiales de Odoo, combinamos tecnología en tiempo real con supervisión humana: sin humo, sin promesas vacías.",
  ],
  features: [
    "Atención directa con tu asesor asignado",
    "Respuesta garantizada en menos de 24 horas",
    "Sin permanencias ni letra pequeña",
    "Tarifas claras desde el primer día",
  ],
  stats: [
    { value: "+150", label: "Clientes activos" },
    { value: "98%", label: "Satisfacción" },
    { value: "24h", label: "Tiempo respuesta" },
    { value: "0", label: "Permanencias" },
  ],
} as const

export const testimonials = {
  badge: "Testimonios",
  title: ["Negocios reales.", "Opiniones reales."],
  subtitle:
    "No tenemos cientos de clientes, pero los que tenemos confían en nosotros año tras año.",
  items: [
    {
      name: "María García",
      role: "Autónoma - Diseño Gráfico",
      content:
        "Llevaba años con una gestoría que apenas me contestaba. Desde que cambié a tenaasesores, tengo respuestas el mismo día y cero sorpresas en los impuestos.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Gerente - Taller Mecánico",
      content:
        "Son cercanos y se explican de forma que lo entiendo todo. Mi anterior asesor usaba tecnicismos y nunca sabía cómo iba realmente mi negocio.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "CEO - Tienda Online",
      content:
        "Como pequeña empresa, necesitaba alguien que entendiera mi situación. Me ayudaron a optimizar la fiscalidad y ahora pago lo justo, no de más.",
      rating: 5,
    },
  ],
} as const

export const contact = {
  badge: "Contacto",
  title: ["Hablemos de tu negocio.", "Sin compromiso."],
  subtitle:
    "Cuéntanos tu situación y te contactaremos en menos de 24 horas. La primera consulta es gratuita.",
  formTitle: "Solicita tu consulta gratuita",
  privacyNote: "Al enviar aceptas nuestra política de privacidad",
} as const

export const footer = {
  description:
    "Asesoramiento y consultoría empresarial en Tenerife. Partners oficiales Odoo: contabilidad en tiempo real, fiscal y laboral para autónomos, pymes y empresas digitales.",
  services: ["Área Contable", "Área Fiscal", "Área Laboral", "Constitución de Empresas"],
  company: [
    { label: "Sobre nosotros", href: "#nosotros" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ],
  legal: ["Aviso legal", "Política de privacidad", "Política de cookies"],
} as const

export const images = {
  hero: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920",
  services: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1920",
  about: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920",
  contact: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920",
} as const
