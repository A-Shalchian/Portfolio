"use client";
import { useState } from "react";
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
    description: "Secure storage and management system for API keys",
    fullDescription: "A secure vault application for storing and managing API keys and sensitive credentials with encryption, role-based access control, and audit logging.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    githubUrl: "https://github.com/A-Shalchian/api-key-vault",
    thumbnailUrl: "/assets/projects/api-kv/API-KV-Thumbnail-dark.png",
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
    id: "filmflow",
    title: "FilmFlow",
    description: "Movie discovery and streaming platform",
    fullDescription: "A movie discovery platform that helps users find their next favorite film with advanced filtering, personalized recommendations, and curated collections.",
    techStack: ["React", "Next.js", "Tailwind"],
    githubUrl: "https://github.com/A-Shalchian/FilmFlow",
  },
  {
    id: "codestreak",
    title: "CodeStreak",
    description: "Track your coding consistency and build habits",
    fullDescription: "A productivity app for developers to track daily coding streaks, set goals, and maintain consistency in their programming journey with GitHub integration.",
    techStack: ["TypeScript", "React", "Node.js"],
    githubUrl: "https://github.com/A-Shalchian/CodeStreak",
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
    description: "Social media management and analytics tool",
    fullDescription: "A comprehensive social media management platform for scheduling posts, analyzing engagement, and managing multiple accounts across different platforms.",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/A-Shalchian/PostWave",
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
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing the selected project to allow modal animation
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <main className="relative w-full min-h-screen lg:h-screen lg:overflow-y-auto">
      {/* Animated background glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/10 dark:bg-pink-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
