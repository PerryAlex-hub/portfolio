"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Engineer",
    company: "EvexAI",
    period: "Sept 2025 – Apr 2026",
    description:
      "Engineered a 3D AI Interviewer integrating conversational AI and interactive 3D visualization. EvexAI is the visibility layer for modern hiring, delivering pre-vetted talent and AI-powered performance insights so companies hire faster.",
    tech: ["Next.js", "AI", "3D Visualization", "Performance Optimization"],
  },
  {
    role: "Full Stack Engineer Intern",
    company: "VenturSeed",
    period: "Jan 2026 – Mar 2026",
    description:
      "Developed and maintained the IntelliToggle Admin Panel, building responsive and scalable UI components in Nuxt.js. Integrated Firebase Cloud Messaging (FCM) to implement real-time push notifications.",
    tech: ["Nuxt.js", "Firebase", "Real-time Systems", "UI Components"],
  },
  {
    role: "Front-End Intern",
    company: "CodeAlpha",
    period: "Jun 2024 – Jun 2025",
    description:
      "Developed and optimized 15+ responsive user interfaces using Next.js and Tailwind CSS, enhancing cross-device compatibility and reducing load times by 30%. Implemented WCAG 2.1 accessibility best practices.",
    tech: ["React", "Tailwind CSS", "WCAG 2.1", "Responsive Design"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-4 md:px-20 bg-[#0a0a0a] text-white relative"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Professional <br />
            <span className="text-white/40">Experience.</span>
          </h2>
          <div className="w-20 h-[1px] bg-white/20" />
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                type: "spring",
                stiffness: 80,
              }}
              className="group relative grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-12"
            >
              {/* Left timeline / period */}
              <div className="flex flex-col">
                <span className="text-sm font-mono tracking-widest text-white/50 mb-2 uppercase">
                  {exp.period}
                </span>
                <span className="text-lg font-medium text-white/80">
                  {exp.company}
                </span>
              </div>

              {/* Right content */}
              <div className="flex flex-col pb-16 border-b border-white/10 group-last:border-none group-last:pb-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {exp.role}
                </h3>
                <p className="text-white/60 leading-relaxed max-w-2xl mb-8">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full text-xs font-mono border border-white/10 bg-white/5 text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
