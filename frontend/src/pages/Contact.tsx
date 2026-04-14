import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello PREPLY India, my name is ${form.name}. ${form.message} Contact: ${form.phone || form.email}`;
    window.open(`https://wa.me/919909628028?text=${encodeURIComponent(msg)}`, "_blank");
    toast({ title: "Redirecting to WhatsApp", description: "Your enquiry is being sent via WhatsApp." });
  };

  return (
    <main className="pt-20">
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-secondary font-display font-medium tracking-widest uppercase text-sm mb-3">Get In Touch</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Let's Build
                <br />
                <span className="text-gradient">Together</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Whether you're an architect, builder, CSR buyer, or sustainability enthusiast — we'd love to hear from you.
              </p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "PREPLY India Pvt Ltd", detail: "Manufacturing Facility, India" },
                  { icon: Mail, label: "Email", detail: "info@preply.in" },
                  { icon: Phone, label: "Phone", detail: "+91 99096 28028" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground text-sm">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-premium">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6">Send an Enquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <Input
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
                <Button type="submit" size="lg" className="w-full font-display">
                  <MessageCircle size={18} className="mr-2" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
