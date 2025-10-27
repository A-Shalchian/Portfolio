import { Hammer } from "lucide-react";

export const CurrentlyWorkingOn = () => {
  const currentProject = {
    name: "Project Name",
    description: "Brief description of what you're currently building",
    link: "#", // Replace with actual project link
    status: "In Progress"
  };

  return (
    <div className="group h-full p-4 lg:p-6 bg-white dark:bg-slate-800/95 rounded-2xl border border-gray-200 dark:border-slate-600/50 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-500 flex flex-col hover:border-gray-300 dark:hover:border-slate-500">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 bg-gray-100 dark:bg-slate-700/70 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-slate-600/70 transition-colors duration-300">
          <Hammer className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-slate-300" />
        </div>
        <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-700 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent">
          Currently Working On
        </h2>
      </div>

      <div className="flex-1 flex items-center md:items-start justify-center">
        <a
          href={currentProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-600/50 hover:border-gray-300 dark:hover:border-slate-500 hover:bg-white dark:hover:bg-slate-700/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-pointer"
        >
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-100">
              {currentProject.name}
            </h3>
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-600/50 text-gray-700 dark:text-slate-300 rounded-md border border-gray-200 dark:border-slate-500/50">
              {currentProject.status}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 mt-2">
            {currentProject.description}
          </p>
          <div className="flex items-center gap-1 mt-3 text-gray-700 dark:text-slate-300 text-sm font-medium">
            <span>View Project</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};
