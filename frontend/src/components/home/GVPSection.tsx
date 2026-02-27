import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Camera, Award, TreePine, Users, Trash2, ArrowRight, CheckCircle2 } from "lucide-react";
import wasteCollection from "@/assets/waste-collection.jpg";

const impactPoints = [
  {
    icon: MapPin,
    title: "Government-Identified Locations",
    desc: "Every GVP is officially mapped by local government bodies — ensuring your impact targets the most critical waste hotspots.",
  },
  {
    icon: Trash2,
    title: "Verified Waste Removal",
    desc: "Tonnes of plastic waste physically removed from vulnerable communities, waterways, and public spaces — documented with before & after evidence.",
  },
  {
    icon: Users,
    title: "Community Transformation",
    desc: "Clean neighborhoods improve health, safety, and livelihoods for thousands of families living near garbage vulnerable points.",
  },
  {
    icon: TreePine,
    title: "Environmental Restoration",
    desc: "Restored GVPs reduce soil and water contamination, protect biodiversity, and prevent microplastic pollution at source.",
  },
];

const whatYouGet = [
  "Before & after photographic evidence of the GVP restoration",
  "Government-recognized impact certificate",
  "NGO partnership and participation documentation",
  "Full traceability from waste source to finished product",
  "Measurable ESG metrics for your sustainability reporting",
];

const GVPSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E6F3D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="container relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-display font-semibold mb-5">
            <MapPin size={14} />
            Impact Collection
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
            Adopt a <span className="text-gradient">Garbage Vulnerable Point</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Purchase products made exclusively from plastic waste collected at government-identified Garbage Vulnerable Points.
            Every product you buy directly funds the cleanup and restoration of India's most polluted locations.
          </p>
        </div>

        {/* Visual + Stats row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Image with overlay stats */}
          <div className="relative rounded-2xl overflow-hidden shadow-premium group">
            <img
              src={wasteCollection}
              alt="PREPLY GVP cleanup and restoration initiative"
              className="w-full h-full min-h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl md:text-3xl font-display font-bold text-secondary">120+</div>
                  <p className="text-primary-foreground/70 text-xs font-medium">GVPs Restored</p>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-display font-bold text-secondary">50T+</div>
                  <p className="text-primary-foreground/70 text-xs font-medium">Waste Removed</p>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-display font-bold text-secondary">30+</div>
                  <p className="text-primary-foreground/70 text-xs font-medium">Communities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why GVP matters */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              Why GVP Products Create <span className="text-primary">Real Impact</span>
            </h3>
            <div className="space-y-5">
              {impactPoints.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <point.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">{point.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The journey flow */}
        <div className="bg-card rounded-2xl shadow-premium p-8 md:p-12 mb-16">
          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground text-center mb-10">
            From Waste Hotspot to Impact Product
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { step: "01", label: "GVP Identified", sub: "Government mapping" },
              { step: "02", label: "Waste Collected", sub: "NGO-led cleanup" },
              { step: "03", label: "Processed", sub: "Our facility" },
              { step: "04", label: "Product Made", sub: "Engineered material" },
              { step: "05", label: "Impact Certified", sub: "Full documentation" },
            ].map((s, i) => (
              <div key={s.step} className="relative">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="font-display font-bold text-primary text-lg">{s.step}</span>
                </div>
                <h4 className="font-display font-semibold text-foreground text-sm mb-1">{s.label}</h4>
                <p className="text-muted-foreground text-xs">{s.sub}</p>
                {i < 4 && (
                  <ArrowRight size={16} className="hidden md:block absolute top-5 -right-3 text-muted-foreground/40" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* What you receive + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              What You Receive With Every GVP Purchase
            </h3>
            <ul className="space-y-3 mb-8">
              {whatYouGet.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-secondary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-hero-gradient rounded-2xl p-10 text-center">
            <Award size={40} className="text-secondary mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-3">
              Make Your Purchase Count
            </h3>
            <p className="text-primary-foreground/70 text-base max-w-md mx-auto mb-8">
              Whether you're a corporate buyer, architect, or sustainability advocate — every GVP product purchase directly restores a polluted community space.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-display" asChild>
                <a
                  href="https://wa.me/919999999999?text=Hello%20PREPLY%20India%2C%20I%20am%20interested%20in%20the%20GVP%20Impact%20Collection.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Enquire About GVP Products
                </a>
              </Button>
              {/* <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-display" asChild>
                <Link to="/impact">
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button> */}
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 font-display" 
                asChild
              >
                <Link to="/impact">
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GVPSection;
