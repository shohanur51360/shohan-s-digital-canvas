import { motion } from "framer-motion";
import { Code2, GraduationCap, Briefcase, Terminal } from "lucide-react";

const stats = [
  { icon: Code2, label: "Clean Code", value: "Best Practices", color: "from-primary to-primary" },
  { icon: GraduationCap, label: "Education", value: "BSc in CSE", color: "from-accent to-accent" },
  { icon: Briefcase, label: "Speciality", value: "Laravel Expert", color: "from-primary to-accent" },
];

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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              I'm <span className="text-foreground font-semibold">Shahanur Rahman Shohan</span>, a Full-Stack Software Engineer with deep expertise in
              <span className="text-primary"> Laravel</span> and
              <span className="text-accent"> PHP</span> ecosystems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From REST APIs and admin panels to e-commerce platforms and POS systems — I build solutions that solve real business problems. I focus on clean architecture, performance optimization, and modern development practices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My toolkit spans the full web stack: PHP, Laravel, JavaScript, jQuery, MySQL, Bootstrap, Tailwind CSS, and much more. I handle everything from development to deployment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="glass rounded-2xl p-6 flex items-center gap-5 card-3d cursor-default"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shrink-0 shadow-lg`}>
                  <stat.icon size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-lg font-bold text-foreground">{stat.value}</p>
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
