import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60 }}
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
              className="group relative flex flex-col items-center justify-center gap-4 glass-strong rounded-[2.5rem] p-8 text-center transition-all border-white/5 hover:border-primary/20 overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br transition-opacity opacity-0 group-hover:opacity-100" 
                   style={{ backgroundImage: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)` }} 
              />
              
              <div className="relative z-10 glass-subtle rounded-3xl p-5 group-hover:scale-110 transition-transform">
                <Icon size={32} style={{ color: color }} />
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors tracking-widest uppercase mb-1">
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
