// data/products.ts (Alag file bana lein taaki har jagah use ho sake)
import productsFurniture from "@/assets/products-furniture.jpg";
import wasteCollection from "@/assets/waste-collection.jpg";
import heroFactory from "@/assets/hero-factory.jpg";
import plasticSheets from "@/assets/plastic-sheets.jpg";
import heroSofaImage from "@/assets/hero-sofa.jpg"; 
import hawkerbg from "@/assets/hawker-bg.png";

export const products = [
  {
    id: "chinab-sofa",
    name: "Chinab Sofa",
    tagline: "BUILDS CONFIDENCE",
    desc: "Inspired by the engineering strength of the Chinab River Bridge...",
    fullDesc: "Engineered from recycled plastic waste, the Chinab Sofa redefines modern furniture with a smarter, more sustainable approach. Built to outperform traditional wood, it offers superior durability, resistance to moisture, and long-term reliability without compromising on aesthetics. This is not just furniture, it’s a forward-thinking solution for businesses that value innovation and responsibility.", // Image 2 wala text
    image: productsFurniture,
    image2: wasteCollection, // Image 2 background
    image3: heroFactory, // Image 3 background
    image4: plasticSheets,
    heroImage: productsFurniture, // Image 1 background
    whatsapp: "Chinab Sofa",
    features: ["BWP Grade", "BWR (IS-303)", "MR Grade"] // Image 3 categories
  },

  {
    id: "hawker",
    name: "Hawker",
    tagline: "STRENGTH IN EVERY MOVE",
    desc: "Heavy-duty sustainable furniture built for mobility and extreme conditions.",
    fullDesc: "Preply’s Sustainable Handcart is not just a product it’s a new standard for street vending. Crafted using advanced plastic plysheets made from recycled waste, this handcart replaces traditional wood with a smarter, more durable, and future-ready alternative.",
    image: "/path-to-hawker-image.jpg", 
    image2: "/path-to-hawker-process.jpg", 
    image3: "/path-to-hawker-texture.jpg",
    image4: "/path-to-hawker-final.jpg",
    heroImage: hawkerbg,
    whatsapp: "Hawker Product"
  },
  // baki products...
];