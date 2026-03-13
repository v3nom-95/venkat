import { motion } from "framer-motion";
import { Code, Shield, GraduationCap, Blocks } from "lucide-react";
import { experience } from "@/data/portfolio";

const iconMap: Record<string, typeof Code> = {
  code: Code,
  security: Shield,
  education: GraduationCap,
  blockchain: Blocks,
};

const TimelineSection = () => {
  return (
    <section id="experience" className="relative py-32">
      <div className="container relative z-10 mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 60 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Experience <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-12">
            {experience.map((item, i) => {
              const Icon = iconMap[item.icon] || Code;
              return (
                <motion.div
                  key={i}
                  className="relative pl-16"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: "spring", stiffness: 80 }}
                >
                  {/* Node */}
                  <motion.div
                    className="absolute left-3 top-1 w-7 h-7 rounded-full glass-strong glow flex items-center justify-center"
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon size={14} className="text-primary" />
                  </motion.div>

                  <div className="glass rounded-2xl p-5">
                    <span className="text-xs font-mono text-primary/60 mb-1 block">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
