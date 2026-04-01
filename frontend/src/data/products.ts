// data/products.ts (Alag file bana lein taaki har jagah use ho sake)
import productsFurniture from "@/assets/products-furniture.jpg";
import wasteCollection from "@/assets/waste-collection.jpg";
import heroFactory from "@/assets/hero-factory.jpg";
import plasticSheets from "@/assets/plastic-sheets.jpg";
import heroSofaImage from "@/assets/hero-sofa.jpg"; 

export const products = [
  {
    id: "chinab-sofa",
    name: "Chinab Sofa",
    tagline: "BUILDS CONFIDENCE",
    desc: "Inspired by the engineering strength of the Chinab River Bridge...",
    fullDesc: "Suntree Woods Pvt. Ltd. is a company headquartered in Ernakulam, Kerala...", // Image 2 wala text
    image: productsFurniture,
    image2: wasteCollection, // Image 2 background
    image3: heroFactory, // Image 3 background
    image4: plasticSheets,
    heroImage: productsFurniture, // Image 1 background
    whatsapp: "Chinab Sofa",
    features: ["BWP Grade", "BWR (IS-303)", "MR Grade"] // Image 3 categories
  },
  // baki products...
];