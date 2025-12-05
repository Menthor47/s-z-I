import { useFormContext } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Truck } from "lucide-react";
import { QuoteFormData } from "@/lib/validations";

const SERVICES = [
  { value: "spanish-road", label: "Spanish Road Transport" },
  { value: "european-road", label: "European Road Freight" },
  { value: "relocation", label: "Business Relocation" },
  { value: "global", label: "Global Logistics" },
  { value: "warehousing", label: "Warehousing" },
  { value: "consultancy", label: "Supply Chain Consultancy" },
] as const;

export function ServiceSelection() {
  const { watch, setValue, formState: { errors } } = useFormContext<QuoteFormData>();
  const selectedService = watch("serviceType");

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center space-x-3 mb-6">
        <Truck className="h-6 w-6 text-primary" />
        <h3 className="text-2xl font-semibold">Select Service Type</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SERVICES.map((service) => (
          <Card
            key={service.value}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedService === service.value ? "border-primary border-2 bg-primary/5" : ""
            }`}
            onClick={() => setValue("serviceType", service.value, { shouldValidate: true })}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <span className="font-medium">{service.label}</span>
                {selectedService === service.value && (
                  <CheckCircle className="h-5 w-5 text-primary" />
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {errors.serviceType && (
        <p className="text-sm text-destructive mt-4">{errors.serviceType.message}</p>
      )}
    </div>
  );
}
