// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, MessageCircle } from "lucide-react";
// import heromain from "@/assets/hero-main.png";
// import heroImage from "@/assets/hero-factory.jpg";
// import herobanner from "@/assets/hero banner website_3.png";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <img src={herobanner} alt="PREPLY manufacturing facility transforming plastic waste into sheets" className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-hero-gradient opacity-30" />
//       </div>

//       <div className="container relative z-10 pt-32 pb-20">
//         <div className="max-w-3xl">
//           {/* <p className="text-secondary font-display font-medium tracking-widest uppercase text-sm mb-6 animate-fade-in">
//             Recycled Plastic Sheets & Products
//           </p> */}
//        <p className="text-[#A3E635] font-display font-bold tracking-[0.2em] uppercase text-sm mb-6 animate-fade-in">
//     Recycled Plastic Sheets & Products
//   </p>
//           <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
//             Engineering Waste
//             <br />
//             <span className="text-[#A3E635]">Into Tomorrow.</span>
//           </h1>
//           {/* <p className="text-primary-foreground/70 text-lg md:text-xl max-w-xl leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
//             High-performance plastic sheets and products made from reclaimed waste — transforming environmental problems into sustainable materials.
//           </p> */}
//           <p className="text-primary-foreground/90 text-lg md:text-xl max-w-xl leading-relaxed mb-10 animate-fade-in font-medium" style={{ animationDelay: "0.2s" }}>
//     High-performance plastic sheets and products made from reclaimed waste — transforming environmental problems into sustainable materials.
//   </p>
//           <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
//             <Button size="lg" className="bg-[#A3E635] text-secondary-foreground hover:bg-[#A3E635]/90 font-display" asChild>
//               <Link to="/products">
//                 Explore Products
//                 <ArrowRight size={18} className="ml-2" />
//               </Link>
//             </Button>
//             {/* <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-display" asChild>
//               <a
//                 href="https://wa.me/919999999999?text=Hello%20PREPLY%20India%2C%20I%20am%20interested%20in%20your%20products."
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <MessageCircle size={18} className="mr-2" />
//                 WhatsApp Enquiry
//               </a>
              
//             </Button> */}
//             <Button 
//               size="lg" 
//               variant="outline" 
//               className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 font-display" 
//               asChild
//             >
//               <a
//                 href="https://wa.me/919909628028?text=Hello%20PREPLY%20India%2C%20I%20am%20interested%20in%20your%20products."
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <MessageCircle size={18} className="mr-2" />
//                 WhatsApp Enquiry
//               </a>
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom gradient fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
//     </section>
//   );
// };

// export default HeroSection;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import herobanner from "@/assets/hero banner website_3.png"; // Factory Image
import heromain from "@/assets/preply banner.jpg"; // Cleanup Image (GVP Points)

const slides = [
  {
    id: 1,
    image: heromain,
    tag: "Upscaling Plastic into Products",
    title: "Cleaning India’s",
    highlight: "GVP Points.",
    description: "We clean India's most vulnerable points by extracting plastic waste and transforming it into high-quality, sustainable products.",
    showButtons: false // Agar pehle slide pe buttons nahi chahiye toh false rakh sakte ho
  },
  {
    id: 2,
    image: herobanner,
    tag: "Recycled Plastic Sheets & Products",
    title: "Engineering Waste",
    highlight: "Into Tomorrow.",
    description: "High-performance plastic sheets and products made from reclaimed waste — transforming environmental problems into sustainable materials.",
    showButtons: true
  }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play logic: har 5 second mein slide change hogi
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Background Container */}
  <div className="absolute inset-0">
    <AnimatePresence mode="wait">
      <motion.img
        key={slides[current].image}
        src={slides[current].image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-full object-cover"
        alt="PREPLY India Background"
      />
    </AnimatePresence>
    {/* Tumhara original gradient aur opacity exact wahi rakha hai */}
    <div className="absolute inset-0 bg-hero-gradient opacity-30" />
  </div>

  <div className="container relative z-10 pt-32 pb-20">
    <div className="max-w-3xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#A3E635] font-display font-bold tracking-[0.2em] uppercase text-sm mb-6">
            {slides[current].tag}
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6">
            {slides[current].title}
            <br />
            <span className="text-[#A3E635]">{slides[current].highlight}</span>
          </h1>

          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-medium">
            {slides[current].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#A3E635] text-secondary-foreground hover:bg-[#A3E635]/90 font-display" asChild>
              <Link to="/products">
                Explore Products
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 font-display" 
              asChild
            >
              <a
                href="https://wa.me/919558597555?text=Hello%20PREPLY%20India%2C%20I%20am%20interested%20in%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} className="mr-2" />
                WhatsApp Enquiry
              </a>
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  </div>

  {/* Original Bottom gradient fade */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`h-1.5 transition-all duration-300 rounded-full ${index === current ? "w-8 bg-[#A3E635]" : "w-2 bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
