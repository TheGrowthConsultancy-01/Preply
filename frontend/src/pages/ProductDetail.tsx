

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { products } from "@/data/products";
// import { Button } from "@/components/ui/button";
// import { motion, AnimatePresence } from "framer-motion";
// import { Trash2, Cog, Layers, Sofa, ArrowRight } from "lucide-react";

// const steps = [
//   { icon: Trash2, label: "Plastic Waste", desc: "Collected & sorted post-consumer plastic" },
//   { icon: Cog, label: "Processing", desc: "Shredded, cleaned & re-engineered" },
//   { icon: Layers, label: "Ply Sheet", desc: "High-performance engineered sheets" },
//   { icon: Sofa, label: "Final Product", desc: "Premium designer furniture" },
// ];

// const ProductDetail = () => {
//   const { productId } = useParams();
//   const product = products.find((p) => p.id === productId);

//   const sliderImages = [
//     product?.image || "",
//     product?.image4 || "",
//     product?.image2 || product?.image || "",
//     product?.image3 || product?.image4 || "",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
//     }, 3500);
//     return () => clearInterval(timer);
//   }, [sliderImages.length]);

//   if (!product) return <div className="py-20 text-center text-2xl font-bold">Product Not Found</div>;

//   return (
//     <div className="flex flex-col overflow-hidden bg-white w-full">
      
//       {/* SECTION 1: HERO */}
//       <section 
//         className="relative h-[75vh] md:h-[85vh] flex items-center bg-cover bg-center transition-all duration-1000" 
//         style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url(${product.heroImage || product.image})` }}
//       >
//         <div className="container mx-auto text-white px-6">
//           <motion.h1 
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-5xl md:text-7xl font-bold max-w-3xl leading-tight font-display"
//           >
//             {product.name}
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="mt-6 text-xl md:text-2xl opacity-90 tracking-widest uppercase font-light"
//           >
//             {product.tagline}
//           </motion.p>
//         </div>
//       </section>

//       {/* SECTION 2: PRODUCT STORY (Deep Green Contrast) */}
//       {/* Yahan bg-[#E8F5E9] ko thoda aur dark aur rich green kiya hai */}
//       <section className="py-24 lg:py-32 bg-[#DCEDC8]/40 border-y border-green-100"> 
//         <div className="container mx-auto px-6 lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.7 }}
//             className="text-center max-w-3xl mx-auto mb-20"
//           >
//             <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2E7D32] mb-4">The Journey</p>
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//               From Discarded Plastic to Designer Furniture
//             </h2>
//             {/* <p className="text-lg text-slate-700 leading-relaxed">
//               Every {product.name} represents our commitment to a circular economy, turning discarded materials into premium solutions.
//             </p> */}
//           </motion.div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 relative">
//             {steps.map((step, i) => (
//               <motion.div
//                 key={step.label}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.15 }}
//                 className="relative text-center group"
//               >
//                 {/* Icon container me bhi subtle green shading add ki hai */}
//                 <div className="w-20 h-20 mx-auto mb-6 rounded-[2rem] bg-white flex items-center justify-center group-hover:bg-[#388E3C] group-hover:text-white transition-all duration-500 shadow-[0_10px_30px_rgba(46,125,50,0.1)] group-hover:shadow-[#388E3C]/30 group-hover:-translate-y-2 border border-green-200">
//                   <step.icon className="h-8 w-8 text-[#2E7D32] group-hover:text-white transition-colors duration-300" />
//                 </div>
                
//                 {i < steps.length - 1 && (
//                   <div className="hidden md:block absolute top-10 left-[65%] w-[70%] h-[2px] bg-gradient-to-r from-[#2E7D32]/30 to-transparent" />
//                 )}
                
//                 <h3 className="text-lg font-bold text-slate-800 mb-2">{step.label}</h3>
//                 <p className="text-sm text-slate-600 leading-relaxed px-2">{step.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SECTION 3: ABOUT (Clean White Background) */}
//       <section className="py-24 md:py-32 w-full overflow-visible bg-white relative z-0">
//         <div className="max-w-[1400px] mx-auto px-6 relative">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
//             {/* Text Area */}
//             <div className="order-2 lg:order-1 lg:col-span-5 relative z-10">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-10 h-[2px] bg-[#EAB308]"></div>
//                 <span className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">
//                   Sustainable Engineering
//                 </span>
//               </div>
              
