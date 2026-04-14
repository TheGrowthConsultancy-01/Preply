import { MessageCircle, ArrowRight, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-section-alt">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Build Sustainably
            <br />
            <span className="text-gradient">With PREPLY</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Join architects, builders, and sustainability leaders choosing recycled plastic sheets for a better future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-display" >
              <a
                href="https://wa.me/919909628028?text=Hello%20PREPLY%20India%2C%20I%20want%20to%20discuss%20a%20project.%20Please%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full gap-2"
              >
               <Phone className="h-4 w-4" /> Contact Us 
              </a>
              
            </Button>
            <Button size="lg" variant="outline" className="font-display" >
              {/* <Link to="/contact">
                Contact Us
                <ArrowRight size={18} className="ml-2" />
              </Link> */}
              <FileText className="h-4 w-4" /> Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
