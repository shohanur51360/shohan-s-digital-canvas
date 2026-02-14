import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Globe, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSending(true);

    const mailtoLink = `mailto:shohancs.dev@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.open(mailtoLink, "_blank");

    setSending(false);
    toast({ title: "Opening your email client..." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "shohancs.dev@gmail.com", href: "mailto:shohancs.dev@gmail.com" },
    { icon: Globe, label: "shohancs.com", href: "https://shohancs.com/" },
    { icon: MapPin, label: "Bangladesh", href: "#" },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-accent -top-32 -left-32" />
      <div className="orb w-[300px] h-[300px] bg-primary bottom-0 right-0" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 mb-4"
          >
            <MessageSquare size={14} className="text-primary" />
            <span className="text-primary font-mono text-xs tracking-widest">GET IN TOUCH</span>
          </motion.div>
          <h2 className="section-title">
            Hire <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl glass flex items-center justify-center group-hover:bg-gradient-primary group-hover:border-transparent transition-all duration-300">
                  <info.icon size={18} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {info.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3.5 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/10 transition-all duration-300"
                maxLength={100}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3.5 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/10 transition-all duration-300"
                maxLength={255}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3.5 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/10 transition-all duration-300"
              maxLength={200}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3.5 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/10 transition-all duration-300 resize-none"
              maxLength={1000}
            />
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-primary/30 transition-all disabled:opacity-50 glow"
            >
              <Send size={16} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
