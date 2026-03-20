import { motion } from "framer-motion";
import { Home, Building2, Wrench, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Residential Solar",
    description: "Turnkey rooftop solar solutions for homes, reducing electricity bills to zero with net metering.",
    icon: Home,
    image: "images/service-residential.png",
    delay: 0.1
  },
  {
    id: 2,
    title: "Commercial & EPC",
    description: "End-to-end Engineering, Procurement, and Construction for large scale commercial plants.",
    icon: Building2,
    image: "images/service-commercial.png",
    delay: 0.2
  },
  {
    id: 3,
    title: "O&M Services",
    description: "Comprehensive Operations & Maintenance to ensure your plant operates at peak performance.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1548614606-52b4451f994b?w=800&h=600&fit=crop", // Unsplash fallback
    delay: 0.3
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-accent/10 blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-secondary blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">What We Do</span>
            <div className="h-px w-8 bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
          >
            Comprehensive Solar Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg"
          >
            From initial consultation and design to installation and lifetime maintenance, 
            we provide complete solar energy solutions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            // Use import.meta.env.BASE_URL for local images, raw url for unsplash
            const imageSrc = service.image.startsWith('http') 
              ? service.image 
              : `${import.meta.env.BASE_URL}${service.image}`;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.delay }}
                className="group relative rounded-2xl overflow-hidden"
              >
                {/* Image Background */}
                <div className="absolute inset-0">
                  <img
                    src={imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/20" />
                </div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col justify-end min-h-[400px]">
                  <div className="w-14 h-14 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                    <Icon size={28} className="text-accent group-hover:text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* Hidden by default, slides up on hover */}
                  <div className="overflow-hidden">
                    <a href="#" className="inline-flex items-center text-accent font-semibold group/btn transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      Discover More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
