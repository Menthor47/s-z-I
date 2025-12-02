import { Navigation } from "@/components/Navigation";
import { FooterEs } from "@/components/es/FooterEs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { MapPin, Package, Clock, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

interface RelocationCityConfig {
  readonly slug: "madrid" | "malaga";
  readonly cityName: string;
  readonly heroTitle: string;
  readonly heroSubtitle: string;
  readonly seoTitle: string;
  readonly seoDescription: string;
}

const RELOCATION_CITY_CONFIG: Record<RelocationCityConfig["slug"], RelocationCityConfig> = {
  madrid: {
    slug: "madrid",
    cityName: "Madrid",
    heroTitle: "Reubicación de empresas en Madrid",
    heroSubtitle:
      "Mudanzas de oficinas, comercios y almacenes en Madrid y Comunidad de Madrid con un partner especializado en B2B.",
    seoTitle: "Reubicación de oficinas en Madrid | S&Z Trading",
    seoDescription:
      "Servicio profesional de mudanzas empresariales en Madrid. Traslado de oficinas, almacenes y espacios comerciales con mínima interrupción.",
  },
  malaga: {
    slug: "malaga",
    cityName: "Málaga",
    heroTitle: "Reubicación de empresas en Málaga",
    heroSubtitle:
      "Traslado de oficinas, comercios y almacenes en Málaga y Costa del Sol con planificación detallada y equipos especializados.",
    seoTitle: "Reubicación de oficinas en Málaga | S&Z Trading",
    seoDescription:
      "Mudanzas empresariales en Málaga y Costa del Sol. Reubicación profesional de oficinas, almacenes y negocios con soporte integral.",
  },
};

function getCityConfig(citySlug: string | undefined): RelocationCityConfig {
  if (citySlug === "malaga") {
    return RELOCATION_CITY_CONFIG.malaga;
  }
  return RELOCATION_CITY_CONFIG.madrid;
}

function RelocationCityEs(): JSX.Element {
  const { citySlug } = useParams();
  const cityConfig = getCityConfig(citySlug);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={cityConfig.seoTitle}
        description={cityConfig.seoDescription}
        keywords={`reubicacion empresas ${cityConfig.cityName.toLowerCase()}, mudanzas oficinas ${cityConfig.cityName.toLowerCase()}`}
      />
      <Navigation />
      <WhatsAppButton />

      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-left">
            <PageBreadcrumbs
              items={[
                { label: "Inicio", to: "/es" },
                { label: "Reubicación", to: "/es/relocation" },
                { label: cityConfig.cityName },
              ]}
            />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{cityConfig.heroTitle}</h1>
            <p className="text-xl text-muted-foreground mb-8">{cityConfig.heroSubtitle}</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/es/get-quote" state={{ serviceType: "relocation", city: cityConfig.cityName }}>
                  Solicitar presupuesto
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/es/contact">Hablar con un especialista</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Package className="h-6 w-6 text-primary" />
                  Qué trasladamos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground text-sm">
                <p>
                  Gestionamos reubicaciones de oficinas, comercios, almacenes y espacios industriales ligeros. Adaptamos el plan a tu
                  volumen, plazos y restricciones de acceso tanto en origen como en destino.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Mobiliario de oficina, puestos de trabajo y archivo</li>
                  <li>Equipos informáticos y electrónicos sensibles</li>
                  <li>Estanterías, stock y mercancía paletizada</li>
                  <li>Equipos ligeros y maquinaria no fija</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MapPin className="h-6 w-6 text-primary" />
                  Cobertura
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  Coordinamos traslados locales en {cityConfig.cityName} y rutas regionales y europeas habituales, incluyendo:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Movimientos dentro de la ciudad y área metropolitana</li>
                  <li>Rutas entre principales polos logísticos de España</li>
                  <li>Conexiones por carretera con Francia y resto de Europa</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  Menos tiempo de inactividad
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Planificamos mudanzas fuera de horario laboral cuando es necesario: noches, fines de semana y festivos locales para
                  reducir el impacto en tu actividad.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Seguridad y seguro
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Vehículos adecuados a cada tipo de carga y opciones de seguro ampliado para equipos de alto valor o documentación
                  sensible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  Soporte local
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Conocimiento de las particularidades de {cityConfig.cityName}: accesos, horarios de carga y descarga y
                  restricciones de tráfico habituales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Recursos para planificar tu mudanza en {cityConfig.cityName}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Profundiza en costes, plazos y pasos clave antes de reservar tu traslado.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button asChild variant="outline" className="justify-between text-left">
              <Link to="/es/resources/guia-mudarse-a-espana">
                <span>
                  Guía para mudarse a España
                  <span className="block text-xs text-muted-foreground">
                    Ideal para traslados internacionales hacia {cityConfig.cityName}.
                  </span>
                </span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-between text-left">
              <Link to="/es/resources/checklist-mudanza-oficina">
                <span>
                  Checklist mudanza de oficina
                  <span className="block text-xs text-muted-foreground">
                    Asegura que tu traslado de oficinas esté bajo control.
                  </span>
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Preparado para planificar tu mudanza?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Comparte origen, destino y fechas aproximadas y prepararemos un plan de reubicación detallado y un presupuesto claro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/es/get-quote" state={{ serviceType: "relocation", city: cityConfig.cityName }}>
                Empezar presupuesto de reubicación
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Link to="/es/contact">Contactar con nuestro equipo</Link>
            </Button>
          </div>
        </div>
      </section>

      <FooterEs />
    </div>
  );
}

export default RelocationCityEs;
