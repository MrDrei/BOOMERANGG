export interface Product {
  id: string;
  name: string;
  shortName: string;
  category: 'cooking' | 'forming' | 'freezing' | 'battering' | 'breading' | 'evaporators' | 'beverage' | 'all';
  specs: {
    capacity?: string;
    dimensions?: string;
    power?: string;
    beltWidth?: string;
    temperatureRange?: string;
    airVelocity?: string;
    material?: string;
  };
  features: string[];
  imageUrl: string;
  isCustomAsset: boolean;
}

export interface LanguageDictionary {
  brand: string;
  tagline: string;
  navHome: string;
  navProducts: string;
  navSolutions: string;
  navAbout: string;
  navPartners: string;
  navContact: string;
  navQuoteBtn: string;
  heroHeader: string;
  heroSub: string;
  heroPrimaryBtn: string;
  heroSecondaryBtn: string;
  filterAll: string;
  filterCooking: string;
  filterForming: string;
  filterFreezing: string;
  filterBattering: string;
  filterBreading: string;
  filterEvaporators: string;
  filterBeverage: string;
  viewDetails: string;
  specCapacity: string;
  specMaterial: string;
  specBeltWidth: string;
  specPower: string;
  specTemp: string;
  close: string;
  solutionHeader: string;
  solutionSub: string;
  solutionFlowIntro: string;
  whyHeader: string;
  whySub: string;
  whyVal1Title: string;
  whyVal1Text: string;
  whyVal2Title: string;
  whyVal2Text: string;
  whyVal3Title: string;
  whyVal3Text: string;
  stat1Title: string;
  stat1Sub: string;
  stat2Title: string;
  stat2Sub: string;
  contactHeader: string;
  contactSub: string;
  contactOffice: string;
  contactOfficeVal: string;
  contactPhones: string;
  contactEmails: string;
  formName: string;
  formCompany: string;
  formEmail: string;
  formPhone: string;
  formInterest: string;
  formMessage: string;
  formSubmit: string;
  quickLinks: string;
  rightsReserved: string;
  privacy: string;
  terms: string;
  autoReplyTitle: string;
  autoReplyAlert: string;
  salesNotificationTitle: string;
  emailSignatureHeader: string;
  lineSimulatorHeader: string;
  lineSimulatorText: string;
  lineSimulatorBuild: string;
  lineSimulatorEmpty: string;
  lineSimulatorClear: string;
  lineSimulatorTotalCapacity: string;
}

