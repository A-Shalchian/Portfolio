import { Profile } from "@/components/Profile";
import { WorkExperience } from "@/components/WorkExperience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { GitHubContributions } from "@/components/GitHubContributions";

export default function Home() {
  return (
    <div className="min-h-screen p-4 pt-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 relative overflow-hidden">
      {/* Animated background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/10 dark:bg-pink-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      {/* Grid Container - Fixed height on large screens, scrollable on mobile */}
      <div className="relative z-10 h-[calc(100vh-6rem)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto lg:grid-rows-20 gap-4">
        {/* Profile - Top Left (50%) */}
        <div className="min-h-[300px] lg:min-h-0 lg:row-span-10">
          <Profile />
        </div>

        {/* Work Experience - Full Height (100%) */}
        <div className="min-h-[300px] lg:min-h-0 lg:row-span-20">
          <WorkExperience />
        </div>

        {/* Education - Top Right (65%) */}
        <div className="min-h-[300px] lg:min-h-0 lg:row-span-13">
          <Education />
        </div>

        {/* Skills - Bottom Left (50%) */}
        <div className="min-h-[300px] lg:min-h-0 lg:row-span-10">
          <Skills />
        </div>

        {/* GitHub Contributions - Bottom Right (35%) */}
        <div className="min-h-[300px] lg:min-h-0 lg:row-span-7">
          <GitHubContributions />
        </div>
      </div>
    </div>
  );
}
