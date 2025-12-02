import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { FooterEs } from "@/components/es/FooterEs";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { TrustSignalsEs } from "@/components/es/TrustSignalsEs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Building2, Users, Truck, Package, Shield, Clock } from "lucide-react";
import { loadAttribution, saveAttribution } from "@/lib/attribution";

type AudienceType = "expat" | "b2b" | "realestate" | "office" | "general";
type ServiceFocus = "relocation" | "freight" | "general";

interface PartnerTestimonial {
  readonly name: string;
  readonly company: string;
  readonly title: string;
  readonly content: string;
  readonly rating: number;
}

interface PartnerConfig {
  readonly slug: string;
  readonly partnerName: string;
  readonly audience: AudienceType;
  readonly heroTitle: string;
  readonly heroSubtitle: string;
  readonly primaryService: ServiceFocus;
  readonly testimonial: PartnerTestimonial;
  readonly ctaText: string;
  readonly ctaSecondary: string;
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly benefits: readonly string[];
}

const PARTNER_CONFIGS_ES: Record<string, PartnerConfig> = {
  inmobiliarias: {
    slug: "inmobiliarias",
    partnerName: "Socios Inmobiliarios",
    audience: "realestate",
    heroTitle: "Servicios de Mudanza para Tus Clientes",
    heroSubtitle:
      "Ayuda a tus compradores a instalarse en su nuevo hogar en España. Nosotros nos encargamos de la logística de la mudanza.",
    primaryService: "relocation",
    testimonial: {
      name: "Ana García",
      company: "Costa del Sol Properties",
      title: "Agente Inmobiliaria",
      content:
        "S&Z Trading se ha convertido en nuestra recomendación principal para clientes internacionales. Gestionan todo de puerta a puerta y nuestros clientes siempre dan feedback positivo.",
      rating: 5,
    },
    ctaText: "Solicitar Presupuesto para Tu Cliente",
    ctaSecondary: "Colabora con Nosotros",
    seoTitle: "Servicios de Mudanza para Inmobiliarias | S&Z Trading",
    seoDescription:
      "Colabora con S&Z Trading para ofrecer a tus compradores servicios de mudanza sin complicaciones. Mudanzas puerta a puerta en toda Europa.",
    benefits: [
      "Mudanzas internacionales puerta a puerta",
      "Embalaje y manipulación profesional",
      "Horarios flexibles según fechas de cierre",
      "Gestor de cuenta dedicado para agentes",
    ],
  },
  expatriados: {
    slug: "expatriados",
    partnerName: "Red de Expatriados",
    audience: "expat",
    heroTitle: "¿Te mudas a España? Te lo ponemos fácil",
    heroSubtitle:
      "Desde tu hogar actual hasta tu nueva vida en España. Servicio completo de mudanza con embalaje profesional, gestión aduanera y entrega.",
    primaryService: "relocation",
    testimonial: {
      name: "James Wilson",
      company: "Reubicado desde Reino Unido",
      title: "Expatriado en Málaga",
      content:
        "Mudar todo nuestro hogar de Londres a Málaga parecía abrumador hasta que encontramos S&Z Trading. Gestionaron todo profesionalmente y nuestras pertenencias llegaron en perfecto estado.",
      rating: 5,
    },
    ctaText: "Solicita Tu Presupuesto de Mudanza",
    ctaSecondary: "Conoce Nuestro Proceso",
    seoTitle: "Mudarse a España | Servicios de Reubicación Internacional | S&Z Trading",
    seoDescription:
      "¿Planeas tu mudanza a España? Servicios profesionales de reubicación puerta a puerta. Embalaje, aduanas y entrega gestionados por expertos.",
    benefits: [
      "Servicio completo de embalaje y desembalaje",
      "Documentación aduanera gestionada",
      "Opciones de almacenamiento si es necesario",
      "Seguimiento durante toda tu mudanza",
    ],
  },
  "logistica-b2b": {
    slug: "logistica-b2b",
    partnerName: "Logística B2B",
    audience: "b2b",
    heroTitle: "Transporte Europeo Fiable para Tu Empresa",
    heroSubtitle:
      "Rutas regulares por España, Francia, Alemania y más. Tarifas competitivas, seguimiento en tiempo real y soporte dedicado.",
    primaryService: "freight",
    testimonial: {
      name: "Carlos Méndez",
      company: "TechDistrib Solutions",
      title: "Responsable de Logística",
      content:
        "S&Z Trading es nuestro socio fiable desde hace 3 años. Redujeron nuestros costes de envío un 22% y mejoraron los tiempos de entrega. Equipo muy profesional.",
      rating: 5,
    },
    ctaText: "Solicitar Presupuesto Empresarial",
    ctaSecondary: "Hablar de Tus Necesidades Logísticas",
    seoTitle: "Servicios de Transporte B2B España y Europa | S&Z Trading",
    seoDescription:
      "Transporte por carretera europeo para empresas. Rutas regulares España-Francia-Alemania-UK. Tarifas competitivas y entregas fiables.",
    benefits: [
      "Rutas europeas regulares",
      "Descuentos por volumen disponibles",
      "Seguimiento de envíos en tiempo real",
      "Gestor de cuenta dedicado",
    ],
  },
  "mudanzas-oficinas": {
    slug: "mudanzas-oficinas",
    partnerName: "Mudanzas de Oficinas",
    audience: "office",
    heroTitle: "Mudanzas de Oficina con Mínimo Tiempo de Inactividad",
    heroSubtitle:
      "¿Trasladas tu empresa a una nueva ubicación? Coordinamos cada detalle para que tu equipo vuelva a trabajar rápidamente.",
    primaryService: "relocation",
    testimonial: {
      name: "María Santos",
      company: "EuroManufacture Ltd",
      title: "Directora de Cadena de Suministro",
      content:
        "Servicio excelente para la reubicación de nuestro almacén. Su sistema de seguimiento es genial y la comunicación siempre es rápida. Sin ningún problema.",
      rating: 5,
    },
    ctaText: "Planifica Tu Mudanza de Oficina",
    ctaSecondary: "Habla con Nuestro Equipo",
    seoTitle: "Servicios de Mudanza de Oficinas y Empresas | S&Z Trading",
    seoDescription:
      "Servicios profesionales de mudanza de oficinas. Minimiza el tiempo de inactividad con planificación experta, embalaje y coordinación.",
    benefits: [
      "Mudanzas en fines de semana y fuera de horario",
      "Manipulación de equipos informáticos",
      "Desmontaje y montaje de mobiliario",
      "Ejecución coordinada planta por planta",
    ],
  },
  idealista: {
    slug: "idealista",
    partnerName: "Idealista",
    audience: "realestate",
    heroTitle: "Servicios de mudanza para clientes de Idealista",
    heroSubtitle:
      "Para compradores e inquilinos de Idealista que se mudan dentro de España o desde el extranjero. Coordinamos toda la mudanza para que lleguen con todo preparado.",
    primaryService: "relocation",
    testimonial: {
      name: "Ana García",
      company: "Costa del Sol Properties",
      title: "Agente Inmobiliaria",
      content:
        "Para clientes internacionales recomendamos a S&Z Trading como partner de mudanzas. Coordinan embalaje, transporte y entrega para que la mudanza no retrase la firma ni la entrega de llaves.",
      rating: 5,
    },
    ctaText: "Pedir presupuesto de mudanza para cliente Idealista",
    ctaSecondary: "Hablar sobre colaboración Idealista",
    seoTitle: "Servicios de mudanza para Idealista | S&Z Trading",
    seoDescription:
      "Servicios de reubicación para clientes de Idealista que se mudan dentro de España y en Europa. Mudanzas puerta a puerta coordinadas con las fechas clave.",
    benefits: [
      "Mudanzas coordinadas con fechas de firma y entrega de llaves",
      "Equipos especializados en pisos, viviendas y pequeñas oficinas",
      "Comunicación clara entre agente, cliente y equipo logístico",
      "Un solo punto de contacto para referencias recurrentes",
    ],
  },
  "expat-portal": {
    slug: "expat-portal",
    partnerName: "Expat Portal",
    audience: "expat",
    heroTitle: "Partner de mudanzas para miembros de Expat Portal",
    heroSubtitle:
      "Ayuda a los miembros de tu comunidad que se mudan a España con un partner fiable para el traslado de sus pertenencias.",
    primaryService: "relocation",
    testimonial: {
      name: "James Wilson",
      company: "Reubicado desde Reino Unido",
      title: "Expatriado en Málaga",
      content:
        "Nuestra mudanza desde Reino Unido a España fue fluida de puerta a puerta. El equipo embaló, transportó y entregó en plazo, tal y como se acordó.",
      rating: 5,
    },
    ctaText: "Pedir presupuesto de mudanza para tus miembros",
    ctaSecondary: "Conocer nuestro soporte a expatriados",
    seoTitle: "Partner de mudanzas para comunidades expat | S&Z Trading",
    seoDescription:
      "Servicios de reubicación para comunidades de expatriados que se mudan a España. Embalaje profesional, gestión aduanera y entrega.",
    benefits: [
      "Orientación sobre plazos y documentación habituales",
      "Opciones de transporte puerta a puerta y combinado",
      "Almacenaje y entregas escalonadas cuando es necesario",
      "Comunicación constante en inglés durante la mudanza",
    ],
  },
  "warehouse-network": {
    slug: "warehouse-network",
    partnerName: "Warehouse Network",
    audience: "b2b",
    heroTitle: "Transporte y transferencias para redes de almacenes",
    heroSubtitle:
      "Líneas regulares, transferencias y proyectos entre almacenes en España y Europa con un único partner logístico.",
    primaryService: "freight",
    testimonial: {
      name: "Carlos Méndez",
      company: "TechDistrib Solutions",
      title: "Responsable de Logística",
      content:
        "Con S&Z Trading tenemos tiempos de tránsito predecibles entre nuestros hubs y una visión clara de costes. Su equipo entiende cómo funcionan las operaciones de almacén.",
      rating: 5,
    },
    ctaText: "Comentar tus rutas de red de almacenes",
    ctaSecondary: "Solicitar presupuesto de transporte B2B",
    seoTitle: "Transporte para redes de almacenes | S&Z Trading",
    seoDescription:
      "Soluciones de transporte por carretera y transferencias para redes de almacenes en España y Europa. Líneas regulares y proyectos puntuales.",
    benefits: [
      "Líneas regulares entre almacenes y hubs clave",
      "Opciones de carga completa y grupaje",
      "Soporte para rebalanceo de inventario y proyectos",
      "Gestión dedicada para operaciones de red",
    ],
  },
};

