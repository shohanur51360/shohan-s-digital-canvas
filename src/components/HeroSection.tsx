import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Mail, Download, ChevronDown } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/shohancs", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shohancs/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/shohancs/", label: "Facebook" },
  { icon: Mail, href: "mailto:shohancs.dev@gmail.com", label: "Email" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-accent to-background">
      {/* Subtle decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        {/* Code bracket decoration like reference */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/5 text-[20rem] font-mono select-none pointer-events-none">
          {"</>"}
        </div>
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm md:text-base mb-4 tracking-widest"
          >
            FULL-STACK SOFTWARE ENGINEER
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight text-foreground">
            {"<?php "}
            <span className="text-primary">Shahanur Rahman</span>
            {" ?>"}
            <br />
            <span className="text-muted-foreground text-2xl sm:text-3xl md:text-4xl font-medium">
              Software Engineer
            </span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8">
            Building scalable web applications with clean code & best practices.
            <br />
            <span className="text-primary font-medium">Laravel Specialist</span> crafting robust backend systems.
          </p>

          {/* Socials */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
                aria-label={s.label}
              >
                <s.icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/Shahanur_Rahman_Shohan_CV.pdf"
              download
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-all shadow-md"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown size={24} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
