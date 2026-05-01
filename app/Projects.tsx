"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Viral Scan",
    type: "Healthcare / Analytics",
    description:
      "Scan for health & book visits. Scan to get instant health metrics, schedule doctor visits, and access AI-analyzed medical results. Developed a biometric analysis system leveraging remote photoplethysmography (rPPG) to estimate physiological metrics. Designed an analytics dashboard for visualizing physiological trends.",
    tech: ["rPPG", "Express", "Next.js", "Tailwind", "Node.js", "OpenAI"],
    image: "/viral_scan.png",
    link: "https://cavista-unik.vercel.app/auth/login",
  },
  {
    title: "Speak2Page",
    type: "AI Content Platform",
    description:
      "Turn your words into captivating blog posts. Convert video or voice into SEO-focused articles in seconds! Converts video content into structured, written articles using automated transcription, upload handling, speech-to-text, and formatting to generate publication-ready summaries.",
    tech: ["Next.js", "Tailwind", "OpenAI", "Neon", "Zod"],
    image: "/speak2page.png",
    link: "https://www.speak2page.app/",
  },
  {
    title: "WaPilot",
    type: "AI Automation Platform",
    description:
      "An AI-powered WhatsApp automation and knowledge assistant for digital businesses (In Development). Revolutionize your business by boosting sales, streamlining communication, and supercharging productivity.",
    tech: ["Next.js", "WhatsApp Cloud API", "OpenAI", "Tailwind", "Prisma"],
    image: "/wapilot.png",
    link: "https://wapilot-seven.vercel.app/",
  },
  {
    title: "EvexAI",
    type: "AI Recruitment Platform",
    description:
      "Stop Hiring Blind. Start Hiring with Signal. EvexAI is the visibility layer for modern hiring, delivering pre-vetted, high-potential talent through video-first profiles and AI-powered insights. Engineered a fully interactive conversational 3D AI Interviewer.",
    tech: ["Next.js", "Three.js", "OpenAI", "Tailwind", "WebRTC"],
    image: "/evexai.png",
    link: "https://recruiter.evexai.ink/",
  },
  {
    title: "Qademy",
    type: "EdTech Platform",
    description:
      "Your department's single source of truth. No more WhatsApp chaos. Access timetables, course materials, and departmental announcements in one organized place, solving the problem of scattered materials, missed deadlines, and information burnout for students and course reps.",
    tech: ["Next.js", "Tailwind", "Neon", "Express.js", "React Native"],
    image: "/qademy.png",
    link: "https://www.qademy.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-4 md:px-20 bg-[#0a0a0a] text-white relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Selected <br />
              <span className="text-white/40">Works.</span>
            </h2>
            <div className="w-20 h-[1px] bg-white/20" />
          </div>
          <p className="text-white/50 max-w-sm text-sm uppercase tracking-widest leading-relaxed">
            A showcase of engineering, performance optimization, and AI
            integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 70,
              }}
              className="group cursor-pointer block"
            >
              {/* Img Container */}
              <div className="relative w-full aspect-[16/9] bg-white/5 border border-white/10 mb-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 opacity-50 mix-blend-multiply" />

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs font-mono tracking-widest text-white/50 uppercase mb-3">
                      {project.type}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-white/80 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                    <ArrowUpRight
                      size={20}
                      className="group-hover:rotate-45 transition-transform duration-300"
                    />
                  </div>
                </div>

                <p className="text-white/60 leading-relaxed mb-6 max-w-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full text-xs font-mono border border-white/10 bg-white/5 text-white/70 whitespace-nowrap"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
