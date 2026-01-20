import { motion } from "framer-motion";
import { 
  Calculator, 
  HeadphonesIcon, 
  TrendingUp, 
  Code2, 
  UserCircle, 
  Kanban, 
  Palette, 
  Database, 
  Monitor 
} from "lucide-react";

const services = [
  { icon: Calculator, title: "Accounting", description: "Bookkeeping, payroll, financial analysis" },
  { icon: HeadphonesIcon, title: "Customer Care", description: "Support, retention, success teams" },
  { icon: TrendingUp, title: "Sales", description: "SDRs, account executives, lead gen" },
  { icon: Code2, title: "Engineering", description: "Full-stack, backend, frontend devs" },
  { icon: UserCircle, title: "Executive Assistants", description: "Admin support, scheduling, coordination" },
  { icon: Kanban, title: "Project Management", description: "PMs, scrum masters, coordinators" },
  { icon: Palette, title: "Designers", description: "UI/UX, graphic, product design" },
  { icon: Database, title: "Data Processing", description: "Entry, analysis, reporting" },
  { icon: Monitor, title: "IT", description: "Support, infrastructure, DevOps" },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Staffing Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
            Top Talent Across Every Department
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            From technical roles to executive support, we provide pre-vetted professionals 
            ready to integrate seamlessly with your team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative bg-card rounded-2xl border border-border p-6 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
              
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-hero rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
