import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import ProductDemo from "@/components/sections/ProductDemo";
import FeatureBreakdown from "@/components/sections/FeatureBreakdown";
import AISection from "@/components/sections/AISection";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Problem />
      <Solution />
      <ProductDemo />
      <FeatureBreakdown />
      <AISection />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
