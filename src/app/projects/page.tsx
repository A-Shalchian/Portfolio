"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { CurrentlyWorkingOn } from "@/components/CurrentlyWorkingOn";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectVideoModal } from "@/components/ProjectVideoModal";

// Project data
const projects = [
  {
    id: "fitsho",
    title: "Fitsho",
    description: "A comprehensive fitness tracking application to monitor workouts, nutrition, and health goals",
    fullDescription: "Fitsho is a full-stack fitness tracking application that helps users monitor their workouts, track nutrition, and achieve their health goals. Features include workout logging, meal planning, progress tracking, and personalized recommendations.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/A-Shalchian/fitsho",
  },
  {
    id: "clipboard-manager",
    title: "Clipboard Manager",
    description: "Efficient clipboard management tool.",
    fullDescription: "A powerful desktop clipboard manager built with Electron.js, designed for developers to easily manage and organize code snippets, text, and other clipboard content with keyboard shortcuts and search functionality.",
    techStack: ["JavaScript", "Electron"],
    githubUrl: "https://github.com/A-Shalchian/clipboard-manager",
    thumbnailUrl: "/assets/projects/clipboard-manager/Clipboard-Manager-dark.png",
    images: ["/assets/projects/clipboard-manager/Clipboard-Manager-dark.png", "/assets/projects/clipboard-manager/Clipboard-Manager.png"],
  },
  {
    id: "api-key-vault",
    title: "API Key Vault",
    description: "Secure storage, management system for API keys",
    fullDescription: "A secure vault application for storing and managing API keys and sensitive credentials with encryption, role-based access control, and audit logging.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL"],
    githubUrl: "https://github.com/A-Shalchian/api-key-vault",
    thumbnailUrl: "/assets/projects/api-kv/API-Key-Vault-dark.png",
    images: ["/assets/projects/api-kv/API-Key-Vault-dark.png", "/assets/projects/api-kv/API-Key-Vault.png"],
  },
  {
    id: "bookche",
    title: "BookChe",
    description: "Book recommendation and tracking platform",
    fullDescription: "A social platform for book lovers to discover new books, track reading progress, share reviews, and get personalized recommendations based on reading history.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/A-Shalchian/BookChe",
  },
  {
    id: "bolt-tic-tac-toe",
    title: "Bolt Tic-Tac-Toe",
    description: "Modern take on the classic tic-tac-toe game",
    fullDescription: "An interactive tic-tac-toe game with smooth animations, multiplayer support, and AI opponent with different difficulty levels.",
    techStack: ["JavaScript", "React"],
    githubUrl: "https://github.com/A-Shalchian/bolt-tic-tac-toe",
  },
  {
    id: "streakcode",
    title: "StreakCode",
    description: "Track your coding consistency and build habits",
    fullDescription: "A productivity app for developers to track daily coding streaks, set goals, and maintain consistency in their programming journey with GitHub integration.",
    techStack: ["TypeScript", "React", "Node.js", "Tailwind"],
    githubUrl: "https://github.com/A-Shalchian/CodeStreak",
    thumbnailUrl: "/assets/projects/streakcode/StreakCode-dark.png",
    images: ["/assets/projects/streakcode/StreakCode-dark.png", "/assets/projects/streakcode/StreakCode.png"],
  },
  {
    id: "diskcleaner",
    title: "DiskCleaner",
    description: "Automated disk space cleanup utility",
    fullDescription: "A system utility that automatically identifies and removes unnecessary files, cache, and temporary data to free up disk space safely.",
    techStack: ["Python"],
    githubUrl: "https://github.com/A-Shalchian/DiskCleaner",
  },
  {
    id: "postwave",
    title: "PostWave",
    description: "Upload Once. Post Everywhere.",
    fullDescription: "PostWave is a modern multi-platform content distribution tool that allows creators to upload videos once and share them across TikTok, YouTube, Instagram, and more with a single click. Built with a minimal, dark aesthetic and smooth animations inspired by Linear and Stripe.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL"],
    githubUrl: "https://github.com/A-Shalchian/PostWave",
    thumbnailUrl: "/assets/projects/postwave/PostWave.png",
    images: ["/assets/projects/postwave/PostWave.png"],
  },
  {
    id: "stumarket",
    title: "StuMarket",
    description: "Student marketplace for buying and selling",
    fullDescription: "A peer-to-peer marketplace exclusively for students to buy, sell, and trade textbooks, electronics, furniture, and other items within their campus community.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/A-Shalchian/StuMarket",
  },
];

export default function ProjectsPage() {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <main className="relative w-full min-h-screen lg:h-screen lg:overflow-y-auto">
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
        lg:grid-cols-3 lg:auto-rows-min lg:gap-3 lg:pt-16 lg:pb-8 lg:px-8">

        {/* Currently Working On - Only on desktop, takes 1 column */}
        <div className="hidden lg:block lg:col-span-1 lg:row-start-1 lg:h-[400px]">
          <div className="h-full">
            <CurrentlyWorkingOn />
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
            className="group relative w-full h-full bg-white dark:bg-slate-800/95 rounded-2xl border border-gray-200 dark:border-slate-600/50 shadow-lg hover:shadow-2xl dark:shadow-slate-900/50 transition-all duration-500 hover:border-gray-300 dark:hover:border-slate-500 overflow-hidden flex flex-col items-center justify-center gap-3"
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