const DEFAULT_CONFIG_ES: PartnerConfig = {
  slug: "partner",
  partnerName: "Partner",
  audience: "general",
  heroTitle: "Servicios Profesionales de Logística y Mudanzas",
  heroSubtitle:
    "Desde pequeños envíos hasta mudanzas completas, ofrecemos soluciones de transporte europeo adaptadas a tus necesidades.",
  primaryService: "general",
  testimonial: {
    name: "Jean Dupont",
    company: "FrenchFoods Import",
    title: "Responsable de Operaciones",
    content:
      "Las mejores tarifas para el corredor España-Francia. Manejan nuestra carga sensible a la temperatura con mucho cuidado. Ahorramos 50.000€ anuales.",
    rating: 5,
  },
  ctaText: "Solicitar Presupuesto",
  ctaSecondary: "Contactar",
  seoTitle: "Logística y Mudanzas Europeas | S&Z Trading",
  seoDescription:
    "Servicios profesionales de transporte y mudanzas en toda Europa. Tarifas competitivas, entregas fiables, manipulación experta.",
  benefits: [
    "Cobertura en toda Europa",
    "Manipulación profesional",
    "Seguimiento en tiempo real",
    "Precios competitivos",
  ],
};

function getServiceIcon(service: ServiceFocus): JSX.Element {
  switch (service) {
    case "relocation":
      return <Package className="h-6 w-6 text-primary" />;
    case "freight":
      return <Truck className="h-6 w-6 text-primary" />;
    default:
      return <Building2 className="h-6 w-6 text-primary" />;
  }
}

