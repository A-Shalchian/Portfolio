import { Hammer, Check } from "lucide-react";

interface Task {
  text: string;
  completed: boolean;
}

interface CurrentlyWorkingOnProps {
  project: {
    title: string;
    description: string;
    githubUrl: string;
  };
  tasks: Task[];
  status: string;
}

export const CurrentlyWorkingOn = ({ project, tasks, status }: CurrentlyWorkingOnProps) => {
  const completedTasks = tasks.filter(t => t.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="group h-full p-4 lg:p-6 bg-white dark:bg-slate-800/95 rounded-2xl border border-gray-200 dark:border-slate-600/50 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-500 flex flex-col hover:border-gray-300 dark:hover:border-slate-500 overflow-hidden">
      <div className="flex items-center gap-2 mb-4 flex-shrink-0">
        <div className="p-1.5 bg-gray-100 dark:bg-slate-700/70 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-slate-600/70 transition-colors duration-300">
          <Hammer className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-slate-300" />
        </div>
        <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-700 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent">
          Currently Working On
        </h2>
      </div>

      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        <div className="mb-3 flex-shrink-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-100">
              {project.title}
            </h3>
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-600/50 text-gray-700 dark:text-slate-300 rounded-md border border-gray-200 dark:border-slate-500/50">
              {status} • {progress}%
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300">
            {project.description}
          </p>
        </div>

        {/* Task Checklist */}
        <div className="flex-1 min-h-0 bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-slate-600/50 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-slate-500">
          <div className="space-y-2">
            {tasks.map((task, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className={`flex-shrink-0 w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                    task.completed
                      ? "bg-green-500 border-green-500 dark:bg-green-600 dark:border-green-600"
                      : "border-gray-300 dark:border-slate-500"
                  }`}>
                    {task.completed && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span className={`text-sm ${
                    task.completed
                      ? "line-through text-gray-500 dark:text-slate-400"
                      : "text-gray-700 dark:text-slate-300"
                  }`}>
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

        {/* GitHub Link */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex-shrink-0 flex items-center justify-center gap-1 text-gray-700 dark:text-slate-300 text-sm font-medium hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span>View on GitHub</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};
