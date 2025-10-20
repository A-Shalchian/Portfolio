import { GraduationCap } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      school: "University Name",
      period: "2019 - 2023",
      gpa: "3.8/4.0",
    },
    // Add more education entries as needed
  ];

  return (
    <div className="group h-full p-8 bg-white dark:bg-slate-800/95 rounded-2xl border border-gray-200 dark:border-slate-600/50 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-500 flex flex-col hover:border-gray-300 dark:hover:border-slate-500">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gray-100 dark:bg-slate-700/70 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-slate-600/70 transition-colors duration-300">
          <GraduationCap className="w-7 h-7 text-gray-700 dark:text-slate-300" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-700 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent">
          Education
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto space-y-5 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm rounded-xl p-5 border border-gray-200 dark:border-slate-600/50 hover:border-gray-300 dark:hover:border-slate-500 hover:bg-white dark:hover:bg-slate-700/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-100">{edu.degree}</h3>
            <p className="text-base text-gray-600 dark:text-slate-300 mt-1">{edu.field}</p>
            <p className="text-base text-gray-600 dark:text-slate-300">{edu.school}</p>
            <p className="text-sm text-gray-500 dark:text-slate-400 mt-2">{edu.period}</p>
            {edu.gpa && (
              <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">GPA: {edu.gpa}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
