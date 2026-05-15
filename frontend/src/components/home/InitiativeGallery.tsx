import { motion } from "framer-motion";
// Images ke path apne hisab se check kar lena
import img1 from "@/assets/IMG_20260102_192033.jpg.jpeg";
import img2 from "@/assets/IMG_20260102_192044.jpg.jpeg";
import img3 from "@/assets/IMG_20260102_192103.jpg.jpeg";
import img4 from "@/assets/IMG_20260102_192104.jpg.jpeg";
import img5 from "@/assets/IMG_20260102_192106.jpg.jpeg";
import img6 from "@/assets/IMG_20260102_192138.jpg.jpeg";
import img7 from "@/assets/IMG_20260102_192141.jpg.jpeg";
import img8 from "@/assets/IMG_20260102_192143.jpg.jpeg";
import img9 from "@/assets/IMG_20260102_192523.jpg.jpeg";
import img10 from "@/assets/WhatsApp Image 2026-05-15 at 14.00.16.jpeg";
import img11 from "@/assets/WhatsApp Image 2026-05-15 at 14.00.17 (1).jpeg";
import img12 from "@/assets/WhatsApp Image 2026-05-15 at 14.00.17 (2).jpeg";
import img13 from "@/assets/WhatsApp Image 2026-05-15 at 14.00.17.jpeg";
import img14 from "@/assets/WhatsApp Image 2026-05-15 at 14.00.18.jpeg";
const images = [
  { id: 1, src: img1, alt: "First" },
  { id: 2, src: img2, alt: "Second" },
  { id: 3, src: img3, alt: "Third" },
  { id: 4, src: img4, alt: "Fourth" },
  { id: 5, src: img5, alt: "Fifth" },
    { id: 6, src: img6, alt: "Sixth" },
    { id: 7, src: img7, alt: "Seventh" },
    { id: 8, src: img8, alt: "Eighth" },
    { id: 9, src: img9, alt: "Ninth" },
    { id: 10, src: img10, alt: "Tenth" },
    { id: 11, src: img11, alt: "Eleventh" },
    { id: 12, src: img12, alt: "Twelfth" },
    {id : 13, src: img13, alt: "Thirteenth" },
    { id : 14, src: img14, alt: "Fourteenth" },
];


const InitiativeGallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-2 font-display">Preply Gallery</h2>
          <div className="h-1.5 w-24 bg-[#A3E635] rounded-full"></div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full rounded-2xl object-cover hover:scale-[1.02] transition-transform duration-300 cursor-pointer shadow-sm border border-slate-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    
  );
};

export default InitiativeGallery;