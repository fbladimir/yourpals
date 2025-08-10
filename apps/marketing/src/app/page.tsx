import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PalsOverview from "@/components/PalsOverview";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FooterCTA from "@/components/FooterCTA";
import ScrollToTop from "@/components/ScrollToTop";

export default function Page() {
  return (
    <main className="pb-24">
      <Header />
      <Hero />
      <PalsOverview />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FooterCTA />
      <ScrollToTop />
    </main>
  );
}
