import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const terminalLines = [
  { prompt: true, text: "git log --oneline -5" },
  { prompt: false, text: "4dd8d84 aadhar project" },
  { prompt: false, text: "e9c1463 1st update" },
  { prompt: false, text: "1ed4e47 Changes" },
  { prompt: false, text: "7aac0ef Changes" },
  { prompt: false, text: "13e5d03 Update 1" },
  { prompt: true, text: "echo 'currently building cool things'" },
  { prompt: false, text: "currently building cool things" },
  { prompt: true, text: "█" },
];

// Generate heatmap data
const generateHeatmap = () => {
  const weeks = 20;
  const days = 7;
  const data: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      week.push(Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 1 : 0);
    }
    data.push(week);
  }
  return data;
};

const heatmap = generateHeatmap();
const intensityColors = [
  "bg-muted/30",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/60",
  "bg-primary/90",
];

const GitHubSection = () => {
  return (
    <section className="relative py-32">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 60 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
          <p className="text-muted-foreground">
            {personalInfo.stats.contributions} contributions in the last year
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Terminal */}
          <motion.div
            className="glass-strong rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">
                terminal — v3nom-95
              </span>
            </div>
            <div className="p-5 font-mono text-sm space-y-1">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={line.prompt ? "text-primary" : "text-muted-foreground"}
                >
                  {line.prompt && <span className="text-primary/80 mr-2">❯</span>}
                  {line.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contribution heatmap */}
          <motion.div
            className="glass rounded-3xl p-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            <h3 className="text-sm font-mono text-muted-foreground mb-4">
              Contribution Heatmap
            </h3>
            <div className="flex gap-1 overflow-x-auto scrollbar-hide">
              {heatmap.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                  {week.map((val, di) => (
                    <motion.div
                      key={di}
                      className={`w-3 h-3 rounded-sm ${intensityColors[val]}`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (wi * 7 + di) * 0.005 }}
                      whileHover={{ scale: 1.5 }}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4 text-[10px] text-muted-foreground">
              <span>Less</span>
              {intensityColors.map((c, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
              ))}
              <span>More</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
