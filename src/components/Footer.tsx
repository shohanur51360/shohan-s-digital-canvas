import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/shohancs" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/shohancs/" },
            { icon: Facebook, href: "https://www.facebook.com/shohancs/" },
            { icon: Mail, href: "mailto:shohancs.dev@gmail.com" },
          ].map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <s.icon size={14} />
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-xs">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="text-foreground font-medium">Shahanur Rahman Shohan</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