export const translations: Record<'en' | 'de' | 'es', LanguageDictionary> = {
  en: {
    brand: "BOOMERANG GROUP CORP.",
    tagline: "Industrial Food Processing & Packaging Machinery",
    navHome: "Home",
    navProducts: "Products",
    navSolutions: "Solutions",
    navAbout: "About Us",
    navPartners: "Partners",
    navContact: "Contact",
    navQuoteBtn: "Request Quote",
    heroHeader: "Precision Engineering for Industrial Packaging",
    heroSub: "Complete processing lines from preparation to packaging engineered for efficiency, built for absolute scale, and backed by global 24/7 service.",
    heroPrimaryBtn: "Explore Products",
    heroSecondaryBtn: "Contact Sales",
    filterAll: "All Equipment",
    filterCooking: "Cooking Systems",
    filterForming: "Forming Machines",
    filterFreezing: "spiral Freezers",
    filterBattering: "Batter Applicators",
    filterBreading: "Breading Systems",
    filterEvaporators: "Evaporators & Cooling",
    filterBeverage: "Beverage Packaging",
    viewDetails: "View Specifications",
    specCapacity: "Production Capacity",
    specMaterial: "Chassis Material",
    specBeltWidth: "Conveyor Belt Width",
    specPower: "Operational Power",
    specTemp: "Target Temperature",
    close: "Close",
    solutionHeader: "Complete Processing Lines",
    solutionSub: "Pioneering end-to-end lines from preparation to packaging with high-capacity engineering.",
    solutionFlowIntro: "Click each production state badge below to inspect active machinery specs, telemetry models, and engineering integration details:",
    whyHeader: "Why Industrial Operators Choose BOOMERANG",
    whySub: "We synthesize thermal excellence, heavy-duty mechanics, and smart digital precision to design lines that never stop.",
    whyVal1Title: "Continuous Innovation",
    whyVal1Text: "Patented continuous belt designs, fast-clean sanitation structures, and precise micro-forming molds.",
    whyVal2Title: "Unyielding Reliability",
    whyVal2Text: "Manufactured with industrial food-grade 316 stainless steel to ensure double shift life for decades.",
    whyVal3Title: "Global Support Network",
    whyVal3Text: "Dedicated field engineers stationed across North America, Europe, and Asia to guarantee uptime.",
    stat1Title: "500+ Deep Installations",
    stat1Sub: "Installed across 45 countries worldwide",
    stat2Title: "25+ Industry Years",
    stat2Sub: "Of high-throughput continuous manufacturing",
    contactHeader: "Get in Touch with our Engineers",
    contactSub: "Contact our technical sales team to request custom layout drafts, mechanical blueprints, or pricing lists.",
    contactOffice: "Headquarters",
    contactOfficeVal: "BOOMERANG Corp Headquarters, 378 Zone 4 Brgy, Tanauan City, 4232 Batangas",
    contactPhones: "Contact Lines",
    contactEmails: "Specialized Inboxes",
    formName: "Full Name",
    formCompany: "Company Name",
    formEmail: "Business Email",
    formPhone: "Direct Phone",
    formInterest: "Product Interest",
    formMessage: "Outline your operational capacity/needs...",
    formSubmit: "Submit Quote Request",
    quickLinks: "Quick Navigation",
    rightsReserved: "BOOMERANG Corp. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    autoReplyTitle: "Instant Automated Reply Received",
    autoReplyAlert: "SUCCESS: Form submitted! Simulating SMTP server events below.",
    salesNotificationTitle: "Terminal Lead Record sent to sales@boomerangcorp.com",
    emailSignatureHeader: "Boomerang Corporate Email Signature Template",
    lineSimulatorHeader: "Interactive Line Builder & Capacity Flow",
    lineSimulatorText: "Design and calculate your high-throughput processing line. Select machine steps to construct a customized virtual production line flow and estimate its aggregate continuous capacity metric.",
    lineSimulatorBuild: "Assemble Your Line",
    lineSimulatorEmpty: "Draft is dry. Click '+' on machines below to assemble a high-speed line.",
    lineSimulatorClear: "Reset Production Line Draft",
    lineSimulatorTotalCapacity: "Simulated Operational Throughput Capacity Ratio"
  },
  de: {
    brand: "BOOMERANG GROUP CORP.",
    tagline: "Industrielle Lebensmittelverarbeitung & Verpackung",
    navHome: "Startseite",
    navProducts: "Produkte",
    navSolutions: "Systemlösungen",
    navAbout: "Über Uns",
    navPartners: "Partner",
    navContact: "Kontakt",
    navQuoteBtn: "Angebot Anfordern",
    heroHeader: "Präzisions-Ingenieurwesen für industrielle Linien",
    heroSub: "Komplette Prozesslinien von der Vorbereitung bis zur Endverpackung. Entwickelt für höchste Effizienz, gebaut für echten Großbetrieb und globalen 24/7 Support.",
    heroPrimaryBtn: "Produkte Entdecken",
    heroSecondaryBtn: "Vertrieb Kontaktieren",
    filterAll: "Alle Systeme",
    filterCooking: "Kochsysteme",
    filterForming: "Formmaschinen",
    filterFreezing: "Spiralfroster",
    filterBattering: "Nasspanierer",
    filterBreading: "Trockenpanierer",
    filterEvaporators: "Verdampfer & Kühlung",
    filterBeverage: "Getränke-Verpackung",
    viewDetails: "Spezifikationen anzeigen",
    specCapacity: "Produktionsleistung",
    specMaterial: "Chassis-Material",
    specBeltWidth: "Förderbandbreite",
    specPower: "Betriebsleistung",
    specTemp: "Zieltemperatur",
    close: "Schließen",
    solutionHeader: "Komplette Prozesslinien",
    solutionSub: "Pionierarbeit im End-to-End Bereich von der ersten Zutat bis zum gefrorenen Paket.",
    solutionFlowIntro: "Klicken Sie auf eine Produktionsstufe, um Spezifikationen, Live-Telemetrien und mechanische Details zu betrachten:",
    whyHeader: "Warum sich Industrie-Betreiber für BOOMERANG entscheiden",
    whySub: "Wir verbinden thermische Exzellenz, hochbelastbare Mechanik und intelligente digitale Steuerungen in unaufhaltsamen Anlagen.",
    whyVal1Title: "Kontinuierliche Innovation",
    whyVal1Text: "Patentiertes Bandsystem, hygienische Schnellreinigungs-Sektionen und Mikrogussmühlen.",
    whyVal2Title: "Unerreichte Zuverlässigkeit",
    whyVal2Text: "Hergestellt aus lebensmittelechtem 316 Edelstahl für jahrzehntelangen Dreischichtbetrieb.",
    whyVal3Title: "Globales Support-Netzwerk",
    whyVal3Text: "Spezialisten vor Ort in Nordamerika, Europa und Asien sichern Ihre minimale Stillstandszeit.",
    stat1Title: "500+ Großanlagen weltweit",
    stat1Sub: "In über 45 Ländern erfolgreich installiert",
    stat2Title: "25+ Jahre Erfahrung",
    stat2Sub: "In kontinuierlicher Hochleistungsproduktion",
    contactHeader: "Sprechen Sie mit unseren Ingenieuren",
    contactSub: "Kontaktieren Sie unser Vertriebsteam, um Layout-Entwürfe, Maschinenskizzen oder Preislisten anzufordern.",
    contactOffice: "Hauptsitz",
    contactOfficeVal: "BOOMERANG Corp Headquarters, 378 Zone 4 Brgy, Tanauan City, 4232 Batangas",
    contactPhones: "Kontaktleitungen",
    contactEmails: "Fachabteilungen",
    formName: "Vollständiger Name",
    formCompany: "Firmenname",
    formEmail: "Geschäftliche E-Mail",
    formPhone: "Direkte Telefonnummer",
    formInterest: "Produktinteresse",
    formMessage: "Beschreiben Sie Ihre gewünschte Produktionskapazität...",
    formSubmit: "Angebotsanfrage absenden",
    quickLinks: "Direktlinks",
    rightsReserved: "BOOMERANG Corp. Alle Rechte vorbehalten.",
    privacy: "Datenschutzerklärung",
    terms: "Allgemeine Geschäftsbedingungen",
    autoReplyTitle: "Sofortige automatische Antwort erhalten",
    autoReplyAlert: "ERFOLG: Formular gesendet! Postausgang-Simulation unten angezeigt.",
    salesNotificationTitle: "Lead-Datensatz gesendet an sales@boomerangcorp.com",
    emailSignatureHeader: "Boomerang Corporate E-Mail-Signatur",
    lineSimulatorHeader: "Interaktiver Linienkonfigurator",
    lineSimulatorText: "Planen und kalkulieren Sie Ihre hochleistungsfähige Lebensmittelstraße. Fügen Sie Maschinen hinzu, um den aggregierten kontinuierlichen Kapazitätswert zu ermitteln.",
    lineSimulatorBuild: "Linie Zusammenstellen",
    lineSimulatorEmpty: "Keine Maschinen im Entwurf. Klicken Sie bei den Produkten unten auf '+', um Ihre Linie zu erstellen.",
    lineSimulatorClear: "Draft zurücksetzen",
    lineSimulatorTotalCapacity: "Simulierte Gesamt-Produktionskapazität"
  },
  es: {
    brand: "BOOMERANG GROUP CORP.",
    tagline: "Maquinaria Industrial de Procesamiento y Empaque",
    navHome: "Inicio",
    navProducts: "Productos",
    navSolutions: "Soluciones",
    navAbout: "Nosotros",
    navPartners: "Socios",
    navContact: "Contacto",
    navQuoteBtn: "Solicitar Presupuesto",
    heroHeader: "Ingeniería de Precisión para el Empaque Industrial",
    heroSub: "Líneas completas de procesamiento, desde la preparación hasta el empaque final. Diseñadas para la máxima eficiencia y respaldadas por soporte global 24/7.",
    heroPrimaryBtn: "Saber Más",
    heroSecondaryBtn: "Contactar Ventas",
    filterAll: "Todos los Equipos",
    filterCooking: "Sistemas de Cocción",
    filterForming: "Maquinaria de Formado",
    filterFreezing: "Congeladores Espirales",
    filterBattering: "Aplicadores de Batido",
    filterBreading: "Sistemas de Rebozado",
    filterEvaporators: "Evaporadores y Frío",
    filterBeverage: "Empaque de Bebidas",
    viewDetails: "Ver Especificaciones",
    specCapacity: "Capacidad de Producción",
    specMaterial: "Material del Chasis",
    specBeltWidth: "Ancho de Banda de Transporte",
    specPower: "Potencia de Operación",
    specTemp: "Temperatura Objetivo",
    close: "Cerrar",
    solutionHeader: "Líneas Completas Integradas",
    solutionSub: "Maestros en la concepción integral de líneas de producción de alto rendimiento industrial.",
    solutionFlowIntro: "Presione en cada estación de producción para explorar especificaciones activas, telemetría y detalles mecánicos:",
    whyHeader: "¿Por qué los Operarios Eligen BOOMERANG?",
    whySub: "Sintetizamos termodinámica avanzada, robustez de grado militar y automatización controlable para plantas continuas.",
    whyVal1Title: "Innovación Continua",
    whyVal1Text: "Patentes de bandas auto-limpiantes, zonas sanitarias de acceso rápido y moldes micrométricos.",
    whyVal2Title: "Fiabilidad Inquebrantable",
    whyVal2Text: "Fabricación rígida con robusto acero inoxidable AISI 316 de calibre industrial para tres turnos.",
    whyVal3Title: "Soporte Global Permanente",
    whyVal3Text: "Nuestros ingenieros de campo se encuentran situados de manera constante en América, Europa y Asia.",
    stat1Title: "500+ Plantas Operando",
    stat1Sub: "Instaladas con éxito en más de 45 países",
    stat2Title: "25+ Años de Liderazgo",
    stat2Sub: "Proveyendo soluciones de empaque ininterrumpidas",
    contactHeader: "Hable con un Ingeniero de Proyectos",
    contactSub: "Consúltenos hoy mismo para recibir bosquejos a medida, planos CAD de su línea de producción o tarifas.",
    contactOffice: "Oficina Central",
    contactOfficeVal: "Sede de BOOMERANG Corp, 378 Zone 4 Brgy, Tanauan City, 4232 Batangas",
    contactPhones: "Líneas Directas",
    contactEmails: "Bandejas Especializadas",
    formName: "Nombre y Apellido",
    formCompany: "Nombre de la Empresa",
    formEmail: "Correo Electrónico Laboral",
    formPhone: "Teléfono de Contacto",
    formInterest: "Equipo de Interés",
    formMessage: "Describa detalladamente su volumen u objetivos...",
    formSubmit: "Enviar Solicitud de Cotización",
    quickLinks: "Navegación Rápida",
    rightsReserved: "BOOMERANG Corp. Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    terms: "Condiciones de Uso",
    autoReplyTitle: "Respuesta Automática Instantánea",
    autoReplyAlert: "VENTAJA: ¡Formulario enviado! Simulando servidor de correo electrónico SMTP.",
    salesNotificationTitle: "Notificación de Oportunidad enviada a sales@boomerangcorp.com",
    emailSignatureHeader: "Firma Corporativa Estándar Boomerang",
    lineSimulatorHeader: "Ensamblador de Línea Interactivo",
    lineSimulatorText: "Cree y calcule su propia fábrica procesadora. Agregue maquinarias para calcular el flujo máximo de rendimiento por hora.",
    lineSimulatorBuild: "Configurar Línea",
    lineSimulatorEmpty: "Borrador vacío. Presione '+' en los productos a continuación para estructurar su línea.",
    lineSimulatorClear: "Limpiar Línea Simulada",
    lineSimulatorTotalCapacity: "Capacidad de Rendimiento Operativo Simulado"
  }
};

