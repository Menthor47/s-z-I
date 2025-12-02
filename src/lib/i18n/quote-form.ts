// Translations for InstantQuoteForm component

export interface CityOption {
  readonly value: string;
  readonly label: string;
}

export interface ServiceOption {
  readonly value: string;
  readonly label: string;
}

export interface QuoteFormTranslations {
  readonly title: string;
  readonly labels: {
    readonly origin: string;
    readonly destination: string;
    readonly weight: string;
    readonly serviceType: string;
  };
  readonly placeholders: {
    readonly origin: string;
    readonly destination: string;
    readonly weight: string;
    readonly serviceType: string;
  };
  readonly errors: {
    readonly origin: string;
    readonly destination: string;
  };
  readonly submitButton: string;
  readonly originCities: readonly CityOption[];
  readonly destinationCities: readonly CityOption[];
  readonly serviceTypes: readonly ServiceOption[];
  readonly quotePath: string;
}

export const quoteFormTranslationsEn: QuoteFormTranslations = {
  title: "Get Instant Quote",
  labels: {
    origin: "Origin City",
    destination: "Destination City",
    weight: "Weight (kg)",
    serviceType: "Service Type",
  },
  placeholders: {
    origin: "Select origin",
    destination: "Select destination",
    weight: "Enter weight",
    serviceType: "Select service",
  },
  errors: {
    origin: "Please select an origin",
    destination: "Please select a destination",
  },
  submitButton: "Calculate Cost",
  originCities: [
    { value: "madrid", label: "Madrid, Spain" },
    { value: "barcelona", label: "Barcelona, Spain" },
    { value: "valencia", label: "Valencia, Spain" },
    { value: "seville", label: "Seville, Spain" },
    { value: "bilbao", label: "Bilbao, Spain" },
    { value: "malaga", label: "Málaga, Spain" },
    { value: "zaragoza", label: "Zaragoza, Spain" },
    { value: "lisbon", label: "Lisbon, Portugal" },
    { value: "porto", label: "Porto, Portugal" },
  ],
  destinationCities: [
    { value: "paris", label: "Paris, France" },
    { value: "lyon", label: "Lyon, France" },
    { value: "marseille", label: "Marseille, France" },
    { value: "berlin", label: "Berlin, Germany" },
    { value: "munich", label: "Munich, Germany" },
    { value: "frankfurt", label: "Frankfurt, Germany" },
    { value: "amsterdam", label: "Amsterdam, Netherlands" },
    { value: "rotterdam", label: "Rotterdam, Netherlands" },
    { value: "brussels", label: "Brussels, Belgium" },
    { value: "antwerp", label: "Antwerp, Belgium" },
    { value: "london", label: "London, UK" },
    { value: "manchester", label: "Manchester, UK" },
    { value: "milan", label: "Milan, Italy" },
    { value: "rome", label: "Rome, Italy" },
    { value: "zurich", label: "Zurich, Switzerland" },
    { value: "vienna", label: "Vienna, Austria" },
    { value: "copenhagen", label: "Copenhagen, Denmark" },
    { value: "stockholm", label: "Stockholm, Sweden" },
  ],
  serviceTypes: [
    { value: "spanish-road", label: "Spanish Road" },
    { value: "european-road", label: "European Road" },
    { value: "express", label: "Express Delivery" },
    { value: "global", label: "Global Shipping" },
  ],
  quotePath: "/get-quote",
};

export const quoteFormTranslationsEs: QuoteFormTranslations = {
  title: "Calcula tu presupuesto",
  labels: {
    origin: "Ciudad de origen",
    destination: "Ciudad de destino",
    weight: "Peso (kg)",
    serviceType: "Tipo de servicio",
  },
  placeholders: {
    origin: "Selecciona origen",
    destination: "Selecciona destino",
    weight: "Introduce el peso",
    serviceType: "Selecciona servicio",
  },
  errors: {
    origin: "Por favor selecciona un origen",
    destination: "Por favor selecciona un destino",
  },
  submitButton: "Calcular coste",
  originCities: [
    { value: "madrid", label: "Madrid, España" },
    { value: "barcelona", label: "Barcelona, España" },
    { value: "valencia", label: "Valencia, España" },
    { value: "seville", label: "Sevilla, España" },
    { value: "bilbao", label: "Bilbao, España" },
    { value: "malaga", label: "Málaga, España" },
    { value: "zaragoza", label: "Zaragoza, España" },
    { value: "lisbon", label: "Lisboa, Portugal" },
    { value: "porto", label: "Oporto, Portugal" },
  ],
  destinationCities: [
    { value: "paris", label: "París, Francia" },
    { value: "lyon", label: "Lyon, Francia" },
    { value: "marseille", label: "Marsella, Francia" },
    { value: "berlin", label: "Berlín, Alemania" },
    { value: "munich", label: "Múnich, Alemania" },
    { value: "frankfurt", label: "Fráncfort, Alemania" },
    { value: "amsterdam", label: "Ámsterdam, Países Bajos" },
    { value: "rotterdam", label: "Róterdam, Países Bajos" },
    { value: "brussels", label: "Bruselas, Bélgica" },
    { value: "antwerp", label: "Amberes, Bélgica" },
    { value: "london", label: "Londres, Reino Unido" },
    { value: "manchester", label: "Mánchester, Reino Unido" },
    { value: "milan", label: "Milán, Italia" },
    { value: "rome", label: "Roma, Italia" },
    { value: "zurich", label: "Zúrich, Suiza" },
    { value: "vienna", label: "Viena, Austria" },
    { value: "copenhagen", label: "Copenhague, Dinamarca" },
    { value: "stockholm", label: "Estocolmo, Suecia" },
  ],
  serviceTypes: [
    { value: "spanish-road", label: "Transporte nacional" },
    { value: "european-road", label: "Transporte europeo" },
    { value: "express", label: "Entrega exprés" },
    { value: "global", label: "Envío global" },
  ],
  quotePath: "/es/get-quote",
};

export function getQuoteFormTranslations(isSpanish: boolean): QuoteFormTranslations {
  return isSpanish ? quoteFormTranslationsEs : quoteFormTranslationsEn;
}
