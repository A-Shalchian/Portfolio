"use client";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    fullDescription?: string;
    techStack: string[];
    githubUrl: string;
    videoUrl?: string;
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-5xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8
          max-h-[90vh] md:max-h-[85vh]
          flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Section */}
        <div className="relative w-full bg-black aspect-video">
          {project.videoUrl ? (
            <video
              ref={videoRef}
              className="w-full h-full"
              controls
              controlsList="nodownload"
            >
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="flex items-center justify-center h-full text-white">
              <div className="text-center">
                <p className="text-xl mb-2">Video Demo Coming Soon</p>
                <p className="text-sm text-gray-400">
                  Check out the GitHub repository in the meantime
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Project Information Section */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
          {/* Project Title */}
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-slate-100 mb-3">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-base text-gray-600 dark:text-slate-300 mb-6 leading-relaxed">
            {project.fullDescription || project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-slate-200 mb-3 uppercase tracking-wide">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-slate-600/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 dark:bg-slate-700 hover:bg-gray-900 dark:hover:bg-slate-600 text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
            >
              <FaGithub className="w-5 h-5" />
              <span className="font-semibold">View on GitHub</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
              >
                <span className="font-semibold">Live Demo</span>
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
