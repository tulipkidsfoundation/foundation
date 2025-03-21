
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Elements stripe={stripePromise}>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/register" element={<Index />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/success" element={<Success />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Elements>
          </AnimatePresence>
        </BrowserRouter>
        <Toaster />
        <Sonner position="top-center" />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
