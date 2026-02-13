import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Globe } from "lucide-react";
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

    // mailto fallback
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
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-2">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Hire <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind? Let's discuss how I can help bring your ideas to life. I'm always open to new opportunities and collaborations.
            </p>
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-gradient-primary transition-all">
                  <info.icon size={18} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                  {info.label}
                </span>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass rounded-xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                maxLength={100}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                maxLength={255}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              maxLength={200}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              maxLength={1000}
            />
            <button
              type="submit"
              disabled={sending}
              className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-all disabled:opacity-50"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
