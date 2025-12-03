import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants";

function PrivacyPolicy(): JSX.Element {
  const { name, email, city, country, website } = BUSINESS_INFO;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Privacy Policy"
        description="Privacy policy for S&Z Trading International. Learn how we collect, use, and protect your personal data."
        keywords="privacy policy, data protection, GDPR, personal data"
      />
      <Navigation />

      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-left">
            <PageBreadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Data Controller</h2>
              <p className="text-muted-foreground">
                {name}, located in {city}, {country}, is the data controller responsible for your personal data collected through this website ({website}).
              </p>
              <p className="text-muted-foreground">
                For any privacy-related inquiries, contact us at: <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We collect information you provide directly when using our services:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Contact information:</strong> Name, email address, phone number, company name</li>
                <li><strong>Quote requests:</strong> Shipment details, origin/destination, cargo type, special requirements</li>
                <li><strong>Communications:</strong> Messages sent through our contact forms or email</li>
                <li><strong>Technical data:</strong> IP address, browser type, device information (collected automatically)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use your personal data to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Process and respond to your quote requests</li>
                <li>Provide logistics and freight services you request</li>
                <li>Communicate with you about your shipments</li>
                <li>Send service-related notifications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Legal Basis for Processing</h2>
              <p className="text-muted-foreground mb-4">Under GDPR, we process your data based on:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Contract performance:</strong> Processing necessary to provide requested services</li>
                <li><strong>Legitimate interests:</strong> Improving our services and business operations</li>
                <li><strong>Consent:</strong> For marketing communications (where applicable)</li>
                <li><strong>Legal obligation:</strong> Compliance with applicable laws</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Data Sharing</h2>
              <p className="text-muted-foreground mb-4">We may share your data with:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Service providers:</strong> Transport partners, warehousing facilities, customs agents necessary to fulfill your shipments</li>
                <li><strong>Technology providers:</strong> Hosting, analytics, and communication tools (processed under data processing agreements)</li>
                <li><strong>Legal authorities:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="text-muted-foreground mt-4">We do not sell your personal data to third parties.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal data for as long as necessary to fulfill the purposes described in this policy, typically for the duration of our business relationship plus any legally required retention period (usually 5-10 years for commercial records in Spain).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground mb-4">Under GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                <li><strong>Restriction:</strong> Limit how we process your data</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw consent:</strong> Where processing is based on consent</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, contact us at <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>. We will respond within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Cookies</h2>
              <p className="text-muted-foreground">
                Our website uses cookies to enhance your experience. We use essential cookies for website functionality and optional analytics cookies to understand how visitors use our site. You can manage cookie preferences through your browser settings or our cookie consent banner.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encrypted data transmission (HTTPS), secure hosting infrastructure, and access controls.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy periodically. Significant changes will be communicated through our website. The "last updated" date at the top indicates when the policy was last revised.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Contact & Complaints</h2>
              <p className="text-muted-foreground">
                For questions about this policy or our data practices, contact us at <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>.
              </p>
              <p className="text-muted-foreground mt-4">
                If you believe we have not handled your data appropriately, you have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD) at <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
