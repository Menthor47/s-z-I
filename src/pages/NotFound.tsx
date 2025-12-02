import { useLocale } from "@/hooks/useLocale";

const NotFound = () => {
  const { isSpanish } = useLocale();
  const homePath = isSpanish ? "/es" : "/";

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          {isSpanish ? "¡Ups! Página no encontrada" : "Oops! Page not found"}
        </p>
        <a href={homePath} className="text-primary underline hover:text-primary/90">
          {isSpanish ? "Volver al inicio" : "Return to Home"}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
