import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">P</span>
              </div>
              <span className="font-display font-bold text-xl">PREPLY</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Engineering waste into tomorrow. High-performance plastic sheets and products made from reclaimed waste plastic.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Plastic Sheets", path: "/plastic-sheets" },
                { label: "Products", path: "/products" },
                { label: "Impact", path: "/impact" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-background/60 hover:text-background text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Products</h4>
            <div className="flex flex-col gap-2 text-sm text-background/60">
              <span>Wrapper Bin</span>
              <span>Chinab Sofa</span>
              <span>Coffee Table</span>
              <span>Sustainable Handcarts</span>
              <span>Shuttering Sheets</span>
              <span>Custom Furniture</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-background/60">
              <p>PREPLY India Pvt Ltd</p>
              <p>Manufacturing Facility, India</p>
              <a href="mailto:info@preply.in" className="hover:text-background transition-colors">
                info@preply.in
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background transition-colors"
              >
                WhatsApp: +91 99999 99999
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} PREPLY India Pvt Ltd. All rights reserved.
          </p>
          <p className="text-background/40 text-sm">
            Transforming waste into sustainable futures.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
