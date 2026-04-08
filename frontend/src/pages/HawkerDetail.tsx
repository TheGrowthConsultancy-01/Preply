import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import chinabbench1 from "@/assets/chinab-bench1.png"; // Texture background ke liye
import { 
  Trash2, Cog, Layers, Truck, ArrowRight, 
  ShieldCheck, Sun, Drill, Zap, Recycle,
  Check, X, Construction, Phone, FileText,
  Store, MapPin, Factory, HardHat,Clock, Sparkles,Leaf, TreeDeciduous,
  Building2,  
} from "lucide-react";
import hawkerbg from "@/assets/hawker-bg.png"; // Hawker specific background image
import { products } from "@/data/products";
import { useParams } from "react-router-dom";

// Data Definitions
const hawkerSteps = [
  { icon: Trash2, label: "Industrial Waste", desc: "Heavy-duty plastics collected from factories" },
  { icon: Cog, label: "Precision Shredding", desc: "Uniform grinding for structural integrity" },
  { icon: Layers, label: "Pressure Molding", desc: "High-density thermal pressing" },
  { icon: Truck, label: "Hawker Delivery", desc: "Ready for heavy-duty mobilization" },
];

const hawkerFeatures = [
  { 
    icon: ShieldCheck, 
    title: "High Durability", 
    desc: "Withstands heavy loads without cracking." 
  },
  { 
    icon: Sun, 
    title: "Weather Resistant", 
    desc: "Built for every Indian season." 
  },
  { 
    icon: Clock, 
    title: "3–5× Longer Lifespan", 
    desc: "Reduces total cost of ownership." 
  },
  { 
    icon: Sparkles, 
    title: "Hygienic Surface", 
    desc: "Non-porous, easy to clean." 
  },
  { 
    icon: Recycle, 
    title: "100% Recycled", 
    desc: "Diverts plastic from landfills." 
  },
  { 
    icon: MapPin, 
    title: "Made for India", 
    desc: "Engineered for local conditions." 
  },
];

const hawkerCases = [
  { 
    icon: Leaf, 
    title: "Reduces Plastic Waste", 
    desc: "Repurposes significant plastic waste from ecosystems." 
  },
  { 
    icon: TreeDeciduous, 
    title: "Zero Trees Cut", 
    desc: "A direct wood substitute protecting forests." 
  },
  { 
    icon: Building2, 
    title: "Circular Economy", 
    desc: "Aligns with India's sustainability goals." 
  },
];

