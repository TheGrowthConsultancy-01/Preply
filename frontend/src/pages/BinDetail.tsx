import { useState, useEffect } from "react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trash2, Cog, Layers, Trash, Shield, Droplets, 
  Bug, Clock, Wrench, Leaf, Home, Building2, 
  Coffee, TreePine, FileText, Phone, MapPin,
  Candy, Network,Factory,
  Lightbulb, Recycle, ShieldCheck,
  CalendarDays,
  Trees,
  GraduationCap, Heart,Globe, HeartHandshake
} from "lucide-react";

// Bin Specific Steps
const binSteps = [
  { 
    icon: Candy, 
    label: "Collect", 
    desc: "Chocolate wrappers collected from schools & communities" 
  },
  { 
    icon: Network, 
    label: "Aggregate", 
    desc: "Aggregated via NGO networks" 
  },
  { 
    icon: Layers, 
    label: "Process", 
    desc: "Processed into recycled plastic sheets" 
  },
  { 
    icon: Factory, 
    label: "Manufacture", 
    desc: "Manufactured into durable Wrapper Bins" 
  },
  { 
    icon: Building2, 
    label: "Deploy", 
    desc: "Deployed back into institutions" 
  },
];

const binFeatures = [
  { 
    icon: Recycle, 
    title: "Made from recycled chocolate wrappers", 
    desc: "" 
  },
  { 
    icon: ShieldCheck, 
    title: "Strong, long-lasting structure", 
    desc: "" 
  },
  { 
    icon: Lightbulb, 
    title: "Eco-conscious material innovation", 
    desc: "" 
  },
  { 
    icon: Wrench, 
    title: "Easy to deploy and maintain", 
    desc: "" 
  }
];

const binCases = [
  { 
    icon: GraduationCap, 
    title: "Schools & Colleges", 
    desc: "Educating the next generation about circular waste management." 
  },
  { 
    icon: Building2, 
    title: "Corporate Offices", 
    desc: "Sustainable waste solutions for eco-conscious workplaces." 
  },
  { 
    icon: Trees, 
    title: "Public Spaces", 
    desc: "Visible sustainability infrastructure in parks and plazas." 
  },
  { 
    icon: CalendarDays, 
    title: "Events & Institutions", 
    desc: "Zero-waste goals for conferences, festivals, and more." 
  },
];

