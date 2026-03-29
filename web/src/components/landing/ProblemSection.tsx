import { Database, Package, Clock } from "lucide-react";

const problems = [
  {
    icon: Database,
    title: "Manual tracking is slow and error-prone",
    description: "Spreadsheets and sticky notes can't keep up with your growing inventory.",
  },
  {
    icon: Package,
    title: "No way to scan what's in storage",
    description: "Digging through boxes wastes time you could spend creating.",
  },
  {
    icon: Clock,
    title: "Hours on inventory instead of creating",
    description: "Your time is valuable — inventory shouldn't steal it from your craft.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
            The Inventory Problem
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Sound familiar? You're not alone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="bg-primary rounded-lg p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-coral/20 flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-coral" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary-foreground mb-3">
                {problem.title}
              </h3>
              <p className="font-body text-primary-foreground/70 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
