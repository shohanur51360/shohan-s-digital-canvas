import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Mail, Download, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const socials = [
  { icon: Github, href: "https://github.com/shohancs", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shohancs/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/shohancs/", label: "Facebook" },
  { icon: Mail, href: "mailto:shohancs.dev@gmail.com", label: "Email" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm md:text-base mb-4 tracking-widest"
          >
            FULL-STACK SOFTWARE ENGINEER
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient glow-text">Shahanur Rahman</span>
            <br />
            <span className="text-gradient glow-text">Shohan</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
            Building scalable web applications with a focus on Clean Code & Best Practices.
            <br />
            <span className="text-primary font-mono">Laravel Specialist</span> crafting robust backend systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="/Shahanur_Rahman_Shohan_CV.pdf"
              download
              className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-all glow animate-pulse-glow"
            >
              <Download size={18} />
              Download CV
            </a>
            <a
              href="#contact"
              className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-5">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:glow transition-all duration-300"
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
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        >
          <ChevronDown size={28} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
