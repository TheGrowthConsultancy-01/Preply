import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trash2, Layers, Cpu, Sofa, Table2, ArrowRight, 
  Check, X, Home, Building2, Coffee, TreePine,
  MessageCircle, Sparkles, ChevronDown
} from "lucide-react";
import chinabsofahero from "@/assets/chinabsofa-hero.png";
import chinab2 from "@/assets/chinab-2.png";
import chinab3 from "@/assets/chinab-3.png";
import chinab5 from "@/assets/chinab-5.png";
import chinabbench1 from "@/assets/chinab-bench1.png";
import coffeehome from "@/assets/coffee-home.png";
import coffee1 from "@/assets/coffee-1.jpeg";
import coffee2 from "@/assets/coffee-2.png";
import coffee3 from "@/assets/coffee-3.png";

const steps = [
  { 
    icon: Trash2, 
    step: "01",
    label: "Plastic Waste", 
    desc: "Post-consumer and industrial plastic collected from communities and waste streams." 
  },
  { 
    icon: Layers, 
    step: "02",
    label: "Engineered Sheets", 
    desc: "Precision thermal-pressed into high-density polymer plysheets with superior strength." 
  },
  { 
    icon: Cpu, 
    step: "03",
    label: "Parametric Design", 
    desc: "Algorithmically contoured cuts and CNC joinery crafted for ergonomic balance." 
  },
  { 
    icon: Sparkles, 
    step: "04",
    label: "Finished Creations", 
    desc: "Architectural furniture pieces that outlast conventional wood and protect forests." 
  },
];

const comparisonRows = [
  { feature: "Structural Durability", preply: "Engineered High-Load", wood: "Medium (Prone to Rot)" },
  { feature: "Water & Moisture Resistance", preply: true, wood: false },
  { feature: "Termite & Pest Proof", preply: true, wood: false },
  { feature: "100% Recycled Material", preply: true, wood: false },
  { feature: "Lifespan", preply: "Decades (Weatherproof)", wood: "3–7 Years (Degrades)" },
  { feature: "Maintenance Required", preply: "Zero Polishing Needed", wood: "Regular Varnish & Care" },
  { feature: "Tree Conservation", preply: "Zero Trees Cut", wood: "Deforestation Impact" },
];

const useCases = [
  { icon: Building2, title: "Offices & Lounges", desc: "Statement breakout seating & executive lounge tables for modern sustainable workplaces." },
  { icon: Coffee, title: "Cafes & Restaurants", desc: "Spill-proof, commercial-grade furniture with unmatched aesthetic distinction." },
  { icon: Home, title: "Residential Interiors", desc: "Minimalist centerpieces and conversation-starter sofas designed for everyday luxury." },
  { icon: TreePine, title: "Outdoor & Terraces", desc: "100% weather-resistant seating that handles rain, UV sunlight, and moisture with zero warping." },
];

const chinabImages = [chinabsofahero, chinab2, chinab3, chinab5];
const coffeeImages = [coffeehome, coffee1, coffee2, coffee3];

