import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemValue from "@/components/ProblemValue";
import PalsOverview from "@/components/PalsOverview";
import ProcessSteps from "@/components/ProcessSteps";
import HowItWorks from "@/components/HowItWorks";
import MoneyPalSpotlight from "@/components/MoneyPalSpotlight";
import Safety from "@/components/Safety";
import Testimonials from "@/components/Testimonials";
import FooterCTA from "@/components/FooterCTA";

export default function Page() {
  return (
    <main className="pb-24">
      <Header />
      <Hero />
      <ProblemValue />
      <PalsOverview />
      <ProcessSteps />
      <HowItWorks />
      <MoneyPalSpotlight />
      <Safety />
      <Testimonials />
      <FooterCTA />
    </main>
  );
}