export const productsData: Product[] = [
  {
    id: "cooker-alfa",
    name: "ALFA Continuous Cooking & Frying Tunnel",
    shortName: "ALFA Cooking Equipment",
    category: "cooking",
    imageUrl: "/src/assets/images/cooking_fryer_1781913347389.jpg",
    isCustomAsset: true,
    specs: {
      capacity: "1,200 kg/hr - 4,500 kg/hr",
      beltWidth: "800 mm / 1000 mm options",
      power: "140 kW electric heating or thermal oil system",
      material: "316Ti Heavy-Gauge Food Grade Stainless Steel",
      temperatureRange: "140°C - 200°C adjustable with thermo-modulation"
    },
    features: [
      "Dynamic dual sediment sediment scraper for extended oil lifespan",
      "Pneumatic hood lifting mechanism for comprehensive wash-down cycles",
      "Integrated vapor extraction fan and steam injection seals",
      "Low oil volume design with high thermal replacement rates"
    ]
  },
  {
    id: "bbf-line",
    name: "ALFA COMPLETE BBF LINE (Batter-Bread-Fry)",
    shortName: "ALFA COMPLETE BBF LINE",
    category: "cooking",
    imageUrl: "/src/assets/images/bbf_hero_banner_1781913360914.jpg",
    isCustomAsset: true,
    specs: {
      capacity: "Up to 5,000 kg/hr finished output",
      dimensions: "Total operational length: 28.5 meters",
      beltWidth: "1,000 mm heavy duty wirelink mesh",
      power: "320 kW peak loading aggregate",
      material: "Full high-strength 316 Stainless Steel (SUS316)"
    },
    features: [
      "Perfect sync across Forming, Battering, Breading, Frying, and Cooling modules",
      "Modular design allows continuous upgrades and belt reconfiguration",
      "Centralized master PLC control system with Siemens HMR display panel",
      "Dynamic automatic transfer bridges to guarantee product alignment preservation"
    ]
  },
  {
    id: "afm-600",
    name: "ALFA AFM-600 Automatic Multi Forming Machine",
    shortName: "ALFA AFM-600 Forming",
    category: "forming",
    imageUrl: "/src/assets/images/afm600_forming_1781913373962.jpg",
    isCustomAsset: true,
    specs: {
      capacity: "50 to 100 strokes per minute",
      beltWidth: "600 mm usable forming width",
      power: "11 kW hydraulic drive + 1.5 kW control system",
      material: "SUS316 and food-grade high density polymer molds",
      dimensions: "2,100mm L x 1,150mm W x 2,050mm H"
    },
    features: [
      "Pneumatically coupled ejection mechanism with high molding repetition accuracy",
      "Hermetically isolated high-pressure food portioning pump",
      "Rapid-change frame design: switch molds in under 10 minutes без custom tools",
      "Excellent thickness control adjustment from 6mm to 40mm profiles"
    ]
  },
  {
    id: "spiral-freezer",
    name: "SSF256516 Single Spiral Freezer",
    shortName: "ALFA Single Spiral Freezer",
    category: "freezing",
    imageUrl: "/src/assets/images/spiral_freezer_1781913387832.jpg",
    isCustomAsset: true,
    specs: {
      capacity: "1,500 kg/hr - 3,500 kg/hr continuous quick freezing",
      temperatureRange: "-35°C to -42°C cryogenic internal chamber temp",
      beltWidth: "650 mm self-stacking mesh belt",
      airVelocity: "12 m/s customized vertical airflow jet circulation",
      power: "75 kW evaporator fan motors aggregate"
    },
    features: [
      "Self-supporting belt edges remove need for traditional inner frame drums",
      "Integrated high-pressure automatic belt defrosting washer-dryer",
      "Thick polyurethane floor pan with continuous welded protective liner",
      "Modular structural shipping blocks for expedited assembly inside your plant"
    ]
  },
  {
    id: "batter-mixer",
    name: "BM-250 High-Shear Automatic Batter Mixer",
    shortName: "BATTER MIXER / BATTER2",
    category: "battering",
    imageUrl: "/src/assets/images/batter_mixer_1781913401011.jpg",
    isCustomAsset: true,
    specs: {
      capacity: "250 Liters batch preparation mixing",
      power: "7.5 kW high-shear stator stirrer motor",
      material: "Sanitary SUS316 Stainless steel, polished interior",
      dimensions: "1,450mm H x 980mm diameter outer vessel"
    },
    features: [
      "Ultra high-speed stator impeller breaks powder lumps in under 60 seconds",
      "Integrated jacketed cooling walls for glycol thermal control to avoid batter souring",
      "Automatic dynamic dry recipe weight transducers and water meters",
      "Tri-clamp sanitary valves compatible with automated CIP cleaning regimes"
    ]
  },
  {
    id: "breader-mach",
    name: "ALFA BR-600 Automatic Breading Applicator",
    shortName: "BREADING MACHINE / SYSTEM",
    category: "breading",
    imageUrl: "/src/assets/images/breading_applicator_1781913414270.jpg",
    isCustomAsset: true,
    specs: {
      beltWidth: "600 mm wire conveyor bed spacing",
      power: "2.2 kW variable frequency electrical drivers",
      material: "Heavy-duty SUS316 food-grade build",
      capacity: "Compatible with up to 2,000 kg/hr production output"
    },
    features: [
      "Upper bread crumbs shower and lower crumb-bed drag guarantees full 360 coating",
      "Adjustable high-volume blow-off air knife controls breading thickness precisely",
      "Vibratory feedback mesh removes large clustered crumbs automatically",
      "Compatible with flour, fine crumbs, and heavy panko materials"
    ]
  },
  {
    id: "evap-cooling",
    name: "ES-120 High-Efficiency Evaporator Coil Systems",
    shortName: "EVAPORATOR SYSTEM",
    category: "evaporators",
    imageUrl: "/src/assets/images/evap_coil_system_1781913426512.jpg",
    isCustomAsset: true,
    specs: {
      capacity: "120 kW cooling capacity rating at -40°C SST",
      material: "Corrosion-proof aluminum fins on stainless steel 316 tubing",
      power: "IP66 rated moisture-proof high speed ventilation fans",
      dimensions: "3,400mm L x 1,200mm W x 1,600mm H"
    },
    features: [
      "Staggered industrial tube layout maximizes the hot-air turbulence coefficient",
      "Optimized for direct expansion Ammonia (NH3) or Glycol/Freon blends",
      "Dual-circuit hot gas defrosting tray avoids ice structural buildup",
      "Hygienic round-corner casing eliminates moisture pooling and microbe risks"
    ]
  },
  {
    id: "bevpack-canner",
    name: "BEVPACK B-12000 Rotary Canning & Seaming Bloc",
    shortName: "BEVPACK Canning System",
    category: "beverage",
    imageUrl: "/src/assets/images/bevpack_canner_system_1781913716912.jpg",
    isCustomAsset: true,
    specs: {
      capacity: "6,000 to 12,000 cans/hour adjustable",
      dimensions: "4,200mm L x 1,800mm W x 2,400mm H",
      power: "24 kW peak, 380V 3-phase heavy duty",
      beltWidth: "120 mm custom stainless steel tabletop conveyor",
      material: "Hygienic SUS316L Stainless Steel & Food-grade polymers"
    },
    features: [
      "Counter-pressure isobaric filling valves designed specifically for sparkling water, sodas, and beer",
      "Integrated nitrogen purging system to minimize residual oxygen levels and secure quality freshness",
      "Heavy-duty atmospheric double-seaming head with titanium-coated rollers for absolute leak proofing",
      "Integrated sanitary wash-in-place (CIP) connectors with pre-programmed chemical rinse steps"
    ]
  },
  {
    id: "hydro-fill",
    name: "HYDRO-FILL H-16000 Precision Carbonated Bottling System",
    shortName: "HYDRO-FILL Bottling Monobloc",
    category: "beverage",
    imageUrl: "/src/assets/images/hydro_fill_bottling_1781913735813.jpg",
    isCustomAsset: true,
    specs: {
      capacity: "8,000 to 16,000 bottles/hour",
      dimensions: "5,400mm L x 2,200mm W x 2,600mm H",
      power: "32 kW electrical aggregate",
      beltWidth: "150 mm acetal low-friction modular belt",
      material: "Corrosion-resistant SUS316 with tempered glass guard safety doors"
    },
    features: [
      "Dynamic visual fill-height sensor coupled directly to an automatic rejection gate",
      "Dual rinse-fill-cap monobloc structure representing the pinnacle of mechanical integration",
      "Pick-and-place servo capping head allowing precision torque adjustments on plastic or aluminum caps",
      "Laminar clean-air hood flow filters with absolute HEPA efficiency for sterile bottle filling environments"
    ]
  },
  {
    id: "kinetic-packer",
    name: "KINETIC K-30 High-Speed End-of-Line Case Packer",
    shortName: "KINETIC Case Packer",
    category: "beverage",
    imageUrl: "/src/assets/images/kinetic_case_packer_1781913749395.jpg",
    isCustomAsset: true,
    specs: {
      capacity: "Up to 30 custom shippers or trays per minute",
      dimensions: "3,800mm L x 1,950mm W x 2,100mm H",
      power: "18.5 kW peak power draw",
      beltWidth: "600 mm pack feeding table and case discharge modular conveyor",
      material: "Anodized structural steel and food-grade stainless enclosure panels"
    },
    features: [
      "Multi-axis servo-driven vacuum pick-and-place arm for carton erecting and multi-can grouping",
      "Quick-change slide guides allow fast changeovers between 24-can packs and 12-can variety boxes",
      "Hot-melt gluing module from Nordson with micro-bead technology for high-strength case seal",
      "Intuitive touch screen panel displaying real-time productivity yield metrics and diagnostic troubleshooting logs"
    ]
  },
  {
    id: "gravitas-wine",
    name: "GRAVITAS G-8000 Gravity Wine & Spirits Bottling Bloc",
    shortName: "GRAVITAS Wine Bottler",
    category: "beverage",
    imageUrl: "/src/assets/images/gravitas_wine_bottler_1781913763442.jpg",
    isCustomAsset: true,
    specs: {
      capacity: "4,000 to 8,000 glass bottles/hour",
      dimensions: "4,800mm L x 2,000mm W x 2,500mm H",
      power: "15 kW integrated drive line",
      beltWidth: "100mm sanitary plastic slat-chain",
      material: "Pure AISI 304 & AISI 316L Contact Parts with hygienic seal rings"
    },
    features: [
      "Low-vacuum gravity filler valves ensure drip-free, extremely accurate filling height adjustments",
      "Integrated automatic corking head with vacuum cork insertion and dust aspiration systems",
      "Nitrogen gas injection block before corking to replace air in the neck space for wine longevity",
      "Safety tempered glass front enclosure shields operators from noise and high speed mechanics"
    ]
  },
  {
    id: "thermo-shrink",
    name: "THERMO-PACK SW-40 Automatic Bundling & Shrink Tunnel",
    shortName: "THERMO-PACK Shrink Wrapper",
    category: "beverage",
    imageUrl: "/src/assets/images/thermo_shrink_tunnel_1781913778389.jpg",
    isCustomAsset: true,
    specs: {
      capacity: "Up to 40 wrap cycles/minute for multi-packs",
      dimensions: "5,100mm L x 1,600mm W x 1,950mm H",
      power: "42 kW high-efficiency thermal recirculator",
      beltWidth: "450mm heat-resistant wire-mesh conveyor",
      material: "Heavy-duty steel main framework with powder finish and stainless guards"
    },
    features: [
      "Advanced hot-air recirculation tunnel design cuts overall power needs by 30% without package issues",
      "Integrated film-feeding system compatible with both plain or printed registers for custom brands",
      "High speed cold air fan unit situated directly at the tunnel outlet for fast film cooling",
      "PLC controller with memory storage for up to 50 distinct bundle and layer recipes"
    ]
  }
];

