import { motion } from "framer-motion";
import { ExternalLink, GitFork } from "lucide-react";
import { projects } from "@/data/portfolio";

const premiumSpring = { type: "spring", stiffness: 400, damping: 35, mass: 0.8 };

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)", scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...premiumSpring, duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6">
            {"// Builds"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-lg">
            A selection of projects from my GitHub. Built with modern technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-3xl p-6 block relative overflow-hidden border border-white/5 hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, ...premiumSpring }}
              whileHover={{
                scale: 1.03,
                y: -6,
                rotateX: 2,
                rotateY: -2,
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformPerspective: 1000 }}
            >
              {/* Glass reflection */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary/10 to-transparent rounded-t-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_50%)]" />
              </div>

              <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                    {project.name}
                  </h3>
                  <div className="glass-subtle p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                     <ExternalLink
                       size={16}
                       className="text-muted-foreground group-hover:text-primary transition-transform group-hover:rotate-45 duration-300"
                     />
                  </div>
                </div>

                <p className="text-sm text-foreground/70 mb-6 line-clamp-2 font-medium leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono font-bold tracking-wider text-primary/80 bg-primary/10 rounded-lg px-2 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.forks > 0 && (
                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-semibold bg-white/5 px-2 py-1 rounded-full">
                      <GitFork size={12} />
                      {project.forks}
                    </div>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
