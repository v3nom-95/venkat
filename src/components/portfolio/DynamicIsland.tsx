import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, Users, FolderGit2, Activity, Zap } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const DynamicIsland = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      onHoverStart={() => setExpanded(true)}
      onHoverEnd={() => setExpanded(false)}
      onClick={() => setExpanded(!expanded)}
      className="glass-strong rounded-[2rem] cursor-pointer glow overflow-hidden"
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      style={{ width: expanded ? 360 : 280 }}
    >
      <motion.div layout className="p-6">
        {/* Collapsed header */}
        <motion.div layout className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-sm font-mono text-primary">Active Developer</span>
        </motion.div>

        {/* Stats grid */}
        <motion.div layout className="grid grid-cols-2 gap-3 mt-4">
          {[
            { icon: Users, label: "Followers", value: personalInfo.stats.followers },
            { icon: FolderGit2, label: "Repositories", value: personalInfo.stats.repos },
            { icon: Activity, label: "Contributions", value: personalInfo.stats.contributions },
            { icon: Zap, label: "Hackathons", value: `${personalInfo.stats.hackathons}+` },
          ].map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              className="glass-subtle rounded-2xl p-3 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Icon size={16} className="text-primary mx-auto mb-1" />
              <div className="text-lg font-bold text-foreground">{value}</div>
              <div className="text-[10px] text-muted-foreground">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="mt-4 glass-subtle rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch size={14} className="text-primary" />
                  <span className="text-xs font-mono text-muted-foreground">Latest Activity</span>
                </div>
                <p className="text-xs text-foreground/70 font-mono">
                  &gt; Building on Ethereum ecosystem
                </p>
                <p className="text-xs text-primary/60 font-mono mt-1">
                  &gt; Smart contract security & auditing
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default DynamicIsland;
