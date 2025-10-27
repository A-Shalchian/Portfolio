import { Profile } from "@/components/Profile";
import { WorkExperience } from "@/components/WorkExperience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { GitHubContributions } from "@/components/GitHubContributions";
import { CurrentlyWorkingOn } from "@/components/CurrentlyWorkingOn";
import { Footer } from "@/components/Footer";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen lg:h-screen lg:overflow-hidden">
      {/* Animated background glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/10 dark:bg-pink-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Download Resume Button - Tablet view (top right) */}
      <div className="hidden md:block lg:hidden fixed top-4 right-4 z-50">
        <a
          href="/resume.pdf"
          download
          className="group relative flex items-center gap-1.5 px-3 py-2.5 bg-white dark:bg-slate-800 text-gray-800 dark:text-slate-100 hover:text-gray-900 dark:hover:text-white rounded-lg border border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105"
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-gray-200/30 dark:via-slate-600/30 to-transparent"></div>

          {/* Content */}
          <Download className="w-3.5 h-3.5 relative z-10 group-hover:animate-bounce" />
          <span className="relative z-10 font-semibold text-xs">Download Resume</span>
        </a>
      </div>

      {/* Download Resume Button - Large screens only (top right) */}
      <div className="hidden lg:block fixed top-4 right-6 z-50">
        <a
          href="/resume.pdf"
          download
          className="group relative flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 text-gray-800 dark:text-slate-100 hover:text-gray-900 dark:hover:text-white rounded-lg border border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105"
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-gray-200/30 dark:via-slate-600/30 to-transparent"></div>

          {/* Content */}
          <Download className="w-4 h-4 relative z-10 group-hover:animate-bounce" />
          <span className="relative z-10 font-semibold text-sm">Download Resume</span>
        </a>
      </div>

      {/* Grid Container - Responsive layout */}
      <div className="relative z-10 p-4 pt-20 pb-0
        flex flex-col gap-4
        md:grid md:grid-cols-2 md:auto-rows-min md:gap-4
        lg:grid-cols-3 lg:grid-rows-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-3 lg:h-screen lg:pt-20 lg:pb-4">

        {/* Profile */}
        <div className="w-full h-[400px]
          md:h-[450px] md:col-start-1 md:row-start-1
          lg:h-full lg:min-h-0 lg:row-start-1 lg:col-start-1">
          <Profile />
        </div>

        {/* Currently Working On - Only visible on mobile and tablet, hidden on desktop */}
        <div className="w-full h-[300px]
          md:h-[450px] md:col-start-2 md:row-start-1
          lg:hidden">
          <CurrentlyWorkingOn />
        </div>

        {/* Work Experience */}
        <div className="w-full h-[475px]
          md:h-[420px] md:col-span-2 md:row-start-2
          lg:col-span-1 lg:h-full lg:min-h-0 lg:row-start-1 lg:col-start-2">
          <WorkExperience />
        </div>

        {/* Education */}
        <div className="w-full h-[400px]
          md:h-[450px] md:col-span-2 md:row-start-3
          lg:col-span-1 lg:h-full lg:min-h-0 lg:row-start-1 lg:col-start-3">
          <Education />
        </div>

        {/* Skills - spans 2 columns on tablet, 2 columns on desktop bottom */}
        <div className="w-full h-[500px]
          md:h-[460px] md:col-span-2 md:row-start-4
          lg:h-full lg:min-h-0 lg:row-start-2 lg:col-start-1 lg:col-span-2">
          <Skills />
        </div>

        {/* GitHub Contributions */}
        <div className="w-full h-[350px]
          md:h-[350px] md:col-span-2 md:row-start-5
          lg:h-full lg:min-h-0 lg:col-span-1 lg:row-start-2 lg:col-start-3">
          <GitHubContributions />
        </div>
      </div>

      {/* Footer - Hidden on large screens */}
      <div className="lg:hidden">
        <Footer />
      </div>
    </main>
  );
}
