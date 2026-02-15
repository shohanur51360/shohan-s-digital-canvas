import { motion } from "framer-motion";
import { useState } from "react";

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
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="section-title font-mono">
            {"{{ "}Tech <span className="text-primary">Stack</span>{" }}"}
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mt-3" />
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {filtered.map((tech, i) => (
            <motion.span
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.02 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 rounded-lg border border-border text-sm text-foreground hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
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
