import { Code2, Sparkles, Coffee, Code } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiDocker,
  SiFigma
} from "react-icons/si";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      icon: <Code2 className="w-4 h-4" />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" />, color: "from-yellow-400 to-yellow-500" },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" />, color: "from-blue-500 to-blue-600" },
        { name: "Python", icon: <SiPython className="w-5 h-5" />, color: "from-blue-400 to-yellow-400" },
        { name: "Java", icon: <Coffee className="w-5 h-5" />, color: "from-red-500 to-orange-500" },
      ],
    },
    {
      category: "Frameworks",
      icon: <Sparkles className="w-4 h-4" />,
      skills: [
        { name: "React", icon: <SiReact className="w-5 h-5" />, color: "from-cyan-400 to-blue-500" },
        { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" />, color: "from-gray-700 to-gray-900 dark:from-slate-100 dark:to-slate-300" },
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" />, color: "from-green-500 to-green-600" },
        { name: "Express", icon: <SiExpress className="w-5 h-5" />, color: "from-gray-600 to-gray-800 dark:from-slate-200 dark:to-slate-400" },
      ],
    },
    {
      category: "Tools",
      icon: <Code className="w-4 h-4" />,
      skills: [
        { name: "Git", icon: <SiGit className="w-5 h-5" />, color: "from-orange-500 to-red-500" },
        { name: "Docker", icon: <SiDocker className="w-5 h-5" />, color: "from-blue-400 to-blue-600" },
        { name: "VS Code", icon: <Code2 className="w-5 h-5" />, color: "from-blue-500 to-blue-700" },
        { name: "Figma", icon: <SiFigma className="w-5 h-5" />, color: "from-purple-400 to-pink-500" },
      ],
    },
  ];

  return (
    <div className="group h-full p-8 bg-white dark:bg-slate-800/95 rounded-2xl border border-gray-200 dark:border-slate-600/50 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-500 flex flex-col hover:border-gray-300 dark:hover:border-slate-500">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800/40 dark:group-hover:to-purple-800/40 transition-all duration-300">
          <Code2 className="w-7 h-7 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-700 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent">
          Skills
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-2.5">
            <div className="flex items-center gap-2">
              <div className="text-gray-500 dark:text-slate-400">
                {category.icon}
              </div>
              <h3 className="text-xs lg:text-sm font-semibold text-gray-600 dark:text-slate-400 uppercase tracking-wide">
                {category.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group/skill relative overflow-hidden px-3 py-2 lg:px-3 lg:py-2 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700/50 dark:to-slate-800/50 backdrop-blur-sm rounded-lg lg:rounded-xl border border-gray-200 dark:border-slate-600/50 hover:border-gray-300 dark:hover:border-slate-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  {/* Animated gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300`}></div>

                  <div className="relative flex items-center gap-2">
                    <div className={`p-1.5 rounded-md lg:rounded-lg bg-gradient-to-br ${skill.color} shadow-sm group-hover/skill:scale-110 transition-transform duration-300 flex items-center justify-center shrink-0`}>
                      <div className="text-white">
                        {skill.icon}
                      </div>
                    </div>
                    <span className="text-xs lg:text-sm font-medium text-gray-700 dark:text-slate-200 group-hover/skill:text-gray-900 dark:group-hover/skill:text-slate-100 transition-colors duration-300 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
