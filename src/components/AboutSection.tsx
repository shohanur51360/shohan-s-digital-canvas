import { motion } from "framer-motion";
import { Code2, GraduationCap, Briefcase, Phone, MapPin, Mail, Globe, Download } from "lucide-react";

const details = [
  { label: "Phone", value: "+880 1XXXXXXXXX", icon: Phone },
  { label: "City", value: "Dhaka, Bangladesh", icon: MapPin },
  { label: "Degree", value: "Bachelor of Science", icon: GraduationCap },
  { label: "Email", value: "shohancs.dev@gmail.com", icon: Mail },
  { label: "Website", value: "shohancs.com", icon: Globe },
  { label: "Status", value: "Open to Work", icon: Briefcase },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            {"{{ "}About <span className="text-primary">Me</span>{" }}"}
          </h2>
          <p className="text-muted-foreground mt-2">Software Engineer | Laravel Specialist</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Shahanur Rahman Shohan</span>, a Full-Stack Software Engineer with deep expertise in Laravel and PHP ecosystems. I hold a BSc in Computer Science & Engineering and I'm passionate about building scalable, secure, and maintainable web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From REST APIs and admin panels to e-commerce platforms and POS systems — I build solutions that solve real business problems. I focus on clean architecture, performance optimization, and modern development practices.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {details.map((d) => (
                <div key={d.label} className="flex items-center gap-2 text-sm">
                  <d.icon size={14} className="text-primary shrink-0" />
                  <div>
                    <span className="text-muted-foreground">{d.label}: </span>
                    <span className="text-foreground font-medium">{d.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/Shahanur_Rahman_Shohan_CV.pdf"
              download
              className="inline-flex items-center gap-2 text-primary font-medium mt-4 hover:underline"
            >
              <Download size={14} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {[
              { icon: Code2, label: "Clean Code", value: "Best Practices & Patterns" },
              { icon: GraduationCap, label: "Education", value: "BSc in CSE" },
              { icon: Briefcase, label: "Speciality", value: "Laravel Expert" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <stat.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-sm font-semibold text-foreground">{stat.value}</p>
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
