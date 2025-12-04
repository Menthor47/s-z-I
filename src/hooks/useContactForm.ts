import { useState } from "react";
import type { AnyZodObject } from "zod";
import type { TablesInsert } from "@/integrations/supabase/types";
import type { FormErrors } from "@/lib/formTypes";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { loadAttribution } from "@/lib/attribution";
import { trackContactSubmitted } from "@/lib/tracking";

export interface ContactFormValues {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly company: string;
  readonly message: string;
}

type ContactInsert = TablesInsert<"contact_submissions">;

export interface ContactFormCopy {
  readonly validationErrorTitle: string;
  readonly validationErrorDescription: string;
  readonly successTitle: string;
  readonly successDescription: string;
  readonly errorTitle: string;
  readonly errorDescription: string;
  readonly rateLimitTitle: string;
  readonly rateLimitDescription: string;
}

interface UseContactFormOptions {
  readonly locale: "en" | "es";
  readonly schema: AnyZodObject;
  readonly copy: ContactFormCopy;
}

interface UseContactFormReturn {
  readonly formData: ContactFormValues;
  readonly errors: FormErrors<ContactFormValues>;
  readonly loading: boolean;
  readonly handleChange: (field: keyof ContactFormValues, value: string) => void;
  readonly handleSubmit: (event: React.FormEvent) => Promise<void>;
}

export function useContactForm(options: UseContactFormOptions): UseContactFormReturn {
  const { locale, schema, copy } = options;
  const { toast } = useToast();

  const [formData, setFormData] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors<ContactFormValues>>({});
  const [loading, setLoading] = useState(false);
  const [lastSubmittedAt, setLastSubmittedAt] = useState<number | null>(null);

  function handleChange(field: keyof ContactFormValues, value: string): void {
    setFormData((previous) => ({ ...previous, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    setErrors({});

    const now = Date.now();
    if (lastSubmittedAt !== null && now - lastSubmittedAt < 10_000) {
      toast({
        title: copy.rateLimitTitle,
        description: copy.rateLimitDescription,
        variant: "destructive",
      });
      return;
    }

    const result = schema.safeParse(formData);

    if (!result.success) {
      const newErrors: FormErrors<ContactFormValues> = {};

      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && field in formData) {
          const key = field as keyof ContactFormValues;
          if (!newErrors[key]) {
            newErrors[key] = issue.message;
          }
        }
      }

      setErrors(newErrors);
      toast({
        title: copy.validationErrorTitle,
        description: copy.validationErrorDescription,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const attribution = loadAttribution();

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert<ContactInsert>([formData]);

      if (error) {
        throw error;
      }

      trackContactSubmitted({
        locale,
        attribution,
      });

      toast({
        title: copy.successTitle,
        description: copy.successDescription,
      });

      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setLastSubmittedAt(now);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Contact form error:", error);
      toast({
        title: copy.errorTitle,
        description: copy.errorDescription,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return {
    formData,
    errors,
    loading,
    handleChange,
    handleSubmit,
  };
}
