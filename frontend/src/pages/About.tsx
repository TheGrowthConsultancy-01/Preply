import { Factory, Leaf, Award, Users } from "lucide-react";

const About = () => {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <p className="text-secondary font-display font-medium tracking-widest uppercase text-sm mb-3">About Us</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Transforming Waste Into
            <br />
            <span className="text-gradient">Engineered Materials</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-16">
            PREPLY India Pvt Ltd is a manufacturer of high-strength plastic sheets made from recycled waste plastic. Our sheets serve as an alternative to plywood and ply boards, used as raw material for furniture, construction, and sustainable products. We operate our own processing facility, converting waste plastic into engineered sheets and finished products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Leaf, title: "Our Mission", desc: "Transform waste into usable engineered material, driving circular economy at scale." },
              { icon: Factory, title: "Our Facility", desc: "In-house processing plant with full control from waste collection to finished products." },
              { icon: Award, title: "Technology", desc: "Proprietary process converts mixed plastic waste into structural-grade sheets with superior strength." },
              { icon: Users, title: "Sustainability", desc: "Circular economy philosophy — every product we create removes waste from the environment." },
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
        </div>
      </section>
    </main>
  );
};

export default About;
