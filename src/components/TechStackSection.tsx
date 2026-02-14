import { motion } from "framer-motion";
import { useState } from "react";
import { Layers } from "lucide-react";

const allTechs = [
  { name: "PHP", category: "Languages" },
  { name: "Laravel", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "jQuery", category: "Languages" },
  { name: "HTML", category: "Languages" },
  { name: "CSS", category: "Languages" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "AJAX", category: "Frontend" },
  { name: "JSON", category: "Frontend" },
  { name: "MySQL", category: "Backend" },
  { name: "Eloquent ORM", category: "Backend" },
  { name: "REST API", category: "Backend" },
  { name: "Webhook", category: "Backend" },
  { name: "Authentication", category: "Backend" },
  { name: "JWT", category: "Backend" },
  { name: "Sanctum", category: "Backend" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Composer", category: "Tools" },
  { name: "NPM", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "cPanel", category: "Tools" },
  { name: "SSL", category: "Tools" },
  { name: "OOP", category: "Patterns" },
  { name: "MVC", category: "Patterns" },
  { name: "CRUD", category: "Patterns" },
  { name: "Migrations", category: "Patterns" },
  { name: "Seeders", category: "Patterns" },
  { name: "Role Management", category: "Patterns" },
];

const categories = ["All", "Languages", "Frontend", "Backend", "Tools", "Patterns"];

const TechStackSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allTechs : allTechs.filter((t) => t.category === active);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-primary -top-32 left-1/3" />

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
            <Layers size={14} className="text-primary" />
            <span className="text-primary font-mono text-xs tracking-widest">WHAT I USE</span>
          </motion.div>
          <h2 className="section-title">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-primary text-primary-foreground glow"
                  : "glass text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto"
        >
          {filtered.map((tech, i) => (
            <motion.span
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: i * 0.02 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="px-5 py-2.5 rounded-xl glass text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary hover:glow transition-all duration-300 cursor-default"
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
