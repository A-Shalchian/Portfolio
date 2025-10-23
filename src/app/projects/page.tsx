import { CurrentlyWorkingOn } from "@/components/CurrentlyWorkingOn";

export default function ProjectsPage() {
  return (
    <main className="relative w-full min-h-screen lg:h-screen lg:overflow-hidden">
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
        lg:grid-cols-3 lg:auto-rows-fr lg:gap-3 lg:h-[calc(100vh-5rem)] lg:pt-16 lg:pb-2">

        {/* Currently Working On - Only on desktop, takes 1 column */}
        <div className="hidden lg:block lg:col-span-1 lg:row-start-1">
          <div className="h-full">
            <CurrentlyWorkingOn />
          </div>
        </div>

        {/* Project Card 1 - Featured/Current Project - takes 2 columns on desktop */}
        <div className="w-full h-[350px]
          md:h-[400px] md:col-start-1 md:row-start-1
          lg:h-full lg:col-span-2 lg:col-start-2 lg:row-start-1">
          <div className="group h-full p-4 lg:p-6 bg-white dark:bg-slate-800/95 rounded-2xl border border-gray-200 dark:border-slate-600/50 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-500 hover:border-gray-300 dark:hover:border-slate-500">
            {/* Project content will go here */}
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="w-full h-[350px]
          md:h-[400px] md:col-start-2 md:row-start-1
          lg:h-full lg:col-start-1 lg:row-start-2">
          <div className="group h-full p-4 lg:p-6 bg-white dark:bg-slate-800/95 rounded-2xl border border-gray-200 dark:border-slate-600/50 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-500 hover:border-gray-300 dark:hover:border-slate-500">
            {/* Project content will go here */}
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="w-full h-[350px]
          md:h-[400px] md:col-start-1 md:row-start-2
          lg:h-full lg:col-start-2 lg:row-start-2">
          <div className="group h-full p-4 lg:p-6 bg-white dark:bg-slate-800/95 rounded-2xl border border-gray-200 dark:border-slate-600/50 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-500 hover:border-gray-300 dark:hover:border-slate-500">
            {/* Project content will go here */}
          </div>
        </div>

        {/* Project Card 4 */}
        <div className="w-full h-[350px]
          md:h-[400px] md:col-start-2 md:row-start-2
          lg:h-full lg:col-start-3 lg:row-start-2">
          <div className="group h-full p-4 lg:p-6 bg-white dark:bg-slate-800/95 rounded-2xl border border-gray-200 dark:border-slate-600/50 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-500 hover:border-gray-300 dark:hover:border-slate-500">
            {/* Project content will go here */}
          </div>
        </div>
      </div>
    </main>
  );
}
