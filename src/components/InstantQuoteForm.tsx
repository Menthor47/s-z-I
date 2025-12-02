import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocale } from "@/hooks/useLocale";
import { getQuoteFormTranslations } from "@/lib/i18n/quote-form";

interface FormErrors {
  origin?: string;
  destination?: string;
}

export const InstantQuoteForm = () => {
  const navigate = useNavigate();
  const { isSpanish } = useLocale();
  const t = getQuoteFormTranslations(isSpanish);
  const idSuffix = isSpanish ? "-es" : "";
  
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    weight: "",
    serviceType: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    if (!formData.origin) newErrors.origin = t.errors.origin;
    if (!formData.destination) newErrors.destination = t.errors.destination;
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    navigate(t.quotePath, { state: formData });
  };

  return (
    <Card className="shadow-xl border-2">
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Calculator className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">{t.title}</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`origin${idSuffix}`} className="text-sm font-medium mb-2 block">{t.labels.origin}</label>
              <Select value={formData.origin} onValueChange={(value) => { setFormData({ ...formData, origin: value }); setErrors({ ...errors, origin: undefined }); }}>
                <SelectTrigger id={`origin${idSuffix}`} className={errors.origin ? "border-destructive" : ""}>
                  <SelectValue placeholder={t.placeholders.origin} />
                </SelectTrigger>
                <SelectContent>
                  {t.originCities.map((city) => (
                    <SelectItem key={city.value} value={city.value}>{city.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.origin && <p className="text-sm text-destructive mt-1">{errors.origin}</p>}
            </div>
            <div>
              <label htmlFor={`destination${idSuffix}`} className="text-sm font-medium mb-2 block">{t.labels.destination}</label>
              <Select value={formData.destination} onValueChange={(value) => { setFormData({ ...formData, destination: value }); setErrors({ ...errors, destination: undefined }); }}>
                <SelectTrigger id={`destination${idSuffix}`} className={errors.destination ? "border-destructive" : ""}>
                  <SelectValue placeholder={t.placeholders.destination} />
                </SelectTrigger>
                <SelectContent>
                  {t.destinationCities.map((city) => (
                    <SelectItem key={city.value} value={city.value}>{city.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.destination && <p className="text-sm text-destructive mt-1">{errors.destination}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`weight${idSuffix}`} className="text-sm font-medium mb-2 block">{t.labels.weight}</label>
              <Input
                id={`weight${idSuffix}`}
                type="number"
                placeholder={t.placeholders.weight}
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor={`serviceType${idSuffix}`} className="text-sm font-medium mb-2 block">{t.labels.serviceType}</label>
              <Select value={formData.serviceType} onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
                <SelectTrigger id={`serviceType${idSuffix}`}>
                  <SelectValue placeholder={t.placeholders.serviceType} />
                </SelectTrigger>
                <SelectContent>
                  {t.serviceTypes.map((service) => (
                    <SelectItem key={service.value} value={service.value}>{service.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" className="w-full" size="lg">
            {t.submitButton}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};