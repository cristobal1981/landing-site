import { sappoIntroStorageKey } from "@/content/chatbot"
import { site } from "@/content/site"

export const legalEntity = {
  businessName: "[RAZÓN SOCIAL]",
  nif: "[NIF/CIF]",
  address: "[DOMICILIO SOCIAL COMPLETO]",
  registry: "[DATOS REGISTRO MERCANTIL — opcional]",
  dpoEmail: "[EMAIL DELEGADO DE PROTECCIÓN DE DATOS — si aplica]",
  email: site.email,
  phone: site.phone.display,
  website: site.url,
  lastUpdated: "2026-05-29",
} as const

export type LegalPageSlug = keyof typeof legalPages

export type LegalSection = {
  id: string
  title: string
  paragraphs: readonly string[]
  listItems?: readonly string[]
}

export type LegalPageContent = {
  title: string
  intro: string
  sections: readonly LegalSection[]
}

export const legalRoutes = {
  "aviso-legal": "/aviso-legal",
  privacidad: "/privacidad",
  cookies: "/cookies",
} as const

export const cookieConsentStorageKey = "cookie-consent" as const

export const cookieRegistry = [
  {
    name: "_va / _vercel_insights",
    type: "Analítica",
    purpose: "Medición agregada de visitas y rendimiento del sitio (Vercel Analytics).",
    duration: "Según política de Vercel",
    provider: "Vercel Inc.",
  },
  {
    name: cookieConsentStorageKey,
    type: "Técnica",
    purpose: "Recordar tu elección sobre cookies no esenciales.",
    duration: "12 meses",
    provider: site.name,
  },
  {
    name: sappoIntroStorageKey,
    type: "Preferencias (localStorage)",
    purpose: "Evitar mostrar de nuevo la presentación del asistente Sappo.",
    duration: "Persistente hasta que borres datos del sitio",
    provider: site.name,
  },
] as const

