import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppSticky from "./components/WhatsAppSticky";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import PlasticSheets from "./pages/PlasticSheets";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Scroll } from "lucide-react";
import ScrollToTop from "./components/ScrollToTop";
import ProductDetail from "./pages/ProductDetail";
import HawkerDetail from "./pages/HawkerDetail";
import BinDetail from "./pages/BinDetail";
import CoffeeDetail from "./pages/CoffeeDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        {/* Main tag add kiya padding-top ke saath */}
        <main className="pt-16 md:pt-10"> 
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/plastic-sheets" element={<PlasticSheets />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/product/hawker" element={<HawkerDetail />} />
            <Route path="/product/bin" element={<BinDetail />} />
            <Route path="/product/coffee-table" element={<CoffeeDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
                <Footer />
        {/* <WhatsAppSticky /> */}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
