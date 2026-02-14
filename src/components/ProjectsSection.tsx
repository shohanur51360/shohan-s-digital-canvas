import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

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
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-primary -top-40 -right-40" />
      <div className="orb w-[300px] h-[300px] bg-accent bottom-0 left-0" />

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
            <Folder size={14} className="text-primary" />
            <span className="text-primary font-mono text-xs tracking-widest">MY WORK</span>
          </motion.div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-8 group hover:border-primary/40 transition-all duration-400 card-3d relative overflow-hidden"
            >
              {/* Gradient border glow on hover */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                    <Folder size={20} className="text-primary-foreground" />
                  </div>
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

                <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-secondary/80 text-primary border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
