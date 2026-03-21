import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@workspace/ui";

const reviews = [
  {
    id: 1,
    quote: "Switching to SolarTech was the best decision for our manufacturing unit. The ROI has been incredible, and their O&M team is highly responsive.",
    author: "Mansi Patel",
    role: "Homeowner",
    rating: 5
  },
  {
    id: 2,
    quote: "Professional execution from day one. The engineers explained everything clearly, and the installation of the 100kW plant was completed ahead of schedule.",
    author: "Nitya Sojitra",
    role: "Homeowner",
    rating: 5
  },
  {
    id: 3,
    quote: "We've reduced our electricity bills by 85% since installing the residential system. The app monitoring is a great feature to track daily generation.",
    author: "Bhavesh Patel",
    role: "Homeowner",
    rating: 5
  },
  {
    id: 4,
    quote: "As a real estate developer, partnering with SolarTech adds immense value to our properties. High-quality panels and pristine aesthetics.",
    author: "Abhishek Banerjee",
    role: "Homeowner",
    rating: 5
  }
];

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      {/* Decorative background logo/icon */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-5 pointer-events-none">
        <SunIcon className="w-[600px] h-[600px] text-primary" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">

          {/* Header Side */}
          <div className="w-full md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-accent" />
                <span className="text-accent font-semibold tracking-wider uppercase text-sm">Reviews</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground mb-8">
                Don't just take our word for it. Hear from businesses and homeowners who have successfully transitioned to clean energy with us.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={scrollPrev}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={scrollNext}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Carousel Side */}
          <div className="w-full md:w-2/3">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {reviews.map((review) => (
                  <div key={review.id} className="flex-[0_0_100%] min-w-0 pl-4">
                    <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl shadow-black/5 border border-border/50 relative">
                      <Quote className="absolute top-8 right-8 text-accent/20 w-16 h-16" />

                      <div className="flex gap-1 mb-6">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>

                      <p className="text-lg md:text-xl text-primary font-medium leading-relaxed mb-8 relative z-10">
                        "{review.quote}"
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                          {review.author.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-primary font-display">{review.author}</h4>
                          <p className="text-sm text-muted-foreground">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    index === selectedIndex ? "bg-accent" : "bg-border"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Simple SVG component for background decor
function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}
