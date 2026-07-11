interface Stat { num: string; lbl: string }
interface ValueItem { t: string; d: string }
interface ServiceItem { key: string; color: string; icon: string; name: string; desc: string; points: string[] }
interface TestimonialItem { q: string; n: string; r: string; c: string }
interface ProcessStep { t: string; d: string }
interface ContactInfo { k: string; lbl: string; val: string; href?: string }
interface FaqItem { q: string; a: string }
interface FooterCol { h: string; links: [string, string][] }

export interface SiteContent {
  nav: { home: string; services: string; contact: string; cta: string };
  hero: { eyebrow: string; title_a: string; title_b: string; sub: string; ctaPrimary: string; ctaGhost: string; steps: string[] };
  trust: { label: string };
  about: { eyebrow: string; title: string; paragraphs: string[]; stats: Stat[]; values: ValueItem[] };
  services: { eyebrow: string; title: string; sub: string; cta: string; learn: string; items: ServiceItem[] };
  testimonials: { eyebrow: string; title: string; items: TestimonialItem[] };
  process: { eyebrow: string; title: string; sub: string; steps: ProcessStep[] };
  ctaBand: { title: string; sub: string; primary: string; ghost: string };
  servicesPage: { eyebrow: string; title: string; sub: string };
  contactPage: {
    eyebrow: string; title: string; sub: string;
    form: {
      name: string; email: string; company: string; service: string; message: string;
      servicePh: string; send: string; sending: string; opts: string[];
      okTitle: string; okSub: string; another: string; errReq: string; errMail: string;
    };
    info: ContactInfo[];
    faqTitle: string;
    faq: FaqItem[];
  };
  footer: { tagline: string; cols: FooterCol[]; rights: string };
}

export interface Content { es: SiteContent; en: SiteContent }

