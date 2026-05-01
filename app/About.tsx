"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-4 md:px-20 bg-[#0a0a0a] text-white relative border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Left Hand Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/3"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
            Engineering <br />
            <span className="text-white/40">the unseen.</span>
          </h2>
          <div className="w-20 h-[1px] bg-white/20 mt-8" />
        </motion.div>

        {/* Right Hand Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="md:w-2/3 flex flex-col gap-8 text-white/70 text-lg md:text-xl leading-relaxed"
        >
          <p>
            I am a Full Stack Engineer specialized in building high-performance,
            AI-driven applications and visually immersive web experiences. My
            work bridges the gap between complex backend logic and polished,
            interactive frontends.
          </p>
          <p>
            From engineering conversational 3D AI avatars to extracting
            physiological metrics via remote photoplethysmography (rPPG), I
            thrive on solving difficult technical challenges that push the
            boundaries of what the web can do.
          </p>
          <p>
            I believe that great software is inherently invisible—it should feel
            effortless, fast, and entirely natural. My approach combines
            rigorous architectural planning, strict performance optimization,
            and an obsession with minimalist, premium design.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="#experience"
              className="text-sm font-mono tracking-widest uppercase border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              View Experience
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
