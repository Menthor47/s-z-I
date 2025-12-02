import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { MapPin, Package, Clock, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { trackRelocationCta } from "@/lib/tracking";

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
    heroTitle: "Business relocation services in Madrid",
    heroSubtitle:
      "Office, retail, and warehouse relocations in Madrid and the wider region with a B2B-focused logistics partner.",
    seoTitle: "Office relocation in Madrid | S&Z Trading",
    seoDescription:
      "Professional business moves in Madrid. Office, warehouse, and retail relocations with minimal disruption to your operations.",
  },
  malaga: {
    slug: "malaga",
    cityName: "Málaga",
    heroTitle: "Business relocation services in Málaga",
    heroSubtitle:
      "Relocations for offices, warehouses, and commercial spaces in Málaga and the Costa del Sol with detailed planning and specialist crews.",
    seoTitle: "Office relocation in Málaga | S&Z Trading",
    seoDescription:
      "Business relocations in Málaga and the Costa del Sol. Professional moves for offices, warehouses, and commercial spaces with end-to-end support.",
  },
};

function getCityConfig(citySlug: string | undefined): RelocationCityConfig {
  if (citySlug === "malaga") {
    return RELOCATION_CITY_CONFIG.malaga;
  }
  return RELOCATION_CITY_CONFIG.madrid;
}

function RelocationCity(): JSX.Element {
  const { citySlug } = useParams();
  const cityConfig = getCityConfig(citySlug);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={cityConfig.seoTitle}
        description={cityConfig.seoDescription}
        keywords={`business relocation ${cityConfig.cityName.toLowerCase()}, office move ${cityConfig.cityName.toLowerCase()}`}
      />
      <Navigation />
      <WhatsAppButton />

      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-left">
            <PageBreadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Relocation", to: "/relocation" },
                { label: cityConfig.cityName },
              ]}
            />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{cityConfig.heroTitle}</h1>
            <p className="text-xl text-muted-foreground mb-8">{cityConfig.heroSubtitle}</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link
                  to="/get-quote"
                  state={{ serviceType: "relocation", city: cityConfig.cityName }}
                  aria-label={`Get relocation quote for ${cityConfig.cityName}`}
                  onClick={() =>
                    trackRelocationCta({
                      locale: "en",
                      city: cityConfig.cityName,
                      position: "hero",
                      action: "quote",
                    })
                  }
                >
                  Get relocation quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link
                  to="/contact"
                  aria-label="Talk to a relocation specialist"
                  onClick={() =>
                    trackRelocationCta({
                      locale: "en",
                      city: cityConfig.cityName,
                      position: "hero",
                      action: "contact",
                    })
                  }
                >
                  Talk to a relocation specialist
                </Link>
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
                  What we move
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground text-sm">
                <p>
                  We handle relocations for offices, retail spaces, warehouses, and light industrial sites. The move plan is
                  adapted to your volume, deadlines, and access constraints at both origin and destination.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Office furniture, workstations, and archives</li>
                  <li>Sensitive IT and electronic equipment</li>
                  <li>Racking, stock, and palletised goods</li>
                  <li>Light equipment and non-fixed machinery</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MapPin className="h-6 w-6 text-primary" />
                  Coverage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  We coordinate local moves in {cityConfig.cityName} plus common regional and European lanes, including:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Moves within the city and wider metropolitan area</li>
                  <li>Routes between major logistics hubs in Spain</li>
                  <li>Road connections to France and the rest of Europe</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  Reduced downtime
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  We plan moves outside core working hours where needed—nights, weekends, and local holidays—to reduce the
                  impact on your teams and customers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Safety & insurance
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Vehicles matched to your load type and extended insurance options for high-value equipment and sensitive
                  documentation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  Local knowledge
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Familiarity with the specifics of {cityConfig.cityName}: access, loading and unloading hours, and typical traffic
                  restrictions.
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
              Resources to plan your move to {cityConfig.cityName}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Go deeper on costs, timelines, and key steps before you book your relocation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button asChild variant="outline" className="justify-between text-left">
              <Link to="/resources/moving-to-spain-guide">
                <span>
                  Guide to moving to Spain
                  <span className="block text-xs text-muted-foreground">
                    Ideal for international moves into {cityConfig.cityName}.
                  </span>
                </span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-between text-left">
              <Link to="/resources/office-move-checklist">
                <span>
                  Office move checklist
                  <span className="block text-xs text-muted-foreground">
                    Make sure your office relocation stays under control.
                  </span>
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to plan your move?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Share origin, destination, and approximate dates and we’ll prepare a detailed relocation plan and clear quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link
                to="/get-quote"
                state={{ serviceType: "relocation", city: cityConfig.cityName }}
                onClick={() =>
                  trackRelocationCta({
                    locale: "en",
                    city: cityConfig.cityName,
                    position: "footer",
                    action: "quote",
                  })
                }
              >
                Start relocation quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Link
                to="/contact"
                onClick={() =>
                  trackRelocationCta({
                    locale: "en",
                    city: cityConfig.cityName,
                    position: "footer",
                    action: "contact",
                  })
                }
              >
                Contact our team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default RelocationCity;
