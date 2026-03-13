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

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section id="about" ref={containerRef} className="relative py-32 overflow-hidden bg-background/50">
      {/* Background Decorative Elements - Keep subtle blur but no complex orbits */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-1 gap-16 items-start">
          {/* Centered Header & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60 }}
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
              <div className="glass p-6 rounded-3xl">
                <div className="text-3xl font-bold text-primary">{personalInfo.stats.hackathons}+</div>
                <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-1">Hackathons</div>
              </div>
              <div className="glass p-6 rounded-3xl">
                <div className="text-3xl font-bold text-primary">{personalInfo.stats.repos}</div>
                <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-1">Projects</div>
              </div>
              <div className="glass p-6 rounded-3xl">
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-1">Commits</div>
              </div>
            </div>
          </motion.div>

          {/* Technical Arsenal - Simplified Grid, No Orbiting Animation */}
          <div className="mt-16 space-y-12 max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                  className="glass-strong p-6 rounded-[2rem] hover:border-primary/20 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl glass-subtle group-hover:scale-110 transition-transform shadow-sm">
                      <cat.icon size={22} style={{ color: cat.color }} />
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
                          className="glass rounded-xl px-4 py-2 text-xs text-foreground/80 font-medium hover:text-primary hover:bg-primary/5 transition-all cursor-default"
                        >
                          {skill.name}
                        </div>
                      ))}
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
