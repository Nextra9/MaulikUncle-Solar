import { motion } from "framer-motion";
import { MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Metro City Mall",
    location: "Mumbai, MH",
    capacity: "500 kWp",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "TechPark IT Campus",
    location: "Bangalore, KA",
    capacity: "1.2 MWp",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Green Valley Resort",
    location: "Pune, KA",
    capacity: "250 kWp",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    title: "AutoWorks Factory",
    location: "Chennai, TN",
    capacity: "2.5 MWp",
    image: "https://images.unsplash.com/photo-1542336391-ae2936d8efe4?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Sunrise Residency",
    location: "Delhi, DL",
    capacity: "100 kWp",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Solar Farm Alpha",
    location: "Rajasthan",
    capacity: "50 MWp",
    image: "https://images.unsplash.com/photo-1584277261846-c6a1672dd979?w=800&h=600&fit=crop"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Portfolio</span>
            <div className="h-px w-8 bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6"
          >
            Our Featured Projects
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              {/* project image fallback */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display font-bold text-2xl text-white mb-2">{project.title}</h3>
                <div className="flex items-center gap-4 text-white/80 text-sm">
                  <span className="flex items-center gap-1">
                    <MapPin size={16} className="text-accent" /> {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap size={16} className="text-accent" /> {project.capacity}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>

      </div>
    </section>
  );
}
