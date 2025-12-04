import { useState, useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { ServiceSelection } from "@/components/quote/ServiceSelection";
import { RouteDetails } from "@/components/quote/RouteDetails";
import { CargoDetails } from "@/components/quote/CargoDetails";
import { ContactInfo } from "@/components/quote/ContactInfo";
import { QuoteSummary } from "@/components/quote/QuoteSummary";
import { quoteFormSchema, type QuoteFormData } from "@/lib/validations";
import { loadAttribution, formatAttributionForNotes } from "@/lib/attribution";
import { trackQuoteSubmitted } from "@/lib/tracking";
import { SERVICE_RATES, QUOTE_CALCULATION } from "@/lib/constants";
import type { TablesInsert } from "@/integrations/supabase/types";

interface InitialQuoteState {
  readonly serviceType?: string;
  readonly origin?: string;
  readonly destination?: string;
  readonly weight?: string;
  readonly email?: string;
  readonly plannedDate?: string;
}

const GetQuote = () => {
  const { toast } = useToast();
  const location = useLocation();
  const initialData = (location.state || {}) as InitialQuoteState;

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);
  const lastSubmitRef = useRef<number | null>(null);

  const methods = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    mode: "onChange",
    defaultValues: {
      serviceType: initialData.serviceType || "",
      origin: initialData.origin || "",
      destination: initialData.destination || "",
      pickupDate: initialData.plannedDate || "",
      deliveryDate: "",
      weight: initialData.weight || "",
      length: "",
      width: "",
      height: "",
      specialRequirements: [],
      contactName: "",
      companyName: "",
      email: initialData.email || "",
      phone: "",
    },
  });

  const { handleSubmit, trigger, getValues } = methods;

  const calculateEstimate = () => {
    const values = getValues();
    const weightFactor = parseFloat(values.weight) * QUOTE_CALCULATION.weightFactor;
    const baseRate = SERVICE_RATES[values.serviceType as keyof typeof SERVICE_RATES] || 300;
    const specialReqCost = values.specialRequirements.length * QUOTE_CALCULATION.specialRequirementCost;

    const total = baseRate + weightFactor + specialReqCost;
    setEstimatedCost(Math.round(total));
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof QuoteFormData)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = ["serviceType"];
        break;
      case 2:
        fieldsToValidate = ["origin", "destination"];
        break;
      case 3:
        fieldsToValidate = ["weight"];
        break;
      case 4:
        fieldsToValidate = ["contactName", "email", "phone"];
        break;
    }

    const isStepValid = await trigger(fieldsToValidate);

    if (isStepValid) {
      if (step === 3) {
        calculateEstimate();
      }
      setStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (formData: QuoteFormData) => {
    const now = Date.now();
    if (lastSubmitRef.current !== null && now - lastSubmitRef.current < 10_000) {
      toast({
        title: "Please wait",
        description: "You recently submitted a quote request. Please wait a few seconds before trying again.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const attribution = loadAttribution();

    try {
      const insertData: TablesInsert<"quotes"> = {
        service_type: formData.serviceType,
        origin: formData.origin,
        destination: formData.destination,
        pickup_date: formData.pickupDate && formData.pickupDate.trim() !== "" ? formData.pickupDate : null,
        delivery_date: formData.deliveryDate && formData.deliveryDate.trim() !== "" ? formData.deliveryDate : null,
        weight: parseFloat(formData.weight),
        length: formData.length && formData.length.trim() !== "" ? parseFloat(formData.length) : null,
        width: formData.width && formData.width.trim() !== "" ? parseFloat(formData.width) : null,
        height: formData.height && formData.height.trim() !== "" ? parseFloat(formData.height) : null,
        special_requirements: formData.specialRequirements.length > 0 ? formData.specialRequirements : null,
        contact_name: formData.contactName,
        company_name: formData.companyName && formData.companyName.trim() !== "" ? formData.companyName : null,
        email: formData.email,
        phone: formData.phone,
        estimated_cost: estimatedCost ?? null,
        notes: formatAttributionForNotes(attribution),
      };

      const { data, error } = await supabase
        .from("quotes")
        .insert([insertData])
        .select();

      if (error) throw error;

      if (!data || data.length === 0) {
        throw new Error("Insert succeeded but no data returned");
      }

      trackQuoteSubmitted({
        locale: "en",
        serviceType: formData.serviceType,
        attribution,
      });

      toast({
        title: "Quote Request Submitted!",
        description: "Our team will contact you within 2 hours with a formal quote.",
      });

      setStep(5);
      lastSubmitRef.current = now;
    } catch (error: unknown) {
      console.error("Quote submission error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit quote. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1: return <ServiceSelection />;
      case 2: return <RouteDetails />;
      case 3: return <CargoDetails />;
      case 4: return <ContactInfo />;
      case 5: return <QuoteSummary />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Get Quote - Freight Transport Services"
        description="Get an instant quote for freight transport across Spain and Europe. Fill out our simple form and receive a detailed quote within 2 hours."
        keywords="freight quote, logistics quote, transport estimate, shipping quote Spain"
      />
      <Navigation />
      <WhatsAppButton />

      <main id="main-content">
        <section className="py-16 flex-1">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-4 text-left">
              <PageBreadcrumbs items={[{ label: "Home", to: "/" }, { label: "Get Quote" }]} />
            </div>

            {step <= 4 && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Get Your Quote</h2>
                  <span className="text-sm text-muted-foreground">Step {step} of 4</span>
                </div>
                <Progress value={(step / 4) * 100} className="h-2" />
              </div>
            )}

            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {renderStep()}

                    {step <= 4 && (
                      <div className="flex justify-between mt-8 pt-6 border-t">
                        {step > 1 && (
                          <Button type="button" variant="outline" onClick={prevStep}>
                            Back
                          </Button>
                        )}
                        {step === 4 ? (
                          <Button
                            type="submit"
                            className="ml-auto"
                            disabled={loading}
                          >
                            {loading ? "Processing..." : "Submit Quote Request"}
                          </Button>
                        ) : (
                          <Button
                            type="button"
                            className="ml-auto"
                            onClick={nextStep}
                          >
                            Continue
                          </Button>
                        )}
                      </div>
                    )}
                  </form>
                </FormProvider>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GetQuote;