import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-factory.jpg";
import herobanner from "@/assets/hero-banner.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={herobanner} alt="PREPLY manufacturing facility transforming plastic waste into sheets" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-30" />
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <p className="text-secondary font-display font-medium tracking-widest uppercase text-sm mb-6 animate-fade-in">
            Recycled Plastic Sheets & Products
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Engineering Waste
            <br />
            <span className="text-secondary">Into Tomorrow.</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-xl leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            High-performance plastic sheets and products made from reclaimed waste — transforming environmental problems into sustainable materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-display" asChild>
              <Link to="/products">
                Explore Products
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            {/* <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-display" asChild>
              <a
                href="https://wa.me/919999999999?text=Hello%20PREPLY%20India%2C%20I%20am%20interested%20in%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} className="mr-2" />
                WhatsApp Enquiry
              </a>
              
            </Button> */}
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 font-display" 
              asChild
            >
              <a
                href="https://wa.me/919999999999?text=Hello%20PREPLY%20India%2C%20I%20am%20interested%20in%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} className="mr-2" />
                WhatsApp Enquiry
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