export const content: Content = {
  es: {
    nav: { home: "Inicio", services: "Servicios", contact: "Contacto", cta: "Hablemos" },
    hero: {
      eyebrow: "Tecnología & Consultoría de Software",
      title_a: "Construyamos soluciones",
      title_b: "paso a paso",
      sub: "En kiub diseñamos y desarrollamos software a la medida que ordena la complejidad de tu negocio.",
      ctaPrimary: "Iniciar un proyecto",
      ctaGhost: "Ver servicios",
      steps: ["Entender", "Construir", "Escalar"],
    },
    trust: { label: "Equipos que ya construyen con kiub" },
    about: {
      eyebrow: "Quiénes somos",
      title: "Construimos tecnología con propósito de negocio.",
      paragraphs: [
        "Hola, soy Carol Hernández. En Kiub creemos que el mejor software nace de comprender primero el negocio.",
        "Somos una empresa especializada en desarrollo de software, análisis de negocio, automatización y soluciones basadas en datos. Trabajamos junto a nuestros clientes para entender sus procesos, identificar oportunidades de mejora y construir herramientas que realmente generen resultados.",
        "No nos enfocamos únicamente en desarrollar aplicaciones; buscamos crear soluciones que permitan ahorrar tiempo, optimizar operaciones y facilitar la toma de decisiones.",
        "Nuestro compromiso es convertir la tecnología en una ventaja competitiva para cada empresa con la que trabajamos."
      ],
      stats: [
        { num: "+80", lbl: "Proyectos entregados" },
        { num: "14 años", lbl: "Construyendo software" },
      ],
      values: [
        { t: "Cercanía real", d: "Un equipo accesible que habla tu idioma, no en tecnicismos." },
        { t: "Entregas por bloques", d: "Avances visibles en cada etapa, no al final del proyecto." },
        { t: "Calidad de ingeniería", d: "Código mantenible, seguro y pensado para escalar." },
      ],
    },
    services: {
      eyebrow: "Lo que hacemos",
      title: "Tres formas de mover tu negocio.",
      sub: "Servicios pensados para empresas y personas que quieren crecer con tecnología confiable.",
      cta: "Ver todos los servicios",
      learn: "Conocer más",
      items: [
        {
          key: "soft", color: "var(--green)", icon: "code",
          name: "Software a la medida",
          desc: "Plataformas, apps y sistemas internos diseñados exactamente para tu operación — no plantillas genéricas.",
          points: ["Aplicaciones web y móviles", "Sistemas internos y dashboards", "Integraciones con tus herramientas", "Arquitectura lista para escalar"],
        },
        {
          key: "auto", color: "var(--orange)", icon: "gear",
          name: "Automatización de procesos",
          desc: "Eliminamos el trabajo manual y repetitivo conectando tus áreas en flujos automáticos y medibles.",
          points: ["Flujos de trabajo automáticos", "Integración entre sistemas", "Reportes y alertas en tiempo real", "Menos errores, más velocidad"],
        },
        {
          key: "web", color: "var(--blue)", icon: "globe",
          name: "Páginas web",
          desc: "Sitios y landings rápidos, modernos y a tu imagen, diseñados para convertir visitas en clientes.",
          points: ["Diseño moderno y responsivo", "Optimización para buscadores (SEO)", "Alta velocidad de carga", "Autogestionable por tu equipo"],
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonios",
      title: "Lo que dicen quienes ya construyeron con nosotros.",
      items: [
        { q: "kiub transformó nuestra operación. Automatizaron procesos que nos quitaban días enteros y ahora todo fluye solo.", n: "María Restrepo", r: "Gerente de Operaciones, Logística Andina", c: "var(--green)" },
        { q: "El software a la medida que desarrollaron se siente como si lo hubiéramos diseñado en casa. Entendieron el negocio de verdad.", n: "Carlos Méndez", r: "CEO, Distribuidora Norte", c: "var(--orange)" },
        { q: "Nuestra nueva página web triplicó las solicitudes de contacto en dos meses. Equipo cercano y muy profesional.", n: "Laura Gómez", r: "Directora de Marketing, Clínica Vital", c: "var(--blue)" },
      ],
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title: "Un proceso claro, paso a paso.",
      sub: "Sin sorpresas. Sabes qué pasa en cada bloque del proyecto.",
      steps: [
        { t: "Descubrimiento", d: "Entendemos tu negocio, tus objetivos y el reto a resolver." },
        { t: "Diseño", d: "Definimos la solución, el alcance y un plan por bloques." },
        { t: "Desarrollo", d: "Construimos con entregas frecuentes que puedes ver y probar." },
        { t: "Lanzamiento y soporte", d: "Ponemos en marcha y acompañamos el crecimiento." },
      ],
    },
    ctaBand: {
      title: "¿Tienes un reto que resolver?",
      sub: "Cuéntanos tu idea. Te respondemos en menos de 24 horas con los siguientes pasos.",
      primary: "Iniciar un proyecto",
      ghost: "Escríbenos",
    },
    servicesPage: {
      eyebrow: "Servicios",
      title: "Soluciones que se arman a tu medida.",
      sub: "Cada negocio es un cubo distinto. Estos son los bloques con los que ayudamos a resolverlo.",
    },
    contactPage: {
      eyebrow: "Contacto",
      title: "Hablemos de tu proyecto.",
      sub: "Escríbenos o llámanos por cualquiera de estos medios — te respondemos en menos de 24 horas.",
      form: {
        name: "Nombre", email: "Correo", company: "Empresa (opcional)", service: "¿Qué necesitas?", message: "Cuéntanos sobre tu proyecto",
        servicePh: "Selecciona un servicio", send: "Enviar mensaje", sending: "Enviando…",
        opts: ["Software a la medida", "Automatización de procesos", "Página web", "Otro / no estoy seguro"],
        okTitle: "¡Mensaje enviado!", okSub: "Gracias por escribirnos. Te responderemos muy pronto.", another: "Enviar otro mensaje",
        errReq: "Este campo es obligatorio", errMail: "Ingresa un correo válido",
      },
      info: [
        { k: "mail", lbl: "Correo", val: "kiub.info.cr@gmail.com" },
        { k: "phone", lbl: "Teléfono", val: "+506 6023 4113" },
        { k: "wa", lbl: "WhatsApp", val: "+506 6023 4113", href: "https://wa.me/50660234113" },
        { k: "pin", lbl: "Ubicación", val: "San José, Costa Rica" },
        { k: "clock", lbl: "Horario", val: "Lun–Vie 8:00–17:00 · Sáb 8:00–12:00" },
      ],
      faqTitle: "Preguntas frecuentes",
      faq: [
        { q: "¿Cuánto cuesta un proyecto?", a: "Depende del alcance. Tras una primera conversación gratuita te enviamos una propuesta clara con precio fijo o por bloques, sin costos ocultos." },
        { q: "¿Cuánto tarda el desarrollo?", a: "Una página web suele tomar de 1 a 2 semanas; un software a la medida, entre 4 y 5 semanaws según la complejidad. Siempre entregamos por bloques para que veas avances pronto." },
        { q: "¿Trabajan con empresas fuera de Costa Rica?", a: "Sí. Trabajamos de forma remota con clientes en toda Latinoamérica y EE. UU., con reuniones periódicas y comunicación constante." },
        { q: "¿Dan soporte después del lanzamiento?", a: "Sí. Ofrecemos planes de soporte y mantenimiento para que tu solución siga funcionando y evolucionando con tu negocio." },
      ],
    },
    footer: {
      tagline: "Tecnología y consultoría que impulsan el crecimiento de tu negocio, paso a paso.",
      cols: [
        { h: "Navegación", links: [["Inicio", "/"], ["Servicios", "/servicios"], ["Contacto", "/contacto"]] },
        { h: "Servicios", links: [["Software a la medida", "/servicios"], ["Automatización", "/servicios"], ["Páginas web", "/servicios"]] },
        { h: "Empresa", links: [["Quiénes somos", "/"], ["Hablemos", "/contacto"]] },
      ],
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: { home: "Home", services: "Services", contact: "Contact", cta: "Let's talk" },
    hero: {
      eyebrow: "Software Technology & Consulting",
      title_a: "Let's build solutions",
      title_b: "step by step",
      sub: "At kiub we design and build custom software that brings order to your business complexity — one block at a time, no surprises.",
      ctaPrimary: "Start a project",
      ctaGhost: "See services",
      steps: ["Understand", "Build", "Scale"],
    },
    trust: { label: "Teams already building with kiub" },
    about: {
      eyebrow: "Who we are",
      title: "We turn tangled processes into clear systems.",
      paragraphs: [
        "kiub started from a simple idea: technology should solve the cube, not tangle it further. We're a team of engineers and consultants helping companies and founders transform their operations with well-crafted software.",
        "We work in blocks: we understand your challenge, break it into manageable pieces and deliver value at every step. No black boxes, no empty promises — just solutions that work and grow with you.",
      ],
      stats: [
        { num: "+80", lbl: "Projects delivered" },
        { num: "14 years", lbl: "Building software" },
      ],
      values: [
        { t: "Real closeness", d: "An accessible team that speaks your language, not jargon." },
        { t: "Block by block delivery", d: "Visible progress at every stage, not just at the end." },
        { t: "Engineering quality", d: "Maintainable, secure code built to scale." },
      ],
    },
    services: {
      eyebrow: "What we do",
      title: "Three ways to move your business forward.",
      sub: "Services built for companies and people who want to grow with reliable technology.",
      cta: "See all services",
      learn: "Learn more",
      items: [
        {
          key: "soft", color: "var(--green)", icon: "code",
          name: "Custom software",
          desc: "Platforms, apps and internal systems designed exactly for your operation — not generic templates.",
          points: ["Web & mobile applications", "Internal systems & dashboards", "Integrations with your tools", "Architecture ready to scale"],
        },
        {
          key: "auto", color: "var(--orange)", icon: "gear",
          name: "Process automation",
          desc: "We remove manual, repetitive work by connecting your teams into automatic, measurable flows.",
          points: ["Automated workflows", "System-to-system integration", "Real-time reports & alerts", "Fewer errors, more speed"],
        },
        {
          key: "web", color: "var(--blue)", icon: "globe",
          name: "Websites",
          desc: "Fast, modern, on-brand sites and landing pages designed to turn visitors into customers.",
          points: ["Modern, responsive design", "Search engine optimization (SEO)", "High loading speed", "Manageable by your team"],
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What teams who built with us have to say.",
      items: [
        { q: "kiub transformed our operation. They automated processes that took us entire days and now everything just flows.", n: "María Restrepo", r: "Operations Manager, Logística Andina", c: "var(--green)" },
        { q: "The custom software they built feels like we designed it in-house. They truly understood the business.", n: "Carlos Méndez", r: "CEO, Distribuidora Norte", c: "var(--orange)" },
        { q: "Our new website tripled contact requests in two months. A close, very professional team.", n: "Laura Gómez", r: "Marketing Director, Clínica Vital", c: "var(--blue)" },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "A clear process, step by step.",
      sub: "No surprises. You know what happens in every block of the project.",
      steps: [
        { t: "Discovery", d: "We understand your business, goals and the challenge to solve." },
        { t: "Design", d: "We define the solution, the scope and a block-by-block plan." },
        { t: "Development", d: "We build with frequent deliveries you can see and test." },
        { t: "Launch & support", d: "We go live and support your growth." },
      ],
    },
    ctaBand: {
      title: "Got a challenge to solve?",
      sub: "Tell us your idea. We'll reply within 24 hours with the next steps.",
      primary: "Start a project",
      ghost: "Write to us",
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Solutions built around you.",
      sub: "Every business is a different cube. These are the blocks we use to help solve it.",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Let's talk about your project.",
      sub: "Reach out through any of these channels — we'll get back to you within 24 hours.",
      form: {
        name: "Name", email: "Email", company: "Company (optional)", service: "What do you need?", message: "Tell us about your project",
        servicePh: "Select a service", send: "Send message", sending: "Sending…",
        opts: ["Custom software", "Process automation", "Website", "Other / not sure"],
        okTitle: "Message sent!", okSub: "Thanks for reaching out. We'll get back to you very soon.", another: "Send another message",
        errReq: "This field is required", errMail: "Enter a valid email",
      },
      info: [
        { k: "mail", lbl: "Email", val: "kiub.info.cr@gmail.com" },
        { k: "phone", lbl: "Phone", val: "+506 6023 4113" },
        { k: "wa", lbl: "WhatsApp", val: "+506 6023 4113", href: "https://wa.me/50660234113" },
        { k: "pin", lbl: "Location", val: "San José, Costa Rica" },
        { k: "clock", lbl: "Hours", val: "Mon–Fri 8:00–17:00 · Sat 8:00–12:00" },
      ],
      faqTitle: "Frequently asked questions",
      faq: [
        { q: "How much does a project cost?", a: "It depends on the scope. After a free first conversation we send a clear proposal with a fixed or block-based price, no hidden costs." },
        { q: "How long does development take?", a: "A website usually takes 2 to 4 weeks; custom software, 1 to 4 months depending on complexity. We always deliver in blocks so you see progress early." },
        { q: "Do you work with companies outside Costa Rica?", a: "Yes. We work remotely with clients across Latin America and the US, with regular meetings and constant communication." },
        { q: "Do you provide support after launch?", a: "Yes. We offer support and maintenance plans so your solution keeps running and evolving with your business." },
      ],
    },
    footer: {
      tagline: "Technology and consulting that solves your business cube, piece by piece.",
      cols: [
        { h: "Navigation", links: [["Home", "/"], ["Services", "/servicios"], ["Contact", "/contacto"]] },
        { h: "Services", links: [["Custom software", "/servicios"], ["Automation", "/servicios"], ["Websites", "/servicios"]] },
        { h: "Company", links: [["Who we are", "/"], ["Let's talk", "/contacto"]] },
      ],
      rights: "All rights reserved.",
    },
  },
};

export const t = content.es;
