export type FooterServiceKey =
  | "spanish-road"
  | "european"
  | "global"
  | "warehousing"
  | "supply-chain";

interface FooterServiceConfig {
  readonly key: FooterServiceKey;
}

export const FOOTER_SERVICES: readonly FooterServiceConfig[] = [
  { key: "spanish-road" },
  { key: "european" },
  { key: "global" },
  { key: "warehousing" },
  { key: "supply-chain" },
] as const;