export const processFlowSteps = [
  {
    step: 1,
    title: { en: "Preparation & Mixing", de: "Vorbereitung & Mischung", es: "Preparación y Mezcla" },
    machine: "BM-250 High-Shear Mixer",
    icon: "Layers",
    description: {
      en: "Ingredients are homogenized and blended under temperature-controlled jacketed storage.",
      de: "Zutaten werden homogenisiert und in temperaturkontrollierten Rührkesseln zubereitet.",
      es: "Los ingredientes se homogeneizan en tanques con control térmico y mezcla automática."
    },
    specSummary: "250L, Jacketed Cooling walls"
  },
  {
    step: 2,
    title: { en: "Pneumatic Forming", de: "Formen", es: "Formado de Porciones" },
    machine: "ALFA AFM-600 Forming System",
    icon: "Grid",
    description: {
      en: "Precision pistons mold the food mass into correct consumer shapes at 100 strokes/min.",
      de: "Präzisionsstempel formen die Lebensmittelmasse mit bis zu 100 Hüben/Min.",
      es: "Pistones de alta velocidad moldean la masa alimentaria a 100 golpes por minuto."
    },
    specSummary: "600mm belt, 50-100 strokes/min"
  },
  {
    step: 3,
    title: { en: "Batter Application", de: "Nasspanierung", es: "Aplicación de Batido" },
    machine: "ALFA BM-600 Battering Waterfall",
    icon: "Droplets",
    description: {
      en: "Continuous liquid coating envelopes the shaped product in a uniform protective curtain.",
      de: "Ein kontinuierlicher Teigvorhang umhüllt das Produkt gleichmäßig.",
      es: "Una cortina fluida continua reviste los alimentos con total uniformidad tridimensional."
    },
    specSummary: "Waterfall recirculation pump, flow regulator"
  },
  {
    step: 4,
    title: { en: "Breading Coating", de: "Trockenpanierung", es: "Cobertura de Rebozado" },
    machine: "ALFA BR-600 Crumbers",
    icon: "Sparkles",
    description: {
      en: "Standard or Japanese style panko crumbs are sifted onto the wet batter layer.",
      de: "Standard oder Panko-Brösel werden luftig auf die feuchte Teigschicht aufgebracht.",
      es: "Pan molido o panko japonés son esparcidos para lograr la adherencia exterior idónea."
    },
    specSummary: "Vibratory sieve, blower fan"
  },
  {
    step: 5,
    title: { en: "Continuous Thermal Cooking", de: "Kontinuierliches Garen", es: "Cocción Continua" },
    machine: "ALFA Fryer & Cooking Tunnel",
    icon: "Flame",
    description: {
      en: "Deep cooking tunnel cooks crisp layers with sub-second temperature response control.",
      de: "Der Durchlauftunnel gart und knuspert mit zehntelgrad-genauer Regelung.",
      es: "Cocción uniforme y controlado calentamiento con filtros de aceite incorporados."
    },
    specSummary: "Max 200°C accuracy, dual scraper belt"
  },
  {
    step: 6,
    title: { en: "Single Spiral Freezing", de: "Spiralschockfrosten", es: "Congelación en Espiral" },
    machine: "SSF256516 Single Spiral Freezer",
    icon: "Snowflake",
    description: {
      en: "Internal core temperatures drop instantly to preservation specs at -38°C.",
      de: "Die Kerntemperatur wird blitzschnell im Kältetunnel auf -38°C abgesenkt.",
      es: "La temperatura desciende rápidamente a -38°C mediante ráfagas criogénicas."
    },
    specSummary: "Self-stacking belt, vertical airflow"
  },
  {
    step: 7,
    title: { en: "Final Packaging Integration", de: "Endverpackung", es: "Empacado Final" },
    machine: "BOOMERANG Packager Connect",
    icon: "Box",
    description: {
      en: "Continuous weighing and final carton boxing lines seal the product for shipping.",
      de: "Kontinuierliche Wiegesysteme und Förderbänder kartonieren das fertige Frostprodukt.",
      es: "Balanzas multicabezal y encajonadoras dinámicas sellan los lotes sanitariamente."
    },
    specSummary: "Multi-head scale integration, carton packers"
  }
];

