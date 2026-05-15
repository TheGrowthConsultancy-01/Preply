import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import preplyLogo from "@/assets/preply-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Plastic Sheets", path: "/plastic-sheets" },
  { label: "Products", path: "/products" },
  { label: "Gallery", path: "/gallery" },
  { label: "Impact", path: "/impact" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={preplyLogo} alt="PREPLY India" className="h-10 md:h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="default" size="sm" asChild>
            <a
              href="https://wa.me/919909628028?text=Hello%20PREPLY%20India%2C%20I%20am%20interested%20in%20your%20products.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              WhatsApp Enquiry
            </a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="default" size="sm" className="mt-3" asChild>
              <a
                href="https://wa.me/919909628028?text=Hello%20PREPLY%20India%2C%20I%20am%20interested%20in%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Enquiry
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