const BinDetail = () => {
  // Products array se "bin" wala data filter karna
  const product = products.find((p) => p.id === "bin");

  const sliderImages = [
    product?.image || "",
    product?.image2 || "",
    product?.image3 || "",
    product?.image4 || "",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % 4);
    }, 3500);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  if (!product) return <div className="py-20 text-center">Bin Data Not Found</div>;

  return (
    <div className="flex flex-col overflow-hidden bg-white w-full">
      
      {/* SECTION 1: HERO */}
      <section 
  className="relative h-[70vh] md:h-[96vh] flex items-end pb-0 bg-cover bg-center transition-all duration-1000" 
  style={{ 
    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%), url(${product.heroImage || product.image})` 
  }}
>
  <div className="container mx-auto px-6 lg:px-12 pb-20"> 
    <div className="max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading matching other product pages */}
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight font-display mb-4">
          More than a <span className="text-[#A3E635]">Wrapper Bin</span>
        </h1>
        
        {/* Subtext with whitespace fix for mobile consistency */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 font-light whitespace-nowrap md:whitespace-normal"
        >
          Driving behavioural change toward <span className="font-medium text-white">sustainability.</span>
        </motion.p>
      </motion.div>
    </div>
  </div>
</section>

      {/* SECTION 2: PRODUCT STORY - Concept Style Linear Flow */}
{/* SECTION 2: PRODUCT STORY - Updated with Chinab Sofa Background Style */}
<section className="py-24 lg:py-32 bg-[#DCEDC8]/40 border-y border-green-100"> 
  <div className="container mx-auto px-6 lg:px-12">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        {/* <p className="text-[#2E7D32] font-bold uppercase tracking-[0.3em] text-xs mb-4">
          How It Works
        </p> */}
        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
          From Consumption to Circularity
        </h2>
      </motion.div>
    </div>

    <div className="relative">
      {/* Connection line - Sofa style subtle gradient */}
      <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#2E7D32]/20 via-[#2E7D32]/40 to-transparent z-0" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
        {binSteps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex flex-col items-center text-center group"
          >
            {/* Icon Container - Exact Sofa Style Rounded Box */}
            <div className="w-20 h-20 rounded-[2rem] bg-white flex items-center justify-center mb-6 group-hover:bg-[#388E3C] group-hover:text-white transition-all duration-500 shadow-[0_10px_30px_rgba(46,125,50,0.1)] border border-green-200">
              <step.icon className="h-8 w-8 text-[#2E7D32] group-hover:text-white transition-colors duration-300" />
            </div>

            {/* Step Label/Number */}
            <span className="text-xs font-bold uppercase tracking-widest text-[#2E7D32] mb-2">Step {i + 1}</span>
            
            <h3 className="text-lg font-bold text-slate-800 mb-2">{step.label}</h3>
            <p className="text-sm text-slate-600 leading-relaxed px-2">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
      {/* SECTION 3: ABOUT */}
      {/* SECTION 3: ABOUT - Exact Sofa Style with Overlapping Images */}
<section className="py-24 md:py-32 w-full overflow-visible bg-white relative z-0">
  <div className="max-w-[1400px] mx-auto px-6 relative">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      
      {/* LEFT SIDE: TEXT CONTENT */}
      <div className="order-2 lg:order-1 lg:col-span-5 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-[2px] bg-[#A3E635]"></div>
          <span className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">
            Circular Economy Innovation
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-slate-900 leading-[1.1]">
          From Wrapper Waste <br/> to Purpose
        </h2>

        {/* Updated Description: No italic, clean sans font, green-tinted border */}
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

      {/* RIGHT SIDE: OVERLAPPING IMAGE SLIDER */}
      <div className="order-1 lg:order-2 lg:col-span-7 relative h-[450px] md:h-[550px] lg:h-[600px] w-full max-w-[700px] mx-auto lg:mx-0">
        
        {/* Main Background Image */}
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

        {/* Small Image: Border reduced to 6px, overflow-hidden to fix gaps */}
        <div className="absolute bottom-[-10px] right-0 translate-x-[20%] md:translate-x-[30%] w-[55%] h-[50%] overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.2)] border-[6px] border-white z-10 hidden md:block">
          <AnimatePresence mode="wait">
            <motion.img
              key={`fg-${currentIndex}`}
              src={sliderImages[currentIndex + 1]}
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

      {/* SECTION 4: FEATURES (Dark Block) */}
      {/* SECTION 4: FEATURES - Exact Sofa Style with Background Image & Hover Glow */}
{/* SECTION 4: FEATURES - Compact 4-Column Layout */}
{/* SECTION 4: FEATURES - Compact 4-Column with Sofa Color Logic */}
<section className="relative py-24 lg:py-32 overflow-hidden bg-slate-950">
  
  {/* 1. Background Image Layer */}
  <div className="absolute inset-0 z-0">
    <img 
      src={product.image3} 
      className="w-full h-full object-cover object-center" 
      alt="Background Texture"
    />
    <div className="absolute inset-0 bg-black/35"></div> 
  </div>

  {/* 2. Radial Gradient Overlay (Sofa Style) */}
  <div className="absolute inset-0 z-5 bg-[radial-gradient(circle_at_50%_40%,rgba(10,26,18,0.9)_0%,rgba(10,26,18,0)_70%)]"></div>

  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="text-center max-w-3xl mx-auto mb-20"
    >
      <h2 className="text-4xl md:text-6xl font-display font-extrabold text-[#A3E635] mb-6 tracking-tight">
        {product.name}
      </h2>
      <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight opacity-90">
        Built Different. Built Better.
      </h3>
    </motion.div>

    {/* Compact 4-Column Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {binFeatures.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          
          /* --- THE SOFA COLOR LOGIC --- */
          /* Normal state: bg-[#0d2119]/40 (Transparent) */
          /* Hover state: bg-[#0d2119] (Solid 100% Opacity) */
          className="relative p-8 rounded-[2.5rem] bg-[#0d2119]/40 border border-white/10 shadow-2xl transition-all duration-500 ease-in-out group overflow-hidden hover:bg-[#0d2119] hover:bg-opacity-100 hover:border-[#A3E635]/60"
        >
          {/* Greenish Aura Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#A3E635]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10 text-center flex flex-col items-center">
            {/* Icon Box with scale effect */}
            <div className="w-16 h-16 rounded-2xl bg-[#A3E635]/10 flex items-center justify-center mb-6 group-hover:bg-[#A3E635] group-hover:scale-110 transition-all duration-300">
              <f.icon className="h-8 w-8 text-[#A3E635] group-hover:text-black transition-colors duration-300" />
            </div>
            
            {/* Title with Shadow logic */}
            <h3 className="text-lg md:text-xl font-bold text-white leading-snug [text-shadow:0_2px_8px_rgba(0,0,0,0.9)] group-hover:text-white transition-colors duration-300">
              {f.title}
            </h3>
            
            {/* Description (Agar ho toh) */}
            {f.desc && (
               <p className="mt-4 text-sm text-slate-300 group-hover:text-white transition-colors duration-300">
                 {f.desc}
               </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* SECTION 6: USE CASES - Exact Sofa Style with Motion & Hover Effects */}
<section className="py-24 lg:py-32 bg-[#F1F8F5] border-t border-green-50">
  <div className="container mx-auto px-6 lg:px-12">
    
    {/* Animated Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
        Built for Impact-Driven Spaces 
      </h2>
    </motion.div>

    {/* Responsive Grid with 4 Columns */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {binCases.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-center p-8 rounded-3xl bg-white border border-slate-100 hover:border-[#2E7D32]/30 hover:shadow-xl transition-all duration-300 group"
        >
          {/* Icon Box with Green-50 background and hover transition */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-[#2E7D32] transition-colors duration-300">
            <c.icon className="h-7 w-7 text-[#2E7D32] group-hover:text-white transition-colors duration-300" />
          </div>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            {c.title}
          </h3>
          
          <p className="text-sm text-slate-600 leading-relaxed italic md:not-italic">
            {c.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* SECTION: TRUST & IMPACT (Exact Match for your image) */}
<section className="py-24 lg:py-32 bg-[#E8F5E9] border-y border-green-100/50"> 
  <div className="container mx-auto px-6 lg:px-12 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
        Powered by Community, <br className="hidden md:block" /> Backed by Purpose
      </h2>

      <p className="text-lg opacity-80 mb-12 max-w-xl mx-auto leading-relaxed text-slate-600">
        Developed in collaboration with NGOs and community-driven initiatives, ensuring both environmental and social impact.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
        {[
          { label: "NGO Partnerships", icon: Heart },
          { label: "Environmental Impact", icon: Globe },
          { label: "Community Driven", icon: HeartHandshake },
        ].map((item, i) => (
          <div key={item.label} className="flex flex-col items-center group">
            
            {/* White Icon Box - Poping on the light green bg */}
            <div className="w-20 h-20 rounded-[2rem] bg-white flex items-center justify-center mb-4 group-hover:bg-[#388E3C] transition-all duration-500 shadow-[0_10px_30px_rgba(46,125,50,0.08)] border border-green-100">
              <item.icon className="h-8 w-8 text-[#2E7D32] group-hover:text-white transition-colors duration-300" />
            </div>
            
            <span className="text-slate-800 text-sm font-bold tracking-tight">
              {item.label}
            </span>
          </div>    
        ))}
      </div>
    </motion.div>
  </div>
</section>
      {/* SECTION 7: CTA */}
     <section className="py-24 lg:py-32 bg-[#0F172A] text-white">
  <div className="container mx-auto px-6 lg:px-12 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto"
    >
      {/* Heading - Same formatting as top example */}
      <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
        Be a Part of the Circular Movement
      </h2>

      {/* Subtext - Matching opacity and max-width */}
      <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto leading-relaxed">
        Adopt the Wrapper Bin and turn waste into impact.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {/* Contact Us Button - Exact Glassy Style */}
          <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-7 text-base font-semibold rounded-full gap-2 backdrop-blur-sm transition-all"
          >
              <Phone className="h-4 w-4" /> Contact Us
          </Button>
        
        {/* Brochure Button - Exact Glassy Style */}
          <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-7 text-base font-semibold rounded-full gap-2 backdrop-blur-sm transition-all"
          >
              <FileText className="h-4 w-4" /> Download Brochure
          </Button>
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
};

export default BinDetail;