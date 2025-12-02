import type { AttributionData } from "@/lib/attribution";

export type QuoteTrackingPayload = {
  readonly locale: "en" | "es";
  readonly serviceType: string;
  readonly attribution: AttributionData | null;
};

export type ContactTrackingPayload = {
  readonly locale: "en" | "es";
  readonly attribution: AttributionData | null;
};

export interface RelocationCtaTrackingPayload {
  readonly locale: "en" | "es";
  readonly city: string;
  readonly position: "hero" | "footer";
  readonly action: "quote" | "contact";
}

export interface ShipmentLookupTrackingPayload {
  readonly result: "found" | "not_found" | "error";
  readonly via: "tracking_number" | "email";
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const isBrowser = (): boolean => typeof window !== "undefined";

export const trackQuoteSubmitted = (payload: QuoteTrackingPayload): void => {
  if (!isBrowser()) {
    return;
  }
  const eventData = {
    event: "quote_submitted",
    locale: payload.locale,
    service_type: payload.serviceType,
    attribution: payload.attribution,
  };
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventData);
  }
  if (typeof window.gtag === "function") {
    window.gtag("event", "quote_submitted", eventData);
  }
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead", eventData);
  }
};

export const trackRelocationCta = (payload: RelocationCtaTrackingPayload): void => {
  if (!isBrowser()) {
    return;
  }
  const eventData = {
    event: "relocation_cta_click",
    locale: payload.locale,
    city: payload.city,
    position: payload.position,
    action: payload.action,
  };
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventData);
  }
  if (typeof window.gtag === "function") {
    window.gtag("event", "relocation_cta_click", eventData);
  }
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", "RelocationCtaClick", eventData);
  }
};

export const trackShipmentLookup = (payload: ShipmentLookupTrackingPayload): void => {
  if (!isBrowser()) {
    return;
  }
  const eventData = {
    event: "shipment_lookup",
    result: payload.result,
    via: payload.via,
  };
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventData);
  }
  if (typeof window.gtag === "function") {
    window.gtag("event", "shipment_lookup", eventData);
  }
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", "ShipmentLookup", eventData);
  }
};

export const trackContactSubmitted = (payload: ContactTrackingPayload): void => {
  if (!isBrowser()) {
    return;
  }
  const eventData = {
    event: "contact_submitted",
    locale: payload.locale,
    attribution: payload.attribution,
  };
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventData);
  }
  if (typeof window.gtag === "function") {
    window.gtag("event", "contact_submitted", eventData);
  }
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead", eventData);
  }
};
