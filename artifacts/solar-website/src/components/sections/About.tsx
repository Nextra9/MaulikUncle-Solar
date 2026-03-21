import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Target, Eye, X } from "lucide-react";
import { Button } from "@workspace/ui";

const FULL_ABOUT = `Shreeji Solar Service is a premier solar solutions provider based in Ahmedabad, Gujarat, dedicated to accelerating India's transition to sustainable energy. We deliver high-efficiency solar modules, comprehensive EPC services, and ongoing maintenance solutions across 9 states — Gujarat, Delhi, Maharashtra, Tamil Nadu, Andhra Pradesh, West Bengal, Punjab, Rajasthan & Karnataka. We are also expanding internationally to South Africa, Canada, and the USA.

We are empanelled in the National Portal which is handled by the National Government and provides subsidy to customers. We are also empanelled with the GEDA Portal to provide authority to commercial projects in Gujarat.

Our team of certified solar engineers ensures each installation meets the highest quality standards, from initial site assessment and system design to professional installation and long-term O&M support. We handle Residential, Commercial, and large-scale Megawatt Projects — all under one roof.`;

export function About() {
  const [showModal, setShowModal] = useState(false);

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
                <h4 className="font-display font-bold text-xl">Government Empanelled</h4>
              </div>
              <p className="text-slate-300 text-sm">Empanelled with National Portal & GEDA for subsidies and commercial authority in Gujarat.</p>
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
              Solar Installation Service Since 2018
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Shreeji Solar Service, established in 2018, is the Solar Installation Service provider in Gujarat. Shreeji Solar has associated with solar companies and is also Empanelled in the National Portal — handled by the National Government — to provide subsidy to customers, and also empanelled with the GEDA Portal to provide authority to commercial projects in Gujarat. Shreeji Solar deals in solar installation services in Residential and Commercial projects all over India, and also handles Megawatt Projects.
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
                <p className="text-sm text-muted-foreground">To be a global leader in driving the renewable energy revolution across India and beyond.</p>
              </div>
            </div>

            <Button size="lg" className="shadow-xl shadow-accent/20" onClick={() => setShowModal(true)}>
              Learn More About Us
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-accent" />
                <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-primary mb-6">
                Shreeji Solar Service
              </h3>

              <div className="text-muted-foreground leading-relaxed space-y-4">
                {FULL_ABOUT.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-3">
                {["Gujarat", "Delhi", "Maharashtra", "Tamil Nadu", "Andhra Pradesh", "West Bengal", "Punjab", "Rajasthan", "Karnataka"].map((state) => (
                  <span key={state} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                    {state}
                  </span>
                ))}
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-dashed border-primary/30">
                  + South Africa · Canada · USA (Upcoming)
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
