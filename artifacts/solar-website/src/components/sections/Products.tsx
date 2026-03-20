import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Monocrystalline Panels",
    description: "Highest efficiency rates for residential and commercial roofs with limited space.",
    efficiency: "22%",
    icon: Sun,
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    name: "Polycrystalline Panels",
    description: "Cost-effective solutions ideal for large-scale utility and industrial installations.",
    efficiency: "17%",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    name: "Bifacial Solar Panels",
    description: "Dual-sided generation capturing albedo light for maximum energy yield.",
    efficiency: "25%",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    name: "Smart Solar Inverters",
    description: "Intelligent energy conversion with real-time monitoring and grid synchronization.",
    efficiency: "99%",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=600&fit=crop"
  }
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">High-Tech Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-4 text-balance">
              Premium Solar Products
            </h2>
            <p className="text-muted-foreground text-lg">
              Engineered for maximum efficiency and durability. Our Tier-1 modules are built to withstand extreme conditions while delivering optimal power output.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="outline" size="lg" className="hidden md:inline-flex">
              Download Catalog
            </Button>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* stock image fallback for product */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1 shadow-sm">
                    <Zap size={14} className="text-accent" /> {product.efficiency} Efficiency
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-accent">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                    {product.description}
                  </p>
                  <a href="#" className="inline-flex items-center text-accent font-semibold text-sm group/link">
                    View Details
                    <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" size="lg" className="w-full">
            Download Catalog
          </Button>
        </div>

      </div>
    </section>
  );
}
