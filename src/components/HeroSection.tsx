import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Mail, Download } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/shohancs", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shohancs/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/shohancs/", label: "Facebook" },
  { icon: Mail, href: "mailto:shohancs.dev@gmail.com", label: "Email" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Large code bracket decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
        <span className="text-[40rem] font-bold text-primary leading-none">&lt;/&gt;</span>
      </div>

      <div className="container mx-auto relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-foreground">
            <span className="text-primary">&lt;?php</span> Shahanur Rahman Shohan <span className="text-primary">?&gt;</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-6">
            Full-Stack Software Engineer
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                aria-label={s.label}
              >
                <s.icon size={16} />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="/Shahanur_Rahman_Shohan_CV.pdf"
            download
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            <Download size={16} />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
