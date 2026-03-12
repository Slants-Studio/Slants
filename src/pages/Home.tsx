import { useState } from "react";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import { Folder } from "../components/Folder";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import { LagosClock } from "../components/LagosClock";
import { useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import logoDark from "../assets/logo-dark.svg";

export default function Home() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(location.state?.activeIndex || 0);
  const [direction, setDirection] = useState(0);
  const [jumpSize, setJumpSize] = useState(1);

  const nextProject = () => {
    setDirection(1);
    setJumpSize(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setJumpSize(1);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleCardClick = (index: number) => {
    const total = projects.length;
    const steps = (index - activeIndex + total) % total;
    if (steps === 0) return;

    setDirection(1);
    setJumpSize(steps);
    setActiveIndex(index);
  };

  return (
    <div className="min-h-screen bg-[#F7F6E5] text-black font-mono overflow-x-hidden relative">
      <LagosClock />

      <div className="h-screen flex flex-col relative z-10">
        <header className="p-8 md:p-16 flex justify-between items-start z-50 pointer-events-none ">
          <div className="pointer-events-auto absolute top-14 leading-none flex flex-col gap-3">
            {/* <h1 className="text-4xl md:text-8xl font-black tracking-tighter mb-4 leading-[0.8]">
              SLANTS<br />STUDIO
            </h1> */}
            <img src={logoDark} alt="" className="w-10 lg:w-12 h-auto" />

            <div className="hidden md:block  text-sm opacity-40 pointer-events-auto">
              EST. 2026
            </div>
            <p className="text-md font-black md:text-lg leading-none">
              Design studio <br />Lagos
            </p>
            <br />
            <p className="hidden md:block w-[36ch] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium cumque similique amet cupiditate quis ad modi quibusdam harum repudiandae,
              vitae accusamus nobis sint quae numquam expedita debitis nulla libero alias?
            </p>
          </div>

        </header>

        <main className="flex-1 flex items-center justify-center relative w-full h-full min-h-[600px]">
          <div className="relative w-full max-w-md md:max-w-2/5 aspect-[4/5] mx-auto mt-14">
            {projects.map((project, index) => {
              const total = projects.length;
              const positionIndex = (index - activeIndex + total) % total;
              const isActive = positionIndex === 0;

              // Standard target state
              const rotate = (index * 13 % 30) - 15;
              const xOffset = (index * 53 % 140) - 70;
              const yOffset = positionIndex * 35;
              const scale = 1 - (positionIndex * 0.05);
              const targetOpacity = 1 - (positionIndex * 0.1);
              const targetZIndex = total - positionIndex;

              // Check if this is a card being tossed to back (only on forward direction)
              const isTossedCard = direction === 1 && positionIndex >= total - jumpSize;

              const animateState = isTossedCard ? {
                x: [null, -400, xOffset],
                y: [null, 0, yOffset],
                rotate: [null, -25, rotate],
                scale: [null, 1, scale],
                opacity: [null, 1, targetOpacity],
                zIndex: [total + 10, total + 10, 0] // Fly high, then drop to bottom
              } : {
                x: xOffset,
                y: yOffset,
                rotate: rotate,
                scale: scale,
                opacity: targetOpacity,
                zIndex: targetZIndex
              };

              const transitionState = isTossedCard ? {
                duration: 0.6,
                times: [0, 0.5, 1],
                ease: "easeInOut"
              } : {
                type: "spring",
                stiffness: 200,
                damping: 25
              };

              return (
                <motion.div
                  key={project.id}
                  className="absolute top-0 left-0 w-full h-full cursor-pointer"
                  animate={animateState}
                  transition={transitionState}
                  onClick={() => handleCardClick(index)}
                  style={{
                    zIndex: isTossedCard ? undefined : targetZIndex,
                    pointerEvents: "auto"
                  }}
                >
                  <Folder project={project} index={index} isActive={isActive} />
                </motion.div>
              );
            })}
          </div>
        </main>

        <div className="absolute bottom-8 lg:right-10 right-5 flex gap-4 z-50 py-4 px-6 bg-black/20 rounded-full backdrop-blur-md shadow-lg">
          <button
            onClick={prevProject}
            className="p-4 rounded-full bg-[#36064D4D] hover:bg-[#81306e4d] active:bg-white transition-colors backdrop-blur-md cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextProject}
            className="p-4 rounded-full bg-[#36064D4D] hover:bg-[#81306e4d] active:bg-white transition-colors backdrop-blur-md cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <Footer />


    </div>
  );
}
