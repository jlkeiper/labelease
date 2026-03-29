import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Etsy seller, 500+ SKUs",
    quote: "Finally, a labeling system that feels like it was built for us.",
    initials: "SM",
    color: "bg-primary",
  },
  {
    name: "Jason T.",
    role: "Handmade candle shop",
    quote: "I cut my inventory time in half. Scanning labels changed everything.",
    initials: "JT",
    color: "bg-coral",
  },
  {
    name: "Maria L.",
    role: "Jewelry designer, 300+ items",
    quote: "The label designer is gorgeous. My packaging finally feels cohesive.",
    initials: "ML",
    color: "bg-teal-dark",
  },
];

const avatars = [
  { initials: "AK", color: "bg-primary" },
  { initials: "RD", color: "bg-coral" },
  { initials: "NP", color: "bg-teal-dark" },
  { initials: "BW", color: "bg-primary" },
  { initials: "LS", color: "bg-coral" },
];

const SocialProofSection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="py-24 bg-teal-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
            Join Early Sellers
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Real makers. Real feedback. Be part of the community shaping Label Ease.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-primary-foreground font-heading font-bold text-sm`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-heading font-bold text-primary">{t.name}</p>
                  <p className="font-body text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <p className="font-body text-foreground leading-relaxed italic">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex justify-center -space-x-3 mb-6">
            {avatars.map((a, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full ${a.color} border-2 border-card flex items-center justify-center text-primary-foreground font-heading font-bold text-xs`}
              >
                {a.initials}
              </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-muted border-2 border-card flex items-center justify-center text-muted-foreground font-body text-xs font-semibold">
              +99
            </div>
          </div>
          <Button variant="cta" size="lg" className="text-base px-8 py-6" onClick={onCtaClick}>
            Join Our Beta Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
