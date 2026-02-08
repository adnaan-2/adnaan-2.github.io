import { useState } from "react";
import SectionReveal from "./SectionReveal";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    // TODO: integrate with edge function
    setTimeout(() => {
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <div className="mb-4 font-mono text-sm text-primary">{"## Contact"}</div>
          <h2 className="mb-12 text-3xl font-bold text-foreground sm:text-4xl">Get In Touch</h2>
        </SectionReveal>

        <div className="grid gap-8 lg:grid-cols-2">
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
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-mono text-sm text-foreground">Email</div>
                  <div className="text-sm text-muted-foreground">alex@example.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-mono text-sm text-foreground">Location</div>
                  <div className="text-sm text-muted-foreground">San Francisco, CA</div>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                ].map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="rounded-lg border border-border bg-card p-3 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/5"
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