//               <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-slate-900 leading-[1.1]">
//                 Redefining the <br/> Future with {product.name}
//               </h2>
              
//               <p className="text-slate-600 leading-relaxed text-lg text-justify mb-10 border-l-4 border-slate-100 pl-6 italic">
//                 {product.fullDesc}
//               </p>
              
//               <Button className="bg-[#0F172A] hover:bg-[#1e293b] text-white font-bold px-10 py-7 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center gap-2">
//                 Get Quotation <ArrowRight size={18} />
//               </Button>
//             </div>

//             {/* Image Area */}
//             <div className="order-1 lg:order-2 lg:col-span-7 relative h-[450px] md:h-[550px] lg:h-[600px] w-full max-w-[700px] mx-auto lg:mx-0">
              
//               {/* Large Image */}
//               <div className="absolute top-0 left-0 w-[90%] h-[80%] overflow-hidden rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-0 border border-slate-50">
//                 <AnimatePresence mode="wait">
//                   <motion.img
//                     key={`bg-${currentIndex}`}
//                     src={sliderImages[currentIndex]}
//                     initial={{ opacity: 0, scale: 1.1 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 1 }}
//                     className="w-full h-full object-cover" 
//                   />
//                 </AnimatePresence>
//               </div>

//               {/* Small Overlapping Image */}
//               <div className="absolute bottom-[-10px] right-0 translate-x-[20%] md:translate-x-[30%] w-[55%] h-[50%] overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.2)] border-[12px] border-white z-10 hidden md:block">
//                 <AnimatePresence mode="wait">
//                   <motion.img
//                     key={`fg-${currentIndex}`}
//                     src={sliderImages[(currentIndex + 1) % sliderImages.length]}
//                     initial={{ opacity: 0, x: 40 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: 40 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="w-full h-full object-cover"
//                   />
//                 </AnimatePresence>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
      
//     </div>
//   );
// };

// export default ProductDetail;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import chinabbench1 from "@/assets/chinab-bench1.png";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trash2, Cog, Layers, Sofa, ArrowRight, 
  Shield, Droplets, Bug, Clock, Wrench, Leaf,
  Check, X, Home, Building2, Coffee, TreePine,
  FileText, Phone 
} from "lucide-react";

const steps = [
  { icon: Trash2, label: "Plastic Waste", desc: "Collected & sorted post-consumer plastic" },
  { icon: Cog, label: "Processing", desc: "Shredded, cleaned & re-engineered" },
  { icon: Layers, label: "Ply Sheet", desc: "High-performance engineered sheets" },
  { icon: Sofa, label: "Chinab Sofa", desc: "Premium designer furniture" },
];

const features = [
  { icon: Shield, title: "High Strength & Durability", desc: "Engineered to withstand heavy use without warping or cracking." },
  { icon: Droplets, title: "Water Resistant", desc: "Impervious to moisture — ideal for any climate or environment." },
  { icon: Bug, title: "Termite Proof", desc: "Zero vulnerability to pests, unlike traditional wood furniture." },
  { icon: Clock, title: "Long Lifespan", desc: "Outlasts conventional furniture by years with consistent performance." },
  { icon: Wrench, title: "Low Maintenance", desc: "Simple cleaning, no polishing, no re-treatment ever needed." },
  { icon: Leaf, title: "Sustainable & Eco-Friendly", desc: "100% recycled material. Zero trees cut. Circular by design." },
];

const rows = [
  { feature: "Durability", preply: "High", wood: "Medium" },
  { feature: "Water Resistance", preply: true, wood: false },
  { feature: "Termite Proof", preply: true, wood: false },
  { feature: "Sustainability", preply: "100% Recycled", wood: "No" },
  { feature: "Lifespan", preply: "Longer", wood: "Shorter" },
  { feature: "Maintenance", preply: "Minimal", wood: "Regular" },
  { feature: "Weight Consistency", preply: "Uniform", wood: "Variable" },
];

