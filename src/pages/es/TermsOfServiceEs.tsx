import { Navigation } from "@/components/Navigation";
import { FooterEs } from "@/components/es/FooterEs";
import { SEO } from "@/components/SEO";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants.es";

function TermsOfServiceEs(): JSX.Element {
  const { name, email, city, country, website } = BUSINESS_INFO;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Términos de Servicio"
        description="Términos y condiciones para usar los servicios de logística y transporte de S&Z Trading International."
        keywords="términos de servicio, condiciones, términos legales, condiciones de transporte"
      />
      <Navigation />

      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-left">
            <PageBreadcrumbs items={[{ label: "Inicio", to: "/es" }, { label: "Términos de Servicio" }]} />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Términos de Servicio</h1>
            <p className="text-muted-foreground">Última actualización: Diciembre 2024</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Introducción</h2>
              <p className="text-muted-foreground">
                Estos Términos de Servicio ("Términos") rigen el uso del sitio web {website} y los servicios de logística, transporte y reubicación proporcionados por {name}, empresa registrada en {city}, {country} ("nosotros", "nuestro").
              </p>
              <p className="text-muted-foreground mt-4">
                Al usar nuestro sitio web o servicios, aceptas estos Términos. Si no estás de acuerdo, por favor no uses nuestros servicios.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Servicios</h2>
              <p className="text-muted-foreground mb-4">Proporcionamos los siguientes servicios:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Transporte de mercancías por carretera en España y Europa</li>
                <li>Servicios de reubicación empresarial y de oficinas</li>
                <li>Coordinación de logística y envíos globales</li>
                <li>Soluciones de almacenaje y almacenamiento</li>
                <li>Consultoría de cadena de suministro</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Los términos específicos de cada servicio se detallarán en presupuestos individuales y acuerdos de servicio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Presupuestos y Precios</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Todos los presupuestos proporcionados a través de nuestro sitio web son estimaciones y están sujetos a confirmación final.</li>
                <li>El precio final depende de los detalles exactos del envío, pesos/dimensiones reales y requisitos especiales.</li>
                <li>Los presupuestos tienen validez de 14 días salvo que se indique lo contrario.</li>
                <li>Los precios no incluyen derechos de aduana, impuestos u otros cargos de terceros, salvo que se indique expresamente.</li>
                <li>Nos reservamos el derecho de ajustar el precio si los detalles del envío difieren de los proporcionados en la solicitud.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Reservas y Cancelaciones</h2>
              <p className="text-muted-foreground mb-4"><strong>Reservas:</strong></p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Las reservas se confirman cuando proporcionamos confirmación por escrito (correo electrónico o acuerdo firmado).</li>
                <li>Debes proporcionar información precisa sobre la carga, origen, destino y requisitos especiales de manipulación.</li>
              </ul>
              <p className="text-muted-foreground mt-4 mb-4"><strong>Cancelaciones:</strong></p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Cancelaciones con más de 48 horas de antelación: Sin cargo.</li>
                <li>Cancelaciones entre 24-48 horas antes: Hasta el 25% del precio presupuestado.</li>
                <li>Cancelaciones con menos de 24 horas o después de la recogida: Hasta el 100% del precio presupuestado.</li>
                <li>Los servicios de reubicación pueden tener términos de cancelación diferentes especificados en el acuerdo de servicio.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Responsabilidades del Cliente</h2>
              <p className="text-muted-foreground mb-4">Te comprometes a:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Proporcionar información precisa y completa sobre los envíos</li>
                <li>Asegurar que las mercancías están correctamente embaladas y etiquetadas (salvo que contrates nuestro servicio de embalaje)</li>
                <li>Obtener los permisos, licencias o documentación necesarios para mercancías reguladas</li>
                <li>Asegurar que alguien esté disponible en los lugares de recogida y entrega a las horas acordadas</li>
                <li>Declarar cualquier artículo peligroso, frágil o de alto valor</li>
                <li>Pagar las facturas dentro de los términos de pago acordados</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Artículos Prohibidos</h2>
              <p className="text-muted-foreground mb-4">No transportamos:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Mercancías ilegales o de contrabando</li>
                <li>Explosivos, armas de fuego o armamento</li>
                <li>Animales vivos (salvo acuerdo específico)</li>
                <li>Mercancías perecederas sin acuerdo previo</li>
                <li>Materiales peligrosos sin la documentación y acuerdos de manipulación adecuados</li>
                <li>Efectivo, títulos al portador o metales/piedras preciosas sin valor declarado</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Responsabilidad y Seguros</h2>
              <p className="text-muted-foreground mb-4"><strong>Responsabilidad Estándar:</strong></p>
              <p className="text-muted-foreground">
                Nuestra responsabilidad por pérdida o daño está limitada según los convenios internacionales aplicables (CMR para transporte por carretera) y la legislación española. La responsabilidad estándar del transportista cubre normalmente hasta 8,33€ por kg de peso bruto para transporte por carretera.
              </p>
              <p className="text-muted-foreground mt-4 mb-4"><strong>Seguro Adicional:</strong></p>
              <p className="text-muted-foreground">
                Ofrecemos seguro de carga adicional para cobertura del valor declarado completo. Solicítalo al hacer la reserva si necesitas mayor protección. Contamos con seguro de responsabilidad general de hasta 250.000€ por envío.
              </p>
              <p className="text-muted-foreground mt-4 mb-4"><strong>Exclusiones:</strong></p>
              <p className="text-muted-foreground">
                No somos responsables de retrasos o pérdidas causados por: eventos de fuerza mayor, retrasos aduaneros, documentación incorrecta proporcionada por el cliente, vicio propio de las mercancías o embalaje inadecuado por parte del cliente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Reclamaciones</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Las reclamaciones por daños visibles deben anotarse en el albarán de entrega en el momento de la entrega.</li>
                <li>Las reclamaciones por daños ocultos deben presentarse por escrito en los 7 días siguientes a la entrega.</li>
                <li>Las reclamaciones por retraso deben presentarse en los 21 días siguientes.</li>
                <li>Todas las reclamaciones deben incluir documentación de apoyo (fotos, facturas, albaranes de entrega).</li>
                <li>Envía las reclamaciones a <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Condiciones de Pago</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>El pago vence en los 30 días siguientes a la fecha de factura, salvo acuerdo contrario.</li>
                <li>Aceptamos transferencia bancaria, tarjeta de crédito y otros métodos según se especifique.</li>
                <li>Los pagos atrasados pueden devengar intereses del 1,5% mensual.</li>
                <li>Nos reservamos el derecho de suspender servicios para cuentas con saldo pendiente.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Uso del Sitio Web</h2>
              <p className="text-muted-foreground mb-4">Al usar nuestro sitio web, te comprometes a no:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Enviar información falsa o engañosa</li>
                <li>Intentar obtener acceso no autorizado a nuestros sistemas</li>
                <li>Usar sistemas automatizados para extraer datos</li>
                <li>Interferir con la funcionalidad del sitio web</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Propiedad Intelectual</h2>
              <p className="text-muted-foreground">
                Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos y software, es propiedad de {name} o nuestros licenciantes y está protegido por las leyes de derechos de autor y marcas. No puedes reproducir, distribuir ni crear obras derivadas sin nuestro permiso por escrito.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">12. Legislación Aplicable</h2>
              <p className="text-muted-foreground">
                Estos Términos se rigen por la legislación española. Para el transporte por carretera dentro de la UE, se aplica el Convenio CMR. Cualquier disputa se someterá a los tribunales de {city}, España, salvo que la legislación de protección al consumidor aplicable disponga lo contrario.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">13. Cambios en los Términos</h2>
              <p className="text-muted-foreground">
                Podemos actualizar estos Términos en cualquier momento. El uso continuado de nuestros servicios después de los cambios constituye aceptación. Los cambios importantes se comunicarán a través de nuestro sitio web o por correo electrónico.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">14. Contacto</h2>
              <p className="text-muted-foreground">
                Para preguntas sobre estos Términos, contáctanos en <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterEs />
    </div>
  );
}

export default TermsOfServiceEs;
