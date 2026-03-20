import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}images/about-img.png`}
                alt="Solar engineers inspecting installation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-accent rounded-full text-primary-foreground">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-display font-bold text-xl">ISO Certified</h4>
              </div>
              <p className="text-slate-300 text-sm">Maintaining highest global standards in quality and safety since 2008.</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6 text-balance">
              Pioneering Solar Energy Since 2014
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Shreeji Solar Service is a premier solar solutions provider based in Ahmedabad, Gujarat, dedicated to accelerating India's transition to sustainable energy. We deliver high-efficiency solar modules, comprehensive EPC services, and ongoing maintenance solutions across 9 states — Gujarat, Delhi, Maharashtra, Tamil Nadu, Andhra Pradesh, West Bengal, Punjab, Rajasthan &amp; Karnataka. We are also expanding internationally to South Africa, Canada, and the USA.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-muted p-6 rounded-xl border border-border hover:border-accent/30 transition-colors">
                <Target className="text-accent mb-4" size={32} />
                <h3 className="font-display font-bold text-lg text-primary mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">To provide reliable, affordable, and clean energy solutions to every home and business.</p>
              </div>
              <div className="bg-muted p-6 rounded-xl border border-border hover:border-accent/30 transition-colors">
                <Eye className="text-accent mb-4" size={32} />
                <h3 className="font-display font-bold text-lg text-primary mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">To be the global leader in driving the renewable energy revolution for a greener planet.</p>
              </div>
            </div>

            <Button size="lg" className="shadow-xl shadow-accent/20">
              Learn More About Us
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