const cases = [
  { icon: Home, title: "Residential Homes", desc: "Living rooms, bedrooms, balconies — designed for everyday comfort." },
  { icon: Building2, title: "Offices & Co-working", desc: "Durable, professional seating for high-traffic workspaces." },
  { icon: Coffee, title: "Cafes & Restaurants", desc: "Statement furniture that handles commercial wear effortlessly." },
  { icon: TreePine, title: "Outdoor Seating", desc: "Weather-proof performance for patios, terraces, and gardens." },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  const sliderImages = [
    product?.image || "",
    product?.image4 || "",
    product?.image2 || product?.image || "",
    product?.image3 || product?.image4 || "",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const renderValue = (val: string | boolean) => {
    if (val === true) return <Check className="h-5 w-5 text-[#2E7D32] mx-auto" />;
    if (val === false) return <X className="h-5 w-5 text-red-400 mx-auto" />;
    return <span>{val}</span>;
  };

  if (!product) return <div className="py-20 text-center text-2xl font-bold">Product Not Found</div>;

  return (
    <div className="flex flex-col overflow-hidden bg-white w-full">
      
      {/* SECTION 1: HERO */}
      <section 
        className="relative h-[75vh] md:h-[85vh] flex items-center bg-cover bg-center transition-all duration-1000" 
        style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url(${product.heroImage || product.image})` }}
      >
        <div className="container mx-auto text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-bold max-w-3xl leading-tight font-display"
          >
            {product.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl md:text-2xl opacity-90 tracking-widest uppercase font-light"
          >
            {product.tagline}
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: PRODUCT STORY */}
      <section className="py-24 lg:py-32 bg-[#DCEDC8]/40 border-y border-green-100"> 
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            {/* <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2E7D32] mb-4">The Journey</p> */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              From Discarded Plastic to Designer Furniture
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-[2rem] bg-white flex items-center justify-center group-hover:bg-[#388E3C] group-hover:text-white transition-all duration-500 shadow-[0_10px_30px_rgba(46,125,50,0.1)] border border-green-200">
                  <step.icon className="h-8 w-8 text-[#2E7D32] group-hover:text-white transition-colors duration-300" />
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[65%] w-[70%] h-[2px] bg-gradient-to-r from-[#2E7D32]/30 to-transparent" />
                )}
                <h3 className="text-lg font-bold text-slate-800 mb-2">{step.label}</h3>
                <p className="text-sm text-slate-600 leading-relaxed px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: ABOUT */}
      <section className="py-24 md:py-32 w-full overflow-visible bg-white relative z-0">
        <div className="max-w-[1400px] mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="order-2 lg:order-1 lg:col-span-5 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-[#EAB308]"></div>
                <span className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">
                  Sustainable Engineering
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-slate-900 leading-[1.1]">
                Redefining the <br/> Future with {product.name}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg text-justify mb-10 border-l-4 border-slate-100 pl-6 italic">
                {product.fullDesc}
              </p>
              <Button className="bg-[#0F172A] hover:bg-[#1e293b] text-white font-bold px-10 py-7 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center gap-2">
                Get Quotation <ArrowRight size={18} />
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
              <div className="absolute bottom-[-10px] right-0 translate-x-[20%] md:translate-x-[30%] w-[55%] h-[50%] overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.2)] border-[12px] border-white z-10 hidden md:block">
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

    {/* SECTION 4: FEATURES - Full Image Block on Hover */}
<section className="relative py-24 lg:py-32 overflow-hidden bg-slate-950">
  {/* 1. Background Image - Normal state mein clear dikhegi */}
  <div className="absolute inset-0 z-0">
    <img 
      src={chinabbench1}
      className="w-full h-full object-cover object-center" 
      alt="Recycled Texture Background"
    />
    <div className="absolute inset-0 bg-black/35"></div> 
  </div>

  <div className="absolute inset-0 z-5 bg-[radial-gradient(circle_at_50%_40%,rgba(10,26,18,0.9)_0%,rgba(10,26,18,0)_70%)]"></div>

  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="text-center max-w-3xl mx-auto mb-20"
    >
      {/* <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#A3E635] [text-shadow:0_2px_10px_rgba(0,0,0,0.5)] mb-4">
        Features
      </p> */}
      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight [text-shadow:0_4px_15px_rgba(0,0,0,1)]">
        Built Different. Built Better.
      </h2>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          
          /* --- THE IMAGE BLOCK LOGIC --- */
          /* Normal: Semi-transparent (#0d2119/40) jisme se image dikhegi */
          /* Hover: Solid opacity (#0d2119) jisse image poori tarah chhup jayegi */
          className="relative p-10 rounded-[2.5rem] bg-[#0d2119]/40 border border-white/10 shadow-2xl transition-all duration-500 ease-in-out group overflow-hidden hover:bg-[#0d2119] hover:bg-opacity-100 hover:border-[#A3E635]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          {/* Greenish Aura Glow - hover par aur prominent ho jayega */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#A3E635]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-[#A3E635]/10 flex items-center justify-center mb-8 group-hover:bg-[#A3E635] group-hover:scale-110 transition-all duration-300">
              <f.icon className="h-7 w-7 text-[#A3E635] group-hover:text-black transition-colors duration-300" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 [text-shadow:0_2px_8px_rgba(0,0,0,0.9)]">
              {f.title}
            </h3>
            
            <p className="text-slate-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
              {f.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      

      {/* SECTION 4: FEATURES - Custom Color Tones for Bench Image */}
{/* <section className="relative py-24 lg:py-32 overflow-hidden">
  
  <div className="absolute inset-0 z-0">
    <img 
      src={chinabbench1}
      className="w-full h-full object-cover object-center scale-105"
      alt="Recycled Texture Background"
    />
    
    <div className="absolute inset-0 bg-[#0a1a12]/85 backdrop-blur-[3px]"></div>
  </div>

  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#A3E635] mb-4">Features</p>
      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        Built Different. Built Better.
      </h2>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          
          className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl hover:bg-white/10 hover:border-[#A3E635]/50 transition-all duration-500 group"
        >
          
          <div className="w-14 h-14 rounded-2xl bg-[#A3E635]/10 flex items-center justify-center mb-6 group-hover:bg-[#A3E635] transition-all duration-300">
            <f.icon className="h-6 w-6 text-[#A3E635] group-hover:text-black transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
          <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors">
            {f.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section> */}

      {/* SECTION 5: COMPARISON TABLE */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            {/* <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2E7D32] mb-4">Comparison</p> */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Why Preply Outperforms Wood
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50"
          >
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left p-6 font-semibold">Feature</th>
                  <th className="text-center p-6 font-semibold bg-[#1e293b]">Preply Ply Sheet</th>
                  <th className="text-center p-6 font-semibold">Traditional Wood</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.feature} className={`${i % 2 === 0 ? "bg-slate-50/50" : "bg-white"} border-t border-slate-100`}>
                    <td className="p-6 font-medium text-slate-700">{row.feature}</td>
                    <td className="p-6 text-center font-bold text-[#2E7D32] bg-green-50/30">
                      {renderValue(row.preply)}
                    </td>
                    <td className="p-6 text-center text-slate-500">
                      {renderValue(row.wood)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: USE CASES */}
      <section className="py-24 lg:py-32 bg-[#F1F8F5] border-t border-green-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            {/* <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2E7D32] mb-4">Applications</p> */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              One Sofa. Infinite Possibilities.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cases.map((c, i) => (
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
                <h3 className="text-lg font-bold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* SECTION 7: CTA (Build Sustainable Spaces) */}
      <section className="py-24 lg:py-32 bg-[#0F172A] text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-display">
              Build Sustainable Spaces Today
            </h2>
            <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you're an architect, designer, or business owner — {product.name} is ready to transform your space.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Primary Action - Preply Brand Green */}
              {/* <Button 
                size="lg" 
                className="bg-[#2E7D32] text-white hover:bg-[#388E3C] px-8 py-7 text-base font-semibold rounded-full gap-2 transition-all hover:scale-105 shadow-xl shadow-green-900/20"
              >
                Get Quote <ArrowRight className="h-4 w-4" />
              </Button> */}

              {/* Secondary Actions - Glassy White Borders */}
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-7 text-base font-semibold rounded-full gap-2 backdrop-blur-sm transition-all"
              >
                <Phone className="h-4 w-4" /> Contact Us
              </Button>
              
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

export default ProductDetail;