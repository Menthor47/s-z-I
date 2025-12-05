import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface PrivacyPolicyDialogEsProps {
  readonly className?: string;
}

export function PrivacyPolicyDialogEs({ className }: PrivacyPolicyDialogEsProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-2 hover:underline",
            className,
          )}
        >
          Política de Privacidad
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Política de Privacidad</DialogTitle>
        </DialogHeader>
        <ScrollArea className="mt-2 max-h-[60vh] pr-4">
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              Esta Política de Privacidad explica cómo S&amp;Z Trading International S.C.A. ("S&amp;Z Trading International",
              "nosotros") recoge, utiliza y protege tus datos personales cuando interactúas con nosotros, incluyendo a
              través de nuestra web y de nuestros servicios de logística y reubicación.
            </p>
            <p>
              Al usar nuestra web o nuestros servicios, confirmas que has leído esta Política de Privacidad.
            </p>

            <h3 className="font-semibold text-foreground">1. Responsable del tratamiento</h3>
            <p>El responsable del tratamiento de tus datos personales es:</p>
            <p>
              S&amp;Z Trading International S.C.A.
              <br />
              [insertar dirección social completa en España]
              <br />
              [insertar NIF / CIF español]
              <br />
              España
            </p>
            <p>Contacto: [insertar email de contacto]</p>

            <h3 className="font-semibold text-foreground">2. Datos que podemos recoger</h3>
            <p>Según cómo interactúes con nosotros, podemos tratar:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-medium text-foreground">Datos de identificación y contacto:</span> nombre, email,
                teléfono, nombre de la empresa, dirección.
              </li>
              <li>
                <span className="font-medium text-foreground">Datos relacionados con el servicio:</span> detalles del
                envío, direcciones de recogida y entrega, descripción de la mercancía (solo cuando sea necesario),
                historial de comunicaciones.
              </li>
              <li>
                <span className="font-medium text-foreground">Datos de uso de la web:</span> dirección IP, tipo de
                navegador, páginas visitadas (mediante cookies u otras tecnologías similares).
              </li>
              <li>
                <span className="font-medium text-foreground">Preferencias de marketing:</span> tus elecciones sobre el
                envío de comunicaciones comerciales.
              </li>
            </ul>
            <p>
              No recopilamos de forma intencionada categorías especiales de datos (salud, creencias religiosas, etc.). Si
              en algún momento se nos facilitan este tipo de datos, serán eliminados siempre que sea posible.
            </p>

            <h3 className="font-semibold text-foreground">3. Cómo y por qué usamos tus datos (bases legales)</h3>
            <p>
              Solo tratamos datos personales cuando existe una base legal válida según el RGPD y la normativa española de
              protección de datos (LOPDGDD):
            </p>

            <p className="font-medium text-foreground">Para prestar nuestros servicios y responder a solicitudes</p>
            <p>
              Para responder a consultas, enviar presupuestos, gestionar envíos, tramitar contratos y ofrecer soporte al
              cliente.
              <br />
              <span className="font-medium text-foreground">Base legal:</span> ejecución de un contrato o aplicación de
              medidas precontractuales.
            </p>

            <p className="font-medium text-foreground">Para operar y mejorar nuestra web y servicios</p>
            <p>
              Para garantizar la seguridad, prevenir abusos, analizar el tráfico y mejorar la experiencia de usuario.
              <br />
              <span className="font-medium text-foreground">Base legal:</span> nuestro interés legítimo en gestionar y
              mejorar nuestro negocio.
            </p>

            <p className="font-medium text-foreground">Para cumplir obligaciones legales</p>
            <p>
              Para cumplir obligaciones legales (fiscales, contables, normativa de transporte, aduanas, etc.) y para
              establecer, ejercer o defender reclamaciones legales.
              <br />
              <span className="font-medium text-foreground">Base legal:</span> cumplimiento de obligaciones legales y
              nuestros intereses legítimos.
            </p>

            <p className="font-medium text-foreground">Para fines de marketing (cuando esté permitido)</p>
            <p>
              Para enviarte información o ofertas sobre nuestros servicios, siempre de acuerdo con la ley y con tus
              preferencias.
              <br />
              <span className="font-medium text-foreground">Base legal:</span> tu consentimiento o nuestro interés
              legítimo, según proceda. Puedes darte de baja en cualquier momento.
            </p>
            <p>No vendemos tus datos personales.</p>

            <h3 className="font-semibold text-foreground">4. Plazos de conservación</h3>
            <p>Conservamos los datos personales solo durante el tiempo necesario:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-medium text-foreground">Datos contractuales y de envíos:</span> mientras dure la
                relación y durante los plazos exigidos por ley (por ejemplo, obligaciones fiscales y contables).
              </li>
              <li>
                <span className="font-medium text-foreground">Datos de comunicación (emails, formularios):</span> durante
                un plazo razonable para gestionar consultas y poder acreditar las comunicaciones.
              </li>
              <li>
                <span className="font-medium text-foreground">Datos de marketing:</span> hasta que retires tu
                consentimiento, te opongas al tratamiento o dejemos de utilizarlos.
              </li>
            </ul>
            <p>
              Cuando los datos dejan de ser necesarios, se eliminan de forma segura o se anonimizan de manera irreversible.
            </p>

            <h3 className="font-semibold text-foreground">5. Con quién compartimos tus datos</h3>
            <p>Podemos compartir tus datos con:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-medium text-foreground">Proveedores y encargados de tratamiento:</span> servicios de
                hosting, email, CRM y otras herramientas necesarias para nuestra actividad. Solo tratan datos siguiendo
                nuestras instrucciones y bajo obligaciones de confidencialidad.
              </li>
              <li>
                <span className="font-medium text-foreground">Socios logísticos y comerciales:</span> transportistas,
                agentes, transitarios o colaboradores necesarios para prestar los servicios que solicitas.
              </li>
              <li>
                <span className="font-medium text-foreground">Autoridades u otros terceros:</span> cuando la ley lo
                exija, para proteger nuestros derechos o para atender requerimientos legales.
              </li>
            </ul>
            <p>No permitimos que nuestros proveedores utilicen tus datos para sus propias acciones de marketing.</p>

            <h3 className="font-semibold text-foreground">6. Tus derechos</h3>
            <p>
              De acuerdo con el RGPD y la LOPDGDD, puedes tener derecho a:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Acceder a tus datos personales y obtener una copia.</li>
              <li>Rectificar datos inexactos o incompletos.</li>
              <li>Solicitar la supresión de tus datos en determinados casos ("derecho al olvido").</li>
              <li>Solicitar la limitación del tratamiento en situaciones concretas.</li>
              <li>Oponerte al tratamiento basado en intereses legítimos o a la recepción de comunicaciones comerciales.</li>
              <li>Solicitar la portabilidad de tus datos, cuando proceda.</li>
              <li>Retirar tu consentimiento en cualquier momento cuando el tratamiento se base en el mismo.</li>
            </ul>
            <p>
              También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si
              consideras que se han vulnerado tus derechos.
            </p>
            <p>Para ejercer tus derechos, puedes contactarnos en: [insertar email de contacto].</p>

            <h3 className="font-semibold text-foreground">7. Seguridad</h3>
            <p>
              Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos personales frente a accesos
              no autorizados, pérdida, alteración o divulgación. No obstante, ningún sistema es completamente seguro.
            </p>

            <h3 className="font-semibold text-foreground">8. Cookies y tecnologías similares</h3>
            <p>Nuestra web puede utilizar cookies y tecnologías similares para:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Permitir el funcionamiento básico del sitio.</li>
              <li>Analizar el tráfico y el uso de la web.</li>
              <li>Recordar tus preferencias.</li>
            </ul>
            <p>
              Cuando la ley lo requiera, te pediremos consentimiento para el uso de cookies no esenciales. Puedes cambiar
              tus preferencias en cualquier momento desde la configuración de tu navegador.
            </p>

            <h3 className="font-semibold text-foreground">9. Cambios en esta política</h3>
            <p>
              Podemos actualizar esta Política de Privacidad ocasionalmente. Cuando lo hagamos, modificaremos la fecha de
              "Última actualización".
            </p>
            <p>Última actualización: [insertar fecha]</p>

            <h3 className="font-semibold text-foreground">10. Contacto</h3>
            <p>Si tienes dudas o solicitudes relacionadas con esta Política de Privacidad o con tus datos personales:</p>
            <p>
              S&amp;Z Trading International S.C.A.
              <br />
              [insertar dirección social completa en España]
              <br />
              Email: [insertar email de contacto]
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
