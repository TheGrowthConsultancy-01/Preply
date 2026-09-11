import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import wasteCollection from "@/assets/waste-collection.jpg";
import hawkerhome from "@/assets/hawker-home.png";
import wrapperhome from "@/assets/wrapper-home.png";
import chinabsofahero from "@/assets/chinabsofa-hero.png";
import plasticSheets from "@/assets/plastic-sheets.jpg";

const socialImpactProducts = [
  {
    id: "bin",
    name: "Wrapper Bin",
    desc: "Made from chocolate wrapper waste collected via NGOs from schools and communities.",
    image: wrapperhome,
    whatsapp: "Wrapper Bin",
  },
  {
    id: "hawker",
    name: "Sustainable Handcraft",
    desc: "Empowering small-scale industries and local artisans with durable, maintenance-free sustainable materials.",
    image: hawkerhome,
    whatsapp: "Sustainable Handcraft",
  },
  {
    id: "sea-bin",
    name: "Sea Bin",
    desc: "Innovative marine waste collection solution designed to capture floating debris and clean water bodies.",
    image: wasteCollection,
    whatsapp: "Sea Bin",
  },
];

interface CategoryItem {
  id: string;
  name: string;
  badge: string;
  itemCount: string;
  desc: string;
  image: string;
  link: string;
  previewItems: string[];
}

const featuredCategoriesData: CategoryItem[] = [
  {
    id: "parametric-furniture",
    name: "Parametric Furniture Products",
    badge: "Category 01",
    itemCount: "2 Products",
    desc: "Architectural and functional modern furniture engineered from high-strength recycled plastic sheets.",
    image: chinabsofahero,
    link: "/product/parametric-furniture",
    previewItems: ["Chinab Sofa", "Coffee Table"],
  },
  {
    id: "pet-to-products",
    name: "PET to Products",
    badge: "Category 02",
    itemCount: "2 Products",
    desc: "Transforming post-consumer PET bottles into acoustic panels, home decor, and durable everyday products.",
    image: plasticSheets,
    link: "/product/pet-acoustic-panels",
    previewItems: ["Acoustic Panels", "Eco Planters"],
  },
  {
    id: "bottle-cap-art",
    name: "Bottle Cap Art",
    badge: "Category 03",
    itemCount: "2 Products",
    desc: "Handcrafted vibrant art installations, custom mosaic panels, and murals created from collected bottle caps.",
    image: wasteCollection,
    link: "/product/bottle-cap-art",
    previewItems: ["Mosaic Art", "Custom Murals"],
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        {/* Section 1: Social Impact Products */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-display font-medium tracking-widest uppercase text-sm mb-3">
            Our Range
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Social Impact Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialImpactProducts.map((product) => (
            <div key={product.name} className="relative group">
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
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {product.desc}
                  </p>
                  
                  <a
                    href={`https://wa.me/919909628028?text=${encodeURIComponent(`Hello PREPLY India, I am interested in ${product.whatsapp}. Please share details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
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

        {/* Section 2: Featured Products (Category Cards Linking to Detailed Pages) */}
        <div className="mt-28 pt-20 border-t border-border/50">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground text-base">
              Explore our specialized product categories engineered from recycled materials.
            </p>
          </div>

          {/* 3 Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategoriesData.map((category) => (
              <div key={category.id} className="relative group">
                <Link
                  to={category.link}
                  className="block bg-card rounded-xl overflow-hidden shadow-premium hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col border border-border/40 hover:border-primary/50"
                >
                  {/* Category Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
                        {category.badge}
                      </span>
                      <span className="inline-block bg-background/85 backdrop-blur-sm text-foreground text-xs font-medium px-2.5 py-1 rounded-md shadow-sm border border-border/30">
                        {category.itemCount}
                      </span>
                    </div>
                  </div>

                  {/* Category Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                        {category.desc}
                      </p>

                      {/* Preview Items */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {category.previewItems.map((item) => (
                          <span
                            key={item}
                            className="text-xs bg-muted/80 text-muted-foreground px-2.5 py-1 rounded-full font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    <div className="pt-3 border-t border-border/40 flex items-center justify-between text-primary text-sm font-semibold group-hover:text-primary/80">
                      <span>View Detailed Category</span>
                      <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* View All Products button */}
          <div className="text-center mt-14">
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
