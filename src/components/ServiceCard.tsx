import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocale } from "@/hooks/useLocale";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  priceRange: string;
  badge?: string;
  highlight?: boolean;
  highlightVariant?: "primary" | "accent";
}

export const ServiceCard = ({ icon: Icon, title, description, priceRange, badge, highlight, highlightVariant = "primary" }: ServiceCardProps): JSX.Element => {
  const { isSpanish } = useLocale();
  const basePath = isSpanish ? "/es" : "";

  return (
    <Card
      className={`group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        highlight
          ? highlightVariant === "accent"
            ? "border border-orange-200 bg-gradient-to-br from-primary/5 via-orange-50 to-orange-100 shadow-md"
            : "border border-primary/40 bg-primary/5 shadow-md"
          : ""
      }`}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-lg mb-4 transition-colors ${
                highlightVariant === "accent"
                  ? "bg-orange-50 group-hover:bg-orange-100"
                  : "bg-primary/10 group-hover:bg-primary/20"
              }`}
            >
              <Icon className={`h-6 w-6 ${highlightVariant === "accent" ? "text-orange-500" : "text-primary"}`} />
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          {badge && (
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm ${
                highlightVariant === "accent" ? "bg-orange-500" : "bg-primary"
              }`}
            >
              {badge}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-baseline space-x-2">
          <span className="text-sm text-muted-foreground">
            {isSpanish ? "Desde" : "From"}
          </span>
          <span className="text-2xl font-bold text-primary">{priceRange}</span>
        </div>
        <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
          <Link to={`${basePath}/get-quote`}>
            {isSpanish ? "Solicitar presupuesto" : "Get Quote"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};