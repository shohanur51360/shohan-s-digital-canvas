import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Mail, Download, ChevronDown } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/shohancs", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shohancs/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/shohancs/", label: "Facebook" },
  { icon: Mail, href: "mailto:shohancs.dev@gmail.com", label: "Email" },
];

const FloatingParticles = () => (
  <>
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary/30"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 3 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 3,
        }}
      />
    ))}
  </>
);

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.08)_0%,_transparent_70%)]" />
      <FloatingParticles />

      {/* Animated gradient line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-primary"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="container mx-auto relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Role label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary/70 font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-8"
          >
            Full-Stack Software Engineer
          </motion.p>

          {/* Name */}
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

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Building scalable web applications with a focus on
            <span className="text-foreground font-semibold"> Clean Code</span> &
            <span className="text-foreground font-semibold"> Best Practices</span>
          </motion.p>

          {/* Laravel Specialist pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass border border-primary/20 mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-sm">
              <span className="text-primary font-semibold">Laravel Specialist</span>
              <span className="text-muted-foreground"> — crafting robust backend systems</span>
            </span>
          </motion.div>

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
              className="group border border-primary/30 text-primary px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
            >
              <Download size={18} />
              Download CV
            </a>
            <a
              href="#contact"
              className="group bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
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
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
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
