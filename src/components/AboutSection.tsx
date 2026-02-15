import { motion, useInView } from "framer-motion";
import { Terminal, Phone, Mail, MapPin } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const terminalLines = [
  { prompt: true, text: "php artisan make:developer Shohan" },
  { prompt: false, text: "Developer profile created successfully!" },
  { prompt: true, text: 'echo $developer->skills' },
  { prompt: false, text: '["PHP", "Laravel", "JavaScript", "MySQL"]' },
  { prompt: true, text: 'echo $developer->currentFocus()' },
  { prompt: false, text: '"Building scalable web applications"' },
  { prompt: true, text: 'echo $developer->status' },
  { prompt: false, text: '"Open for opportunities 🚀"' },
];

const TypingLine = ({ line, delay }: { line: typeof terminalLines[0]; delay: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(line.text.slice(0, i));
      if (i >= line.text.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [started, line.text]);

  if (!started) return null;

  return (
    <div className="flex items-start gap-2 font-mono text-sm leading-relaxed">
      {line.prompt ? (
        <>
          <span className="text-primary shrink-0">❯</span>
          <span className="text-foreground">{displayed}<span className="animate-pulse text-primary">|</span></span>
        </>
      ) : (
        <span className="text-accent ml-4">{displayed}</span>
      )}
    </div>
  );
};

const AnimatedTerminal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isInView) setShow(true);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="glass rounded-2xl overflow-hidden card-3d"
      style={{ perspective: "1000px" }}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/70" />
          <div className="w-3 h-3 rounded-full bg-primary/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <span className="text-muted-foreground text-xs font-mono ml-2">~/developer-terminal</span>
      </div>

      {/* Terminal body */}
      <div className="p-5 space-y-2 min-h-[220px]">
        <p className="text-muted-foreground font-mono text-xs mb-3"># Initialize Developer Profile</p>
        {show && terminalLines.map((line, i) => (
          <TypingLine key={i} line={line} delay={i * 800} />
        ))}
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="orb w-[300px] h-[300px] bg-accent top-20 -right-20" />
      <div className="orb w-[200px] h-[200px] bg-primary bottom-20 -left-20" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 mb-4"
          >
            <Terminal size={14} className="text-primary" />
            <span className="text-primary font-mono text-xs tracking-widest">WHO I AM</span>
          </motion.div>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              I am <span className="text-foreground font-semibold">Shahanur Rahman Shohan</span>, a dedicated Full-Stack Software Engineer with strong expertise in the
              <span className="text-primary"> Laravel</span> and
              <span className="text-accent"> PHP</span> ecosystem and a BSc in Computer Science & Engineering. I focus on building scalable, secure, and maintainable web applications that deliver real business value — including REST APIs, admin dashboards, e-commerce platforms, POS systems, and custom business solutions. I prioritize clean architecture, structured code, and performance optimization to ensure long-term reliability and smooth user experience.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I am highly comfortable working with PHP, JavaScript, and MySQL, and experienced in both Windows and Linux environments for development and deployment. I enjoy turning complex ideas into practical digital products, continuously learning modern technologies, and delivering production-ready, efficient, and well-engineered solutions that are both technically strong and business-oriented.
            </p>

            {/* Contact info */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 glass rounded-xl px-4 py-2.5">
                <Phone size={16} className="text-primary" />
                <span className="text-sm text-foreground font-mono">01731578788</span>
              </div>
              <a href="mailto:shohancs.dev@gmail.com" className="flex items-center gap-2 glass rounded-xl px-4 py-2.5 hover:border-primary/50 transition-colors">
                <Mail size={16} className="text-primary" />
                <span className="text-sm text-foreground font-mono">shohancs.dev@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* Animated Terminal */}
          <AnimatedTerminal />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
