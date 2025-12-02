import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { TrustSignals } from "@/components/TrustSignals";
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

const PARTNER_CONFIGS: Record<string, PartnerConfig> = {
  realestate: {
    slug: "realestate",
    partnerName: "Real Estate Partners",
    audience: "realestate",
    heroTitle: "Relocation Services for Your Clients",
    heroSubtitle:
      "Help your buyers settle into their new Spanish home. We handle the moving logistics so you can focus on closing deals.",
    primaryService: "relocation",
    testimonial: {
      name: "Ana García",
      company: "Costa del Sol Properties",
      title: "Real Estate Agent",
      content:
        "S&Z Trading has become our go-to recommendation for international clients. They handle everything from door to door, and our clients always give positive feedback.",
      rating: 5,
    },
    ctaText: "Get a Quote for Your Client",
    ctaSecondary: "Partner with Us",
    seoTitle: "Relocation Services for Real Estate Agents | S&Z Trading",
    seoDescription:
      "Partner with S&Z Trading to offer your property buyers seamless relocation services. Door-to-door moves across Europe.",
    benefits: [
      "Door-to-door international moves",
      "Professional packing and handling",
      "Flexible scheduling around closing dates",
      "Dedicated account manager for agents",
    ],
  },
  expats: {
    slug: "expats",
    partnerName: "Expat Network",
    audience: "expat",
    heroTitle: "Moving to Spain? We Make It Easy",
    heroSubtitle:
      "From your current home to your new life in Spain. Full-service relocation with professional packing, customs handling, and delivery.",
    primaryService: "relocation",
    testimonial: {
      name: "James Wilson",
      company: "Relocated from UK",
      title: "Expat in Málaga",
      content:
        "Moving our entire household from London to Málaga felt overwhelming until we found S&Z Trading. They handled everything professionally and our belongings arrived in perfect condition.",
      rating: 5,
    },
    ctaText: "Get Your Relocation Quote",
    ctaSecondary: "Learn About Our Process",
    seoTitle: "Moving to Spain | International Relocation Services | S&Z Trading",
    seoDescription:
      "Planning your move to Spain? Get professional door-to-door relocation services. Packing, customs, and delivery handled by experts.",
    benefits: [
      "Full-service packing and unpacking",
      "Customs documentation handled",
      "Storage options if needed",
      "Tracking throughout your move",
    ],
  },
  "b2b-freight": {
    slug: "b2b-freight",
    partnerName: "B2B Logistics",
    audience: "b2b",
    heroTitle: "Reliable European Freight for Your Business",
    heroSubtitle:
      "Regular routes across Spain, France, Germany, and beyond. Competitive rates, real-time tracking, and dedicated support.",
    primaryService: "freight",
    testimonial: {
      name: "Carlos Mendez",
      company: "TechDistrib Solutions",
      title: "Logistics Manager",
      content:
        "S&Z Trading has been our reliable partner for 3 years. They reduced our shipping costs by 22% while improving delivery times. Highly professional team.",
      rating: 5,
    },
    ctaText: "Request Business Quote",
    ctaSecondary: "Discuss Your Logistics Needs",
    seoTitle: "B2B Freight Services Spain & Europe | S&Z Trading",
    seoDescription:
      "European road freight for businesses. Regular routes Spain-France-Germany-UK. Competitive rates and reliable delivery times.",
    benefits: [
      "Regular European routes",
      "Volume discounts available",
      "Real-time shipment tracking",
      "Dedicated account manager",
    ],
  },
  "office-moves": {
    slug: "office-moves",
    partnerName: "Office Relocations",
    audience: "office",
    heroTitle: "Office Relocations with Minimal Downtime",
    heroSubtitle:
      "Moving your business to a new location? We coordinate every detail so your team can get back to work fast.",
    primaryService: "relocation",
    testimonial: {
      name: "María Santos",
      company: "EuroManufacture Ltd",
      title: "Supply Chain Director",
      content:
        "Outstanding service for our warehouse relocation. Their tracking system is excellent and communication is always prompt. Haven't had a single issue.",
      rating: 5,
    },
    ctaText: "Plan Your Office Move",
    ctaSecondary: "Talk to Our Team",
    seoTitle: "Office & Business Relocation Services | S&Z Trading",
    seoDescription:
      "Professional office relocation services. Minimize downtime with expert planning, packing, and coordination.",
    benefits: [
      "Weekend and after-hours moves",
      "IT equipment handling",
      "Furniture disassembly and reassembly",
      "Coordinated floor-by-floor execution",
    ],
  },
  idealista: {
    slug: "idealista",
    partnerName: "Idealista",
    audience: "realestate",
    heroTitle: "Idealista Partner Relocation Services",
    heroSubtitle:
      "For Idealista buyers and tenants moving into or within Spain. We handle the full relocation so your clients arrive with everything ready.",
    primaryService: "relocation",
    testimonial: {
      name: "Ana García",
      company: "Costa del Sol Properties",
      title: "Real Estate Agent",
      content:
        "For international buyers we recommend S&Z Trading as a relocation partner. They coordinate packing, transport, and delivery so the move does not delay the handover.",
      rating: 5,
    },
    ctaText: "Get Relocation Quote for an Idealista Client",
    ctaSecondary: "Discuss an Idealista Partnership",
    seoTitle: "Idealista Partner Relocation Services | S&Z Trading",
    seoDescription:
      "Relocation services for Idealista clients moving within Spain and across Europe. Door-to-door moves coordinated around key dates.",
    benefits: [
      "Moves coordinated around contract and key handover dates",
      "Professional crews for apartments, houses, and small offices",
      "Clear communication between agent, client, and logistics team",
      "Single point of contact for repeat Idealista referrals",
    ],
  },
  "expat-portal": {
    slug: "expat-portal",
    partnerName: "Expat Portal",
    audience: "expat",
    heroTitle: "Relocation Partner for Expat Portal Members",
    heroSubtitle:
      "Support your community members who are moving to Spain with a trusted relocation partner for their household goods.",
    primaryService: "relocation",
    testimonial: {
      name: "James Wilson",
      company: "Relocated from UK",
      title: "Expat in Málaga",
      content:
        "Our move from the UK to Spain was smooth from door to door. The team packed, transported, and delivered on time as promised.",
      rating: 5,
    },
    ctaText: "Get a Moving Quote for Your Members",
    ctaSecondary: "Learn About Our Expat Support",
    seoTitle: "Expat Portal Relocation Partner | S&Z Trading",
    seoDescription:
      "Relocation services for expat communities moving to Spain. Professional packing, customs handling, and delivery.",
    benefits: [
      "Guidance on typical timelines and documentation",
      "Door-to-door road and combined transport options",
      "Storage and staged deliveries when needed",
      "Regular communication in English during the move",
    ],
  },
  "warehouse-network": {
    slug: "warehouse-network",
    partnerName: "Warehouse Network",
    audience: "b2b",
    heroTitle: "Freight & Transfers for Warehouse Networks",
    heroSubtitle:
      "Linehaul, transfers, and project moves between warehouses across Spain and Europe with a single logistics partner.",
    primaryService: "freight",
    testimonial: {
      name: "Carlos Mendez",
      company: "TechDistrib Solutions",
      title: "Logistics Manager",
      content:
        "With S&Z Trading we have predictable transit times between our hubs and a clear view on costs. Their team understands how warehouse operations work.",
      rating: 5,
    },
    ctaText: "Discuss Your Warehouse Network Routes",
    ctaSecondary: "Request a B2B Freight Quote",
    seoTitle: "Warehouse Network Freight & Transfers | S&Z Trading",
    seoDescription:
      "Road freight and transfer solutions for warehouse networks in Spain and across Europe. Regular lanes and project moves.",
    benefits: [
      "Regular lanes between key warehouse and hub locations",
      "Options for full-truckload and groupage services",
      "Support for inventory rebalancing and project moves",
      "Dedicated account management for network operations",
    ],
  },
};

