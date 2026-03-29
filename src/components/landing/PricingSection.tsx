import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["1 inventory", "5 labels/month", "Basic templates", "QR scanning"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$24",
    period: "/mo",
    features: ["5 inventories", "Unlimited labels", "Mobile app access", "Custom branding", "Priority support"],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Pro+",
    price: "$64",
    period: "/mo",
    features: ["Unlimited inventories", "Team sharing", "Analytics dashboard", "API access", "Dedicated support"],
    highlighted: false,
  },
];

const PricingSection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Simple Pricing
          </h2>
          <p className="text-primary-foreground/70 text-lg font-body">
            Start free. Upgrade when you're ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`rounded-xl p-8 relative transition-all duration-300 hover:-translate-y-1 ${
                tier.highlighted
                  ? "bg-card shadow-card-hover ring-2 ring-coral scale-105"
                  : "bg-primary-foreground/10 backdrop-blur-sm"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral text-accent-foreground text-xs font-heading font-bold px-4 py-1 rounded-full">
                  {tier.badge}
                </span>
              )}
              <h3 className={`font-heading text-xl font-bold mb-2 ${tier.highlighted ? "text-primary" : "text-primary-foreground"}`}>
                {tier.name}
              </h3>
              <div className="mb-6">
                <span className={`font-heading text-4xl font-extrabold ${tier.highlighted ? "text-primary" : "text-primary-foreground"}`}>
                  {tier.price}
                </span>
                <span className={`font-body text-sm ${tier.highlighted ? "text-muted-foreground" : "text-primary-foreground/60"}`}>
                  {tier.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check className={`w-4 h-4 shrink-0 ${tier.highlighted ? "text-coral" : "text-coral"}`} />
                    <span className={`font-body text-sm ${tier.highlighted ? "text-foreground" : "text-primary-foreground/80"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.highlighted ? "cta" : "ctaOutline"}
                className={`w-full ${!tier.highlighted ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" : ""}`}
                onClick={onCtaClick}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
