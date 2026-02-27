import { MessageCircle } from "lucide-react";
import plasticSheets from "@/assets/plastic-sheets.jpg";
import furniture from "@/assets/products-furniture.jpg";
import wasteCollection from "@/assets/waste-collection.jpg";

const products = [
  { name: "Wrapper Bin", desc: "Made from chocolate wrapper plastic waste collected via NGOs like Wastevoltaic Foundation from schools and communities. Each bin tells a story of community-driven change.", image: wasteCollection, cta: "Adopt a Wrapper Bin" },
  { name: "Chinab Sofa", desc: "Inspired by the engineering strength of the Chinab River Bridge. Isometric design with plantation option, weather resistant, and a statement in sustainable furniture innovation.", image: furniture, cta: "Enquire Now" },
  { name: "Coffee Table", desc: "Minimal furniture crafted from recycled plastic sheets. Modern design meets environmental responsibility — a centerpiece with purpose.", image: furniture, cta: "Enquire Now" },
  { name: "Sustainable Handcarts", desc: "Empowering small-scale industries with durable sustainable carts. High load capacity, exceptional longevity, and completely maintenance-free.", image: plasticSheets, cta: "Enquire Now" },
  { name: "Construction Shuttering Sheets", desc: "Reusable, waterproof, long lifecycle sheets. The sustainable construction alternative for builders and contractors looking to reduce environmental impact.", image: plasticSheets, cta: "Request Specifications" },
  { name: "Custom Furniture", desc: "Design your own furniture using our recycled plastic sheets. Fully customizable to your specifications — bring your sustainable vision to life.", image: furniture, cta: "Design Your Furniture" },
];

const Products = () => {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-secondary font-display font-medium tracking-widest uppercase text-sm mb-3">Products</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
              Products With <span className="text-gradient">Purpose</span>
            </h1>
            <p className="text-muted-foreground text-lg">Every product carries an impact story — from waste collection to finished creation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <div key={p.name} className="bg-card rounded-xl overflow-hidden shadow-premium hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group">
                <div className="h-56 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{p.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.desc}</p>
                  <a
                    href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hello PREPLY India, I am interested in ${p.name}. Please share details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    <MessageCircle size={14} />
                    {p.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
