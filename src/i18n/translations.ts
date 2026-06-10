export type Lang = 'es' | 'en';

export const translations = {
  es: {
    'nav.experience':  'Experiencia',
    'nav.projects':    'Proyectos',
    'nav.technologies':'Tecnologías',

    'hero.bio': 'Titulado en DAM con doble nacionalidad española e inglesa. Me gusta programar en mi tiempo libre y Java es el lenguaje que más domino. Basado en Alicante, disponible en España y Reino Unido.',

    'experience.title':            'Experiencia',
    'experience.job0.role':        'Desarrollador de Software Full-Stack',
    'experience.job0.period':      'Febrero 2026 — Junio 2026',
    'experience.job0.description': 'Desarrollador full-stack en prácticas construyendo software en producción para una empresa de fabricación de plásticos.',
    'experience.job0.h0.title':    'MES y analítica industrial',
    'experience.job0.h0.text':     'Reconstrucción de motor de cálculo OEE en tiempo real procesando millones de lecturas de sensores industriales, visualizadas en dashboards Grafana activos en planta. Entrega de un informe de producción diario automatizado con KPIs consumido por dirección.',
    'experience.job0.h1.title':    'Migración de cliente ERP legacy',
    'experience.job0.h1.text':     'Reemplazo de un cliente ERP de 32 bits por una SPA en React + TypeScript usada a diario por los operarios para gestionar producción en planta.',
    'experience.job0.h2.title':    'Backend multi-base de datos',
    'experience.job0.h2.text':     'Diseño de una capa de servicios conectando a un ERP legacy con bases de datos PostgreSQL, incluyendo integración con hardware industrial en planta.',
    'experience.job0.h3.title':    'Arquitectura',
    'experience.job0.h3.text':     'Proyecto estructurado con Arquitectura Hexagonal utilizando Spring Boot + Java.',

    'projects.title':          'Proyectos',
    'projects.p0.description': 'App de movilidad urbana para Pilar de la Horadada: los usuarios acumulan puntos pedaleando y los canjean en comercios locales.',
    'projects.p0.h0':          'Plataforma completa con sistema de gamificación (niveles, logros, retos semanales), tracking GPS y gestión de recompensas para usuarios y comercios colaboradores.',
    'projects.p0.h1':          'Proyecto de fin de grado con presupuesto aceptado por el Ayuntamiento de Pilar de la Horadada para su despliegue real en la ciudad.',
    'projects.p0.demoLabel':   'Ver proyecto',
    'projects.private':        'Privado',

    'tech.title': 'Tecnologías',
    'tech.cat2':  'Herramientas',

    'footer.builtWith': 'Hecho con',
    'footer.backToTop': 'Volver arriba',
  },
  en: {
    'nav.experience':  'Experience',
    'nav.projects':    'Projects',
    'nav.technologies':'Technologies',

    'hero.bio': 'DAM graduate with dual Spanish and British nationality. I enjoy coding in my free time and Java is the language I know best. Based in Alicante, available in Spain and the UK.',

    'experience.title':            'Experience',
    'experience.job0.role':        'Full-Stack Software Developer',
    'experience.job0.period':      'February 2026 — June 2026',
    'experience.job0.description': 'Intern full-stack developer building production software for a plastics manufacturing company.',
    'experience.job0.h0.title':    'MES and industrial analytics',
    'experience.job0.h0.text':     'Rebuilt a real-time OEE calculation engine processing millions of industrial sensor readings, visualised in Grafana dashboards running live on the factory floor. Delivered an automated daily production report with KPIs consumed by management.',
    'experience.job0.h1.title':    'Legacy ERP client migration',
    'experience.job0.h1.text':     'Replaced a 32-bit ERP client with a React + TypeScript SPA used daily by operators to manage production on the factory floor.',
    'experience.job0.h2.title':    'Multi-database backend',
    'experience.job0.h2.text':     'Designed a service layer connecting a legacy ERP to PostgreSQL databases, including integration with industrial hardware on the factory floor.',
    'experience.job0.h3.title':    'Architecture',
    'experience.job0.h3.text':     'Project structured with Hexagonal Architecture using Spring Boot + Java.',

    'projects.title':          'Projects',
    'projects.p0.description': 'Urban mobility app for Pilar de la Horadada: users earn points by cycling and redeem them at local businesses.',
    'projects.p0.h0':          'Full platform with a gamification system (levels, achievements, weekly challenges), GPS tracking and rewards management for users and partner businesses.',
    'projects.p0.h1':          "Final-year project with a budget approved by Pilar de la Horadada's town council for real-world deployment in the city.",
    'projects.p0.demoLabel':   'View project',
    'projects.private':        'Private',

    'tech.title': 'Technologies',
    'tech.cat2':  'Tools',

    'footer.builtWith': 'Built with',
    'footer.backToTop': 'Back to top',
  },
} as const;

export type TranslationKey = keyof typeof translations.es;
