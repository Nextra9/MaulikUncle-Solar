import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

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

          {/* Col 1 - Brand */}
          <div>
            <div
              className="cursor-pointer mb-6 inline-block"
              onClick={() => scrollTo("#home")}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/logo.jpeg`}
                alt="Shreeji Solar Service"
                className="h-14 w-auto object-contain rounded-lg bg-white px-2 py-1 hover:scale-105 transition-transform duration-200"
              />
            </div>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Leading solar energy provider based in Ahmedabad, Gujarat. Serving residential, commercial, and industrial clients across 9 Indian states.
            </p>
            <p className="text-slate-500 text-xs mb-6 leading-relaxed">
              <span className="text-accent font-semibold">Upcoming:</span> South Africa · Canada · USA
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

          {/* Col 2 - Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollTo("#about")} className="hover:text-accent transition-colors">About Us</button></li>
              <li><button onClick={() => scrollTo("#products")} className="hover:text-accent transition-colors">Products</button></li>
              <li><button onClick={() => scrollTo("#services")} className="hover:text-accent transition-colors">Services</button></li>
              <li><button onClick={() => scrollTo("#contact")} className="hover:text-accent transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Col 3 - Services */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><span className="hover:text-accent transition-colors cursor-default">Residential Solar</span></li>
              <li><span className="hover:text-accent transition-colors cursor-default">Commercial Solar</span></li>
              <li><span className="hover:text-accent transition-colors cursor-default">Industrial EPC</span></li>
              <li><span className="hover:text-accent transition-colors cursor-default">Megawatt Projects</span></li>
              <li><span className="hover:text-accent transition-colors cursor-default">Maintenance (O&M)</span></li>
            </ul>
          </div>

          {/* Col 4 - Contact Info */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  45 New Arvindnagar Society Part-2, B/H Samjuba Hospital, Bapunagar, Ahmedabad, Gujarat – 380024
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={16} className="text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919879497045" className="text-slate-400 hover:text-accent transition-colors">+91 9879497045</a>
                  <a href="tel:+919106621279" className="text-slate-400 hover:text-accent transition-colors">+91 9106621279</a>
                </div>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail size={16} className="text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:shreejisolarservice1@gmail.com" className="text-slate-400 hover:text-accent transition-colors break-all">shreejisolarservice1@gmail.com</a>
                  <a href="mailto:maulik@shreejisolar.co.in" className="text-slate-400 hover:text-accent transition-colors break-all">maulik@shreejisolar.co.in</a>
                  <a href="mailto:sales@shreejisolar.co.in" className="text-slate-400 hover:text-accent transition-colors break-all">sales@shreejisolar.co.in</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>©2018 Shreeji Solar Service. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