function getServiceLabel(service: ServiceFocus): string {
  switch (service) {
    case "relocation":
      return "Servicios de Mudanza";
    case "freight":
      return "Servicios de Transporte";
    default:
      return "Soluciones Logísticas";
  }
}

function PartnerLandingEs(): JSX.Element {
  const params = useParams();
  const partnerSlug = params.partnerSlug || "";
  const config = PARTNER_CONFIGS_ES[partnerSlug] || DEFAULT_CONFIG_ES;

  const quotePath = `/es/get-quote?utm_source=partner-${partnerSlug || config.slug}&utm_medium=referral&utm_campaign=$
{config.primaryService === "relocation" ? "reubicacion-partners" : config.primaryService === "freight" ? "freight-partners" : "logistica-partners"}&partner=${partnerSlug || config.slug}`;

  useEffect(() => {
    const existing = loadAttribution();
    if (!existing?.partner && partnerSlug) {
      saveAttribution({
        pathname: window.location.pathname,
        search: window.location.search || `?partner=${partnerSlug}`,
        referrer: document.referrer || undefined,
      });
    }
  }, [partnerSlug]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={config.seoTitle}
        description={config.seoDescription}
        keywords="mudanzas, transporte, logística, España, Europa, reubicación"
      />
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              {getServiceIcon(config.primaryService)}
              <span>{getServiceLabel(config.primaryService)}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{config.heroTitle}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">{config.heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link
                  to={quotePath}
                  state={
                    config.primaryService === "relocation"
                      ? { serviceType: "relocation" }
                      : config.primaryService === "freight"
                      ? { serviceType: "european-road" }
                      : undefined
                  }
                >
                  {config.ctaText}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link to="/es/contact">{config.ctaSecondary}</Link>
              </Button>
            </div>
            {config.primaryService === "relocation" && (
              <p className="mt-4 text-sm text-muted-foreground">
                ¿Prefieres revisar primero nuestro proceso de reubicación?{" "}
                <Link
                  to="/es/relocation"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  Ver cómo funciona nuestra reubicación empresarial.
                </Link>
                .
              </p>
            )}
            {config.primaryService === "freight" && (
              <p className="mt-4 text-sm text-muted-foreground">
                ¿Quieres revisar todas las opciones de transporte?{" "}
                <Link
                  to="/es/services"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  Ver nuestros servicios de transporte.
                </Link>
                .
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignalsEs />

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Por qué elegir S&Z Trading</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {config.primaryService === "relocation"
                ? "Nos encargamos de cada detalle de tu mudanza para que puedas centrarte en lo importante."
                : "Soluciones logísticas fiables respaldadas por años de experiencia."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {config.benefits.map((benefit) => (
              <Card key={benefit} className="text-center">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="pt-8 pb-8 px-8">
                <div className="flex mb-4 justify-center">
                  {[...Array(config.testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg text-center text-muted-foreground mb-6 italic">
                  "{config.testimonial.content}"
                </p>
                <div className="text-center border-t pt-4">
                  <div className="font-semibold">{config.testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{config.testimonial.title}</div>
                  <div className="text-sm font-medium text-primary">{config.testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Cómo funciona</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Solicita presupuesto</h3>
              <p className="text-sm text-muted-foreground">
                Comparte tu ruta, fechas y detalles de carga. Respondemos en 24 horas.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Confirma y programa</h3>
              <p className="text-sm text-muted-foreground">
                Revisa tu presupuesto, confirma fechas y nuestro equipo se encarga del resto.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Sigue y recibe</h3>
              <p className="text-sm text-muted-foreground">
                Sigue tu envío en tiempo real hasta la entrega segura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="h-6 w-6" />
            <span className="text-sm font-medium">Presupuestos en menos de 24 horas</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para empezar?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Cuéntanos sobre tu mudanza o envío y recibe un presupuesto detallado sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link
                to={quotePath}
                state={
                  config.primaryService === "relocation"
                    ? { serviceType: "relocation" }
                    : config.primaryService === "freight"
                    ? { serviceType: "european-road" }
                    : undefined
                }
              >
                {config.ctaText}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/es/contact">{config.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      <FooterEs />
    </div>
  );
}

export default PartnerLandingEs;
