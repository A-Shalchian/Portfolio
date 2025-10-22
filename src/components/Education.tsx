import { GraduationCap } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      school: "George Brown College",
      period: "2023 - 2026",
      gpa: "3.8/4.0",
      honors: ["Dean's List"],
      certifications: ["AWS Certified Solutions Architect"],
      coursework: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Systems",
        "Software Engineering",
        "Object-Oriented Programming",
        "Computer Networks"
      ],
    },
  ];

  return (
    <div className="group h-full p-4 lg:p-6 bg-white dark:bg-slate-800/95 rounded-2xl border border-gray-200 dark:border-slate-600/50 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-500 flex flex-col hover:border-gray-300 dark:hover:border-slate-500">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 bg-gray-100 dark:bg-slate-700/70 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-slate-600/70 transition-colors duration-300">
          <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-slate-300" />
        </div>
        <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-700 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent">
          Education
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-slate-600/50 hover:border-gray-300 dark:hover:border-slate-500 hover:bg-white dark:hover:bg-slate-700/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-100">{edu.degree}</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 mt-0.5">{edu.field}</p>
            <p className="text-sm text-gray-600 dark:text-slate-300">{edu.school}</p>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-1.5">{edu.period}</p>
            {edu.gpa && (
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">GPA: {edu.gpa}</p>
            )}

            {edu.honors && edu.honors.length > 0 && (
              <div className="mt-3">
                <p className="text-xs font-semibold text-gray-700 dark:text-slate-200 mb-1">Honors & Awards</p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.honors.map((honor, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-md border border-amber-200 dark:border-amber-700/50"
                    >
                      {honor}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {edu.certifications && edu.certifications.length > 0 && (
              <div className="mt-3">
                <p className="text-xs font-semibold text-gray-700 dark:text-slate-200 mb-1">Certifications</p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-md border border-blue-200 dark:border-blue-700/50"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {edu.coursework && edu.coursework.length > 0 && (
              <div className="mt-3">
                <p className="text-xs font-semibold text-gray-700 dark:text-slate-200 mb-1">Relevant Coursework</p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((course, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-600/50 text-gray-700 dark:text-slate-300 rounded-md border border-gray-200 dark:border-slate-500/50"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
