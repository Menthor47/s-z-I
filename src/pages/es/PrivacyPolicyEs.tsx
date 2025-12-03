import { Navigation } from "@/components/Navigation";
import { FooterEs } from "@/components/es/FooterEs";
import { SEO } from "@/components/SEO";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants.es";

function PrivacyPolicyEs(): JSX.Element {
  const { name, email, city, country, website } = BUSINESS_INFO;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Política de Privacidad"
        description="Política de privacidad de S&Z Trading International. Descubre cómo recogemos, usamos y protegemos tus datos personales."
        keywords="política de privacidad, protección de datos, RGPD, datos personales"
      />
      <Navigation />

      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-left">
            <PageBreadcrumbs items={[{ label: "Inicio", to: "/es" }, { label: "Política de Privacidad" }]} />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidad</h1>
            <p className="text-muted-foreground">Última actualización: Diciembre 2024</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Responsable del Tratamiento</h2>
              <p className="text-muted-foreground">
                {name}, con sede en {city}, {country}, es el responsable del tratamiento de tus datos personales recogidos a través de este sitio web ({website}).
              </p>
              <p className="text-muted-foreground">
                Para cualquier consulta relacionada con la privacidad, contáctanos en: <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Información que Recogemos</h2>
              <p className="text-muted-foreground mb-4">Recogemos la información que nos proporcionas directamente al usar nuestros servicios:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Información de contacto:</strong> Nombre, dirección de correo electrónico, número de teléfono, nombre de empresa</li>
                <li><strong>Solicitudes de presupuesto:</strong> Detalles del envío, origen/destino, tipo de carga, requisitos especiales</li>
                <li><strong>Comunicaciones:</strong> Mensajes enviados a través de nuestros formularios de contacto o correo electrónico</li>
                <li><strong>Datos técnicos:</strong> Dirección IP, tipo de navegador, información del dispositivo (recogidos automáticamente)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Cómo Usamos tu Información</h2>
              <p className="text-muted-foreground mb-4">Usamos tus datos personales para:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Procesar y responder a tus solicitudes de presupuesto</li>
                <li>Proporcionar los servicios de logística y transporte que solicites</li>
                <li>Comunicarnos contigo sobre tus envíos</li>
                <li>Enviar notificaciones relacionadas con el servicio</li>
                <li>Mejorar nuestro sitio web y servicios</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Base Legal del Tratamiento</h2>
              <p className="text-muted-foreground mb-4">Bajo el RGPD, tratamos tus datos en base a:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Ejecución de contrato:</strong> Tratamiento necesario para proporcionar los servicios solicitados</li>
                <li><strong>Interés legítimo:</strong> Mejora de nuestros servicios y operaciones comerciales</li>
                <li><strong>Consentimiento:</strong> Para comunicaciones de marketing (cuando aplique)</li>
                <li><strong>Obligación legal:</strong> Cumplimiento de la legislación aplicable</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Compartición de Datos</h2>
              <p className="text-muted-foreground mb-4">Podemos compartir tus datos con:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Proveedores de servicios:</strong> Socios de transporte, instalaciones de almacenaje, agentes de aduanas necesarios para cumplir tus envíos</li>
                <li><strong>Proveedores tecnológicos:</strong> Herramientas de hosting, analítica y comunicación (procesados bajo acuerdos de tratamiento de datos)</li>
                <li><strong>Autoridades legales:</strong> Cuando lo exija la ley o para proteger nuestros derechos</li>
              </ul>
              <p className="text-muted-foreground mt-4">No vendemos tus datos personales a terceros.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Conservación de Datos</h2>
              <p className="text-muted-foreground">
                Conservamos tus datos personales durante el tiempo necesario para cumplir los fines descritos en esta política, normalmente durante la duración de nuestra relación comercial más el período de conservación legalmente requerido (generalmente 5-10 años para registros comerciales en España).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Tus Derechos</h2>
              <p className="text-muted-foreground mb-4">Bajo el RGPD, tienes derecho a:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Acceso:</strong> Solicitar una copia de tus datos personales</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos ("derecho al olvido")</li>
                <li><strong>Limitación:</strong> Limitar cómo tratamos tus datos</li>
                <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado</li>
                <li><strong>Oposición:</strong> Oponerte al tratamiento basado en interés legítimo</li>
                <li><strong>Retirar consentimiento:</strong> Cuando el tratamiento se base en el consentimiento</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Para ejercer estos derechos, contáctanos en <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>. Responderemos en un plazo de 30 días.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Cookies</h2>
              <p className="text-muted-foreground">
                Nuestro sitio web utiliza cookies para mejorar tu experiencia. Usamos cookies esenciales para la funcionalidad del sitio y cookies analíticas opcionales para entender cómo los visitantes usan nuestro sitio. Puedes gestionar tus preferencias de cookies a través de la configuración de tu navegador o nuestro banner de consentimiento de cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Seguridad</h2>
              <p className="text-muted-foreground">
                Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye transmisión de datos cifrada (HTTPS), infraestructura de hosting segura y controles de acceso.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Cambios en Esta Política</h2>
              <p className="text-muted-foreground">
                Podemos actualizar esta política de privacidad periódicamente. Los cambios significativos se comunicarán a través de nuestro sitio web. La fecha de "última actualización" en la parte superior indica cuándo se revisó la política por última vez.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Contacto y Reclamaciones</h2>
              <p className="text-muted-foreground">
                Para preguntas sobre esta política o nuestras prácticas de datos, contáctanos en <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>.
              </p>
              <p className="text-muted-foreground mt-4">
                Si crees que no hemos manejado tus datos adecuadamente, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterEs />
    </div>
  );
}

export default PrivacyPolicyEs;
