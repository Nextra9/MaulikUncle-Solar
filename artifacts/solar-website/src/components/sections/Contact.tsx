import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSubmitting(false);
    
    toast({
      title: "Message Sent Successfully!",
      description: "Our solar expert will get back to you within 24 hours.",
    });
    
    reset();
  };

  const contactInfo = [
    { icon: MapPin, title: "Our Location", details: "123 Solar Street, Green Tech Park, Mumbai, MH 400001" },
    { icon: Phone, title: "Call Us", details: "+91 98765 43210\n1800-SOLAR-NOW" },
    { icon: Mail, title: "Email Us", details: "info@solartech.com\nsales@solartech.com" },
    { icon: Clock, title: "Working Hours", details: "Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed" },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
            <div className="h-px w-8 bg-accent" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-muted-foreground text-lg">
            Contact us today for a free site assessment and customized solar proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 rounded-2xl shadow-xl shadow-black/5 border border-border"
          >
            <h3 className="font-display font-bold text-2xl text-primary mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    {...register("name")} 
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <span className="text-destructive text-xs mt-1 block">{errors.name.message}</span>}
                </div>
                <div>
                  <Input 
                    placeholder="Phone Number" 
                    {...register("phone")}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && <span className="text-destructive text-xs mt-1 block">{errors.phone.message}</span>}
                </div>
              </div>
              
              <div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <span className="text-destructive text-xs mt-1 block">{errors.email.message}</span>}
              </div>
              
              <div>
                <Textarea 
                  placeholder="Tell us about your requirements (e.g., Roof size, Monthly bill)" 
                  {...register("message")}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && <span className="text-destructive text-xs mt-1 block">{errors.message.message}</span>}
              </div>
              
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Get Free Quote"}
                {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full"
          >
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">{info.title}</h4>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{info.details}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Map Placeholder */}
            <div className="relative flex-grow min-h-[250px] bg-muted rounded-2xl overflow-hidden border border-border group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="primary" className="shadow-lg shadow-primary/25">
                  <MapPin className="mr-2 w-4 h-4" /> View on Map
                </Button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
