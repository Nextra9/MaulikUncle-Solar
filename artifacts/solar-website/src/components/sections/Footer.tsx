import { Sun, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#050C17] pt-20 pb-10 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1 */}
          <div>
            <div 
              className="flex items-center gap-2 cursor-pointer mb-6"
              onClick={() => scrollTo("#home")}
            >
              <div className="bg-accent text-white p-1.5 rounded-md">
                <Sun size={20} strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                SolarTech
              </span>
            </div>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Leading the transition to sustainable energy. We provide world-class solar solutions for a brighter, greener future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollTo("#about")} className="hover:text-accent transition-colors">About Us</button></li>
              <li><button onClick={() => scrollTo("#products")} className="hover:text-accent transition-colors">Products</button></li>
              <li><button onClick={() => scrollTo("#services")} className="hover:text-accent transition-colors">Services</button></li>
              <li><button onClick={() => scrollTo("#projects")} className="hover:text-accent transition-colors">Projects</button></li>
              <li><button onClick={() => scrollTo("#contact")} className="hover:text-accent transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-accent transition-colors">Residential Solar</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Commercial Solar</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Industrial EPC</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Solar Inverters</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Maintenance (O&M)</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to our newsletter for the latest solar news and offers.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-accent"
              />
              <Button type="submit" size="icon" className="shrink-0 bg-accent hover:bg-accent/90 text-white">
                <ArrowRight size={18} />
              </Button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SolarTech Energies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
