import { Recycle, Factory, Layers, Package, Leaf } from "lucide-react";

const steps = [
  { icon: Recycle, label: "Waste Collection", desc: "Plastic waste sourced from communities, NGOs & GVPs" },
  { icon: Factory, label: "Processing", desc: "In-house facility transforms waste into raw material" },
  { icon: Layers, label: "Sheet Manufacturing", desc: "Engineered into high-strength recycled plastic sheets" },
  { icon: Package, label: "Products", desc: "Sheets become furniture, construction material & more" },
  { icon: Leaf, label: "Impact", desc: "Every product removes waste from the environment" },
];

const ConceptSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-display font-medium tracking-widest uppercase text-sm mb-3">
            The Process
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            The PREPLY Concept
          </h2>
          <p className="text-muted-foreground text-lg">
            From waste to wonder — our circular manufacturing process gives plastic a second life.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.label}
                className="relative flex flex-col items-center text-center group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 relative z-10">
                  <step.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-xs font-display font-semibold text-secondary mb-1">0{i + 1}</span>
                <h3 className="font-display font-semibold text-foreground mb-2">{step.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
