import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Project } from "../data/projects";
import { cn } from "../lib/utils";

interface FolderProps {
  project: Project;
  index: number;
  isActive?: boolean;
}

export function Folder({ project, index, isActive = false }: FolderProps) {
  // Randomize rotation slightly for organic feel
  const rotation = index % 2 === 0 ? 1 : -1;
  
  const content = (
    <motion.div
      layoutId={`project-${project.id}`}
      className={cn(
        "relative w-full aspect-[4/5] rounded-xl shadow-lg cursor-pointer transition-all duration-300",
        project.color
      )}
      initial={{ y: 0, rotate: 0 }}
      whileHover={{ 
        y: -30, 
        rotate: rotation * 2,
        scale: 1.02,
        zIndex: 20,
        transition: { type: "spring", stiffness: 300, damping: 15 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Tab */}
      <div 
        className={cn(
          "absolute -top-8 w-1/2 h-10 rounded-t-xl z-0",
          project.tabColor
        )}
        style={{ left: `${(index % 3) * 20}%` }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className={cn("font-mono text-xs uppercase tracking-wider opacity-60", project.textColor)}>
            {project.id}.file
          </span>
          <span className={cn("font-mono text-xs opacity-60", project.textColor)}>
            // {project.year}
          </span>
        </div>
        
        <div>
          <h2 className={cn("text-4xl font-bold tracking-tighter mb-2", project.textColor)}>
            {project.title}
          </h2>
          <p className={cn("font-medium leading-tight opacity-80", project.textColor)}>
            {project.subtitle}
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className={cn(
                "text-[10px] uppercase border rounded-full px-2 py-1",
                project.textColor,
                "border-current opacity-40"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  if (isActive) {
    return (
      <Link to={`/project/${project.id}`} className="block relative group">
        {content}
      </Link>
    );
  }

  return (
    <div className="block relative group">
      {content}
    </div>
  );
}
