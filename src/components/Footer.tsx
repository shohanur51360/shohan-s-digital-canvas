import { Github, Linkedin, Facebook, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Github, href: "https://github.com/shohancs" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shohancs/" },
  { icon: Facebook, href: "https://www.facebook.com/shohancs/" },
  { icon: Mail, href: "mailto:shohancs.dev@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 px-4 relative overflow-hidden">
      <div className="orb w-[200px] h-[200px] bg-primary bottom-0 left-1/2 -translate-x-1/2" />

      <div className="container mx-auto flex flex-col items-center gap-5 relative z-10">
        <div className="flex items-center gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -4 }}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow transition-all duration-300"
            >
              <s.icon size={16} />
            </motion.a>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-gradient font-semibold">Shahanur Rahman Shohan</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
