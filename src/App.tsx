import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import WhyTBS from "./pages/WhyTBS";
import WhyNearshore from "./pages/WhyNearshore";
import OurProcess from "./pages/OurProcess";
import NearshoreVsOffshore from "./pages/NearshoreVsOffshore";
import AboutTBS from "./pages/AboutTBS";
import Careers from "./pages/Careers";
import StaffingPage from "./pages/staffing/StaffingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/why-tbs" element={<WhyTBS />} />
          <Route path="/why-nearshore" element={<WhyNearshore />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/nearshore-vs-offshore" element={<NearshoreVsOffshore />} />
          <Route path="/about-tbs" element={<AboutTBS />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/staffing/:category" element={<StaffingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
