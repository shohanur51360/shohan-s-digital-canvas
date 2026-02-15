import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "PropVerify",
    desc: "A property verification platform built with modern web technologies for secure real estate transactions.",
    github: "https://github.com/shohancs/PropVerify",
    live: "https://shohancs.com/projects/PropVerify/",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript"],
  },
  {
    title: "Local Farm Market",
    desc: "An online marketplace connecting local farmers with consumers for fresh produce delivery.",
    github: "https://github.com/shohancs/Local_Farm_Market",
    live: "https://shohancs.com/projects/Local_Farm_Market/",
    tags: ["PHP", "Laravel", "jQuery", "MySQL"],
  },
  {
    title: "Library Management System",
    desc: "Comprehensive library management with book tracking, user management, and automated notifications.",
    github: "https://github.com/shohancs/Library_Management_System",
    live: "https://shohancs.com/projects/Library_Management_System/",
    tags: ["PHP", "MySQL", "Bootstrap", "CRUD"],
  },
  {
    title: "Interactive Blogging Platform",
    desc: "Feature-rich blogging platform with admin control, comments, categories, and user engagement tools.",
    github: "https://github.com/shohancs/Interactive_Blogging_Platform_with_Admin_Control",
    live: "https://shohancs.com/projects/Interactive_Blogging_Platform_with_Admin_Control/",
    tags: ["PHP", "JavaScript", "MySQL", "jQuery"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="section-title font-mono">
            {"{{ "}Featured <span className="text-primary">Projects</span>{" }}"}
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mt-3" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="border border-border rounded-xl p-6 text-center group hover:border-primary transition-all duration-300"
            >
              <h3 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                {project.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-1 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-md font-medium hover:shadow-md transition-all"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
