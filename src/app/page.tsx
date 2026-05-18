import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import DashboardPreview from "@/components/dashboard/DashboardPreview";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import PricingSection from "@/components/pricing/PricingSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden selection:bg-brand-electric/30 selection:text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DashboardPreview />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
