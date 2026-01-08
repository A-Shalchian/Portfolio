"use client";
import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
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
  JavaScript: <SiJavascript className="w-3 h-3" />,
  TypeScript: <SiTypescript className="w-3 h-3" />,
  React: <SiReact className="w-3 h-3" />,
  "Next.js": <SiNextdotjs className="w-3 h-3" />,
  "Node.js": <SiNodedotjs className="w-3 h-3" />,
  Express: <SiExpress className="w-3 h-3" />,
  MongoDB: <SiMongodb className="w-3 h-3" />,
  PostgreSQL: <SiPostgresql className="w-3 h-3" />,
  Tailwind: <SiTailwindcss className="w-3 h-3" />,
  Python: <SiPython className="w-3 h-3" />,
  Django: <SiDjango className="w-3 h-3" />,
  Electron: <SiElectron className="w-3 h-3" />,
};

interface ProjectVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    fullDescription?: string;
    techStack: string[];
    githubUrl?: string;
    videoUrl?: string;
    images?: string[];
    liveUrl?: string;
  };
}

export const ProjectVideoModal = ({
  isOpen,
  onClose,
  project,
}: ProjectVideoModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // Image navigation
  const nextImage = () => {
    if (project.images && currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // Reset image index when modal opens and autoplay video
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      // Autoplay video when modal opens
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Autoplay was prevented, user will need to click play
        });
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-6xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8
          max-h-[90vh] md:max-h-[85vh]
          flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video/Image Display Section */}
        <div className="relative w-full md:w-2/3 bg-black aspect-video md:aspect-auto md:min-h-full">
          {project.videoUrl ? (
            // Video Player
            <video
              ref={videoRef}
              className="w-full h-full"
              controls
              controlsList="nodownload"
            >
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : project.images && project.images.length > 0 ? (
            // Image Carousel
            <div className="relative w-full h-full flex items-center justify-center bg-slate-900">
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />

              {/* Image Navigation Buttons */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    disabled={currentImageIndex === 0}
                    className="absolute left-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={nextImage}
                    disabled={currentImageIndex === project.images.length - 1}
                    className="absolute right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white rounded-full text-sm">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>
          ) : (
            // No video or images
            <div className="flex items-center justify-center h-full text-white">
              <div className="text-center">
                <p className="text-xl mb-2">Demo Coming Soon</p>
                <p className="text-sm text-gray-400">
                  Check out the GitHub repository in the meantime
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Project Information Section */}
        <div className="w-full md:w-1/3 overflow-y-auto p-6 lg:p-8 flex flex-col">
          {/* Project Title */}
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-slate-100 mb-3">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-slate-300 mb-6 leading-relaxed">
            {project.fullDescription || project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-700 dark:text-slate-200 mb-3 uppercase tracking-wide">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-lg text-xs font-medium border border-gray-200 dark:border-slate-600/50"
                >
                  {techIcons[tech]}
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 mt-auto">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 dark:bg-slate-700 hover:bg-gray-900 dark:hover:bg-slate-600 text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
              >
                <FaGithub className="w-4 h-4" />
                <span className="font-semibold text-sm">View on GitHub</span>
              </a>
            ) : (
              <div className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-400 dark:bg-slate-600 text-white rounded-lg">
                <FaGithub className="w-4 h-4" />
                <span className="font-semibold text-sm">Private Repository</span>
              </div>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
              >
                <span className="font-semibold text-sm">Live Demo</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
