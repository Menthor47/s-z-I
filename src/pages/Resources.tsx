import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ResourceSummary {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly readingTime: string;
}

const RESOURCES: readonly ResourceSummary[] = [
  {
    slug: "moving-to-spain-guide",
    title: "Complete Guide to Moving to Spain (2025)",
    description:
      "Key steps, documents, and approximate costs to plan an international move to Spain without surprises.",
    readingTime: "10 min read",
  },
  {
    slug: "office-move-checklist",
    title: "Office Move Checklist for a Stress-Free Relocation",
    description:
      "Step-by-step checklist to coordinate teams, timelines, and suppliers for an office relocation.",
    readingTime: "7 min read",
  },
];

function Resources(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Resources and Guides for Moving and Relocation"
        description="Practical articles and guides about international moves, office relocations, and logistics planning in Spain and Europe."
        keywords="moving guide, relocation resources, office move checklist, moving to Spain"
      />
      <Navigation />
      <WhatsAppButton />

      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-left">
            <PageBreadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Resources" },
              ]}
            />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources &amp; Guides</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Content designed to help you plan international moves, office relocations, and complex logistics projects across Spain and
              Europe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESOURCES.map((resource: ResourceSummary) => (
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
                      <Link to={`/resources/${resource.slug}`}>Read guide</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Resources;
