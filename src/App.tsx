import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RootErrorBoundary } from "@/components/RootErrorBoundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { saveAttribution } from "@/lib/attribution";
import { CookieConsent } from "@/components/CookieConsent";
import QuickQuoteBar from "@/components/QuickQuoteBar";

const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const GetQuote = lazy(() => import("./pages/GetQuote"));
const TrackShipment = lazy(() => import("./pages/TrackShipment"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Relocation = lazy(() => import("./pages/Relocation"));
const RelocationCity = lazy(() => import("./pages/RelocationCity"));
const Resources = lazy(() => import("./pages/Resources"));
const ResourceArticle = lazy(() => import("./pages/ResourceArticle"));
const IndexEs = lazy(() => import("./pages/es/IndexEs"));
const ServicesEs = lazy(() => import("./pages/es/ServicesEs"));
const AboutEs = lazy(() => import("./pages/es/AboutEs"));
const RelocationEs = lazy(() => import("./pages/es/RelocationEs"));
const ContactEs = lazy(() => import("./pages/es/ContactEs"));
const GetQuoteEs = lazy(() => import("./pages/es/GetQuoteEs"));
const RelocationCityEs = lazy(() => import("./pages/es/RelocationCityEs"));
const ResourcesEs = lazy(() => import("./pages/es/ResourcesEs"));
const ResourceArticleEs = lazy(() => import("./pages/es/ResourceArticleEs"));
const PartnerLanding = lazy(() => import("./pages/PartnerLanding"));
const PartnerLandingEs = lazy(() => import("./pages/es/PartnerLandingEs"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const routes = [
  { path: "/", element: <Index />, spanishElement: <IndexEs /> },
  { path: "/services", element: <Services />, spanishElement: <ServicesEs /> },
  { path: "/relocation", element: <Relocation />, spanishElement: <RelocationEs /> },
  { path: "/get-quote", element: <GetQuote />, spanishElement: <GetQuoteEs /> },
  { path: "/track", element: <TrackShipment /> },
  { path: "/about", element: <About />, spanishElement: <AboutEs /> },
  { path: "/contact", element: <Contact />, spanishElement: <ContactEs /> },
  { path: "/relocation/:citySlug", element: <RelocationCity />, spanishElement: <RelocationCityEs /> },
  { path: "/resources", element: <Resources />, spanishElement: <ResourcesEs /> },
  { path: "/resources/:slug", element: <ResourceArticle />, spanishElement: <ResourceArticleEs /> },
  { path: "/p/:partnerSlug", element: <PartnerLanding />, spanishElement: <PartnerLandingEs /> },
];

const AppContent = () => {
  useScrollToTop();
  const location = useLocation();

  useEffect(() => {
    saveAttribution({
      pathname: location.pathname,
      search: location.search,
      referrer: document.referrer || undefined,
    });
  }, [location.pathname, location.search]);

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        </div>
      }
    >
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {routes.map(({ path, element, spanishElement }) => {
          const spanishPath = path === "/" ? "/es" : `/es${path}`;
          return <Route key={spanishPath} path={spanishPath} element={spanishElement ?? element} />;
        })}

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RootErrorBoundary>
          <AppContent />
          <QuickQuoteBar />
          <CookieConsent />
        </RootErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
