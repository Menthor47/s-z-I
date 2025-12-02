import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/useLocale";

function QuickQuoteBar(): JSX.Element | null {
  const { isSpanish } = useLocale();
  const location = useLocation();
  const hiddenPaths: string[] = ["/get-quote", "/es/get-quote"];
  const shouldHide: boolean = hiddenPaths.some((path) => location.pathname.startsWith(path));

  if (shouldHide) {
    return null;
  }

  const quotePath: string = isSpanish ? "/es/get-quote" : "/get-quote";
  const titleText: string = isSpanish ? "¿Planificando una mudanza?" : "Planning a move?";
  const subtitleText: string = isSpanish
    ? "Presupuesto rápido en menos de 2 horas hábiles."
    : "Fast quote in under 2 business hours.";
  const buttonLabel: string = isSpanish ? "Solicitar presupuesto" : "Get Quote";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 pointer-events-none">
      <div className="pointer-events-auto mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-full border bg-background/95 px-4 py-2 shadow-lg backdrop-blur">
        <div className="flex min-w-0 flex-col text-xs sm:text-sm">
          <span className="truncate font-semibold">{titleText}</span>
          <span className="hidden truncate text-muted-foreground sm:inline">{subtitleText}</span>
        </div>
        <Button asChild size="sm" className="rounded-full px-4 text-xs sm:text-sm">
          <Link to={quotePath}>{buttonLabel}</Link>
        </Button>
      </div>
    </div>
  );
}

export default QuickQuoteBar;