const DEFAULT_CONFIG: PartnerConfig = {
  slug: "partner",
  partnerName: "Partner",
  audience: "general",
  heroTitle: "Professional Logistics & Relocation Services",
  heroSubtitle:
    "From small shipments to full relocations, we provide reliable European transport solutions tailored to your needs.",
  primaryService: "general",
  testimonial: {
    name: "Jean Dupont",
    company: "FrenchFoods Import",
    title: "Operations Lead",
    content:
      "Best rates for Spain-France corridor. They handle our temperature-sensitive cargo with extreme care. Saved us €50k annually.",
    rating: 5,
  },
  ctaText: "Get a Quote",
  ctaSecondary: "Contact Us",
  seoTitle: "European Logistics & Relocation | S&Z Trading",
  seoDescription:
    "Professional freight and relocation services across Europe. Competitive rates, reliable delivery, expert handling.",
  benefits: [
    "European-wide coverage",
    "Professional handling",
    "Real-time tracking",
    "Competitive pricing",
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

function PartnerLanding(): JSX.Element {
  const params = useParams();
  const partnerSlug = params.partnerSlug || "";
  const config = PARTNER_CONFIGS[partnerSlug] || DEFAULT_CONFIG;

  const quotePath = `/get-quote?utm_source=partner-${partnerSlug || config.slug}&utm_medium=referral&utm_campaign=$
{config.primaryService === "relocation" ? "relocation-partners" : config.primaryService === "freight" ? "freight-partners" : "logistics-partners"}&partner=${partnerSlug || config.slug}`;

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
        keywords="relocation, freight, logistics, Spain, Europe, moving"
      />
      <Navigation />
      <WhatsAppButton />

      <main id="main-content">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              {getServiceIcon(config.primaryService)}
              <span>
                {config.primaryService === "relocation"
                  ? "Relocation Services"
                  : config.primaryService === "freight"
                  ? "Freight Services"
                  : "Logistics Solutions"}
              </span>
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
                <Link to="/contact">{config.ctaSecondary}</Link>
              </Button>
            </div>
            {config.primaryService === "relocation" && (
              <p className="mt-4 text-sm text-muted-foreground">
                Prefer to review our relocation process first?{" "}
                <Link
                  to="/relocation"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  See how our business relocation works.
                </Link>
                .
              </p>
            )}
            {config.primaryService === "freight" && (
              <p className="mt-4 text-sm text-muted-foreground">
                Want to review all freight options?{" "}
                <Link
                  to="/services"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  View our transport services.
                </Link>
                .
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose S&Z Trading</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {config.primaryService === "relocation"
                ? "We handle every detail of your move so you can focus on what matters."
                : "Reliable logistics solutions backed by years of experience."}
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Request a Quote</h3>
              <p className="text-sm text-muted-foreground">
                Share your route, dates, and cargo details. We respond within 24 hours.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Confirm & Schedule</h3>
              <p className="text-sm text-muted-foreground">
                Review your quote, confirm dates, and our team handles the rest.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Track & Receive</h3>
              <p className="text-sm text-muted-foreground">
                Follow your shipment in real-time until safe delivery.
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
            <span className="text-sm font-medium">Quotes delivered within 24 hours</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Tell us about your move or shipment and receive a detailed quote with no obligation.
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
              <Link to="/contact">{config.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}

export default PartnerLanding;
