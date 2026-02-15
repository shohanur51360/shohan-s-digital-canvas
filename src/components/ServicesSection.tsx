import { motion } from "framer-motion";
import {
  Globe, Server, Plug, LayoutDashboard, Database, ShoppingCart,
  ClipboardList, Bug, RefreshCw, CloudUpload, ShieldCheck, Settings,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Full Stack Web Development", desc: "End-to-end web application development using Laravel and modern frontend technologies." },
  { icon: Server, title: "Laravel Backend Development", desc: "Robust backend systems with clean architecture, authentication, and API integrations." },
  { icon: Plug, title: "REST API Development", desc: "Secure, well-documented RESTful APIs for web and mobile applications." },
  { icon: LayoutDashboard, title: "Admin Panel & Dashboard", desc: "Feature-rich admin panels with role management, analytics, and reporting." },
  { icon: Database, title: "Database Design & Optimization", desc: "Efficient MySQL database architecture with optimized queries and indexing." },
  { icon: ShoppingCart, title: "E-Commerce Solutions", desc: "Complete e-commerce platforms with payment integration and inventory management." },
  { icon: ClipboardList, title: "POS & Inventory Systems", desc: "Point-of-sale and inventory management for retail and business operations." },
  { icon: Bug, title: "Bug Fixing & Optimization", desc: "Debugging, performance tuning, and code optimization for existing applications." },
  { icon: RefreshCw, title: "Maintenance & Updates", desc: "Ongoing website maintenance, feature updates, and security patches." },
  { icon: CloudUpload, title: "cPanel Deployment & Hosting", desc: "Server setup, domain configuration, SSL certificates, and Git deployment." },
  { icon: ShieldCheck, title: "Auth & Role Management", desc: "Secure authentication systems with JWT, Sanctum, and role-based access control." },
  { icon: Settings, title: "Custom Business Software", desc: "Tailored software solutions designed to streamline your business processes." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="section-title font-mono">
            {"{{ "}My <span className="text-primary">Services</span>{" }}"}
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mt-3" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="border border-border rounded-xl p-6 text-center group hover:border-primary transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2 text-sm">{service.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