const ParametricFurnitureDetail = () => {
  const [activeChinabIndex, setActiveChinabIndex] = useState(0);
  const [activeCoffeeIndex, setActiveCoffeeIndex] = useState(0);

  const renderValue = (val: string | boolean) => {
    if (val === true) return <Check className="h-5 w-5 text-[#2E7D32] mx-auto" />;
    if (val === false) return <X className="h-5 w-5 text-red-400 mx-auto" />;
    return <span>{val}</span>;
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col overflow-hidden bg-background w-full">
      {/* SECTION 1: HERO */}
      <section 
        className="relative min-h-[85vh] md:min-h-[92vh] flex items-center bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(10,26,18,0.92) 0%, rgba(10,26,18,0.75) 50%, rgba(10,26,18,0.95) 100%), url(${chinabbench1})` 
        }}
      >
        <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#A3E635]/15 border border-[#A3E635]/30 text-[#A3E635] px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6">
                <Sparkles size={14} />
                Category 01 • Parametric Furniture Collection
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display leading-[1.1] mb-6">
                Parametric <span className="text-[#A3E635]">Furniture Products</span>
              </h1>

              <p className="text-lg md:text-2xl text-white/85 font-light leading-relaxed mb-8 max-w-3xl">
                Where mathematical contouring meets circular engineering. Discover our signature parametric creations crafted from 100% recycled plastic: the <strong className="text-white font-semibold">Chinab Sofa</strong> and the <strong className="text-white font-semibold">Coffee Table</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("chinab-sofa")}
                  className="bg-[#A3E635] text-black hover:bg-[#8fd128] font-bold px-7 py-6 rounded-full text-base transition-all hover:scale-105 shadow-xl cursor-pointer"
                >
                  <Sofa className="mr-2 h-5 w-5" />
                  Explore Chinab Sofa
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>

                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("coffee-table")}
                  className="border-white/30 text-white bg-white/5 hover:bg-white/15 px-7 py-6 rounded-full text-base transition-all backdrop-blur-sm cursor-pointer"
                >
                  <Table2 className="mr-2 h-5 w-5" />
                  Explore Coffee Table
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW PARAMETRIC CIRCULAR FURNITURE IS MADE */}
      <section className="py-20 lg:py-28 bg-[#DCEDC8]/30 border-y border-green-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-secondary font-display font-medium tracking-widest uppercase text-sm mb-2">
              Circular Engineering
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              From Waste Plastic to Parametric Art
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div 
                key={s.label}
                className="bg-card rounded-2xl p-7 border border-border/60 shadow-sm hover:shadow-md transition-shadow relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <s.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-xs font-bold text-secondary tracking-wider mb-2">
                  STEP {s.step}
                </span>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {s.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PRODUCT 1 — CHINAB SOFA */}
      <section id="chinab-sofa" className="py-24 md:py-32 bg-background scroll-mt-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visuals / Interactive Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-[340px] sm:h-[420px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-border/40 bg-muted">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeChinabIndex}
                    src={chinabImages[activeChinabIndex]}
                    alt="Chinab Sofa"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute top-4 left-4 bg-background/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-foreground border border-border/30">
                  Chinab Sofa • Featured Product 01
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {chinabImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveChinabIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      activeChinabIndex === idx
                        ? "border-primary scale-105 shadow-md"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-xs px-3 py-1 rounded-md mb-4">
                <Sofa size={14} />
                Parametric Seating Flagship
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
                Chinab Sofa
              </h2>
              <p className="text-primary font-display font-semibold text-sm tracking-wider uppercase mb-6">
                BUILDS CONFIDENCE • INSPIRED BY CHINAB BRIDGE ENGINEERING
              </p>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                Inspired by the engineering strength of the world’s highest railway bridge — the Chinab River Bridge — the Chinab Sofa redefines modern furniture with an unapologetically durable, sustainable approach.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                Built to outperform traditional wood, it delivers superior moisture resistance, structural integrity, and long-term durability without sacrificing artistic elegance.
              </p>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-card p-4 rounded-xl border border-border/50">
                  <div className="text-xs text-muted-foreground mb-1">Strength Grades</div>
                  <div className="font-display font-bold text-sm text-foreground">BWP & BWR (IS-303)</div>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border/50">
                  <div className="text-xs text-muted-foreground mb-1">Weather Performance</div>
                  <div className="font-display font-bold text-sm text-foreground">100% Waterproof</div>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border/50">
                  <div className="text-xs text-muted-foreground mb-1">Pest Protection</div>
                  <div className="font-display font-bold text-sm text-foreground">Zero Termite Damage</div>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border/50">
                  <div className="text-xs text-muted-foreground mb-1">Material Origin</div>
                  <div className="font-display font-bold text-sm text-foreground">100% Upcycled Plastic</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="lg" className="bg-[#166534] hover:bg-[#14532D] text-white font-bold px-7 py-6 rounded-full" asChild>
                  <a 
                    href="https://wa.me/919909628028?text=Hello%20PREPLY%20India%2C%20I%20am%20interested%20in%20the%20Chinab%20Sofa.%20Please%20share%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={18} className="mr-2" />
                    Enquire for Chinab Sofa
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-6 py-6" asChild>
                  <Link to="/product/chinab-sofa">
                    View Dedicated Chinab Page
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRODUCT 2 — COFFEE TABLE */}
      <section id="coffee-table" className="py-24 md:py-32 bg-muted/40 border-t border-border/40 scroll-mt-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Details */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-xs px-3 py-1 rounded-md mb-4">
                <Table2 size={14} />
                Parametric Centerpiece
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
                Coffee Table
              </h2>
              <p className="text-primary font-display font-semibold text-sm tracking-wider uppercase mb-6">
                MINIMALIST & SUSTAINABLE • A CENTERPIECE WITH PURPOSE
              </p>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                Every Preply coffee table begins its journey as discarded plastic — transformed through precision innovation into a surface material that rivals the warmth of wood and the permanence of stone.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                Conscious living without aesthetic compromise. Beautiful design and environmental responsibility sharing the same room — impervious to spills, stains, and daily wear.
              </p>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-card p-4 rounded-xl border border-border/50">
                  <div className="text-xs text-muted-foreground mb-1">Surface Finish</div>
                  <div className="font-display font-bold text-sm text-foreground">Scratch & Stain Proof</div>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border/50">
                  <div className="text-xs text-muted-foreground mb-1">Maintenance</div>
                  <div className="font-display font-bold text-sm text-foreground">Simple Wipe Clean</div>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border/50">
                  <div className="text-xs text-muted-foreground mb-1">Eco Metric</div>
                  <div className="font-display font-bold text-sm text-foreground">100% Recycled Sheets</div>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border/50">
                  <div className="text-xs text-muted-foreground mb-1">Design Style</div>
                  <div className="font-display font-bold text-sm text-foreground">Modern Contemporary</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="lg" className="bg-[#166534] hover:bg-[#14532D] text-white font-bold px-7 py-6 rounded-full" asChild>
                  <a 
                    href="https://wa.me/919909628028?text=Hello%20PREPLY%20India%2C%20I%20am%20interested%20in%20the%20Coffee%20Table.%20Please%20share%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={18} className="mr-2" />
                    Enquire for Coffee Table
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-6 py-6" asChild>
                  <Link to="/product/coffee-table">
                    View Dedicated Coffee Table Page
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Visuals / Interactive Gallery */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <div className="relative h-[340px] sm:h-[420px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-border/40 bg-muted">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeCoffeeIndex}
                    src={coffeeImages[activeCoffeeIndex]}
                    alt="Coffee Table"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute top-4 left-4 bg-background/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-foreground border border-border/30">
                  Coffee Table • Featured Product 02
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {coffeeImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveCoffeeIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      activeCoffeeIndex === idx
                        ? "border-primary scale-105 shadow-md"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: COMPARISON TABLE */}
      <section className="py-24 lg:py-32 bg-background border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Reinventing Furniture Beyond Wood
            </h2>
            <p className="text-muted-foreground text-base">
              Why PREPLY parametric recycled furniture outperforms conventional timber.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-border/60 shadow-xl overflow-hidden">
            <table className="w-full text-sm md:text-base border-collapse bg-card">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left p-6 font-semibold">Specification</th>
                  <th className="text-center p-6 font-semibold bg-[#1e293b]">
                    PREPLY Parametric Furniture
                  </th>
                  <th className="text-center p-6 font-semibold">Traditional Wood</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-muted/30 transition-colors">
                    <td className="p-6 font-medium text-foreground">{row.feature}</td>
                    <td className="p-6 text-center font-bold text-[#2E7D32] bg-green-500/5">
                      {renderValue(row.preply)}
                    </td>
                    <td className="p-6 text-center text-muted-foreground">
                      {renderValue(row.wood)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 6: APPLICATIONS */}
      <section className="py-24 lg:py-32 bg-[#F1F8F5] dark:bg-muted/20 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">
              Designed for Any Environment
            </h2>
            <p className="text-muted-foreground text-base">
              From high-traffic corporate lounges to weather-exposed garden patios.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((c) => (
              <div 
                key={c.title}
                className="bg-card p-8 rounded-3xl border border-border/60 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <c.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {c.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="py-24 lg:py-32 bg-[#0F172A] text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Furnish Your Space with Purpose
          </h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            Whether you are designing a sustainable corporate headquarters, commercial cafe, or residential interior — our parametric collection delivers unmatched durability with zero environmental compromise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[#A3E635] text-black hover:bg-[#8fd128] font-bold px-8 py-7 rounded-full text-base shadow-xl" asChild>
              <a 
                href="https://wa.me/919909628028?text=Hello%20PREPLY%20India%2C%20I%20am%20interested%20in%20the%20Parametric%20Furniture%20Collection.%20Please%20share%20catalog%20and%20pricing."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} className="mr-2" />
                Enquire for Parametric Collection
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-7 rounded-full text-base" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParametricFurnitureDetail;

