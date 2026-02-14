import { motion } from "framer-motion";
import { useState } from "react";

const categories: Record<string, string[]> = {
  All: [],
  Skills: ["PHP", "Laravel", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "MySQL", "AJAX", "JSON", "REST API", "OOP", "MVC"],
  Tools: ["Git", "GitHub", "Composer", "NPM", "VS Code", "Sublime Text", "cPanel", "SSL", "Webhook"],
};

// Fill "All" with everything
categories.All = [...new Set([...categories.Skills, ...categories.Tools])];

const TechStackSection = () => {
  const [active, setActive] = useState("All");

  return (
    <section id="techstack" className="section-padding bg-accent/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            {"{{ "}Tech <span className="text-primary">Stack</span>{" }}"}
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto"
        >
          {categories[active].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
