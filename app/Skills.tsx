"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend & UI",
    items: [
      "React",
      "Next.js",
      "Nuxt.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "Express.js", "Python"],
  },
  {
    category: "Data & Cloud",
    items: ["PostgreSQL", "Neon", "Prisma", "AWS S3", "MongoDB"],
  },
    {
        category: "Tools & Technologies",
        items: [ "Docker", "Postman", "Prisma", "Redux", "TanStack Query", "GCP"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-4 md:px-20 bg-[#0a0a0a] text-white relative border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Technical <br />
            <span className="text-white/40">Arsenal.</span>
          </h2>
          <div className="w-20 h-[1px] bg-white/20" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {skills.map((skillGroup, index) => (
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
              className="flex flex-col"
            >
              <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase mb-8 pb-4 border-b border-white/10">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-2xl md:text-3xl font-medium tracking-tight text-white/80 hover:text-white transition-colors cursor-default"
                  >
                    {item}
                    {i !== skillGroup.items.length - 1 && (
                      <span className="text-white/20 ml-4">/</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
