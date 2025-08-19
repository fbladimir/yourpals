import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PalsOverview from "@/components/PalsOverview";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FooterCTA from "@/components/FooterCTA";
import ScrollToTop from "@/components/ScrollToTop";
import ComingSoon from "@/components/ComingSoon";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Unified Background System */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black pointer-events-none"></div>
      
      {/* Subtle gradient overlays for depth */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-r from-transparent via-cyan-500/3 to-transparent pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <PalsOverview />
        <HowItWorks />
        <ComingSoon />
        <Testimonials />
        <Pricing />
        <FooterCTA />
        <ScrollToTop />
      </div>
    </main>
  );
}
