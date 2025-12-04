import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BUSINESS_INFO as BUSINESS_INFO_EN } from "@/lib/constants";
import { BUSINESS_INFO as BUSINESS_INFO_ES } from "@/lib/constants.es";
import { ROUTES } from "@/lib/routes";
import { useLocale } from "@/hooks/useLocale";
import { SziLogo } from "@/components/SziLogo";

type NavItemKey = "services" | "relocation" | "resources" | "get-quote" | "about" | "contact";

interface NavItem {
  readonly key: NavItemKey;
  readonly labelEn: string;
  readonly labelEs: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { key: "services", labelEn: "Services", labelEs: "Servicios" },
  { key: "relocation", labelEn: "Relocation", labelEs: "Reubicación" },
  { key: "resources", labelEn: "Resources", labelEs: "Recursos" },
  { key: "get-quote", labelEn: "Get Quote", labelEs: "Solicitar presupuesto" },
  { key: "about", labelEn: "About", labelEs: "Sobre nosotros" },
  { key: "contact", labelEn: "Contact", labelEs: "Contacto" },
] as const;

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isSpanish } = useLocale();
  const businessInfo = isSpanish ? BUSINESS_INFO_ES : BUSINESS_INFO_EN;
  const basePath = isSpanish ? "/es" : "";
  const homePath = basePath || "/";

  const normalizedPath = location.pathname.replace(/^\/es/, "") || "/";

  const localeTogglePath = isSpanish
    ? normalizedPath
    : normalizedPath === "/" ? "/es" : `/es${normalizedPath}`;

  const navLinks = useMemo(
    () =>
      NAV_ITEMS.map((item) => ({
        label: isSpanish ? item.labelEs : item.labelEn,
        path: `${basePath}${ROUTES[item.key].path}`,
      })),
    [basePath, isSpanish]
  );

  const isActive = (path: string) => {
    const basePath = path.split("#")[0];
    return location.pathname === basePath;
  };

  const handleHomeClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none"
      >
        {isSpanish ? "Saltar al contenido principal" : "Skip to main content"}
      </a>
      
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link
            to={homePath}
            onClick={handleHomeClick}
            className="flex items-center space-x-2"
            aria-label={isSpanish ? "S&Z Trading / SZI Group - Ir al inicio" : "S&Z Trading / SZI Group - Go to homepage"}
          >
            <SziLogo
              className="h-[3.25rem] w-auto rounded-lg shadow-sm"
              alt={isSpanish ? "Logotipo S&Z Trading / SZI Group" : "S&Z Trading / SZI Group logo"}
            />
            <div className="hidden md:block">
              <div className="text-lg font-bold text-trust-navy">S&Z Trading</div>
              <div className="text-xs text-muted-foreground">International Logistics</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={localeTogglePath}
              className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              <span
                className="text-lg"
                role="img"
                aria-label={isSpanish ? "UK flag" : "Spanish flag"}
              >
                {isSpanish ? "🇬🇧" : "🇪🇸"}
              </span>
              <span>{isSpanish ? "English" : "Español"}</span>
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={`tel:${businessInfo.phoneRaw}`} className="flex items-center space-x-2 text-sm font-medium">
              <Phone className="h-4 w-4" />
              <span>{businessInfo.phone}</span>
            </a>
            <Button asChild>
              <Link to={`${basePath}/get-quote`}>
                {isSpanish ? "Solicitar presupuesto" : "Get Quote"}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label={isSpanish ? "Abrir menú" : "Open menu"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent aria-label={isSpanish ? "Menú de navegación" : "Navigation menu"}>
              <nav className="flex flex-col space-y-4 mt-8" aria-label={isSpanish ? "Navegación principal" : "Main navigation"}>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      isActive(link.path) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to={localeTogglePath}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary"
                >
                  <span
                    className="text-xl"
                    role="img"
                    aria-label={isSpanish ? "UK flag" : "Spanish flag"}
                  >
                    {isSpanish ? "🇬🇧" : "🇪🇸"}
                  </span>
                  <span>{isSpanish ? "English" : "Español"}</span>
                </Link>
                <a href={`tel:${businessInfo.phoneRaw}`} className="flex items-center space-x-2 text-lg font-medium pt-4 border-t">
                  <Phone className="h-5 w-5" />
                  <span>{businessInfo.phone}</span>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};