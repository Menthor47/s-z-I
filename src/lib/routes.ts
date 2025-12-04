export type RouteKey =
  | "home"
  | "services"
  | "relocation"
  | "resources"
  | "get-quote"
  | "about"
  | "contact"
  | "terms";

interface RouteConfig {
  readonly path: string;
}

type RoutesRecord = { readonly [K in RouteKey]: RouteConfig };

export const ROUTES: RoutesRecord = {
  home: { path: "/" },
  services: { path: "/services" },
  relocation: { path: "/relocation" },
  resources: { path: "/resources" },
  "get-quote": { path: "/get-quote" },
  about: { path: "/about" },
  contact: { path: "/contact" },
  terms: { path: "/terms" },
};
