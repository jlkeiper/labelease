import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import PricingSection from "@/components/landing/PricingSection";
import CtaFooter from "@/components/landing/CtaFooter";

const Index = () => {
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar onCtaClick={scrollToSignup} />
      <HeroSection onCtaClick={scrollToSignup} />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <SocialProofSection onCtaClick={scrollToSignup} />
      <PricingSection onCtaClick={scrollToSignup} />
      <CtaFooter />
    </div>
  );
};

export default Index;