export const mockLeadNotification = (formData: {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  assembledLine?: string[];
}, timeString: string) => {
  return `----------------- SECURITY LOG: INCOMING BOOMERANG LEAD REGISTERED -----------------
Timestamp: ${timeString}
Destination Inbound Mailbox: sales@boomerangcorp.com
Message Origin: Cloud Run App Node Front-End Ingress
------------------------------------------------------------------------------------
[SENDER INFORMATION]
Contact Name  : ${formData.name || 'Anonymous Operator'}
Company Corp  : ${formData.company || 'Not Specified'}
Email Address : ${formData.email || 'unknown@domain.com'}
Phone Number  : ${formData.phone || 'N/A'}

[INQUIRY META]
Assigned Lead Category : Dynamic Web Lead
Product Line Interest  : ${formData.interest}
Simulated Line Draft  : ${formData.assembledLine && formData.assembledLine.length > 0 ? formData.assembledLine.join(' -> ') : 'None built'}

[CUSTOMER REQ MESSAGE]
"${formData.message || 'Customer initiated quick-interest inquiry via responsive portal configuration.'}"

[ROUTING METRICS]
SMTP Mail Transfer Protocol Status: 250 OK (Queued for Delivery)
Route: internal-mx7.boomerangcorp.com [206.182.25.99]
SPF Validation Code: SPF_PASS
DKIM Signed Domain: boomerangcorp.com
------------------ END OF SECURE SYSTEM TELEMETRY DUMP ------------------`;
};

