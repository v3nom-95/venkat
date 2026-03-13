import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Mail, FileDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const links = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <motion.nav
        initial={{ y: 50, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.5 }}
        className="fixed bottom-6 left-1/2 z-50 glass-strong rounded-[2.5rem] px-2 py-2 md:px-5 md:py-2.5 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-[40px] w-[92%] max-w-fit flex items-center overflow-visible"
        onMouseLeave={() => setHoveredIndex(null)}
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.08), 0 20px 50px rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className="flex items-center gap-1 md:gap-3 w-full justify-center">
          {/* Logo - Hidden on mobile to save space */}
          <motion.a
            href="#home"
            className="hidden lg:flex items-center justify-center text-foreground font-bold text-xl tracking-tighter mr-4 p-2 transition-opacity hover:opacity-80"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VB<span className="text-primary">.</span>
          </motion.a>

          {/* Ultra-Smooth Glassy Links */}
          <div className="flex items-center gap-0.5 md:gap-1 relative">
            {links.map((link, index) => {
              const isActive = hoveredIndex === index;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="relative px-3 py-2 md:px-6 md:py-2.5 rounded-[1.25rem] flex items-center justify-center transition-all duration-500"
                  animate={{
                    scale: isActive ? 1.02 : 1,
                  }}
                >
                  {/* Desktop Label */}
                  <span 
                    className={`relative z-20 text-sm font-semibold tracking-tight transition-all duration-300 hidden md:block ${
                      isActive ? "text-white" : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    {link.label}
                  </span>
                  
                  {/* Mobile Icons */}
                  <div className="md:hidden relative z-20">
                    <link.icon 
                      size={20} 
                      className={`transition-all duration-300 ${isActive ? "text-white" : "text-white/40"}`} 
                    />
                  </div>

                  {/* Refined Sliding Glass Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill-bg"
                      className="absolute inset-0 z-10 rounded-[1.125rem]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        background: "rgba(255, 255, 255, 0.08)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(10px)",
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 35,
                        mass: 0.8
                      }}
                    />
                  )}
                </motion.a>
              );
            })}
            
            {/* Mobile Resume Icon - Joined into the same flow to stay centered */}
            <motion.a
              href="/venkat.pdf"
              download
              className="md:hidden relative px-3 py-2 rounded-[1.25rem] flex items-center justify-center text-primary hover:text-white transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <FileDown size={20} />
            </motion.a>
          </div>

          <div className="w-px h-6 bg-white/10 mx-2 opacity-20 hidden md:block" />

          {/* Premium Resume Button - DESKTOP ONLY */}
          <motion.a
            href="/venkat.pdf"
            download
            className="hidden md:flex whitespace-nowrap px-6 py-2.5 rounded-2xl text-[10px] font-bold tracking-[0.25em] text-primary border border-primary/20 items-center gap-2 ml-1 relative overflow-hidden group"
            style={{
              background: "rgba(59, 130, 246, 0.03)",
              backdropFilter: "blur(12px)",
            }}
            whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(59, 130, 246, 0.08)",
                borderColor: "rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            
            <FileDown size={14} className="group-hover:translate-y-[-1px] transition-transform" />
            <span>RESUME</span>
          </motion.a>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
