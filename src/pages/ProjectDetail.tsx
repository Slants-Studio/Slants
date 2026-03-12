import { motion } from "motion/react";
import { Link, useParams, Navigate, useLocation } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import { ImageCarousel } from "../components/ImageCarousel";
import { Footer } from "../components/Footer";
import logoDark from "../assets/logo-dark.svg";

export default function ProjectDetail() {
  const { id } = useParams();
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];

  if (!project) {
    return <Navigate to="/" />;
  }

  const prevProject = projects[(index - 1 + projects.length) % projects.length];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <div
      className={cn("min-h-screen font-mono  flex flex-col", project.color, project.textColor)}
    >
      <div className="py-12 px-8 md:p-16 flex-1 flex flex-col">
        <header className="mb-12 flex justify-between items-center">
          <Link
            to="/"
            state={{ activeIndex: index }}
            className={cn(
              "flex items-center gap-2 font-mono text-sm tracking-wider uppercase transition-opacity",
              project.textColor
            )}
          >
            <img src={logoDark} alt="" className="lg:fixed z-40 top-10 w-8 lg:w-12 h-auto" />
          </Link>
          <div className="font-mono text-xs opacity-40">
            {project.id.toUpperCase()}.FILE
          </div>
        </header>

        <main className="flex-1 flex flex-col gap-10 max-w-5xl mx-auto w-full">
          {/* 1. Title and Subtitle */}
          <div className="flex flex-col gap-0">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-2 leading-[0.9]">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-80 max-w-md leading-tight">
              {project.subtitle}
            </p>
          </div>

          {/* 2. Carousel */}
          <div className="w-full">
            <ImageCarousel images={project.images} />
          </div>

          {/* 3. Project Link & Details */}
          <div className="grid md:grid-cols-2 gap-8 border-t border-current/20 pt-8">
            <div className="grid grid-cols-2 gap-8 font-mono text-xs uppercase tracking-wider opacity-60">
              <div>
                <span className="block mb-1 opacity-50">Client</span>
                {project.client}
              </div>
              <div>
                <span className="block mb-1 opacity-50">Year</span>
                {project.year}
              </div>
              <div>
                <span className="block mb-1 opacity-50">Role</span>
                {project.tags.join(", ")}
              </div>
            </div>

            <div className="flex md:justify-end items-start">
              <a href="#" className="flex items-center gap-2 font-bold hover:underline decoration-2 underline-offset-4 text-lg">
                Visit Live Site <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* 4. Content */}
          <div className="prose prose-lg  max-w-none opacity-90 leading-relaxed pb-8">
            <p className="text-2xl leading-none font-light mb-8">{project.description}</p>
            <p className="leading-tight text-xl">{project.content}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* 5. Navigation Buttons */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 border-t border-current/20 pt-12 ">
            <Link
              to={`/project/${prevProject.id}`}
              state={{ direction: -1 }}
              className="group flex flex-col items-start gap-2"
            >
              <div className="flex items-center gap-2 font-mono text-xs opacity-60 uppercase tracking-wider group-hover:opacity-100 transition-opacity">
                <ChevronLeft size={16} />
                Previous File
              </div>
              <span className="text-xl md:text-3xl font-black tracking-tight group-hover:underline decoration-2 underline-offset-4 line-clamp-1 text-left">
                {prevProject.title}
              </span>
            </Link>

            <Link
              to={`/project/${nextProject.id}`}
              state={{ direction: 1 }}
              className="group flex flex-col items-end gap-2"
            >
              <div className="flex items-center gap-2 font-mono text-xs opacity-60 uppercase tracking-wider group-hover:opacity-100 transition-opacity">
                Next File
                <ChevronRight size={16} />
              </div>
              <span className="text-xl md:text-3xl font-black tracking-tight group-hover:underline decoration-2 underline-offset-4 line-clamp-1 text-right">
                {nextProject.title}
              </span>
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
