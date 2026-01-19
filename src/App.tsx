import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./components/pages/Index";
import About from "./components/pages/About";
import Publications from "./components/pages/Publications";
import PublicationDetails from "./components/pages/PublicationDetails";
import Authors from "./components/pages/Authors";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import Privacy from "./components/pages/Privacy";
import Terms from "./components/pages/Terms";
import Blogs from "./components/pages/Blogs";
import Videos from "./components/pages/Videos";
import Distributer from "./components/pages/Distributer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/publications/:id" element={<PublicationDetails />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/distributor" element={<Distributer />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
