import { Droplets, Shield, Bug, RotateCcw, Factory, TrendingUp } from "lucide-react";

const features = [
  { icon: RotateCcw, title: "Made from Waste Plastic", desc: "100% recycled waste plastic sourced from communities and cleanup drives." },
  { icon: Shield, title: "Stronger Than Plywood", desc: "Engineered sheets with superior structural strength and durability." },
  { icon: Droplets, title: "Waterproof", desc: "Fully waterproof material ideal for outdoor and wet environments." },
  { icon: Bug, title: "Termite-Proof", desc: "Unlike wood, our sheets are completely immune to pest damage." },
  { icon: Factory, title: "Own Processing Facility", desc: "End-to-end control from waste to product in our in-house plant." },
  { icon: TrendingUp, title: "ESG & Sustainability", desc: "Aligned with circular economy, ESG, and sustainable development goals." },
];

const WhyPreplySection = () => {
  return (
    <section className="py-24 md:py-32 bg-section-alt">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-display font-medium tracking-widest uppercase text-sm mb-3">
            The Advantage
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Why PREPLY
          </h2>
          <p className="text-muted-foreground text-lg">
            A smarter, greener alternative to traditional plywood and construction materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="bg-card rounded-xl p-8 shadow-premium hover:shadow-card-hover transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <feat.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{feat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPreplySection;
