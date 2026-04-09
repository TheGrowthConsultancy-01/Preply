// data/products.ts (Alag file bana lein taaki har jagah use ho sake)
import productsFurniture from "@/assets/products-furniture.jpg";
import wasteCollection from "@/assets/waste-collection.jpg";
import heroFactory from "@/assets/hero-factory.jpg";
import plasticSheets from "@/assets/plastic-sheets.jpg";
import heroSofaImage from "@/assets/hero-sofa.jpg"; 
import hawkerbg from "@/assets/hawker-bg.png";
import chinabsofahero from "@/assets/chinabsofa-hero.png";
import chinab1 from "@/assets/chinab-1.png";
import chinab2 from "@/assets/chinab-2.png";
import chinab3 from "@/assets/chinab-3.png";
import chinab4 from "@/assets/chinab-4.png";
import chinab5 from "@/assets/chinab-5.png";
import chinab6 from "@/assets/chinab-6.png";
import hawker1 from "@/assets/hawker-1.png";
import hawker2 from "@/assets/hawker-2.png";  
import chinabsofa from "@/assets/hero1.png";
import coffeehero from "@/assets/coffee-hero.png";
import coffee2 from "@/assets/coffee-2.png";
import coffee3 from "@/assets/coffee-3.png";


export const products = [
  {
    id: "chinab-sofa",
    name: "Chinab Sofa",
    tagline: "BUILDS CONFIDENCE",
    desc: "Inspired by the engineering strength of the Chinab River Bridge...",
    fullDesc: "Engineered from recycled plastic waste, the Chinab Sofa redefines modern furniture with a smarter, more sustainable approach. Built to outperform traditional wood, it offers superior durability, resistance to moisture, and long-term reliability without compromising on aesthetics. This is not just furniture, it’s a forward-thinking solution for businesses that value innovation and responsibility.", // Image 2 wala text
    image: chinab6,
    image2: chinab2, // Image 2 background
    image3: chinab3, // Image 3 background
    image4: chinab5 ,
    heroImage: chinabsofa, // Image 1 background
    whatsapp: "Chinab Sofa",
    features: ["BWP Grade", "BWR (IS-303)", "MR Grade"] // Image 3 categories
  },

  {
    id: "hawker",
    name: "Hawker",
    tagline: "STRENGTH IN EVERY MOVE",
    desc: "Heavy-duty sustainable furniture built for mobility and extreme conditions.",
    fullDesc: "Preply’s Sustainable Handcart is not just a product it’s a new standard for street vending. Crafted using advanced plastic plysheets made from recycled waste, this handcart replaces traditional wood with a smarter, more durable, and future-ready alternative.",
    image: hawker1, 
    image2: hawker2, 
    image3: hawker1,
    image4: hawker2,
    heroImage: hawkerbg,
    whatsapp: "Hawker Product"
  },

  {
    id: "bin", // Niche wala wrapper "bin" name hi use karega
    name: "Wrapper Bin",
    tagline: "SMART WASTE MANAGEMENT",
    desc: "Heavy-duty recycled plastic bins built for durability and sustainability.",
    fullDesc: "Preply’s Wrapper Bin is engineered using recycled chocolate wrapper waste collected through NGOs working with schools and communities. It transforms low-value plastic into a high-impact product that promotes waste segregation, awareness, and circular use.",
    image: "bin1", 
    image2: "bin2", 
    image3: "bin1",
    image4: "bin2",
    heroImage: "binHero",
    whatsapp: "Bin Enquiry",
    features: ["Weather Proof", "Zero Maintenance", "Eco-Friendly"]
  },

  {
    id: "coffee-table",
    name: "Coffee Table",
    tagline: "MINIMALIST & SUSTAINABLE",
    desc: "Minimal furniture crafted from recycled plastic sheets. Modern design meets environmental responsibility — a centerpiece with purpose.",
    fullDesc: "Every Preply’s coffee table begins its journey as discarded plastic — transformed through innovation into a material that rivals the warmth of wood, the durability of stone, and the conscience of a better tomorrow. Conscious living isn't about compromise — it's about choosing pieces that reflect your values without sacrificing your taste. The Preply’s coffee table is a quiet statement: that beautiful design and environmental responsibility can share the same room.",
    image: "furniture", // Main image (Pair 1 - Big)
    image2: coffee2, // Detail image (Pair 1 - Small)
    image3: coffee3, // Lifestyle background (Pair 2 - Big)
    image4: "coffeeTableTop", // Top view (Pair 2 - Small)
    heroImage: coffeehero, // Hero section background
    whatsapp: "Coffee Table",
    features: ["Waterproof", "Scratch Resistant", "100% Recycled"] 
  },
  // baki products...
];