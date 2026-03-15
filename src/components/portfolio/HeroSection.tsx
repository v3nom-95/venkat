import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import TypeWriter from "./TypeWriter";
import { Github, Linkedin, Mail } from "lucide-react";

// iOS-style premium spring transition
const premiumSpring = { type: "spring", stiffness: 400, damping: 35, mass: 0.8 };

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-navy" />
      <div className="absolute inset-0 bg-gradient-radial" />

      {/* Floating particles - Super slowed for cinematic effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 6, // Much slower and graceful
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ ...premiumSpring, delay: 0.1 }}
          >
            <motion.p
              className="text-primary font-mono text-sm mb-3 tracking-wider inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, ...premiumSpring }}
            >
              {"// Hello, I am"}
            </motion.p>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.4, ...premiumSpring }}
            >
              <span className="text-gradient">{personalInfo.name}</span>
            </motion.h1>

            <motion.div 
               className="h-8 mb-6"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
            >
              <TypeWriter
                words={[
                  "Full Stack Web Developer",
                  "Machine Learning and AI Engineer",
                  "Web3 and Blockchain Developer"
                ]}
                className="text-xl text-muted-foreground font-light"
              />
            </motion.div>

            <motion.p 
               className="text-primary font-mono text-lg mb-8 tracking-wide"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.7, ...premiumSpring }}
            >
              A Geek
            </motion.p>

            {/* Social links - Magnetic feel on hover */}
            <motion.div 
               className="flex gap-3"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8, ...premiumSpring }}
            >
              {[
                { icon: Github, href: personalInfo.github, label: "GitHub" },
                { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-2xl text-muted-foreground hover:text-foreground transition-all duration-300"
                  whileHover={{ scale: 1.15, y: -4, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.9 }}
                  transition={premiumSpring}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile Image Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 200, damping: 40, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer glow rings */}
              <motion.div
                className="absolute -inset-6 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent, hsl(217 91% 60% / 0.3), transparent, hsl(217 91% 60% / 0.15), transparent)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-10 rounded-full"
                style={{
                  background: "conic-gradient(from 180deg, transparent, hsl(217 91% 60% / 0.15), transparent, hsl(280 80% 60% / 0.1), transparent)",
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              />

              {/* Animated border ring */}
              <motion.div
                className="absolute -inset-3 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, hsl(217 91% 60% / 0.5), hsl(280 80% 60% / 0.3), hsl(217 91% 60% / 0.1), transparent, hsl(217 91% 60% / 0.5))",
                  padding: "2px",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              {/* Profile image container - iOS style squish interaction */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow"
                style={{
                  border: "3px solid hsl(217 91% 60% / 0.3)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={premiumSpring}
              >
                <img
                  src="/photo.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('photo.jpg')) {
                      target.src = personalInfo.avatarUrl;
                    }
                  }}
                />
                {/* Subtle overlay gradient */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, hsl(217 91% 60% / 0.08) 0%, transparent 50%, hsl(280 80% 60% / 0.06) 100%)",
                  }}
                />
              </motion.div>

              {/* Floating accent dots */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary/50"
                  style={{
                    top: `${30 + i * 25}%`,
                    left: i % 2 === 0 ? "-16px" : "calc(100% + 8px)",
                  }}
                  animate={{
                    y: [0, -12, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3 + i * 1.5,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
