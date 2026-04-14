import { Leaf, Recycle, Users, Globe, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import wasteCollection from "@/assets/waste-collection.jpg";

const Impact = () => {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <p className="text-secondary font-display font-medium tracking-widest uppercase text-sm mb-3">Impact & Sustainability</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Creating <span className="text-gradient">Circular Impact</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-16">
            Every sheet we produce, every product we create removes waste from the environment and gives it new purpose. Our circular economy model ensures nothing goes to waste.
          </p>

          <div className="rounded-2xl overflow-hidden shadow-premium mb-16">
            <img src={wasteCollection} alt="PREPLY waste collection and community impact" className="w-full h-64 md:h-80 object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: Recycle, title: "Circular Economy", desc: "Our entire business model is built on circularity. Waste plastic enters our facility and leaves as high-value products." },
              { icon: Leaf, title: "Environmental Restoration", desc: "Through our GVP program, we clean garbage-vulnerable points and convert collected waste into products." },
              { icon: Users, title: "Community Collaboration", desc: "We work with NGOs, schools, and community organizations to source waste and create impact." },
              { icon: Globe, title: "ESG Alignment", desc: "Our operations align with ESG standards, SDGs, and corporate sustainability mandates." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-8 shadow-premium">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* GVP Section */}
          <div className="bg-hero-gradient rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Adopt a Garbage Vulnerable Point
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8">
              Purchase products made exclusively from plastic waste collected from Government-identified Garbage Vulnerable Points. Receive before & after images, certificates, and full impact documentation.
            </p>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-display" asChild>
              <a
                href="https://wa.me/919909628028?text=Hello%20PREPLY%20India%2C%20I%20am%20interested%20in%20the%20GVP%20Impact%20Collection.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} className="mr-2" />
                Create Impact With Your Purchase
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Impact;
