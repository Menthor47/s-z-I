import { Navigation } from "@/components/Navigation";
import { FooterEs } from "@/components/es/FooterEs";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";

interface ResourceSectionEs {
  readonly heading: string;
  readonly paragraphs: readonly string[];
}

interface ResourceArticleEsConfig {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly sections: readonly ResourceSectionEs[];
}

const ARTICLES_ES: readonly ResourceArticleEsConfig[] = [
  {
    slug: "guia-mudarse-a-espana",
    title: "Guía completa para mudarse a España (2025)",
    description:
      "Aspectos clave que debes tener en cuenta si te mudas a España: documentación, tiempos, costes aproximados y cómo elegir un partner logístico.",
    sections: [
      {
        heading: "1. Documentación y plazos",
        paragraphs: [
          "Antes de reservar tu mudanza internacional, asegúrate de tener claros los requisitos de visado, residencia y registro en el país de origen y en España.",
          "Los plazos administrativos pueden influir directamente en la fecha real de tu traslado, por lo que conviene planificar con varias semanas de antelación.",
        ],
      },
      {
        heading: "2. Costes aproximados de una mudanza internacional",
        paragraphs: [
          "El coste final dependerá del volumen, la ruta y el nivel de servicio (embalaje completo, almacenaje temporal, seguro ampliado, etc.).",
          "Como referencia, muchas mudanzas internacionales combinan tramos terrestres y marítimos o aéreos. Un buen partner te ayudará a comparar alternativas en precio y plazo.",
        ],
      },
      {
        heading: "3. Elegir un partner de reubicación fiable",
        paragraphs: [
          "Busca empresas con experiencia demostrable en los países implicados, referencias recientes y seguro adecuado para el valor de tus bienes.",
          "En S&Z Trading trabajamos con rutas habituales en Europa y colaboramos con partners especializados para tramos intercontinentales.",
        ],
      },
    ],
  },
  {
    slug: "checklist-mudanza-oficina",
    title: "Checklist para una mudanza de oficina sin estrés",
    description:
      "Lista de comprobación en pasos para coordinar una mudanza de oficina: equipos, personas, fechas críticas y comunicación interna.",
    sections: [
      {
        heading: "1. Planificación inicial",
        paragraphs: [
          "Define una fecha objetivo y un equipo interno responsable del proyecto (dirección, IT, operaciones, RRHH).",
          "Haz un inventario básico de puestos de trabajo, salas de reunión, archivo y equipos especiales.",
        ],
      },
      {
        heading: "2. Comunicación con el equipo",
        paragraphs: [
          "Informa a los empleados con suficiente antelación sobre fechas, horarios y cambios de acceso al nuevo espacio.",
          "Designa una persona de contacto para resolver dudas rápidas durante el proceso.",
        ],
      },
      {
        heading: "3. Coordinación con el partner logístico",
        paragraphs: [
          "Comparte planos del espacio actual y del nuevo, así como información sobre ascensores, rampas y ventanas de carga.",
          "Confirma con la empresa de mudanzas los horarios permitidos por la comunidad o el edificio para evitar incidencias.",
        ],
      },
    ],
  },
];

function findArticleBySlug(slug: string | undefined): ResourceArticleEsConfig | undefined {
  return ARTICLES_ES.find((article: ResourceArticleEsConfig) => article.slug === slug);
}

function ResourceArticleEs(): JSX.Element {
  const params = useParams();
  const slug: string | undefined = params.slug;
  const article = findArticleBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <WhatsAppButton />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold">Guía no encontrada</h1>
            <p className="text-muted-foreground">
              No hemos encontrado el recurso que estabas buscando. Vuelve al listado de recursos o solicita un presupuesto directo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link to="/es/resources">Ver todos los recursos</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/es/get-quote">Solicitar presupuesto</Link>
              </Button>
            </div>
          </div>
        </main>
        <FooterEs />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={article.title} description={article.description} keywords="guia mudanza, recursos mudanzas" />
      <Navigation />
      <WhatsAppButton />

      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-left">
            <PageBreadcrumbs
              items={[
                { label: "Inicio", to: "/es" },
                { label: "Recursos", to: "/es/resources" },
                { label: article.title },
              ]}
            />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
            <p className="text-lg text-muted-foreground">{article.description}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto space-y-10">
            {article.sections.map((section: ResourceSectionEs) => (
              <section key={section.heading} className="space-y-3">
                <h2 className="text-2xl font-semibold">{section.heading}</h2>
                {section.paragraphs.map((paragraph: string) => (
                  <p key={paragraph} className="text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <div className="mt-8 rounded-lg bg-primary/5 border border-primary/20 p-6 text-center space-y-4">
              <h2 className="text-xl font-semibold">Listo para pasar de la teoría a la acción</h2>
              <p className="text-sm text-muted-foreground">
                Comparte tu ruta, fechas y tipo de carga y prepararemos un presupuesto detallado para tu mudanza o reubicación.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild>
                  <Link to="/es/get-quote">Solicitar presupuesto</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/es/contact">Hablar con nuestro equipo</Link>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <FooterEs />
    </div>
  );
}

export default ResourceArticleEs;
