import { motion } from "framer-motion";
import { Code2, GraduationCap, Briefcase } from "lucide-react";

const stats = [
  { icon: Code2, label: "Clean Code", value: "Best Practices" },
  { icon: GraduationCap, label: "Education", value: "BSc in CSE" },
  { icon: Briefcase, label: "Speciality", value: "Laravel Expert" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-2">WHO I AM</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm <span className="text-foreground font-semibold">Shahanur Rahman Shohan</span>, a Full-Stack Software Engineer with deep expertise in Laravel and PHP ecosystems. I hold a BSc in Computer Science & Engineering and I'm passionate about building scalable, secure, and maintainable web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From REST APIs and admin panels to e-commerce platforms and POS systems — I build solutions that solve real business problems. I focus on clean architecture, performance optimization, and modern development practices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My toolkit spans the full web stack: PHP, Laravel, JavaScript, jQuery, MySQL, Bootstrap, Tailwind CSS, and much more. I handle everything from development to deployment on cPanel and shared hosting.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-xl p-6 flex items-center gap-5 card-3d"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                  <stat.icon size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
