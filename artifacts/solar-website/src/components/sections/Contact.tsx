import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@workspace/ui";
import { Input } from "@workspace/ui";
import { Textarea } from "@workspace/ui";
import { useToast } from "@workspace/ui";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const TO_EMAIL = "shreejisolarservice1@gmail.com";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);

    const subject = encodeURIComponent(`Quote Request from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`;

    toast({
      title: "Redirecting to your email client...",
      description: "Your enquiry will be sent to Shreeji Solar Service.",
    });

    reset();
  };

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
                {isSubmitting ? "Preparing..." : "Get Free Quote"}
                {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {/* Address */}
            <div className="flex gap-4 p-6 rounded-2xl bg-muted border border-border">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Our Location</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  45-New Arvindnagar Society Part-2,<br />
                  B/H Samjuba Hospital, Bapunagar,<br />
                  Ahmedabad, Gujarat – 380024
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 p-6 rounded-2xl bg-muted border border-border">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Phone className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Call Us</h4>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919879497045"
                    className="text-sm text-accent font-medium hover:underline"
                  >
                    +91 9879497045
                  </a>
                  <a
                    href="tel:+919106621279"
                    className="text-sm text-accent font-medium hover:underline"
                  >
                    +91 9106621279
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 p-6 rounded-2xl bg-muted border border-border">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Email Us</h4>
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:shreejisolarservice1@gmail.com"
                    className="text-sm text-accent font-medium hover:underline break-all"
                  >
                    shreejisolarservice1@gmail.com
                  </a>
                  <a
                    href="mailto:maulik@shreejisolar.co.in"
                    className="text-sm text-accent font-medium hover:underline break-all"
                  >
                    maulik@shreejisolar.co.in
                  </a>
                  <a
                    href="mailto:sales@shreejisolar.co.in"
                    className="text-sm text-accent font-medium hover:underline break-all"
                  >
                    sales@shreejisolar.co.in
                  </a>
                </div>
              </div>
            </div>

            {/* Presence */}
            <div className="p-6 rounded-2xl bg-primary text-white border border-primary">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                Our Presence Across India
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Gujarat · Delhi · Maharashtra · Tamil Nadu · Andhra Pradesh · West Bengal · Punjab · Rajasthan · Karnataka
              </p>
              <p className="text-slate-400 text-xs">
                <span className="text-accent font-semibold">Upcoming:</span> South Africa · Canada · USA
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
