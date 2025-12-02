import type { Json } from "@/integrations/supabase/types";

export type AttributionData = {
  readonly utmSource?: string;
  readonly utmMedium?: string;
  readonly utmCampaign?: string;
  readonly utmTerm?: string;
  readonly utmContent?: string;
  readonly refCode?: string;
  readonly partner?: string;
  readonly referrer?: string;
  readonly landingPath?: string;
  readonly firstTouchAt?: string;
  readonly lastTouchAt?: string;
};

export type AttributionSource = {
  readonly pathname: string;
  readonly search: string;
  readonly referrer?: string;
};

const ATTRIBUTION_STORAGE_KEY = "szi_attribution" as const;

const isBrowser = (): boolean => typeof window !== "undefined";

const parseUtmParams = (search: string): Partial<AttributionData> => {
  const params = new URLSearchParams(search);
  const utmSource = params.get("utm_source") || undefined;
  const utmMedium = params.get("utm_medium") || undefined;
  const utmCampaign = params.get("utm_campaign") || undefined;
  const utmTerm = params.get("utm_term") || undefined;
  const utmContent = params.get("utm_content") || undefined;
  const refCode = params.get("ref") || undefined;
  const partner = params.get("partner") || undefined;
  return { utmSource, utmMedium, utmCampaign, utmTerm, utmContent, refCode, partner };
};

const safelyParseAttribution = (raw: string | null): AttributionData | null => {
  if (!raw) {
    return null;
  }
  try {
    const parsed = JSON.parse(raw) as Json;
    if (!parsed || typeof parsed !== "object") {
      return null;
    }
    return parsed as AttributionData;
  } catch {
    return null;
  }
};

export const loadAttribution = (): AttributionData | null => {
  if (!isBrowser()) {
    return null;
  }
  const raw = window.localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
  return safelyParseAttribution(raw);
};

export const saveAttribution = (source: AttributionSource): void => {
  if (!isBrowser()) {
    return;
  }
  const existing = loadAttribution();
  const nowIso = new Date().toISOString();
  const base: AttributionData = existing || {
    landingPath: `${source.pathname}${source.search}`,
    referrer: source.referrer || document.referrer || undefined,
    firstTouchAt: nowIso,
  };
  const utmFromUrl = parseUtmParams(source.search);
  const merged: AttributionData = {
    ...base,
    ...utmFromUrl,
    lastTouchAt: nowIso,
  };
  window.localStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(merged));
};
