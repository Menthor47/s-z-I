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
