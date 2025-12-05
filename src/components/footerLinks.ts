import { ROUTES } from "@/lib/routes";

export type FooterLinkKey =
  | "services"
  | "get-quote"
  | "relocation"
  | "about"
  | "contact"
  | "terms"
  | "privacy";

interface FooterLinkConfig {
  readonly key: FooterLinkKey;
  readonly path: string;
}

export const FOOTER_LINKS: readonly FooterLinkConfig[] = [
  { key: "services", path: ROUTES.services.path },
  { key: "get-quote", path: ROUTES["get-quote"].path },
  { key: "relocation", path: ROUTES.relocation.path },
  { key: "about", path: ROUTES.about.path },
  { key: "contact", path: ROUTES.contact.path },
  { key: "terms", path: ROUTES.terms.path },
  { key: "privacy", path: ROUTES.privacy.path },
] as const;
