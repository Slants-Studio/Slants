import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <footer ref={containerRef} className="relative w-full mt-24 py-24 overflow-hidden">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border-t border-white/20 z-0" />

      <motion.div 
        style={{ y, opacity }}
        className="relative z-20 max-w-5xl mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12"
      >
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
            LET'S WORK<br />TOGETHER
          </h2>
          <div className="flex flex-col gap-2 font-mono text-sm opacity-60">
            <p>SLANTS STUDIO</p>
            <p>LAGOS, NIGERIA</p>
            <p>EST. 2024</p>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-6">
          <a 
            href="mailto:hey@slants.studio"
            className="group flex items-center gap-3 text-2xl md:text-3xl font-bold hover:opacity-70 transition-opacity"
          >
            hey@slants.studio
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={32} />
          </a>
          
          <div className="flex gap-6 font-mono text-xs uppercase tracking-wider">
            <a href="#" className="hover:underline underline-offset-4">Twitter</a>
            <a href="#" className="hover:underline underline-offset-4">Instagram</a>
            <a href="#" className="hover:underline underline-offset-4">LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
