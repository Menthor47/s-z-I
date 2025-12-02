import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ResourceSummaryEs {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly readingTime: string;
}

const RESOURCES_ES: readonly ResourceSummaryEs[] = [
  {
    slug: "guia-mudarse-a-espana",
    title: "Guía completa para mudarse a España (2025)",
    description:
      "Pasos clave, documentos y costes aproximados para planificar una mudanza internacional a España.",
    readingTime: "10 min de lectura",
  },
  {
    slug: "checklist-mudanza-oficina",
    title: "Checklist para una mudanza de oficina sin estrés",
    description:
      "Lista de comprobación descargable para coordinar equipos, fechas y proveedores en una mudanza de oficina.",
    readingTime: "7 min de lectura",
  },
];

function ResourcesEs(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Recursos y guías sobre mudanzas y reubicación"
        description="Artículos y guías prácticas sobre mudanzas internacionales, reubicación de oficinas y logística empresarial en España."
        keywords="guia mudanza, recursos mudanzas, reubicacion empresas, mudarse a espana"
      />
      <Navigation />
      <WhatsAppButton />

      <main id="main-content">
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-left">
            <PageBreadcrumbs
              items={[
                { label: "Inicio", to: "/es" },
                { label: "Recursos" },
              ]}
            />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Recursos y guías</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Contenido pensado para ayudarte a planificar mudanzas internacionales, reubicaciones de oficina y proyectos logísticos
              complejos en España y Europa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESOURCES_ES.map((resource: ResourceSummaryEs) => (
              <Card key={resource.slug} className="h-full flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between gap-4">
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{resource.readingTime}</span>
                  </div>
                  <div className="pt-2">
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/es/resources/${resource.slug}`}>Leer guía</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}

export default ResourcesEs;
