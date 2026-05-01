"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Use Spring for buttery smooth shrink/expand transitions
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 300,
    damping: 30,
    mass: 1,
  });

  // Smoothly constrain the max-width and background opacity on scroll
  const maxWidth = useTransform(smoothScrollY, [0, 80], ["1200px", "700px"]);
  const backgroundColor = useTransform(
    smoothScrollY,
    [0, 80],
    ["rgba(10, 10, 10, 0)", "rgba(15, 15, 15, 0.8)"],
  );
  const borderOpacity = useTransform(
    smoothScrollY,
    [0, 80],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"],
  );
  const paddingY = useTransform(smoothScrollY, [0, 80], ["1.5rem", "0.75rem"]);
  const yPosition = useTransform(smoothScrollY, [0, 80], ["0px", "15px"]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4"
      style={{ y: yPosition }}
    >
      <motion.nav
        className="w-full flex items-center justify-between px-6 backdrop-blur-xl rounded-full"
        style={{
          maxWidth,
          backgroundColor,
          paddingTop: paddingY,
          paddingBottom: paddingY,
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: borderOpacity,
        }}
      >
        <div className="flex items-center">
          <span className="font-bold text-xl tracking-tighter text-white">
            NI.
          </span>
        </div>

        {/* Navigation Links - Desktop Only */}
        <div className="hidden md:flex gap-8 text-[13px] font-medium text-white/60 uppercase tracking-widest pl-8">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
        </div>

        {/* Contact Button - Desktop Only */}
        <div className="hidden md:flex items-center pl-12">
          <a
            href="mailto:ifechinwokedi@gmail.com"
            className="bg-white text-black text-[13px] font-bold px-6 py-2.5 rounded-full hover:bg-gray-200 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Hamburger Icon - Mobile Only */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full max-w-[90%] md:hidden mt-4 p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 text-center">
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-white/70 hover:text-white uppercase tracking-widest"
              >
                About
              </a>
              <div className="w-full h-px bg-white/5" />
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-white/70 hover:text-white uppercase tracking-widest"
              >
                Projects
              </a>
              <div className="w-full h-px bg-white/5" />
              <a
                href="#skills"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-white/70 hover:text-white uppercase tracking-widest"
              >
                Skills
              </a>
            </div>
            <a
              href="mailto:ifechinwokedi@gmail.com"
              onClick={() => setIsOpen(false)}
              className="w-full bg-white text-black text-center text-sm font-bold px-6 py-3 rounded-full hover:bg-gray-200"
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
