import { Palette, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Custom label designer",
    description: "Your brand, your style. Design labels that match your shop aesthetic.",
  },
  {
    icon: Smartphone,
    title: "Scan with your phone",
    description: "Point your camera at any label — instant inventory lookup, anywhere.",
  },
  {
    icon: Zap,
    title: "60 seconds to print",
    description: "From design to PDF in under a minute. Print at home or at the office.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24 bg-teal-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
            A Better Way
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Built for makers who need to stay organized without the headache.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-coral" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
