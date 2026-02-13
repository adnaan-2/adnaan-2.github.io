import { useState } from "react";
import SectionReveal from "./SectionReveal";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Github, Linkedin, Instagram, Facebook, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Web3Forms access key - Get yours free at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "36f15923-5371-4cf9-b288-a82eab39e643";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    
    setSending(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New Portfolio Contact from ${form.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        toast({ 
          title: "Message sent!", 
          description: "Thanks for reaching out. I'll get back to you soon." 
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      toast({ 
        title: "Failed to send message", 
        description: "Please try again or email me directly.",
        variant: "destructive" 
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <div className="mb-4 font-mono text-sm text-primary">Contact</div>
          <h2 className="mb-8 text-2xl font-bold text-foreground sm:mb-12 sm:text-3xl md:text-4xl">Get In Touch</h2>
        </SectionReveal>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <SectionReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                className="font-mono bg-card"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
              <Input
                type="email"
                placeholder="your@email.com"
                className="font-mono bg-card"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
              <Textarea
                placeholder="Your message..."
                className="min-h-[120px] font-mono bg-card"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              />
              <Button type="submit" className="w-full gap-2 font-mono" disabled={sending}>
                <Send className="h-4 w-4" />
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-mono text-sm text-foreground">Email</div>
                  <div className="text-sm text-muted-foreground">adnanmughal0342@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-mono text-sm text-foreground">Location</div>
                  <div className="text-sm text-muted-foreground">Islamabad, Pakistan</div>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                {[
                  { icon: Github, href: "https://github.com/adnaan-2", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/adnankhalil099/", label: "LinkedIn" },
                  { icon: Instagram, href: "https://www.instagram.com/a.d.n.aa.n/", label: "Instagram" },
                  { icon: Facebook, href: "https://www.facebook.com/adnan817/", label: "Facebook" },
                ].map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-lg border border-border/50 bg-card/80 p-3 text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
