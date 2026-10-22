interface ValueItem { t: string; d: string }
interface ServiceItem { key: string; color: string; icon: string; name: string; desc: string; points: string[]; guide?: [string, string] }
interface TestimonialItem { q: string; n: string; r: string; c: string }
interface ProcessStep { t: string; d: string }
interface ContactInfo { k: string; lbl: string; val: string; href?: string }
interface FaqItem { q: string; a: string }
interface FooterCol { h: string; links: [string, string][] }
interface LegalContact { lbl: string; val: string; href?: string }

export interface SiteContent {
  nav: { home: string; services: string; blog?: string; contact: string; cta: string };
  hero: { eyebrow: string; title_a: string; title_b: string; sub: string; ctaPrimary: string; ctaGhost: string; steps: string[] };
  trust: { label: string };
  about: { eyebrow: string; title: string; paragraphs: string[]; values: ValueItem[] };
  services: { eyebrow: string; title: string; sub: string; cta: string; learn: string; items: ServiceItem[] };
  testimonials: { eyebrow: string; title: string; items: TestimonialItem[] };
  process: { eyebrow: string; title: string; sub: string; steps: ProcessStep[] };
  findUs: { label: string; on: string };
  meta: Record<'home' | 'services' | 'contact' | 'legal', { title: string; description: string }>;
  ui: { homeAria: string; openMenu: string; teamAlt: string; ogAlt: string; switchLang: string; switchLangAria: string; founderLinkedinAria: string };
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
  legalPage: {
    eyebrow: string; title: string;
    aboutTitle: string; about: string[];
    dataTitle: string; rows: [string, string][];
    founderTitle: string; founderRole: string; founderBio: string;
    addressTitle: string; address: string;
    contactTitle: string; contact: LegalContact[];
    profilesTitle: string;
    moreTitle: string; more: [string, string][];
  };
  footer: { tagline: string; cols: FooterCol[]; rights: string; legalId: string; legalLink: string };
}

export interface Content { es: SiteContent; en: SiteContent }