export const mockAutoResponseEmail = (formData: {
  name: string;
  company: string;
  interest: string;
  email?: string;
}, timeString: string) => {
  const currentYear = new Date().getFullYear();
  return `Date: ${timeString}
From: "Boomerang Corp Inbound Team" <info@boomerangcorp.com>
To: "${formData.name}" <${formData.email || 'web-submitted@client.com'}>
Subject: Automated Confirmation - Boomerang Corp Industrial Packaging Technical Ticket [Ref #${Math.floor(Math.random() * 900000 + 100000)}]

Dear ${formData.name || 'Valued Partner'},

Thank you for contacting BOOMERANG Corp. This is an automated notification confirming that our Senior Application Engineering team has received your online specifications worksheet.

Our technical estimators are currently analyzing your food processing line objectives:
• Primary Machinery Line: ${formData.interest}
${formData.company ? `• Organization Field Reference: ${formData.company}` : ''}

Over the next 18-24 business hours, an industrial engineer stationed in your region will draft a customized conceptual 3D layout plan.

For expedited consulting, please mention ticket code BOM-${Math.floor(Math.random() * 9000 + 1000)} when calling our corporate support offices.

If you have supplementary floor space layout blueprints or target speed charts, reply directly to this notification and attach them as PDF formats.

Sincerely,

BOOMERANG Corp Inbound Routing System
Automated Response Service

============= PROFESSIONAL METALLIC WEB SIGNATURE BRANDING =============

  ██████╗  ██████╗  ██████╗ ███╗   ███╗███████╗██████╗  █████╗ ███╗   ██╗ ██████╗ 
  ██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║██╔════╝██╔══██╗██╔══██╗████╗  ██║██╔════╝ 
  ██████╔╝██║   ██║██║   ██║██╔████╔██║█████╗  ██████╔╝███████║██╔██╗ ██║██║  ███╗
  ██╔══██╗██║   ██║██║   ██║██║╚██╔╝██║██╔══╝  ██╔══██╗██╔══██║██║╚██╗██║██║   ██║
  ██████╔╝╚██████╔╝╚██████╔╝██║ ╚═╝ ██║███████╗██║  ██║██║  ██║██║ ╚████║╚██████╔╝
  ╚══════╝  ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ 
  
  [ BRAND GRAPHIC: ABSTRACT DOUBLE-ROTATING SOLID STEEL BOOMERANG SATELLITE ]
  BOOMERANG Corp Headquarters — Industrial Precision Machinery
  378 Zone 4 Brgy, Tanauan City, 4232 Batangas
  
  Main Line Support: +1 (905) 555-0147  |  Sales Direct: +1 (905) 555-0148
  Engineering Desk : support@boomerangcorp.com | Parts Desk: parts@boomerangcorp.com
  Web Portal       : www.boomerangcorp.com
  
  *** This transmission contains classified manufacturing methodology and is intended solely for the addressee. ***
========================================================================`;
};
