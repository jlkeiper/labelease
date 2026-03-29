import heroIllustration from "@/assets/hero-illustration.png";
import { Button } from "@/components/ui/button";

const HeroSection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-teal-dark to-primary">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-coral/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-teal-light/10 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-block">
              <span className="font-heading text-sm font-semibold tracking-widest uppercase text-coral">
                Label Ease
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
              Label with{" "}
              <span className="text-coral">Purpose</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-lg font-body leading-relaxed">
              QR labels designed for Etsy sellers. Customize. Scan. Organize. Ship smarter.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" className="text-base px-8 py-6" onClick={onCtaClick}>
                Get Early Access
              </Button>
              <Button variant="ctaOutline" size="lg" className="text-base px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}>
                See How It Works
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <img
              src={heroIllustration}
              alt="QR label illustrations showing inventory management"
              width={520}
              height={416}
              className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
