"use client";
import { useState, useEffect } from "react";
import { Code2, Sparkles, Code, Database, Cloud, Coffee, Hash, CloudCog } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiDjango,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiSqlite,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiFigma
} from "react-icons/si";

// Type definitions
interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

// Skill Card Component with 3D effect
const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="group/skill relative overflow-hidden px-2.5 py-2 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-slate-600/30 cursor-pointer transition-all duration-200 w-full"
      style={{
        transform: isHovering
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02) translateY(-2px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)",
        boxShadow: isHovering
          ? "0 20px 40px -12px rgba(0, 0, 0, 0.25), 0 0 20px rgba(0, 0, 0, 0.1)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        animation: `float 3s ease-in-out infinite`,
        animationDelay: `${index * 0.1}s`,
        willChange: "transform",
      }}
    >
      {/* Glossy shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Animated gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300`}></div>

      <div className="relative flex items-center justify-center gap-2">
        <div
          className={`p-1.5 rounded-lg bg-gradient-to-br ${skill.color} shadow-lg group-hover/skill:shadow-xl transition-all duration-300 flex items-center justify-center shrink-0`}
          style={{
            transform: isHovering ? "scale(1.15) rotate(5deg)" : "scale(1) rotate(0deg)",
          }}
        >
          <div className="text-white">
            {skill.icon}
          </div>
        </div>
        <span className="text-xs font-semibold text-gray-800 dark:text-slate-100 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors duration-300">
          {skill.name}
        </span>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover/skill:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"></div>
    </div>
  );
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeTabletSlide, setActiveTabletSlide] = useState(0);
  const [activeDesktopSlide, setActiveDesktopSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTabletPaused, setIsTabletPaused] = useState(false);
  const [isDesktopPaused, setIsDesktopPaused] = useState(false);

  const skillCategories = [
    {
      category: "Languages",
      icon: <Code2 className="w-4 h-4" />,
      theme: "from-blue-500/10 to-blue-600/10 border-blue-500/20 hover:border-blue-500/40",
      glowColor: "shadow-blue-500/50",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" />, color: "from-yellow-400 to-yellow-500" },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" />, color: "from-blue-500 to-blue-600" },
        { name: "Python", icon: <SiPython className="w-5 h-5" />, color: "from-blue-400 to-yellow-400" },
        { name: "Java", icon: <Coffee className="w-5 h-5" />, color: "from-red-500 to-orange-500" },
        { name: "C#", icon: <Hash className="w-5 h-5" />, color: "from-purple-600 to-purple-700" },
      ],
    },
    {
      category: "Frontend",
      icon: <Sparkles className="w-4 h-4" />,
      theme: "from-purple-500/10 to-purple-600/10 border-purple-500/20 hover:border-purple-500/40",
      glowColor: "shadow-purple-500/50",
      skills: [
        { name: "React", icon: <SiReact className="w-5 h-5" />, color: "from-cyan-400 to-blue-500" },
        { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" />, color: "from-gray-700 to-gray-900 dark:from-slate-100 dark:to-slate-300" },
        { name: "Tailwind", icon: <SiTailwindcss className="w-5 h-5" />, color: "from-cyan-400 to-blue-500" },
        { name: "Redux", icon: <SiRedux className="w-5 h-5" />, color: "from-purple-500 to-purple-700" },
        { name: "Framer Motion", icon: <SiFramer className="w-5 h-5" />, color: "from-pink-500 to-purple-500" },
      ],
    },
    {
      category: "Backend",
      icon: <Code className="w-4 h-4" />,
      theme: "from-green-500/10 to-green-600/10 border-green-500/20 hover:border-green-500/40",
      glowColor: "shadow-green-500/50",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" />, color: "from-green-500 to-green-600" },
        { name: "Express", icon: <SiExpress className="w-5 h-5" />, color: "from-gray-600 to-gray-800 dark:from-slate-200 dark:to-slate-400" },
        { name: "NestJS", icon: <SiNestjs className="w-5 h-5" />, color: "from-red-500 to-red-600" },
        { name: "Django", icon: <SiDjango className="w-5 h-5" />, color: "from-green-700 to-green-800" },
        { name: "GraphQL", icon: <SiGraphql className="w-5 h-5" />, color: "from-pink-500 to-purple-500" },
      ],
    },
    {
      category: "Database",
      icon: <Database className="w-4 h-4" />,
      theme: "from-orange-500/10 to-orange-600/10 border-orange-500/20 hover:border-orange-500/40",
      glowColor: "shadow-orange-500/50",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5" />, color: "from-blue-500 to-blue-700" },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" />, color: "from-green-500 to-green-600" },
        { name: "Redis", icon: <SiRedis className="w-5 h-5" />, color: "from-red-500 to-red-600" },
        { name: "SQLite", icon: <SiSqlite className="w-5 h-5" />, color: "from-blue-400 to-blue-600" },
        { name: "Prisma", icon: <SiPrisma className="w-5 h-5" />, color: "from-gray-700 to-gray-900 dark:from-slate-100 dark:to-slate-300" },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: <Cloud className="w-4 h-4" />,
      theme: "from-cyan-500/10 to-cyan-600/10 border-cyan-500/20 hover:border-cyan-500/40",
      glowColor: "shadow-cyan-500/50",
      skills: [
        { name: "Git", icon: <SiGit className="w-5 h-5" />, color: "from-orange-500 to-red-500" },
        { name: "Docker", icon: <SiDocker className="w-5 h-5" />, color: "from-blue-400 to-blue-600" },
        { name: "GitHub Actions", icon: <SiGithubactions className="w-5 h-5" />, color: "from-blue-500 to-blue-700" },
        { name: "AWS", icon: <CloudCog className="w-5 h-5" />, color: "from-orange-400 to-orange-500" },
        { name: "Figma", icon: <SiFigma className="w-5 h-5" />, color: "from-purple-400 to-pink-500" },
      ],
    },
  ];

  // Auto-swipe effect for mobile (3 seconds for DevOps & Tools, 5 seconds for others)
  useEffect(() => {
    // DevOps & Tools is at index 4
    const isDevOps = activeCategory === 4;
    const delay = isDevOps ? 3000 : 5000;

    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveCategory((prev) => (prev + 1) % skillCategories.length);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [isPaused, skillCategories.length, activeCategory]);

  // Auto-swipe effect for tablet (3 seconds for DevOps & Tools slide, 5 seconds for others)
  useEffect(() => {
    const totalTabletSlides = Math.ceil(skillCategories.length / 2);
    // Slide 2 contains DevOps & Tools (category index 4)
    const isDevOpsSlide = activeTabletSlide === 2;
    const delay = isDevOpsSlide ? 3000 : 5000;

    const interval = setInterval(() => {
      if (!isTabletPaused) {
        setActiveTabletSlide((prev) => (prev + 1) % totalTabletSlides);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [isTabletPaused, skillCategories.length, activeTabletSlide]);

  // Auto-swipe effect for desktop (3 seconds for DevOps & Tools slide, 5 seconds for others)
  useEffect(() => {
    const totalDesktopSlides = Math.ceil(skillCategories.length / 2);
    // Slide 2 contains DevOps & Tools (category index 4)
    const isDevOpsSlide = activeDesktopSlide === 2;
    const delay = isDevOpsSlide ? 3000 : 5000;

    const interval = setInterval(() => {
      if (!isDesktopPaused) {
        setActiveDesktopSlide((prev) => (prev + 1) % totalDesktopSlides);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [isDesktopPaused, skillCategories.length, activeDesktopSlide]);

  // Handle touch swipe for mobile carousel
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && activeCategory < skillCategories.length - 1) {
      setActiveCategory(activeCategory + 1);
    }
    if (isRightSwipe && activeCategory > 0) {
      setActiveCategory(activeCategory - 1);
    }
  };

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

        {/* Mobile Carousel */}
        <div className="flex-1 md:hidden flex flex-col overflow-hidden">
          <div
            className="relative flex-1 overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex h-full transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${activeCategory * 100}%)`,
              }}
            >
              {skillCategories.map((category, catIndex) => (
                <div
                  key={catIndex}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className={`h-full flex flex-col p-4 rounded-xl bg-gradient-to-br ${category.theme} border`}>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div className="text-gray-700 dark:text-slate-300">
                        {category.icon}
                      </div>
                      <h3 className="text-sm font-bold text-gray-800 dark:text-slate-200 uppercase tracking-wide">
                        {category.category}
                      </h3>
                    </div>
                    <div className="flex-1 overflow-y-auto space-y-2.5 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent pr-1">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillCard key={skillIndex} skill={skill} index={skillIndex} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots and Swipe Indicator */}
          <div className="relative flex justify-center gap-2 mt-3 pb-1">
            {skillCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCategory(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeCategory
                    ? "bg-blue-500 dark:bg-blue-400 w-6"
                    : "bg-gray-300 dark:bg-slate-600"
                }`}
                aria-label={`Go to ${skillCategories[index].category}`}
              />
            ))}

            {/* Next Button */}
            <button
              onClick={() => setActiveCategory((prev) => (prev + 1) % skillCategories.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 transition-colors duration-200 cursor-pointer"
              aria-label="Next category"
            >
              <span>next</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tablet Carousel - Shows 2 categories at a time */}
        <div className="hidden md:flex lg:hidden flex-1 flex-col overflow-hidden">
          <div
            className="relative flex-1 overflow-hidden"
            onTouchStart={(e) => {
              setIsTabletPaused(true);
              setTouchStart(e.targetTouches[0].clientX);
            }}
            onTouchMove={(e) => {
              setTouchEnd(e.targetTouches[0].clientX);
            }}
            onTouchEnd={() => {
              if (!touchStart || !touchEnd) return;
              const distance = touchStart - touchEnd;
              const isLeftSwipe = distance > 50;
              const isRightSwipe = distance < -50;
              const totalSlides = Math.ceil(skillCategories.length / 2);

              if (isLeftSwipe && activeTabletSlide < totalSlides - 1) {
                setActiveTabletSlide(activeTabletSlide + 1);
              }
              if (isRightSwipe && activeTabletSlide > 0) {
                setActiveTabletSlide(activeTabletSlide - 1);
              }
            }}
            onMouseEnter={() => setIsTabletPaused(true)}
            onMouseLeave={() => setIsTabletPaused(false)}
          >
            <div
              className="flex h-full transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${activeTabletSlide * 100}%)`,
              }}
            >
              {Array.from({ length: Math.ceil(skillCategories.length / 2) }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 flex gap-3 px-2"
                >
                  {skillCategories.slice(slideIndex * 2, slideIndex * 2 + 2).map((category, catIndex) => (
                    <div
                      key={catIndex}
                      className={`flex-1 flex flex-col p-4 rounded-xl bg-gradient-to-br ${category.theme} border`}
                    >
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="text-gray-700 dark:text-slate-300">
                          {category.icon}
                        </div>
                        <h3 className="text-sm font-bold text-gray-800 dark:text-slate-200 uppercase tracking-wide">
                          {category.category}
                        </h3>
                      </div>
                      <div className="flex-1 overflow-y-auto space-y-2.5 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent pr-1">
                        {category.skills.map((skill, skillIndex) => (
                          <SkillCard key={skillIndex} skill={skill} index={skillIndex} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots for Tablet */}
          <div className="relative flex justify-center gap-2 mt-3 pb-1">
            {Array.from({ length: Math.ceil(skillCategories.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTabletSlide(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeTabletSlide
                    ? "bg-blue-500 dark:bg-blue-400 w-6"
                    : "bg-gray-300 dark:bg-slate-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}

            {/* Next Button */}
            <button
              onClick={() => setActiveTabletSlide((prev) => (prev + 1) % Math.ceil(skillCategories.length / 2))}
              className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 transition-colors duration-200 cursor-pointer"
              aria-label="Next slide"
            >
              <span>next</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Carousel - Shows 2 categories at a time */}
        <div className="hidden lg:flex flex-1 flex-col overflow-hidden">
          <div
            className="relative flex-1 overflow-hidden"
            onMouseEnter={() => setIsDesktopPaused(true)}
            onMouseLeave={() => setIsDesktopPaused(false)}
          >
            <div
              className="flex h-full transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${activeDesktopSlide * 100}%)`,
              }}
            >
              {Array.from({ length: Math.ceil(skillCategories.length / 2) }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 flex gap-3 px-2"
                >
                  {skillCategories.slice(slideIndex * 2, slideIndex * 2 + 2).map((category, catIndex) => (
                    <div
                      key={catIndex}
                      className={`flex-1 flex flex-col p-3 rounded-xl bg-gradient-to-br ${category.theme} border`}
                    >
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="text-gray-700 dark:text-slate-300">
                          {category.icon}
                        </div>
                        <h3 className="text-[10px] font-bold text-gray-800 dark:text-slate-200 uppercase tracking-wide">
                          {category.category}
                        </h3>
                      </div>
                      <div className="flex-1 overflow-y-auto flex flex-wrap gap-2 content-start scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="w-[calc(50%-4px)]">
                            <SkillCard skill={skill} index={skillIndex} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots for Desktop */}
          <div className="relative flex justify-center gap-2 mt-3 pb-1">
            {Array.from({ length: Math.ceil(skillCategories.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveDesktopSlide(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeDesktopSlide
                    ? "bg-blue-500 dark:bg-blue-400 w-6"
                    : "bg-gray-300 dark:bg-slate-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}

            {/* Next Button */}
            <button
              onClick={() => setActiveDesktopSlide((prev) => (prev + 1) % Math.ceil(skillCategories.length / 2))}
              className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 transition-colors duration-200 cursor-pointer"
              aria-label="Next slide"
            >
              <span>next</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

  );
};
