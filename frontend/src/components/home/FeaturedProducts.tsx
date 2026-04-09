import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import plasticSheets from "@/assets/plastic-sheets.jpg";
import furniture from "@/assets/products-furniture.jpg";
import wasteCollection from "@/assets/waste-collection.jpg";
import chinabsofahero from "@/assets/chinabsofa-hero.png";
import coffeehome from "@/assets/coffee-home.png";

const products = [
  {
    id: "bin",
    name: "Wrapper Bin",
    desc: "Made from chocolate wrapper waste collected via NGOs from schools and communities.",
    image: wasteCollection,
    whatsapp: "Wrapper Bin",
  },
  {
    id: "chinab-sofa",
    name: "Chinab Sofa",
    desc: "Inspired by the engineering strength of the Chinab River Bridge — engineered waste plastic strength.",
    image: chinabsofahero,
    whatsapp: "Chinab Sofa",
  },
  {
    name: "Awards & Mementos",
    desc: "Transforming recycled plastic waste into meaningful awards and mementos that celebrate achievements while promoting sustainability and responsible innovation.",
    image: furniture,
    whatsapp: "Awards & Mementos",
  },
  {
    id:"coffee-table",
    name: "Coffee Table",
    desc: "Minimal furniture crafted from recycled plastic sheets. Modern design meets responsibility.",
    image: coffeehome,
    whatsapp: "Coffee Table",
  },
  {
    id:"hawker",
    name: "Sustainable Handcarts",
    desc: "Empowering small-scale industries with durable, maintenance-free sustainable carts.",
    image: plasticSheets,
    whatsapp: "Sustainable Handcarts",
  },
  // {
  //   name: "Custom Furniture",
  //   desc: "Design your own furniture using our recycled plastic sheets. Fully customizable.",
  //   image: furniture,
  //   whatsapp: "Custom Furniture",
  // },
  
  {
    name: "Construction Shuttering Sheets",
    desc: "Reusable, waterproof sheets with a long lifecycle — the sustainable construction alternative.",
    image: plasticSheets,
    whatsapp: "Construction Shuttering Sheets",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-16">
          <div>
            <p className="text-secondary font-display font-medium tracking-widest uppercase text-sm mb-3">
              Our Range
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              Featured Products
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {products.map((product) => (
    <div key={product.name} className="relative group">
      {/* 1. Pure Card ko Link banaya hai */}
      <Link 
        to={product.id ? `/product/${product.id}` : "#"} 
        className="block bg-card rounded-xl overflow-hidden shadow-premium hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full"
      >
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* 2. Heading automatically clickable hai kyunki ye Link ke andar hai */}
          <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
            {product.desc}
          </p>
          
          {/* 3. WhatsApp Button - Isme stopPropagation lagaya hai taaki Link trigger na ho */}
          <a
            href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hello PREPLY India, I am interested in ${product.whatsapp}. Please share details.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Yeh line zaroori hai
            className="relative z-20 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <MessageCircle size={14} />
            Enquire on WhatsApp
          </a>
        </div>
      </Link>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
