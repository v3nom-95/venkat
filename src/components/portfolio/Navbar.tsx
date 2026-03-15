import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Home, User, Briefcase, Mail, FileDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const links = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: Mail },
];

const springConfig = { type: "spring", stiffness: 450, damping: 30, mass: 0.8 };
const magneticSpring = { stiffness: 150, damping: 15, mass: 0.1 };

// 🔥 Magnetic button effect using motion values (NO JITTER!)
function NavItem({ link, index, isExpanded, hoveredIndex, setHoveredIndex }: any) {
  const isActive = hoveredIndex === index;
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, magneticSpring);
  const springY = useSpring(y, magneticSpring);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={link.href}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center rounded-full cursor-pointer z-20"
      initial={false}
      animate={{
        padding: isExpanded ? "10px 20px" : "12px",
      }}
      style={{
        x: springX,
        y: springY,
      }}
      transition={springConfig}
    >
      <motion.div 
         className="relative z-20 flex items-center justify-center gap-2"
         animate={{
           color: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
           scale: isActive ? 1.15 : 1,
         }}
         transition={springConfig}
      >
        <link.icon size={isExpanded ? 18 : 20} className="transition-all duration-300" />
        
        <motion.div
           initial={false}
           animate={{
               width: isExpanded ? "auto" : 0,
               opacity: isExpanded ? 1 : 0,
           }}
           transition={springConfig}
           className="overflow-hidden whitespace-nowrap hidden md:flex items-center"
        >
          <span className="text-sm font-semibold tracking-tight ml-1">{link.label}</span>
        </motion.div>
      </motion.div>

      {/* Floating active background pill */}
      {isActive && (
        <motion.div
           layoutId="active-pill"
           className="absolute inset-0 rounded-full -z-10 bg-white/10"
           style={{
             boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 4px 12px rgba(0,0,0,0.2)",
             backdropFilter: "blur(12px)"
           }}
           transition={{ type: "spring", stiffness: 450, damping: 35, mass: 0.6 }}
        />
      )}
    </motion.a>
  );
}

// 🔥 Specialized resume button 
function ResumeButton({ isExpanded, setHoveredIndex, hoveredIndex }: any) {
  const isActive = hoveredIndex === 99;
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, magneticSpring);
  const springY = useSpring(y, magneticSpring);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  return (
    <motion.a
      ref={ref}
      href="/venkat.pdf"
      download
      onMouseEnter={() => setHoveredIndex(99)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="relative hidden md:flex items-center justify-center rounded-full cursor-pointer z-20 group"
      initial={false}
      animate={{
        padding: isExpanded ? "10px 24px" : "12px",
        background: isActive ? "rgba(59, 130, 246, 0.15)" : "rgba(59, 130, 246, 0.05)",
        border: isActive ? "1px solid rgba(59, 130, 246, 0.5)" : "1px solid rgba(59, 130, 246, 0.2)",
        marginLeft: isExpanded ? 4 : 0,
      }}
      style={{
        x: springX,
        y: springY,
      }}
      transition={springConfig}
    >
       <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
       </div>
       
       <motion.div 
         className="relative z-20 flex items-center justify-center gap-2"
         animate={{ 
           color: isActive ? "#ffffff" : "rgba(255,255,255,0.8)",
           scale: isActive ? 1.05 : 1
         }}
         transition={springConfig}
       >
         <FileDown size={isExpanded ? 16 : 20} className={isExpanded ? "group-hover:-translate-y-0.5 transition-transform duration-300" : ""} />
         <motion.div
           initial={false}
           animate={{
               width: isExpanded ? "auto" : 0,
               opacity: isExpanded ? 1 : 0,
           }}
           transition={springConfig}
           className="overflow-hidden whitespace-nowrap flex items-center"
        >
           <span className="text-[11px] font-bold tracking-[0.2em] ml-1">RESUME</span>
        </motion.div>
       </motion.div>

       {/* The same active pill glides to the resume button! */}
       {isActive && (
        <motion.div
           layoutId="active-pill"
           className="absolute inset-0 rounded-full -z-10"
           transition={{ type: "spring", stiffness: 450, damping: 35, mass: 0.6 }}
        />
      )}
    </motion.a>
  );
}

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 w-full flex justify-center z-50 pointer-events-none px-4">
      {/* 🚀 The dynamic island orchestrator */}
      <motion.nav
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => {
          setIsExpanded(false);
          setHoveredIndex(null);
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          padding: isExpanded ? "12px 16px" : "8px 12px",
          gap: isExpanded ? "8px" : "4px",
          boxShadow: isExpanded 
            ? "inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 30px 60px rgba(0, 0, 0, 0.5)"
            : "inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 10px 30px rgba(0, 0, 0, 0.3)"
        }}
        transition={springConfig}
        className="pointer-events-auto relative flex items-center shadow-2xl glass-strong border border-white/10 overflow-hidden"
        style={{
          borderRadius: 100,
          background: "rgba(10, 10, 10, 0.45)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        <motion.a
          href="#home"
          initial={false}
          animate={{ 
            opacity: isExpanded ? 1 : 0, 
            width: isExpanded ? "auto" : 0, 
            scale: isExpanded ? 1 : 0.5, 
            marginRight: isExpanded ? 12 : 0 
          }}
          className="lg:flex items-center justify-center font-bold text-xl tracking-tighter ml-2 overflow-hidden whitespace-nowrap text-white"
          style={{ display: isExpanded ? "flex" : "none" }}
          transition={springConfig}
        >
          VB<span className="text-primary">.</span>
        </motion.a>

        {links.map((link, i) => (
          <NavItem
            key={link.label}
            link={link}
            index={i}
            isExpanded={isExpanded}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}

        {/* Mobile Resume Icon */}
        <motion.a
            href="/venkat.pdf"
            download
            className="md:hidden relative px-3 py-2 rounded-full flex items-center justify-center text-primary hover:text-white transition-colors z-20"
            whileTap={{ scale: 0.85 }}
            animate={{ scale: isExpanded ? 1.1 : 1 }}
        >
            <FileDown size={20} />
        </motion.a>

        {/* Divider */}
        <motion.div 
            className="w-px bg-white/10 hidden md:block" 
            animate={{ 
              height: isExpanded ? 32 : 24,
              opacity: isExpanded ? 0.4 : 0.2,
              margin: isExpanded ? "0 8px" : "0 4px"
            }}
            transition={springConfig}
         />

        <ResumeButton 
          isExpanded={isExpanded} 
          setHoveredIndex={setHoveredIndex} 
          hoveredIndex={hoveredIndex} 
        />
      </motion.nav>
    </div>
  );
};

export default Navbar;
