import { PenTool, Printer, ScanLine, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: PenTool,
    number: "01",
    title: "Design",
    description: "Pick an Avery template, customize colors, text, and QR codes to match your brand.",
  },
  {
    icon: Printer,
    number: "02",
    title: "Print",
    description: "Download a print-ready PDF. Use any home or office printer — it just works.",
  },
  {
    icon: ScanLine,
    number: "03",
    title: "Scan",
    description: "Point your phone at a label and instantly see your inventory details.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
            Three Simple Steps
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            From chaos to clarity in minutes, not hours.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-6 flex-1">
              <div className="bg-teal-light rounded-xl p-8 flex-1 text-center hover:shadow-card-hover transition-shadow duration-300">
                <span className="font-heading text-5xl font-extrabold text-coral/20 block mb-2">
                  {step.number}
                </span>
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-6 h-6 text-coral shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
