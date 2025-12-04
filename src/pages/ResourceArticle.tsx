import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { findArticleBySlug, type ResourceArticleConfig, type ResourceSection } from "@/lib/resources";
import { ResourceArticleSchema } from "@/components/StructuredData";

function ResourceArticle(): JSX.Element {
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
            <h1 className="text-2xl md:text-3xl font-bold">Guide not found</h1>
            <p className="text-muted-foreground">
              We could not find the resource you were looking for. Go back to all resources or request a quote directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link to="/resources">View all resources</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/get-quote">Request quote</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ResourceArticleSchema
        title={article.title}
        description={article.description}
        slug={article.slug}
      />
      <SEO title={article.title} description={article.description} keywords="moving guide, relocation resources" />
      <Navigation />
      <WhatsAppButton />

      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-left">
            <PageBreadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Resources", to: "/resources" },
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
            {article.sections.map((section: ResourceSection) => (
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
              <h2 className="text-xl font-semibold">Ready to move from planning to execution?</h2>
              <p className="text-sm text-muted-foreground">
                Share your route, dates, and cargo details and we will prepare a detailed quote for your move or relocation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild>
                  <Link to="/get-quote">Request quote</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">Talk to our team</Link>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ResourceArticle;
