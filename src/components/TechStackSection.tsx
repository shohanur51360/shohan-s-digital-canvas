import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages & Frameworks",
    techs: ["PHP", "Laravel", "JavaScript", "jQuery", "HTML", "CSS"],
  },
  {
    title: "Frontend & Styling",
    techs: ["Bootstrap", "Tailwind CSS", "AJAX", "JSON"],
  },
  {
    title: "Database & Backend",
    techs: ["MySQL", "Eloquent ORM", "REST API", "Webhook", "Authentication", "JWT", "Sanctum"],
  },
  {
    title: "DevOps & Tools",
    techs: ["Git", "GitHub", "Composer", "NPM", "VS Code", "Sublime Text", "cPanel", "SSL"],
  },
  {
    title: "Concepts & Patterns",
    techs: ["OOP", "MVC", "CRUD", "Migrations", "Seeders", "Relationships", "Role Management"],
  },
];

const TechStackSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-2">WHAT I USE</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="glass rounded-xl p-6 card-3d"
            >
              <h3 className="text-primary font-semibold mb-4 text-sm tracking-wide">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