export const legalPages = {
  "aviso-legal": {
    title: "Aviso legal",
    intro:
      "En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa a los usuarios de los datos identificativos del titular de este sitio web.",
    sections: [
      {
        id: "titular",
        title: "1. Datos identificativos del titular",
        paragraphs: [
          `Titular: ${legalEntity.businessName}`,
          `NIF/CIF: ${legalEntity.nif}`,
          `Domicilio: ${legalEntity.address}`,
          `Registro: ${legalEntity.registry}`,
          `Correo electrónico: ${legalEntity.email}`,
          `Teléfono: ${legalEntity.phone}`,
          `Sitio web: ${legalEntity.website}`,
        ],
      },
      {
        id: "objeto",
        title: "2. Objeto",
        paragraphs: [
          "El presente aviso legal regula el acceso y la utilización del sitio web, cuyo fin es ofrecer información sobre los servicios de asesoramiento contable, fiscal y laboral prestados por el titular, así como facilitar canales de contacto con clientes y visitantes interesados.",
        ],
      },
      {
        id: "condiciones-uso",
        title: "3. Condiciones de uso",
        paragraphs: [
          "El acceso al sitio implica la aceptación sin reservas de las presentes condiciones. El usuario se compromete a hacer un uso diligente, lícito y conforme a la buena fe, absteniéndose de utilizar los contenidos con fines ilícitos o lesivos para el titular o terceros.",
          "Queda prohibida la reproducción, distribución o transformación de los contenidos sin autorización expresa del titular, salvo en los supuestos legalmente permitidos.",
        ],
      },
      {
        id: "propiedad-intelectual",
        title: "4. Propiedad intelectual e industrial",
        paragraphs: [
          "Los textos, diseños, logotipos, imágenes, código y demás elementos del sitio están protegidos por la normativa de propiedad intelectual e industrial. Cualquier uso no autorizado podrá dar lugar a las responsabilidades legalmente establecidas.",
        ],
      },
      {
        id: "responsabilidad",
        title: "5. Limitación de responsabilidad",
        paragraphs: [
          "El titular no garantiza la ausencia de errores en el acceso al sitio ni en sus contenidos, aunque adoptará las medidas razonables para evitarlos y corregirlos.",
          "El titular no se hace responsable de los daños derivados del uso indebido del sitio ni de la información publicada por terceros a través de enlaces externos.",
        ],
      },
      {
        id: "enlaces",
        title: "6. Enlaces externos",
        paragraphs: [
          "Este sitio puede incluir enlaces a páginas de terceros. El titular no controla ni asume responsabilidad por sus contenidos o políticas. El acceso a dichos sitios es bajo la exclusiva responsabilidad del usuario.",
        ],
      },
      {
        id: "privacidad",
        title: "7. Protección de datos y cookies",
        paragraphs: [
          "El tratamiento de datos personales se describe en la Política de privacidad. El uso de cookies y tecnologías similares se detalla en la Política de cookies.",
        ],
        listItems: [
          "Política de privacidad: /privacidad",
          "Política de cookies: /cookies",
        ],
      },
      {
        id: "legislacion",
        title: "8. Legislación aplicable y jurisdicción",
        paragraphs: [
          "Las relaciones derivadas del uso de este sitio se regirán por la legislación española. Para la resolución de conflictos, las partes se someten a los juzgados y tribunales que correspondan según la normativa aplicable, sin perjuicio de los derechos que asistan a consumidores y usuarios.",
        ],
      },
    ],
  },
  privacidad: {
    title: "Política de privacidad",
    intro:
      "En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), informamos sobre cómo tratamos los datos personales que nos facilitas a través de este sitio web.",
    sections: [
      {
        id: "responsable",
        title: "1. Responsable del tratamiento",
        paragraphs: [
          `Responsable: ${legalEntity.businessName}`,
          `NIF/CIF: ${legalEntity.nif}`,
          `Domicilio: ${legalEntity.address}`,
          `Correo de contacto: ${legalEntity.email}`,
          `Teléfono: ${legalEntity.phone}`,
          `Delegado de Protección de Datos (si aplica): ${legalEntity.dpoEmail}`,
        ],
      },
      {
        id: "datos",
        title: "2. Datos que recogemos",
        paragraphs: [
          "A través del formulario de contacto y otros canales habilitados en el sitio podemos tratar:",
        ],
        listItems: [
          "Nombre y apellidos",
          "Correo electrónico y teléfono",
          "Empresa o actividad profesional (si la indicas)",
          "Contenido del mensaje o consulta",
          "Datos técnicos derivados de la navegación (dirección IP, dispositivo, cookies — ver política de cookies)",
        ],
      },
      {
        id: "finalidades",
        title: "3. Finalidades y legitimación",
        paragraphs: [
          "Tratamos tus datos para las siguientes finalidades:",
        ],
        listItems: [
          "Atender solicitudes de información o consulta: ejecución de medidas precontractuales o consentimiento del interesado.",
          "Gestionar la relación profesional si contratas nuestros servicios: ejecución de contrato y cumplimiento de obligaciones legales.",
          "Enviar comunicaciones comerciales propias: consentimiento o relación contractual previa, con posibilidad de oposición en cualquier momento.",
          "Analítica web agregada: interés legítimo o consentimiento según configuración de cookies (consulta /cookies).",
          "Cumplir obligaciones legales en materia fiscal, laboral o contable cuando seas cliente.",
        ],
      },
      {
        id: "conservacion",
        title: "4. Plazo de conservación",
        paragraphs: [
          "Los datos se conservarán mientras sea necesario para la finalidad para la que se recogieron y, posteriormente, durante los plazos exigidos por la normativa aplicable (por ejemplo, obligaciones mercantiles o fiscales).",
          "Los datos de contacto no convertidos en cliente se suprimirán o anonimizarán cuando dejen de ser necesarios, salvo que solicites su supresión antes.",
        ],
      },
      {
        id: "destinatarios",
        title: "5. Destinatarios y encargados",
        paragraphs: [
          "No cedemos datos a terceros salvo obligación legal o cuando sea necesario para la prestación del servicio (por ejemplo, proveedores de hosting, correo electrónico o herramientas de analítica).",
          "Algunos proveedores pueden estar ubicados fuera del Espacio Económico Europeo; en ese caso se aplicarán las garantías previstas en el RGPD (cláusulas contractuales tipo u otras medidas adecuadas).",
        ],
        listItems: [
          "Hosting y despliegue: Vercel Inc.",
          "Analítica: Vercel Analytics (datos agregados de uso)",
        ],
      },
      {
        id: "derechos",
        title: "6. Derechos de las personas interesadas",
        paragraphs: [
          "Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad enviando un correo a la dirección indicada en el apartado 1, adjuntando copia de un documento que acredite tu identidad.",
          "Si retiras el consentimiento, ello no afectará a la licitud del tratamiento basado en el consentimiento previo a su retirada.",
        ],
      },
      {
        id: "reclamacion",
        title: "7. Reclamación ante la autoridad de control",
        paragraphs: [
          "Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD): https://www.aepd.es",
        ],
      },
      {
        id: "seguridad",
        title: "8. Medidas de seguridad",
        paragraphs: [
          "Aplicamos medidas técnicas y organizativas apropiadas para proteger los datos personales frente a accesos no autorizados, pérdida o alteración, en función del riesgo del tratamiento.",
        ],
      },
      {
        id: "cookies-ref",
        title: "9. Cookies",
        paragraphs: [
          "Para información detallada sobre cookies y tecnologías similares, consulta nuestra Política de cookies en /cookies.",
        ],
      },
    ],
  },
  cookies: {
    title: "Política de cookies",
    intro:
      "Esta política explica qué son las cookies, qué tipos utilizamos en este sitio web y cómo puedes gestionarlas.",
    sections: [
      {
        id: "que-son",
        title: "1. ¿Qué son las cookies?",
        paragraphs: [
          "Las cookies son pequeños archivos que se almacenan en tu dispositivo cuando visitas un sitio web. También usamos almacenamiento local del navegador (localStorage) para preferencias técnicas.",
        ],
      },
      {
        id: "tipos",
        title: "2. Tipos de cookies que utilizamos",
        paragraphs: [
          "Clasificamos las cookies y tecnologías similares de la siguiente forma:",
        ],
        listItems: [
          "Técnicas o necesarias: imprescindibles para el funcionamiento del sitio y recordar tu elección de consentimiento.",
          "Analíticas: nos permiten medir de forma agregada cómo se utiliza el sitio (Vercel Analytics).",
          "Preferencias: recuerdan ajustes de la interfaz, como no volver a mostrar la presentación del asistente Sappo.",
        ],
      },
      {
        id: "tabla",
        title: "3. Detalle de cookies y almacenamiento",
        paragraphs: [
          "A continuación se listan las principales cookies y claves de almacenamiento utilizadas:",
        ],
      },
      {
        id: "terceros",
        title: "4. Cookies de terceros",
        paragraphs: [
          "Vercel Analytics puede instalar cookies propias para estadísticas de visitas. Puedes consultar su política de privacidad en el sitio de Vercel.",
          "Este sitio no utiliza cookies de publicidad comportamental de terceros en el momento de la última actualización de esta política.",
        ],
      },
      {
        id: "analytics-nota",
        title: "5. Analítica y consentimiento",
        paragraphs: [
          "Las cookies analíticas (Vercel Analytics) solo se activan si las aceptas en el banner de cookies. Si las rechazas, no cargamos herramientas de medición de terceros para analítica.",
          "Tu elección se guarda en el almacenamiento local del navegador. Puedes cambiarla borrando los datos del sitio o eliminando la clave «cookie-consent» y recargando la página.",
        ],
      },
      {
        id: "gestion",
        title: "6. Cómo gestionar o revocar el consentimiento",
        paragraphs: [
          "Puedes configurar tu navegador para bloquear o eliminar cookies. Ten en cuenta que desactivar cookies técnicas puede afectar al funcionamiento del sitio.",
          "Para revocar la elección guardada en este sitio, borra los datos de navegación del dominio o elimina la entrada de consentimiento desde las herramientas de desarrollo del navegador (clave «cookie-consent»).",
        ],
        listItems: [
          "Chrome: Configuración → Privacidad y seguridad → Cookies",
          "Firefox: Opciones → Privacidad y seguridad",
          "Safari: Preferencias → Privacidad",
          "Edge: Configuración → Cookies y permisos del sitio",
        ],
      },
      {
        id: "mas-info",
        title: "7. Más información",
        paragraphs: [
          "Para el tratamiento de datos personales asociado a estas tecnologías, consulta nuestra Política de privacidad en /privacidad.",
        ],
      },
    ],
  },
} as const satisfies Record<string, LegalPageContent>

export const cookieBannerCopy = {
  title: "Cookies en este sitio",
  description:
    "Usamos cookies técnicas y, con tu permiso, cookies analíticas para mejorar el sitio. Puedes leer más en nuestra política de cookies o de privacidad.",
  acceptLabel: "Aceptar cookies",
  rejectLabel: "Rechazar cookies no esenciales",
  cookiesLinkLabel: "Política de cookies",
  privacyLinkLabel: "Política de privacidad",
  savedMessage: "Preferencia de cookies guardada.",
} as const
