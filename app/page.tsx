import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />

      {/* Footer / Contact callout */}
      <footer className="py-12 border-t border-white/10 text-center flex flex-col items-center justify-center gap-6">
        <h2 className="text-2xl font-bold tracking-tighter">
          Ready to build something extraordinary?
        </h2>
        <a
          href="mailto:ifechinwokedi@gmail.com"
          className="bg-white text-black text-sm font-bold px-8 py-4 rounded-full hover:bg-gray-200 transition-colors"
        >
          Let&apos;s Talk
        </a>
        <p className="text-sm font-mono text-white/30 uppercase mt-8 tracking-widest">
          © {new Date().getFullYear()} Ifechukwu Nwokedi.
        </p>
      </footer>
    </main>
  );
}
