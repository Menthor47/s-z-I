import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { contactFormSchema } from "@/lib/validations";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants";
import { useContactForm } from "@/hooks/useContactForm";

const Contact = () => {
  const { formData, errors, loading, handleChange, handleSubmit } = useContactForm({
    locale: "en",
    schema: contactFormSchema,
    copy: {
      validationErrorTitle: "Validation Error",
      validationErrorDescription: "Please check all fields and try again.",
      successTitle: "Message Sent!",
      successDescription: "We'll get back to you within 24 hours.",
      errorTitle: "Error",
      errorDescription: "Failed to send message. Please try again.",
      rateLimitTitle: "Please wait",
      rateLimitDescription: "You recently sent a message. Please wait a few seconds before trying again.",
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contact Us - S&Z Trading International"
        description="Get in touch with S&Z Trading International for all your freight and logistics needs. Available 24/7 for emergency support."
        keywords="contact logistics, freight support, S&Z Trading International contact"
      />
      <Navigation />
      <WhatsAppButton />
      
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-left">
            <PageBreadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Have questions? Our team is ready to help with your logistics needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name *</label>
                    <Input
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}

                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="text-sm text-destructive mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input
                      required
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}

                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="text-sm text-destructive mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input
                      type="tel"
                      placeholder="+34 600 123 456"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}

                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                    />
                    {errors.phone && (
                      <p id="contact-phone-error" className="text-sm text-destructive mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company</label>
                    <Input
                      placeholder="Your Company Ltd"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}

                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <Textarea
                      required
                      placeholder="Tell us about your logistics needs..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}

                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="text-sm text-destructive mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Head Office</h3>
                      <p className="text-muted-foreground">
                        {BUSINESS_INFO.city}<br />
                        {BUSINESS_INFO.country}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-muted-foreground">
                        <a
                          href={`tel:${BUSINESS_INFO.phoneRaw}`}
                          className="text-primary hover:underline"
                        >
                          {BUSINESS_INFO.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        <a
                          href={`mailto:${BUSINESS_INFO.email}`}
                          className="text-primary hover:underline"
                        >
                          {BUSINESS_INFO.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed<br />
                        <span className="text-primary font-medium">Emergency Support: 24/7</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;