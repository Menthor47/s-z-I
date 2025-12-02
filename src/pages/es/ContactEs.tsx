import { Navigation } from "@/components/Navigation";
import { FooterEs } from "@/components/es/FooterEs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { contactFormSchemaEs } from "@/lib/validations.es";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants.es";
import { useContactForm } from "@/hooks/useContactForm";

const ContactEs = () => {
  const { formData, errors, loading, handleChange, handleSubmit } = useContactForm({
    locale: "es",
    schema: contactFormSchemaEs,
    copy: {
      validationErrorTitle: "Error de validación",
      validationErrorDescription: "Revisa los campos e inténtalo de nuevo.",
      successTitle: "¡Mensaje enviado!",
      successDescription: "Te responderemos en las próximas 24 horas.",
      errorTitle: "Error",
      errorDescription: "No pudimos enviar tu mensaje. Inténtalo de nuevo.",
      rateLimitTitle: "Espera un momento",
      rateLimitDescription: "Has enviado un mensaje hace poco. Espera unos segundos antes de intentarlo de nuevo.",
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Contacto | S&Z Trading International"
        description="Contacta con S&Z Trading para cualquier necesidad logística. Soporte 24/7 para emergencias."
        keywords="contacto logística, soporte transporte, S&Z Trading"
      />
      <Navigation />
      <WhatsAppButton />

      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-left">
            <PageBreadcrumbs items={[{ label: "Inicio", to: "/es" }, { label: "Contacto" }]} />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacta con nosotros</h1>
            <p className="text-xl text-muted-foreground">
              ¿Dudas o urgencias? Nuestro equipo está listo para ayudarte con tu operación logística.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nombre *</label>
                    <Input
                      required
                      placeholder="Nombre y apellidos"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "contact-es-name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="contact-es-name-error" className="text-sm text-destructive mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input
                      required
                      type="email"
                      placeholder="tu@empresa.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "contact-es-email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="contact-es-email-error" className="text-sm text-destructive mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Teléfono</label>
                    <Input
                      type="tel"
                      placeholder="+34 600 123 456"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "contact-es-phone-error" : undefined}
                    />
                    {errors.phone && (
                      <p id="contact-es-phone-error" className="text-sm text-destructive mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Empresa</label>
                    <Input
                      placeholder="Tu empresa"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Mensaje *</label>
                    <Textarea
                      required
                      placeholder="Cuéntanos tus necesidades logísticas..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "contact-es-message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="contact-es-message-error" className="text-sm text-destructive mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {loading ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Información */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Oficina central</h3>
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
                      <h3 className="font-semibold mb-2">Teléfono</h3>
                      <p className="text-muted-foreground">
                        <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-primary hover:underline">
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
                        <a href={`mailto:${BUSINESS_INFO.email}`} className="text-primary hover:underline">
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
                      <h3 className="font-semibold mb-2">Horario</h3>
                      <p className="text-muted-foreground">
                        Lunes - Viernes: {BUSINESS_INFO.hours.weekday.open} - {BUSINESS_INFO.hours.weekday.close}<br />
                        Sábado: {BUSINESS_INFO.hours.saturday.open} - {BUSINESS_INFO.hours.saturday.close}<br />
                        Domingo: {BUSINESS_INFO.hours.sunday}<br />
                        <span className="text-primary font-medium">Emergencias: {BUSINESS_INFO.hours.emergency}</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <FooterEs />
    </div>
  );
};

export default ContactEs;
