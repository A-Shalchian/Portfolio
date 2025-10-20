"use client";
import { useEffect, useState, useRef } from "react";
import { Github } from "lucide-react";
import { getContributions } from "./github_contributions";

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export const GitHubContributions = () => {
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContributions();
        setWeeks(data);

        // Calculate total contributions
        let total = 0;
        data.forEach((week: ContributionWeek) => {
          week.contributionDays.forEach((day) => {
            total += day.contributionCount;
          });
        });
        setTotalContributions(total);
      } catch (error) {
        console.error("Failed to fetch contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Add horizontal scroll with mouse wheel
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      // Prevent default vertical scroll
      e.preventDefault();
      // Scroll horizontally instead
      scrollContainer.scrollLeft += e.deltaY;
    };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, [loading]);

  // Custom color scheme - light gray gradient
  const getContributionColor = (count: number) => {
    if (count === 0) return "#f3f4f6"; // gray-100
    if (count <= 3) return "#d1d5db"; // gray-300
    if (count <= 6) return "#9ca3af"; // gray-400
    if (count <= 9) return "#6b7280"; // gray-500
    return "#4b5563"; // gray-600
  };

  return (
    <div className="group h-full p-8 bg-white dark:bg-slate-800/95 rounded-2xl flex flex-col border border-gray-200 dark:border-slate-600/50 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-500 hover:border-gray-300 dark:hover:border-slate-500">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-100 dark:bg-slate-700/70 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-slate-600/70 transition-colors duration-300">
            <Github className="w-7 h-7 text-gray-700 dark:text-slate-300" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-700 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent">
            GitHub Contributions
          </h2>
        </div>
        {!loading && (
          <span className="text-sm text-gray-600 dark:text-slate-400">
            {totalContributions} contributions this year
          </span>
        )}
      </div>

      <div className="flex-1 overflow-y-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-base text-gray-600 dark:text-slate-400">Loading contributions...</p>
          </div>
        ) : (
          <div
            ref={scrollContainerRef}
            className="flex gap-[4px] overflow-x-auto h-full pb-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent"
          >
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[4px]">
                {week.contributionDays.map((day, dayIndex) => (
                  <a
                    key={dayIndex}
                    href={`https://github.com/A-shalchian?tab=overview&from=${day.date}&to=${day.date}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[16px] h-[16px] rounded-sm transition-all duration-200 hover:ring-2 hover:ring-gray-400 dark:hover:ring-slate-500 hover:scale-125 cursor-pointer border border-gray-200 dark:border-slate-600/50"
                    style={{
                      backgroundColor: getContributionColor(day.contributionCount),
                    }}
                    title={`${day.date}: ${day.contributionCount} contributions - Click to view on GitHub`}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
