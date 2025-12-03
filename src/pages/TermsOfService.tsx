import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants";

function TermsOfService(): JSX.Element {
  const { name, email, city, country, website } = BUSINESS_INFO;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Terms of Service"
        description="Terms and conditions for using S&Z Trading International logistics and freight services."
        keywords="terms of service, terms and conditions, logistics terms, freight terms"
      />
      <Navigation />

      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-left">
            <PageBreadcrumbs items={[{ label: "Home", to: "/" }, { label: "Terms of Service" }]} />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                These Terms of Service ("Terms") govern your use of the website {website} and the logistics, freight, and relocation services provided by {name}, a company registered in {city}, {country} ("we", "us", "our").
              </p>
              <p className="text-muted-foreground mt-4">
                By using our website or services, you agree to be bound by these Terms. If you do not agree, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Services</h2>
              <p className="text-muted-foreground mb-4">We provide the following services:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Road freight transport within Spain and across Europe</li>
                <li>Business and office relocation services</li>
                <li>Global logistics and shipping coordination</li>
                <li>Warehousing and storage solutions</li>
                <li>Supply chain consultancy</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Specific terms for each service will be detailed in individual quotes and service agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Quotes and Pricing</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>All quotes provided through our website are estimates and subject to final confirmation.</li>
                <li>Final pricing depends on accurate shipment details, actual weights/dimensions, and any special requirements.</li>
                <li>Quotes are valid for 14 days unless otherwise stated.</li>
                <li>Prices do not include customs duties, taxes, or charges imposed by third parties unless explicitly stated.</li>
                <li>We reserve the right to adjust pricing if shipment details differ from those provided in the quote request.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Booking and Cancellation</h2>
              <p className="text-muted-foreground mb-4"><strong>Booking:</strong></p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Bookings are confirmed once we provide written confirmation (email or signed agreement).</li>
                <li>You must provide accurate information about cargo, origin, destination, and any special handling requirements.</li>
              </ul>
              <p className="text-muted-foreground mt-4 mb-4"><strong>Cancellation:</strong></p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Cancellations made more than 48 hours before scheduled pickup: No charge.</li>
                <li>Cancellations made 24-48 hours before: Up to 25% of quoted price.</li>
                <li>Cancellations made less than 24 hours before or after pickup: Up to 100% of quoted price.</li>
                <li>Relocation services may have different cancellation terms specified in the service agreement.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Customer Responsibilities</h2>
              <p className="text-muted-foreground mb-4">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information about shipments</li>
                <li>Ensure goods are properly packaged and labeled unless we provide packing services</li>
                <li>Obtain necessary permits, licenses, or documentation for regulated goods</li>
                <li>Ensure someone is available at pickup and delivery locations at agreed times</li>
                <li>Disclose any hazardous, fragile, or high-value items</li>
                <li>Pay invoices within the agreed payment terms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Prohibited Items</h2>
              <p className="text-muted-foreground mb-4">We do not transport:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Illegal goods or contraband</li>
                <li>Explosives, firearms, or weapons</li>
                <li>Live animals (unless specifically agreed)</li>
                <li>Perishable goods without prior arrangement</li>
                <li>Hazardous materials without proper documentation and handling agreements</li>
                <li>Cash, bearer instruments, or precious metals/stones without declared value</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Liability and Insurance</h2>
              <p className="text-muted-foreground mb-4"><strong>Standard Liability:</strong></p>
              <p className="text-muted-foreground">
                Our liability for loss or damage is limited according to applicable international conventions (CMR for road transport) and Spanish law. Standard carrier liability typically covers up to €8.33 per kg of gross weight for road transport.
              </p>
              <p className="text-muted-foreground mt-4 mb-4"><strong>Extended Insurance:</strong></p>
              <p className="text-muted-foreground">
                We offer additional cargo insurance for full declared value coverage. Please request this when booking if you require higher protection. We carry general liability insurance up to €250,000 per shipment.
              </p>
              <p className="text-muted-foreground mt-4 mb-4"><strong>Exclusions:</strong></p>
              <p className="text-muted-foreground">
                We are not liable for delays or losses caused by: force majeure events, customs delays, incorrect documentation provided by customer, inherent vice of goods, or inadequate packaging by customer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Claims</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Claims for visible damage must be noted on the delivery receipt at time of delivery.</li>
                <li>Claims for concealed damage must be submitted in writing within 7 days of delivery.</li>
                <li>Claims for delay must be submitted within 21 days.</li>
                <li>All claims must include supporting documentation (photos, invoices, delivery receipts).</li>
                <li>Submit claims to <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Payment is due within 30 days of invoice date unless otherwise agreed.</li>
                <li>We accept bank transfer, credit card, and other methods as specified.</li>
                <li>Late payments may incur interest at 1.5% per month.</li>
                <li>We reserve the right to withhold services for accounts with outstanding balances.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Website Use</h2>
              <p className="text-muted-foreground mb-4">When using our website, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Submit false or misleading information</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated systems to scrape or extract data</li>
                <li>Interfere with the website's functionality</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on this website, including text, graphics, logos, and software, is the property of {name} or our licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of Spain. For road transport within the EU, the CMR Convention applies. Any disputes shall be submitted to the courts of {city}, Spain, unless otherwise required by applicable consumer protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">13. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We may update these Terms at any time. Continued use of our services after changes constitutes acceptance. Material changes will be communicated via our website or email.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">14. Contact</h2>
              <p className="text-muted-foreground">
                For questions about these Terms, contact us at <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TermsOfService;
