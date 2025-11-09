"use client";
import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectVideoModal } from "@/components/ProjectVideoModal";

// Smaller/miscellaneous projects data
const otherProjects = [
  {
    id: "chrome-extensions",
    title: "Chrome Extensions",
    description: "Chrome extensions that I've built",
    fullDescription: "A collection of Chrome extensions that I've developed to enhance browsing experience and productivity.",
    techStack: ["JavaScript", "Chrome API"],
    githubUrl: "https://github.com/A-Shalchian/chrome-extensions",
  },
];

export default function OtherProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof otherProjects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof otherProjects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing the selected project to allow modal animation
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <main className="relative w-full min-h-screen lg:h-screen lg:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-slate-500">
      {/* Animated background glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/10 dark:bg-pink-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Page Title */}
      <div className="relative z-10 pt-20 pb-6 px-4 lg:pt-16 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-700 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent">
          Other Projects
        </h1>
        <p className="text-gray-600 dark:text-slate-400 mt-2">
          Games, experiments, and smaller side projects
        </p>
      </div>

      {/* Grid Container - Same structure as main projects but no "Currently Working On" */}
      <div className="relative z-10 px-4 pb-4
        grid grid-cols-1 gap-4
        md:grid-cols-2 md:auto-rows-min md:gap-4
        lg:grid-cols-3 lg:auto-rows-min lg:gap-3 lg:pb-8 lg:px-8">

        {/* Project Cards */}
        {otherProjects.map((project) => (
          <div
            key={project.id}
            className="w-full h-[450px] md:h-[500px] lg:h-[400px]"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              thumbnailUrl={project.thumbnailUrl}
              onClick={() => handleProjectClick(project)}
            />
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedProject && (
        <ProjectVideoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </main>
  );
}
