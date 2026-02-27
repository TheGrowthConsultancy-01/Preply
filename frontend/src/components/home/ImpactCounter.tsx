import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 50000, suffix: "+", label: "Kg Plastic Waste Recycled" },
  { value: 120, suffix: "+", label: "Garbage Points Restored" },
  { value: 5000, suffix: "+", label: "Products Created" },
  { value: 30, suffix: "+", label: "Communities Impacted" },
];

function useCountUp(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, isVisible]);

  return count;
}

const CounterCard = ({ value, suffix, label, isVisible }: { value: number; suffix: string; label: string; isVisible: boolean }) => {
  const count = useCountUp(value, isVisible);
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-secondary mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-primary-foreground/70 font-medium text-sm">{label}</p>
    </div>
  );
};

const ImpactCounter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-hero-gradient">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-secondary font-display font-medium tracking-widest uppercase text-sm mb-3">
            Our Footprint
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground">
            Measured Impact
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {metrics.map((m) => (
            <CounterCard key={m.label} {...m} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounter;
