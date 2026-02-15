import { Github, Linkedin, Facebook } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/shohancs" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shohancs/" },
  { icon: Facebook, href: "https://www.facebook.com/shohancs/" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <s.icon size={14} />
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} <span className="text-foreground font-medium">Shahanur Rahman Shohan</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
