import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, Music2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants.es";
import { SziLogo } from "@/components/SziLogo";
import { FOOTER_LINKS, type FooterLinkKey } from "@/components/footerLinks";
import { FOOTER_SERVICES, type FooterServiceKey } from "@/components/footerServices";

export const FooterEs = () => {
  const businessInfo = BUSINESS_INFO;

  const footerLinkLabels: Record<FooterLinkKey, string> = {
    "services": "Nuestros servicios",
    "get-quote": "Solicitar presupuesto",
    "relocation": "Reubicación",
    "about": "Sobre nosotros",
    "contact": "Contacto",
    "terms": "Términos de Servicio",
    "privacy": "Política de Privacidad",
  };

  const footerServiceLabels: Record<FooterServiceKey, string> = {
    "spanish-road": "Transporte nacional",
    european: "Logística europea",
    global: "Envíos globales",
    warehousing: "Almacenaje",
    "supply-chain": "Cadena de suministro",
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div className="space-y-4">
            <div className="flex items-center justify-end space-x-2">
              <SziLogo
                className="h-[5.25rem] w-auto rounded-lg shadow-sm"
                alt="Logotipo S&Z Trading / SZI Group"
              />
              <div>
                <div className="font-bold text-trust-navy">S&Z TRADING</div>
                <div className="text-xs text-muted-foreground uppercase">International S.C.A.</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {businessInfo.tagline} en {businessInfo.country} y Europa desde {businessInfo.foundedYear}.
            </p>
            <div className="flex space-x-4">
              {businessInfo.social.facebook && (
                <a
                  href={businessInfo.social.facebook}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {businessInfo.social.linkedin && (
                <a
                  href={businessInfo.social.linkedin}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {businessInfo.social.instagram && (
                <a
                  href={businessInfo.social.instagram}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {businessInfo.social.tiktok && (
                <a
                  href={businessInfo.social.tiktok}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="TikTok"
                >
                  <Music2 className="h-5 w-5" />
                </a>
              )}
              {businessInfo.social.twitter && (
                <a
                  href={businessInfo.social.twitter}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.key}>
                  {link.key === "privacy" ? (
                    <a
                      href={`/es${link.path}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {footerLinkLabels[link.key]}
                    </a>
                  ) : (
                    <Link
                      to={`/es${link.path}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {footerLinkLabels[link.key]}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.key} className="text-sm text-muted-foreground">
                  {footerServiceLabels[service.key]}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  {businessInfo.city}, {businessInfo.country}
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={`tel:${businessInfo.phoneRaw}`} className="hover:text-primary transition-colors">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-primary transition-colors">
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {businessInfo.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