export const content: Content = {
  es: {
    nav: { home: "Inicio", services: "Servicios", blog: "Blog", contact: "Contacto", cta: "Hablemos" },
    hero: {
      eyebrow: "Tecnología & Consultoría de Software",
      title_a: "Construyamos soluciones",
      title_b: "paso a paso",
      sub: "Diseñamos software a medida, automatizamos procesos y creamos soluciones digitales enfocadas en las necesidades reales de cada negocio.",
      ctaPrimary: "Iniciar un proyecto",
      ctaGhost: "Ver servicios",
      steps: ["Entender", "Construir", "Escalar"],
    },
    trust: { label: "Equipos que ya construyen con kiub" },
    about: {
      eyebrow: "Quiénes somos",
      title: "Construimos tecnología con propósito de negocio.",
      paragraphs: [
        "Hola, soy Carol Hernández, fundadora de kiub.",
        "Soy ingeniera graduada del Instituto Tecnológico de Costa Rica (ITCR), con una licenciatura en Desarrollo Web de la UNED y una maestría en Gerencia de Proyectos con énfasis en Tecnologías de la Información del ITCR. Cuento con más de 14 años de experiencia en el desarrollo de software y he trabajado en empresas multinacionales, tanto en roles de desarrollo senior como en posiciones de liderazgo.",
        "En kiub creemos que el mejor software nace de comprender primero el negocio.",
        "Somos una empresa especializada en desarrollo de software, análisis de negocio, automatización y soluciones basadas en datos. Trabajamos junto a nuestros clientes para entender sus procesos, identificar oportunidades de mejora y construir herramientas que realmente generen resultados.",
        "No nos enfocamos únicamente en desarrollar aplicaciones; buscamos crear soluciones que permitan ahorrar tiempo, optimizar operaciones y facilitar la toma de decisiones.",
        "Nuestro compromiso es convertir la tecnología en una ventaja competitiva para cada empresa con la que trabajamos."
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
          points: ["Aplicaciones web y móviles", "Sistemas internos y dashboards", "Integraciones con tus herramientas", "Arquitectura lista para escalar", "CRM y ERP a la medida para pymes", "Integración con facturación electrónica"],
          guide: ["Guía: software a la medida para pymes →", "/blog/software-a-la-medida-pymes-costa-rica/"],
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
        { q: "kiub transformó nuestra operación. Automatizaron procesos que nos quitaban días enteros y ahora todo fluye solo.", n: "Rebeca", r: "Gerente, Autocrash Solutions", c: "var(--green)" },
        { q: "Agradecida con el equipo kiub que desde el inicio logró plasmar mis necesidades en un software, dando resultados reales y funcionales. Sin duda, lo recomendaría a quien desee un trabajo profesional y de calidad.", n: "Raquel", r: "Gerente, OviqCR", c: "var(--orange)" },
        { q: "El sistema nos ha ayudado muchísimo a mejorar la organización de nuestra empresa. Ahora tenemos mayor control sobre la facturación de los proyectos y podemos dar un mejor seguimiento al trabajo de nuestro equipo, facilitando la gestión diaria.", n: "David", r: "CEO, OviqCR", c: "var(--blue)" },
        { q: "La solución nos permite optimizar nuestras operaciones diarias, acceder a la información de forma más rápida y organizada, y brindar una atención más ágil y eficiente a nuestros clientes.", n: "Blas Araya", r: "CEO, Grupo Jurídico", c: "var(--green)" },
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
    findUs: { label: "Encuéntranos en", on: "kiub en" },
    meta: {
      home: {
        title: "kiub | Software a la medida en Escazú, Costa Rica",
        description: "Diseñamos software a medida, automatizamos procesos y creamos soluciones digitales enfocadas en las necesidades reales de cada negocio.",
      },
      services: {
        title: "Servicios | Software a la medida en Escazú, Costa Rica",
        description: "Conocé nuestros servicios de software a medida, automatización de procesos y soluciones digitales para empresas.",
      },
      contact: {
        title: "Contacto | Software a la medida en Escazú, Costa Rica",
        description: "Hablemos sobre las necesidades de tu negocio y cómo kiub puede ayudarte con software, automatización y soluciones digitales.",
        },
      legal: {
        title: "Datos legales | kiub",
        description: "Datos legales de kiub: razón social, cédula jurídica, marca registrada, domicilio en Escazú, Costa Rica, y canales de contacto.",
      },
    },
    ui: {
      homeAria: "kiub inicio",
      openMenu: "Abrir menú",
      teamAlt: "Carol Hernández, fundadora de kiub",
      ogAlt: "kiub - Software a medida y automatización de procesos",
      switchLang: "EN",
      switchLangAria: "View in English",
      founderLinkedinAria: "Perfil de LinkedIn de Carol Hernández",
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
      sub: "Cada negocio es distinto. Estos son los bloques con los que ayudamos a resolverlo.",
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
        { k: "mail", lbl: "Correo", val: "info@kiub.co", href: "mailto:info@kiub.co" },
        { k: "phone", lbl: "Teléfono", val: "+506 6451 1884", href: "tel:+50664511884" },
        { k: "wa", lbl: "WhatsApp", val: "+506 6451 1884", href: "https://wa.me/50664511884" },
        { k: "pin", lbl: "Ubicación", val: "Escazú, San José, Costa Rica" },
        { k: "clock", lbl: "Horario", val: "Lun–Vie 8:00–17:00 · Sáb 8:00–12:00" },
      ],
      faqTitle: "Preguntas frecuentes",
      faq: [
        { q: "¿Cuánto cuesta un proyecto?", a: "Depende del alcance. Tras una primera conversación gratuita te enviamos una propuesta clara con precio fijo o por bloques, sin costos ocultos." },
        { q: "¿Cuánto tarda el desarrollo?", a: "Una página web suele tomar de 1 a 2 semanas; un software a la medida, entre 4 y 5 semanas según la complejidad. Siempre entregamos por bloques para que veas avances pronto." },
        { q: "¿Trabajan con empresas fuera de Costa Rica?", a: "Sí. Trabajamos de forma remota con clientes en toda Latinoamérica y EE. UU., con reuniones periódicas y comunicación constante." },
        { q: "¿Dan soporte después del lanzamiento?", a: "Sí. Ofrecemos planes de soporte y mantenimiento para que tu solución siga funcionando y evolucionando con tu negocio." },
      ],
    },
    legalPage: {
      eyebrow: "Empresa",
      title: "Datos legales",
      aboutTitle: "Quiénes somos",
      about: [
        "kiub es una empresa costarricense de tecnología y consultoría de software, fundada en 2022 y ubicada en San Rafael de Escazú. Diseñamos software a la medida, automatizamos procesos y creamos páginas web enfocadas en las necesidades reales de cada negocio.",
        "Trabajamos con empresas que quieren ordenar su operación con herramientas propias: sistemas internos, plataformas de gestión, facturación y cobros, CRM y sitios web. Algunos de los equipos que ya construyen con kiub son Autocrash Solutions, OviqCR y Grupo Jurídico.",
      ],
      dataTitle: "Datos legales",
      rows: [
        ["Nombre comercial", "kiub"],
        ["Razón social", "3-101-854183 SOCIEDAD ANONIMA"],
        ["Cédula jurídica", "3-101-854183"],
        ["Actividad", "Consultores informáticos"],
        ["Año de fundación", "2022"],
        ["Domicilio", "San Rafael de Escazú, San José, Costa Rica, 10203"],
        ["Marca", "KIUB® — marca de servicios en clase 42 (diseño y desarrollo de software), inscrita el 13 de marzo de 2023 en el Registro de la Propiedad Intelectual de Costa Rica a nombre de 3-101-854183 S.A. (expediente n.º 2022-0009622)"],
      ],
      founderTitle: "Fundadora",
      founderRole: "Founder & CEO",
      founderBio: "Carol fundó kiub en 2022 y cuenta con 14 años de experiencia construyendo software.",
      addressTitle: "Dirección",
      address: "San Rafael de Escazú, San José, Costa Rica, 10203",
      contactTitle: "Contacto",
      contact: [
        { lbl: "Correo", val: "info@kiub.co", href: "mailto:info@kiub.co" },
        { lbl: "Teléfono / WhatsApp", val: "+506 6451 1884", href: "https://wa.me/50664511884" },
        { lbl: "EE. UU. / WhatsApp", val: "+1 (786) 603-9420", href: "https://wa.me/17866039420" },
        { lbl: "Horario", val: "lunes a viernes de 8:00 a 17:00, sábados de 8:00 a 12:00" },
      ],
      profilesTitle: "Redes y perfiles",
      moreTitle: "Más información",
      more: [["Contacto", "/contacto/"], ["Servicios", "/servicios/"]],
    },
    footer: {
      tagline: "Tecnología y consultoría que impulsan el crecimiento de tu negocio, paso a paso.",
      cols: [
        { h: "Navegación", links: [["Inicio", "/"], ["Servicios", "/servicios/"], ["Blog", "/blog/"], ["Contacto", "/contacto/"]] },
        { h: "Servicios", links: [["Software a la medida", "/servicios/"], ["Automatización", "/servicios/"], ["Páginas web", "/servicios/"]] },
        { h: "Empresa", links: [["Quiénes somos", "/#about"], ["Blog", "/blog/"], ["Hablemos", "/contacto/"]] },
      ],
      rights: "Todos los derechos reservados.",
      legalId: "Céd. jur.",
      legalLink: "Datos legales",
    },
  },
  en: {
    nav: { home: "Home", services: "Services", contact: "Contact", cta: "Let's talk" },
    hero: {
      eyebrow: "Software Development & Consulting",
      title_a: "Let's build solutions",
      title_b: "step by step",
      sub: "We design custom software, automate processes and build digital solutions focused on the real needs of each business.",
      ctaPrimary: "Start a project",
      ctaGhost: "See services",
      steps: ["Understand", "Build", "Scale"],
    },
    trust: { label: "Teams already building with kiub" },
    about: {
      eyebrow: "Who we are",
      title: "We build technology with a business purpose.",
      paragraphs: [
        "Hi, I'm Carol Hernández, founder of kiub.",
        "I'm an engineering graduate of the Costa Rica Institute of Technology (ITCR), with a Licentiate degree in Web Development from UNED and a master's degree in Project Management with an emphasis in Information Technology, also from ITCR. I have more than 14 years of experience in software development and have worked at multinational companies in both senior development and leadership roles.",
        "At kiub, we believe the best software starts with understanding the business.",
        "We specialize in software development, business analysis, automation and data-driven solutions. We work alongside our clients to understand their processes, identify opportunities for improvement and build tools that deliver real results.",
        "We don't just build applications; we create solutions that save time, streamline operations and make decision-making easier.",
        "Our commitment is to turn technology into a competitive advantage for every company we work with."
      ],
      values: [
        { t: "Close collaboration", d: "An accessible team that speaks your language, not jargon." },
        { t: "Incremental delivery", d: "Visible progress at every stage, not just at the end." },
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
          points: ["Web & mobile applications", "Internal systems & dashboards", "Integrations with your tools", "Architecture ready to scale", "Custom CRM and ERP for SMBs", "Electronic invoicing integration"],
        },
        {
          key: "auto", color: "var(--orange)", icon: "gear",
          name: "Process automation",
          desc: "We eliminate manual, repetitive work by connecting your teams and tools through automated, measurable workflows.",
          points: ["Automated workflows", "System-to-system integration", "Real-time reports & alerts", "Fewer errors, more speed"],
        },
        {
          key: "web", color: "var(--blue)", icon: "globe",
          name: "Websites",
          desc: "Fast, modern, on-brand sites and landing pages designed to turn visitors into customers.",
          points: ["Modern, responsive design", "Search engine optimization (SEO)", "Fast load times", "Easy for your team to update"],
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What teams who built with us have to say.",
      items: [
        { q: "kiub transformed our operation. They automated processes that took us entire days and now everything just flows.", n: "Rebeca", r: "Manager, Autocrash Solutions", c: "var(--green)" },
        { q: "I'm grateful to the kiub team, who from the very start managed to turn my needs into software that delivers real, functional results. I would definitely recommend them to anyone looking for professional, high-quality work.", n: "Raquel", r: "Manager, OviqCR", c: "var(--orange)" },
        { q: "The system has greatly helped us improve how our company is organized. We now have greater control over project billing and can better track our team's work, making day-to-day management easier.", n: "David", r: "CEO, OviqCR", c: "var(--blue)" },
        { q: "The solution allows us to optimize our daily operations, access information faster and in a more organized way, and provide more agile and efficient service to our clients.", n: "Blas Araya", r: "CEO, Grupo Jurídico", c: "var(--green)" },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "A clear process, step by step.",
      sub: "No surprises. You know what happens at every stage of the project.",
      steps: [
        { t: "Discovery", d: "We understand your business, goals and the challenge to solve." },
        { t: "Design", d: "We define the solution, the scope and a plan delivered in stages." },
        { t: "Development", d: "We build with frequent deliveries you can see and test." },
        { t: "Launch & support", d: "We go live and support your growth." },
      ],
    },
    findUs: { label: "Find us on", on: "kiub on" },
    meta: {
      home: {
        title: "kiub | Custom software in Escazú, Costa Rica",
        description: "We design custom software, automate processes and build digital solutions focused on the real needs of each business.",
      },
      services: {
        title: "Services | Custom software in Escazú, Costa Rica",
        description: "Explore our custom software, process automation and digital solutions services for businesses.",
      },
      contact: {
        title: "Contact | Custom software in Escazú, Costa Rica",
        description: "Let's talk about your business needs and how kiub can help with software, automation and digital solutions.",
        },
      legal: {
        title: "Legal information | kiub",
        description: "kiub legal information: registered company name, legal ID, registered trademark, address in Escazú, Costa Rica, and contact channels.",
      },
    },
    ui: {
      homeAria: "kiub home",
      openMenu: "Open menu",
      teamAlt: "Carol Hernández, founder of kiub",
      ogAlt: "kiub - Custom software and process automation",
      switchLang: "ES",
      switchLangAria: "Ver en español",
      founderLinkedinAria: "Carol Hernández on LinkedIn",
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
      sub: "Every business is different. These are the building blocks we use to solve its challenges.",
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
        { k: "mail", lbl: "Email", val: "info@kiub.co", href: "mailto:info@kiub.co" },
        { k: "phone", lbl: "Phone", val: "+506 6451 1884", href: "tel:+50664511884" },
        { k: "wa", lbl: "WhatsApp", val: "+506 6451 1884", href: "https://wa.me/50664511884" },
        { k: "pin", lbl: "Location", val: "Escazú, San José, Costa Rica" },
        { k: "clock", lbl: "Hours", val: "Mon–Fri 8:00 a.m.–5:00 p.m. · Sat 8:00 a.m.–12:00 p.m. (Costa Rica time, GMT-6)" },
      ],
      faqTitle: "Frequently asked questions",
      faq: [
        { q: "How much does a project cost?", a: "It depends on the scope. After a free initial consultation, we send you a clear proposal with a fixed or per-block price and no hidden costs." },
        { q: "How long does development take?", a: "A website usually takes 1 to 2 weeks; custom software, 4 to 5 weeks depending on complexity. We always deliver in blocks so you see progress early." },
        { q: "Do you work with companies outside Costa Rica?", a: "Yes. We work remotely with clients across Latin America and the US, with regular meetings and constant communication." },
        { q: "Do you provide support after launch?", a: "Yes. We offer support and maintenance plans so your solution keeps running and evolving with your business." },
      ],
    },
    legalPage: {
      eyebrow: "Company",
      title: "Legal information",
      aboutTitle: "Who we are",
      about: [
        "kiub is a Costa Rican technology and software consulting company, founded in 2022 and based in San Rafael de Escazú. We design custom software, automate processes and build websites focused on the real needs of each business.",
        "We work with companies that want to organize their operations with their own tools: internal systems, management platforms, billing and collections, CRM and websites. Clients include Autocrash Solutions, OviqCR and Grupo Jurídico.",
      ],
      dataTitle: "Legal information",
      rows: [
        ["Trade name", "kiub"],
        ["Registered company name", "3-101-854183 SOCIEDAD ANONIMA"],
        ["Legal ID (cédula jurídica)", "3-101-854183"],
        ["Business activity", "IT consulting"],
        ["Year founded", "2022"],
        ["Registered address", "San Rafael de Escazú, San José, Costa Rica, 10203"],
        ["Trademark", "KIUB® — service mark in class 42 (software design and development), registered on March 13, 2023 with the Costa Rican Intellectual Property Registry in the name of 3-101-854183 S.A. (file no. 2022-0009622)"],
      ],
      founderTitle: "Founder",
      founderRole: "Founder & CEO",
      founderBio: "Carol founded kiub in 2022 and has 14 years of experience building software.",
      addressTitle: "Address",
      address: "San Rafael de Escazú, San José, Costa Rica, 10203",
      contactTitle: "Contact",
      contact: [
        { lbl: "Email", val: "info@kiub.co", href: "mailto:info@kiub.co" },
        { lbl: "Phone / WhatsApp", val: "+506 6451 1884", href: "https://wa.me/50664511884" },
        { lbl: "US / WhatsApp", val: "+1 (786) 603-9420", href: "https://wa.me/17866039420" },
        { lbl: "Hours", val: "Monday to Friday, 8:00 a.m. to 5:00 p.m.; Saturdays, 8:00 a.m. to noon (Costa Rica time)" },
      ],
      profilesTitle: "Social media and profiles",
      moreTitle: "More information",
      more: [["Contact", "/en/contact/"], ["Services", "/en/services/"]],
    },
    footer: {
      tagline: "Technology and consulting that drive your business growth, step by step.",
      cols: [
        { h: "Navigation", links: [["Home", "/en/"], ["Services", "/en/services/"], ["Contact", "/en/contact/"]] },
        { h: "Services", links: [["Custom software", "/en/services/"], ["Automation", "/en/services/"], ["Websites", "/en/services/"]] },
        { h: "Company", links: [["Who we are", "/en/#about"], ["Let's talk", "/en/contact/"]] },
      ],
      rights: "All rights reserved.",
      legalId: "Legal ID",
      legalLink: "Legal information",
    },
  },
};

export const t = content.es;
