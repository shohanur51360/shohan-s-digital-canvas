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
    <section id="projects" className="section-padding bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-2">MY WORK</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-7 group hover:border-primary/50 transition-all duration-300 card-3d"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${project.title} Live`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-primary"
                  >
                    {tag}
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

export default ProjectsSection;
