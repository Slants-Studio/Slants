import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

interface ImageCarouselProps {
  images: { url: string; caption: string }[];
  className?: string;
}

export function ImageCarousel({ images, className }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 7000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className={cn("relative w-full group ", className)}>
      <div className="relative w-full md:[w-[65vw] ml-[calc((65vw-100%)/-2)]] aspect-video overflow-hidden rounded-xl bg-black/10">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex].url}
            alt={images[currentIndex].caption}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute top-0 left-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
      </div>
      
      {/* Controls & Caption */}
      <div className="mt-4 flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex-1 flex justify-between items-start font-mono text-xs opacity-60 w-full md:w-auto">
          <span className="mr-8">FIGURE {String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="text-right max-w-md">{images[currentIndex].caption}</span>
        </div>

        <div className="flex gap-2 self-end md:self-auto  py-2 py-1 px-4  rounded-full backdrop-blur-md ">
          <button
            onClick={(e) => {
              e.preventDefault();
              prevImage();
            }}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md cursor-pointer"
          > 
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              nextImage();
            }}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
