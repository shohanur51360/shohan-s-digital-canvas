import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Mail, Download, ChevronDown, Sparkles } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/shohancs", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shohancs/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/shohancs/", label: "Facebook" },
  { icon: Mail, href: "mailto:shohancs.dev@gmail.com", label: "Email" },
];

const FloatingOrbs = () => (
  <>
    <div className="orb w-[500px] h-[500px] bg-primary -top-40 -left-40 animate-float-slow" />
    <div className="orb w-[400px] h-[400px] bg-accent -bottom-32 -right-32 animate-float-delay" />
    <div className="orb w-[300px] h-[300px] bg-primary top-1/3 right-1/4 animate-float" />
  </>
);

const GridPattern = () => (
  <div className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
      backgroundSize: '60px 60px',
    }}
  />
);

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingOrbs />
      <GridPattern />

      {/* Animated gradient line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-primary"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 mb-8"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-primary font-mono text-xs tracking-widest">FULL-STACK SOFTWARE ENGINEER</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block text-foreground"
            >
              Hi, I'm
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="block text-gradient glow-text"
            >
              Shahanur Rahman
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="block text-gradient glow-text"
            >
              Shohan
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building scalable web applications with a focus on
            <span className="text-primary font-semibold"> Clean Code</span> &
            <span className="text-accent font-semibold"> Best Practices</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="/Shahanur_Rahman_Shohan_CV.pdf"
              download
              className="group relative bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 animate-pulse-glow"
            >
              <Download size={18} />
              Download CV
              <span className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
            </a>
            <a
              href="#contact"
              className="group border border-border text-foreground px-8 py-3.5 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={18} />
              Hire Me
            </a>
          </motion.div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-4">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.1 }}
                whileHover={{ scale: 1.15, y: -4 }}
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow transition-all duration-300"
                aria-label={s.label}
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        >
          <ChevronDown size={28} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
