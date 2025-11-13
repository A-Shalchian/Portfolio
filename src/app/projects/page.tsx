"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { CurrentlyWorkingOn } from "@/components/CurrentlyWorkingOn";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectVideoModal } from "@/components/ProjectVideoModal";
import { projects } from "@/data/projects";
import { currentWork } from "@/data/currentWork";

export default function ProjectsPage() {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Find the current project by ID from currentWork
  const currentProject = projects.find(p => p.id === currentWork.projectId) || projects[0];

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const remainingProjectsInLastRow = (projects.length - 1) % 3;
  const showBottomOtherProjectsLg = remainingProjectsInLastRow !== 0;

  return (
    <main className="relative w-full min-h-screen lg:h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-slate-500">
      {/* Animated background glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/10 dark:bg-pink-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigate to Other Projects - Top Right (Hidden on mobile and lg when bottom card shows) */}
      <div className={`hidden md:block fixed top-6 md:right-8 lg:right-11 z-50 ${showBottomOtherProjectsLg ? 'lg:hidden' : ''}`}>
        <div
          onClick={() => router.push("/projects/other")}
          className="group flex items-center gap-2 cursor-pointer text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
        >
          <span className="text-sm font-medium">Other Projects</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>

      {/* Grid Container - Responsive layout */}
      <div className="relative z-10 p-4 pt-20 pb-4
        flex flex-col gap-4
        md:grid md:grid-cols-2 md:auto-rows-min md:gap-4
        lg:grid-cols-3 lg:auto-rows-min lg:gap-3 lg:pt-20 lg:pb-8 lg:px-8">

        {/* Currently Working On - Only on desktop, takes 1 column */}
        <div className="hidden lg:block lg:col-span-1 lg:row-start-1 lg:h-[400px]">
          <div className="h-full">
            <CurrentlyWorkingOn
              project={currentProject}
              tasks={currentWork.tasks}
              status={currentWork.status}
            />
          </div>
        </div>

        {/* Project Cards */}
        {projects.map((project, index) => {
          // First project (Fitsho) takes 2 columns on desktop
          const isFirstProject = index === 0;

          return (
            <div
              key={project.id}
              className={`w-full h-[450px] md:h-[500px] ${
                isFirstProject
                  ? "md:col-start-1 md:row-start-1 lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:h-[400px]"
                  : "lg:h-[400px]"
              }`}
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
          );
        })}

        {/* Other Projects Button - Mobile always, lg when last row incomplete */}
        <div className={`w-full h-[150px] md:h-[400px] ${showBottomOtherProjectsLg ? 'md:hidden lg:block' : 'md:hidden'}`}>
          <button
            onClick={() => router.push("/projects/other")}
            className="group relative w-full h-full bg-white dark:bg-slate-800/95 rounded-2xl border border-gray-200 dark:border-slate-600/50 shadow-lg hover:shadow-2xl dark:shadow-slate-900/50 transition-all duration-500 hover:border-gray-300 dark:hover:border-slate-500 overflow-hidden flex flex-col items-center justify-center gap-3 cursor-pointer"
          >
            {/* Animated gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-900/10 dark:via-purple-900/5 dark:to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Animated border glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-400/50 dark:via-blue-500/30 to-transparent"></div>
              <div className="absolute bottom-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-400/50 dark:via-purple-500/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              {/* Icon circle with animated ring */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 blur-xl group-hover:blur-2xl transition-all duration-500 scale-0 group-hover:scale-100"></div>
                <div className="relative w-16 h-16 rounded-full border-2 border-gray-300 dark:border-slate-600 group-hover:border-gray-400 dark:group-hover:border-slate-500 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-90">
                  <ArrowRight className="w-6 h-6 text-gray-700 dark:text-slate-300 group-hover:text-gray-900 dark:group-hover:text-white transition-all duration-500 group-hover:translate-x-1" />
                </div>
              </div>

              <div className="flex flex-col items-center gap-1">
                <span className="text-lg font-semibold text-gray-800 dark:text-slate-100 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  Other Projects
                </span>
                <span className="text-sm text-gray-600 dark:text-slate-400 group-hover:text-gray-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                  Explore more work
                </span>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gray-200 dark:border-slate-700 rounded-tl-lg opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gray-200 dark:border-slate-700 rounded-br-lg opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
          </button>
        </div>
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
