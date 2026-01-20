import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoBar } from "@/components/LogoBar";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LogoBar />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
