import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { Services } from "@/components/sections/Services";
import { Reviews } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Stats />
        <About />
        <Products />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
