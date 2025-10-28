"use client";
import { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { Play } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiElectron,
} from "react-icons/si";

// Map of tech names to their icons
const techIcons: Record<string, React.ReactElement> = {
  JavaScript: <SiJavascript className="w-4 h-4" />,
  TypeScript: <SiTypescript className="w-4 h-4" />,
  React: <SiReact className="w-4 h-4" />,
  "Next.js": <SiNextdotjs className="w-4 h-4" />,
  "Node.js": <SiNodedotjs className="w-4 h-4" />,
  Express: <SiExpress className="w-4 h-4" />,
  MongoDB: <SiMongodb className="w-4 h-4" />,
  PostgreSQL: <SiPostgresql className="w-4 h-4" />,
  Tailwind: <SiTailwindcss className="w-4 h-4" />,
  Python: <SiPython className="w-4 h-4" />,
  Django: <SiDjango className="w-4 h-4" />,
  Electron: <SiElectron className="w-4 h-4" />,
};

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  thumbnailUrl?: string;
  onClick?: () => void;
}

export const ProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  thumbnailUrl,
  onClick,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-full bg-white dark:bg-slate-800/95 rounded-2xl border border-gray-200 dark:border-slate-600/50 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-500 hover:border-gray-300 dark:hover:border-slate-500 overflow-hidden cursor-pointer flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Thumbnail Section */}
      <div className="relative w-full h-48 lg:h-56 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-800 overflow-hidden">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 dark:text-slate-500">
            <span className="text-4xl font-bold">{title.charAt(0)}</span>
          </div>
        )}

        {/* Hover Overlay with Play Icon */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
              <Play className="w-8 h-8 text-white fill-white" />
            </div>
          </div>
        </div>

        {/* Border Glow Effect on Hover */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            boxShadow: "inset 0 0 20px rgba(59, 130, 246, 0.5)",
          }}
        ></div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col p-4 lg:p-5">
        {/* Project Name */}
        <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-slate-300 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 dark:bg-slate-700/70 rounded-md text-xs font-medium text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-slate-600/50 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-200"
            >
              {techIcons[tech]}
              <span>{tech}</span>
            </div>
          ))}
        </div>

        {/* Spacer to push footer to bottom */}
        <div className="flex-1"></div>

        {/* GitHub Link */}
        <div className="flex items-center justify-between">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            <FaGithub className="w-5 h-5" />
            <span>View Code</span>
          </a>

          <div className="text-xs text-gray-500 dark:text-slate-400">
            Click to view demo
          </div>
        </div>
      </div>
    </div>
  );
};