const HawkerDetail = () => {
//   const { productId } = useParams();
const productId = "hawker";
  const product = products.find((p) => p.id === productId);

  // SECTION 1 se upar wala Logic (Slider Images setup)
  const sliderImages = [
    product?.image || "",
    product?.image4 || "",
    product?.image2 || product?.image || "",
    product?.image3 || product?.image4 || "",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect jo tumne manga tha
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  // Agar product nahi milta toh screen par error dikhega (jaise Sofa page pe hota hai)
  if (!product) return <div className="py-20 text-center text-2xl font-bold">Product Not Found</div>;

  return (
    <div className="flex flex-col overflow-hidden bg-white w-full">
      
      {/* SECTION 1: HERO - Exactly like ProductDetail styling */}
      <section 
  className="relative h-[70vh] md:h-[96vh] flex items-end pb-0 bg-cover bg-center transition-all duration-1000" 
  style={{ 
    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%), url(${product.heroImage || product.image})` 
  }}
>
  <div className="container mx-auto px-6 lg:px-12 pb-8"> 
    <div className="max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading matching Sofa page structure */}
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight font-display mb-4">
          Introducing <span className="text-[#A3E635]">Hawker Cart</span>
        </h1>
        
        {/* Subtext with whitespace-nowrap fix for mobile */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 font-light whitespace-nowrap md:whitespace-normal"
        >
          India’s first <span className="font-medium text-white">sustainable handcart</span> built from plastic waste.
        </motion.p>
      </motion.div>
    </div>
  </div>
</section>
      {/* SECTION 2: ABOUT - Description & Slider */}
      <section className="py-24 md:py-32 w-full overflow-visible bg-white relative z-0">
  <div className="max-w-[1400px] mx-auto px-6 relative">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div className="order-2 lg:order-1 lg:col-span-5 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-[2px] bg-[#A3E635]"></div>
          <span className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">
            Industrial Resilience
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-slate-900 leading-[1.1]">
          Built for Vendors. <br/> Designed for the Future.
        </h2>

        {/* Updated Description: Clean font, no italic, consistent border */}
        <p className="text-slate-600 leading-relaxed text-lg mb-10 border-l-4 border-[#A3E635]/30 pl-6 font-sans">
          {product.fullDesc}
        </p>

        <Button 
          variant="default" 
          size="lg" 
          className="bg-[#166534] hover:bg-[#14532D] text-white font-bold px-10 py-7 rounded-full shadow-2xl transition-all hover:scale-105"
          asChild
        >
          <a
            href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hello PREPLY India, I am interested in ${product.name}. Please share details.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            WhatsApp Enquiry
          </a>
        </Button>
      </div>

      <div className="order-1 lg:order-2 lg:col-span-7 relative h-[450px] md:h-[550px] lg:h-[600px] w-full max-w-[700px] mx-auto lg:mx-0">
        <div className="absolute top-0 left-0 w-[90%] h-[80%] overflow-hidden rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-0 border border-slate-50">
          <AnimatePresence mode="wait">
            <motion.img
              key={`bg-${currentIndex}`}
              src={sliderImages[currentIndex]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-full object-cover" 
            />
          </AnimatePresence>
        </div>
        
        {/* Small Image: Reduced border to 6px and overflow-hidden to remove gaps */}
        <div className="absolute bottom-[-10px] right-0 translate-x-[20%] md:translate-x-[30%] w-[55%] h-[50%] overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.2)] border-[6px] border-white z-10 hidden md:block">
          <AnimatePresence mode="wait">
            <motion.img
              key={`fg-${currentIndex}`}
              src={sliderImages[(currentIndex + 1) % sliderImages.length]}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* SECTION 3: FEATURES - Background Image Logic */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-950">
        {/* 1. Background Image - Normal state mein clear dikhegi */}
        <div className="absolute inset-0 z-0">
            <img 
            src={hawkerbg} 
            className="w-full h-full object-cover object-center" 
            alt="Recycled Texture Background"
            />
            <div className="absolute inset-0 bg-black/35"></div> 
        </div>

        {/* 2. Radial Gradient Overlay - Jo tumhare sofa code mein tha */}
        <div className="absolute inset-0 z-5 bg-[radial-gradient(circle_at_50%_40%,rgba(10,26,18,0.9)_0%,rgba(10,26,18,0)_70%)]"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-20"
            >
            {/* Hawker - Accent Color, No Shadow */}
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-[#A3E635] mb-6 tracking-tight">
                Hawker Cart
            </h2>
            
            {/* Sub-heading - Pure White, No Shadow */}
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight opacity-90">
                Built to Perform, Designed to Last
            </h3>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {hawkerFeatures.map((f, i) => (
                <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                
                /* --- THE STYLING BLOCK --- */
                /* Normal: Semi-transparent (#0d2119/40) */
                /* Hover: Solid (#0d2119), Border accent, aur Shadow Glow */
                className="relative p-10 rounded-[2.5rem] bg-[#0d2119]/40 border border-white/10 shadow-2xl transition-all duration-500 ease-in-out group overflow-hidden hover:bg-[#0d2119] hover:bg-opacity-100 hover:border-[#A3E635]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                {/* Greenish Aura Glow - hover par prominent hota hai */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A3E635]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                    {/* Icon Box with Scale and Color Transition */}
                    <div className="w-16 h-16 rounded-2xl bg-[#A3E635]/10 flex items-center justify-center mb-8 group-hover:bg-[#A3E635] group-hover:scale-110 transition-all duration-300">
                    <f.icon className="h-7 w-7 text-[#A3E635] group-hover:text-black transition-colors duration-300" />
                    </div>
                    
                    {/* Title with Text Shadow logic */}
                    <h3 className="text-2xl font-bold text-white mb-4 [text-shadow:0_2px_8px_rgba(0,0,0,0.9)]">
                    {f.title}
                    </h3>
                    
                    {/* Description with Color Transition */}
                    <p className="text-slate-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                    {f.desc}
                    </p>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
      {/* SECTION 4: USE CASES */}
      <section className="py-24 lg:py-32 bg-[#F1F8F5] border-t border-green-50">
  <div className="container mx-auto px-6 lg:px-12">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
        Closing the Loop on Plastic Waste
      </h2>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {hawkerCases.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-center p-8 rounded-3xl bg-white border border-slate-100 hover:border-[#2E7D32]/30 hover:shadow-xl transition-all duration-300 group"
        >
          <div className="w-16 h-16 mx-auto rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-[#2E7D32] transition-colors duration-300">
            <c.icon className="h-7 w-7 text-[#2E7D32] group-hover:text-white" />
          </div>

          {/* Title - Changed from text-2xl back to text-lg (Original Sofa size) */}
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            {c.title}
          </h3>

          {/* Description - Changed from text-lg back to text-sm (Original Sofa size) */}
          <p className="text-sm text-slate-600 leading-relaxed">
            {c.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* SECTION 5: CTA */}
      <section className="py-24 lg:py-32 bg-[#0F172A] text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl  font-display font-bold text-forground mb-6">
              Upgrade to a Smarter Handcart
            </h2>
            <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto leading-relaxed">
              For municipalities, NGOs, and bulk buyers ready to make the sustainable switch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-7 text-base font-semibold rounded-full gap-2 backdrop-blur-sm"
                asChild
              >
                <a href="tel:+919999999999"><Phone className="h-4 w-4" /> Call Specialist</a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-7 text-base font-semibold rounded-full gap-2 backdrop-blur-sm"
              >
                <FileText className="h-4 w-4" /> Download Catalog
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default HawkerDetail;