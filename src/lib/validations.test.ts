import { describe, it, expect } from "vitest";
import { quoteFormSchema, contactFormSchema } from "./validations";

describe("quoteFormSchema", () => {
  it("accepts a valid quote payload", () => {
    const result = quoteFormSchema.safeParse({
      serviceType: "spanish-road",
      origin: "Madrid",
      destination: "Barcelona",
      pickupDate: "2025-01-01",
      deliveryDate: "2025-01-02",
      weight: "500",
      length: "200",
      width: "100",
      height: "150",
      specialRequirements: [],
      contactName: "John Doe",
      companyName: "Acme Corp",
      email: "john@example.com",
      phone: "+34612345678",
    });

    expect(result.success).toBe(true);
  });

  it("rejects missing serviceType", () => {
    const result = quoteFormSchema.safeParse({
      serviceType: "",
      origin: "Madrid",
      destination: "Barcelona",
      weight: "500",
      specialRequirements: [],
      contactName: "John Doe",
      email: "john@example.com",
      phone: "+34612345678",
    });

    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = quoteFormSchema.safeParse({
      serviceType: "spanish-road",
      origin: "Madrid",
      destination: "Barcelona",
      weight: "500",
      specialRequirements: [],
      contactName: "John Doe",
      email: "not-an-email",
      phone: "+34612345678",
    });

    expect(result.success).toBe(false);
  });

  it("rejects non-positive weight", () => {
    const result = quoteFormSchema.safeParse({
      serviceType: "spanish-road",
      origin: "Madrid",
      destination: "Barcelona",
      weight: "0",
      specialRequirements: [],
      contactName: "John Doe",
      email: "john@example.com",
      phone: "+34612345678",
    });

    expect(result.success).toBe(false);
  });
});

describe("contactFormSchema", () => {
  it("accepts a minimal valid contact payload", () => {
    const result = contactFormSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "I need help with a shipment.",
    });

    expect(result.success).toBe(true);
  });

  it("rejects too-short message", () => {
    const result = contactFormSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Hi",
    });

    expect(result.success).toBe(false);
  });
});
