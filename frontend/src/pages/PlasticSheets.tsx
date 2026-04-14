import { Shield, Droplets, Layers, Hammer, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import plasticSheets from "@/assets/plastic-sheets.jpg";

const specs = [
  { icon: Shield, label: "High Strength", desc: "Superior structural integrity compared to traditional plywood" },
  { icon: Droplets, label: "100% Waterproof", desc: "Zero water absorption — ideal for wet environments" },
  { icon: Layers, label: "Termite-Proof", desc: "Completely resistant to pests and biological degradation" },
  { icon: Hammer, label: "Easy Fabrication", desc: "Can be cut, drilled, and shaped using standard tools" },
];

const applications = ["Furniture Manufacturing", "Construction Shuttering", "Industrial Fabrication", "Outdoor Installations", "Interior Design", "Signage & Displays"];

const PlasticSheets = () => {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-secondary font-display font-medium tracking-widest uppercase text-sm mb-3">Raw Material</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Recycled Plastic
                <br />
                <span className="text-gradient">Sheets</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our engineered plastic sheets are manufactured from 100% recycled waste plastic. They serve as a direct, superior alternative to plywood — waterproof, termite-proof, and built to last.
              </p>
              <Button size="lg" className="font-display" asChild>
                <a
                  href="https://wa.me/919909628028?text=Hello%20PREPLY%20India%2C%20I%20am%20interested%20in%20Recycled%20Plastic%20Sheets.%20Please%20share%20specifications."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Request Specifications
                </a>
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-premium">
              <img src={plasticSheets} alt="PREPLY recycled plastic sheets" className="w-full h-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {specs.map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-6 shadow-premium text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{s.label}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-10 shadow-premium">
            <h2 className="font-display font-bold text-2xl text-foreground mb-6">Applications</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {applications.map((app) => (
                <div key={app} className="flex items-center gap-3 py-3 px-4 rounded-lg bg-muted">
                  <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlasticSheets;
