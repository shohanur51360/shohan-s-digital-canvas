import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-gradient font-semibold">Shahanur Rahman Shohan</span>. All rights reserved.
        </p>
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
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
