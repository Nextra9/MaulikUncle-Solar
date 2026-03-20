import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(from, {
    damping: 50,
    stiffness: 100,
    duration: duration * 1000,
  });
  
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    if (inView) {
      spring.set(to);
    }
  }, [inView, spring, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  { id: 1, label: "Projects Completed", value: 5000, suffix: "+" },
  { id: 2, label: "Happy Clients", value: 3000, suffix: "+" },
  { id: 3, label: "Installed Capacity", value: 500, suffix: "+ MW" },
  { id: 4, label: "Years Experience", value: 15, suffix: "+" },
];

export function Stats() {
  return (
    <section id="stats" className="py-20 bg-muted relative z-10 -mt-10 rounded-t-3xl shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x divide-border/50">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center text-center ${index === 0 ? 'pl-0' : 'pl-8 md:pl-12'}`}
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2 flex items-baseline">
                <Counter from={0} to={stat.value} />
                <span className="text-accent ml-1">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground font-medium text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
