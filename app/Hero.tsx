"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section className="min-h-[100dvh] flex items-center justify-center px-4 md:px-20 pt-20 relative overflow-hidden bg-[#0a0a0a]">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center"
      >
        {/* Left Column: Text & CTAs */}
        <div className="flex flex-col text-left">
          <motion.h1
            variants={item}
            className="text-6xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-8 text-white"
          >
            Ifechukwu <br />
            <span className="text-white opacity-30">Nwokedi.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-white/50 max-w-lg leading-relaxed mb-10 md:mb-14 font-medium"
          >
            Full Stack Engineer building high-performance interfaces, 3D AI
            experiences, and robust architectures.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-14">
            <button className="bg-white text-black px-9 py-4 rounded-full text-sm font-bold tracking-widest hover:bg-gray-200 transition-all duration-300">
              VIEW WORK
            </button>
            <button className="border border-white/20 bg-transparent px-9 py-4 rounded-full text-sm font-bold tracking-widest text-white hover:bg-white/10 transition-all duration-300">
              READ RESUME
            </button>
          </motion.div>

          {/* Social Links inline */}
          <motion.div variants={item} className="flex gap-6 items-center">
            <a
              href="https://github.com/PerryAlex-hub"
              className="text-white/40 hover:text-white transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/ifechukwu-nwokedi-936250268"
              className="text-white/40 hover:text-white transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Abstract Minimalist Visual */}
        <motion.div
          variants={item}
          className="relative h-[350px] lg:h-[500px] w-full hidden md:flex items-center justify-center perspective-[1000px]"
        >
          {/* Outer Ring */}
          <motion.div
            animate={{ rotateX: 360, rotateY: 180 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] rounded-full border border-white/10 border-t-white/60"
          />

          {/* Middle Ring */}
          <motion.div
            animate={{ rotateY: 360, rotateZ: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[240px] h-[240px] rounded-full border border-white/5 border-b-white/50"
          />

          {/* Inner Ring */}
          <motion.div
            animate={{ rotateX: -360, rotateZ: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-[180px] h-[180px] rounded-full border border-white/5 border-l-white/40"
          />

          {/* Center Node */}
          <div className="absolute w-[24px] h-[24px] rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.8)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
