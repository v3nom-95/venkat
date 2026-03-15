import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const premiumSpring = { type: "spring", stiffness: 400, damping: 35, mass: 0.8 };

const ContactSection = () => {
  const contactLinks = [
    { 
      icon: Mail, 
      label: "Email", 
      value: personalInfo.email, 
      href: `mailto:${personalInfo.email}`,
      color: "#ef4444" 
    },
    { 
      icon: Github, 
      label: "GitHub", 
      value: personalInfo.username, 
      href: personalInfo.github,
      color: "#ffffff"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      value: "Venkatapathi Babu", 
      href: personalInfo.linkedin,
      color: "#0077b5"
    }
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)", scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...premiumSpring, duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6">
            {"// Let's connect"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Ready to <span className="text-gradient">Collaborate?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        {/* Portfolio / Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactLinks.map(({ icon: Icon, label, value, href, color }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center gap-4 glass-strong rounded-[2.5rem] p-8 text-center transition-colors duration-300 border border-white/5 hover:border-primary/30 overflow-hidden"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, ...premiumSpring }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}
              whileTap={{ scale: 0.95 }}
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br transition-opacity opacity-0 group-hover:opacity-100 duration-500" 
                   style={{ backgroundImage: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)` }} 
              />
              
              <div className="relative z-10 glass-subtle rounded-3xl p-5 group-hover:scale-110 group-hover:bg-primary/10 transition-transform duration-300">
                <Icon size={32} style={{ color: color }} className="transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="relative z-10 flex flex-col items-center mt-2 group-hover:-translate-y-1 transition-transform duration-300">
                <div className="text-sm font-bold text-foreground tracking-widest uppercase mb-1">
                  {label}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
