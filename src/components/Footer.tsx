import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, Music2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
// Try direct path import as fallback
import sziLogo from "../assets/szi-logo-mark.svg";

export const Footer = () => {
  const businessInfo = BUSINESS_INFO;

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={sziLogo}
                alt="S&Z Trading / SZI Group logo"
                className="h-10 w-auto rounded-lg bg-white object-contain shadow-sm"
              />
              <div>
                <div className="font-bold text-trust-navy">S&Z TRADING</div>
                <div className="text-xs text-muted-foreground uppercase">International S.C.A.</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {businessInfo.tagline} across {businessInfo.country} and Europe since {businessInfo.foundedYear}.
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

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/get-quote" className="text-sm text-muted-foreground hover:text-primary transition-colors">Get Quote</Link></li>
              <li><Link to="/relocation" className="text-sm text-muted-foreground hover:text-primary transition-colors">Relocation</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Spanish Road Transport</li>
              <li className="text-sm text-muted-foreground">European Logistics</li>
              <li className="text-sm text-muted-foreground">Global Shipping</li>
              <li className="text-sm text-muted-foreground">Warehousing</li>
              <li className="text-sm text-muted-foreground">Supply Chain</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
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
          <p>&copy; {new Date().getFullYear()} S&Z TRADING INTERNATIONAL S.C.A. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};