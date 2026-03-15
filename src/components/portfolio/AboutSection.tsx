import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo, skills } from "@/data/portfolio";
import { useRef } from "react";
import { Code2, Layout, Server, Database, Cloud, Zap } from "lucide-react";

const categories = [
  { key: "language", label: "Languages", icon: Code2, color: "var(--accent-blue)" },
  { key: "frontend", label: "Frontend", icon: Layout, color: "#8b5cf6" },
  { key: "backend", label: "Backend", icon: Server, color: "#10b981" },
  { key: "web3", label: "Web3", icon: Zap, color: "#f59e0b" },
  { key: "devops", label: "Cloud & DevOps", icon: Cloud, color: "#ef4444" },
];

const premiumSpring = { type: "spring", stiffness: 400, damping: 35, mass: 0.8 };

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="relative py-32 overflow-hidden bg-background/50">
      {/* Background Decorative Elements - Keep subtle blur but no complex orbits */}
      <motion.div style={{ opacity }} className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]"
        />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-1 gap-16 items-start">
          {/* Centered Header & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)", scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...premiumSpring, duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6">
              {"// Identity"}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-12">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-xl mx-auto">
              {[
                { count: `${personalInfo.stats.hackathons}+`, label: "Hackathons" },
                { count: personalInfo.stats.repos, label: "Projects" },
                { count: "150+", label: "Commits" }
              ].map((stat, i) => (
                 <motion.div 
                    key={stat.label}
                    className="glass p-6 rounded-[2rem]"
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, ...premiumSpring }}
                    whileHover={{ scale: 1.05, y: -4, backgroundColor: "rgba(255,255,255,0.05)" }}
                 >
                   <div className="text-3xl font-bold text-primary">{stat.count}</div>
                   <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-1">{stat.label}</div>
                 </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Arsenal - Simplified Grid */}
          <div className="mt-16 space-y-12 max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={premiumSpring}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-px flex-1 bg-border/50" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-[0.25em]">Technical Arsenal</span>
              <div className="h-px flex-1 bg-border/50" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat, catIndex) => (
                <motion.div
                  key={cat.key}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)", scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: catIndex * 0.1, ...premiumSpring }}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}
                  style={{ backfaceVisibility: "hidden" }}
                  className="glass-strong p-6 rounded-[2rem] border border-white/5 hover:border-primary/30 transition-colors duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-2xl glass-subtle group-hover:scale-110 group-hover:bg-primary/10 transition-transform duration-300 shadow-sm">
                        <cat.icon size={22} style={{ color: cat.color }} className="transition-transform duration-300" />
                      </div>
                      <h3 className="text-sm font-bold text-foreground tracking-wide uppercase">
                        {cat.label}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skills
                        .filter((s) => s.category === cat.key)
                        .map((skill) => (
                          <div
                            key={skill.name}
                            className="glass rounded-xl px-4 py-2 text-xs text-foreground/80 font-medium hover:text-primary hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300 cursor-default"
                          >
                            {skill.name}
                          </div>
                        ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
