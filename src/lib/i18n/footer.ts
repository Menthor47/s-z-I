// Translations for Footer component

export interface FooterLink {
  readonly label: string;
  readonly to: string;
}

export interface FooterTranslations {
  readonly taglineTemplate: string;
  readonly quickLinksTitle: string;
  readonly quickLinks: readonly FooterLink[];
  readonly servicesTitle: string;
  readonly services: readonly string[];
  readonly contactTitle: string;
  readonly copyright: string;
}

export const footerTranslationsEn: FooterTranslations = {
  taglineTemplate: "across {country} and Europe since {year}",
  quickLinksTitle: "Quick Links",
  quickLinks: [
    { label: "Our Services", to: "/services" },
    { label: "Get Quote", to: "/get-quote" },
    { label: "Relocation", to: "/relocation" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
  ],
  servicesTitle: "Services",
  services: [
    "Spanish Road Transport",
    "European Logistics",
    "Global Shipping",
    "Warehousing",
    "Supply Chain",
  ],
  contactTitle: "Contact Us",
  copyright: "All rights reserved.",
};

export const footerTranslationsEs: FooterTranslations = {
  taglineTemplate: "en {country} y Europa desde {year}",
  quickLinksTitle: "Enlaces rápidos",
  quickLinks: [
    { label: "Nuestros servicios", to: "/es/services" },
    { label: "Solicitar presupuesto", to: "/es/get-quote" },
    { label: "Reubicación", to: "/es/relocation" },
    { label: "Sobre nosotros", to: "/es/about" },
    { label: "Contacto", to: "/es/contact" },
  ],
  servicesTitle: "Servicios",
  services: [
    "Transporte nacional",
    "Logística europea",
    "Envíos globales",
    "Almacenaje",
    "Cadena de suministro",
  ],
  contactTitle: "Contáctanos",
  copyright: "Todos los derechos reservados.",
};

export function getFooterTranslations(isSpanish: boolean): FooterTranslations {
  return isSpanish ? footerTranslationsEs : footerTranslationsEn;
}
