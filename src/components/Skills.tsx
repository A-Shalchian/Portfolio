import { Code2, Sparkles, Code, Database, Cloud, Coffee, TestTube2, Hash, CloudCog } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiGit,
  SiGithub,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiPostman,
  SiJest,
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
        { name: "C#", icon: <Hash className="w-5 h-5" />, color: "from-purple-600 to-purple-700" },
        { name: "Go", icon: <SiGo className="w-5 h-5" />, color: "from-cyan-400 to-blue-500" },
      ],
    },
    {
      category: "Frontend",
      icon: <Sparkles className="w-4 h-4" />,
      skills: [
        { name: "React", icon: <SiReact className="w-5 h-5" />, color: "from-cyan-400 to-blue-500" },
        { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" />, color: "from-gray-700 to-gray-900 dark:from-slate-100 dark:to-slate-300" },
        { name: "HTML5", icon: <SiHtml5 className="w-5 h-5" />, color: "from-orange-500 to-red-500" },
        { name: "CSS3", icon: <SiCss3 className="w-5 h-5" />, color: "from-blue-400 to-blue-600" },
        { name: "Tailwind", icon: <SiTailwindcss className="w-5 h-5" />, color: "from-cyan-400 to-blue-500" },
        { name: "Redux", icon: <SiRedux className="w-5 h-5" />, color: "from-purple-500 to-purple-700" },
        { name: "Framer Motion", icon: <SiFramer className="w-5 h-5" />, color: "from-pink-500 to-purple-500" },
      ],
    },
    {
      category: "Backend",
      icon: <Code className="w-4 h-4" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" />, color: "from-green-500 to-green-600" },
        { name: "Express", icon: <SiExpress className="w-5 h-5" />, color: "from-gray-600 to-gray-800 dark:from-slate-200 dark:to-slate-400" },
        { name: "NestJS", icon: <SiNestjs className="w-5 h-5" />, color: "from-red-500 to-red-600" },
        { name: "GraphQL", icon: <SiGraphql className="w-5 h-5" />, color: "from-pink-500 to-purple-500" },
      ],
    },
    {
      category: "Database",
      icon: <Database className="w-4 h-4" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5" />, color: "from-blue-500 to-blue-700" },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" />, color: "from-green-500 to-green-600" },
        { name: "Redis", icon: <SiRedis className="w-5 h-5" />, color: "from-red-500 to-red-600" },
        { name: "Prisma", icon: <SiPrisma className="w-5 h-5" />, color: "from-gray-700 to-gray-900 dark:from-slate-100 dark:to-slate-300" },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: <Cloud className="w-4 h-4" />,
      skills: [
        { name: "Git", icon: <SiGit className="w-5 h-5" />, color: "from-orange-500 to-red-500" },
        { name: "GitHub", icon: <SiGithub className="w-5 h-5" />, color: "from-gray-700 to-gray-900 dark:from-slate-100 dark:to-slate-300" },
        { name: "Docker", icon: <SiDocker className="w-5 h-5" />, color: "from-blue-400 to-blue-600" },
        { name: "GitHub Actions", icon: <SiGithubactions className="w-5 h-5" />, color: "from-blue-500 to-blue-700" },
        { name: "Vercel", icon: <SiVercel className="w-5 h-5" />, color: "from-gray-700 to-gray-900 dark:from-slate-100 dark:to-slate-300" },
        { name: "AWS", icon: <CloudCog className="w-5 h-5" />, color: "from-orange-400 to-orange-500" },
        { name: "Postman", icon: <SiPostman className="w-5 h-5" />, color: "from-orange-500 to-orange-600" },
        { name: "Jest", icon: <SiJest className="w-5 h-5" />, color: "from-red-500 to-red-600" },
        { name: "Playwright", icon: <TestTube2 className="w-5 h-5" />, color: "from-red-600 to-orange-600" },
        { name: "Figma", icon: <SiFigma className="w-5 h-5" />, color: "from-purple-400 to-pink-500" },
      ],
    },
  ];

  return (
    <div className="group h-full p-4 lg:p-6 bg-white dark:bg-slate-800/95 rounded-2xl border border-gray-200 dark:border-slate-600/50 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-500 flex flex-col hover:border-gray-300 dark:hover:border-slate-500">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800/40 dark:group-hover:to-purple-800/40 transition-all duration-300">
          <Code2 className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-700 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent">
          Skills
        </h2>
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 h-full">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex flex-col min-h-0">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="text-gray-500 dark:text-slate-400">
                  {category.icon}
                </div>
                <h3 className="text-xs font-semibold text-gray-600 dark:text-slate-400 uppercase tracking-wide">
                  {category.category}
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group/skill relative overflow-hidden px-2 py-1.5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700/50 dark:to-slate-800/50 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-slate-600/50 hover:border-gray-300 dark:hover:border-slate-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    {/* Animated gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300`}></div>

                    <div className="relative flex items-center gap-1.5">
                      <div className={`p-0.5 rounded-md bg-gradient-to-br ${skill.color} shadow-sm group-hover/skill:scale-110 transition-transform duration-300 flex items-center justify-center shrink-0`}>
                        <div className="text-white">
                          {skill.icon}
                        </div>
                      </div>
                      <span className="text-xs font-medium text-gray-700 dark:text-slate-200 group-hover/skill:text-gray-900 dark:group-hover/skill:text-slate-100 transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis">
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
    </div>
  );
};
