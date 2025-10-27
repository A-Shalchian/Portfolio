"use client";
import { useEffect, useState, useRef } from "react";
import { Github, GitCommit } from "lucide-react";
import { getContributions, getLatestCommit } from "./github_contributions";
import { useTheme } from "@/contexts/ThemeContext";

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface LatestCommit {
  message: string;
  repo: string;
  date: string;
  url: string;
}

export const GitHubContributions = () => {
  const { theme } = useTheme();
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(0);
  const [latestCommit, setLatestCommit] = useState<LatestCommit | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasSpaceForCommit, setHasSpaceForCommit] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [contributionsData, commitData] = await Promise.all([
        getContributions(),
        getLatestCommit()
      ]);

      setWeeks(contributionsData);

      // Calculate total contributions
      let total = 0;
      contributionsData.forEach((week: ContributionWeek) => {
        week.contributionDays.forEach((day) => {
          total += day.contributionCount;
        });
      });
      setTotalContributions(total);

      // Set latest commit from real API data
      if (commitData) {
        setLatestCommit(commitData);
      }
    } catch (error) {
      console.error("Failed to fetch GitHub data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Check if there's enough space for the latest commit section
  useEffect(() => {
    const checkSpace = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.clientHeight;
        // If container height is greater than 280px, we have space for commit
        setHasSpaceForCommit(containerHeight > 280);
      }
    };

    checkSpace();
    window.addEventListener('resize', checkSpace);
    return () => window.removeEventListener('resize', checkSpace);
  }, [loading]);

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

  // Custom color scheme
  const getContributionColor = (count: number) => {
    if (count === 0) {
      return theme === "light" ? "#ebedf0" : "#1e293b";
    }

    // Light mode: darker green = more contributions
    if (theme === "light") {
      if (count <= 3) return "#9be9a8"; // lightest green
      if (count <= 6) return "#40c463"; // medium-light green
      if (count <= 9) return "#30a14e"; // medium-dark green
      return "#216e39"; // darkest green (highest activity)
    }

    // Dark mode: lighter green = more contributions
    if (count <= 3) return "#15803d"; // green-700 (darker)
    if (count <= 6) return "#16a34a"; // green-600
    if (count <= 9) return "#22c55e"; // green-500
    return "#4ade80"; // green-400 (lightest - highest activity)
  };

  return (
    <div ref={containerRef} className="group h-full p-4 lg:p-5 bg-white dark:bg-slate-800/95 rounded-2xl flex flex-col border border-gray-200 dark:border-slate-600/50 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-500 hover:border-gray-300 dark:hover:border-slate-500">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-gray-100 dark:bg-slate-700/70 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-slate-600/70 transition-colors duration-300">
            <Github className="w-5 h-5 lg:w-4 lg:h-4 text-gray-700 dark:text-slate-300" />
          </div>
          <h2 className="text-xl lg:text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-700 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent">
            GitHub Contributions
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {!loading && (
            <span className="text-xs lg:text-[10px] text-gray-600 dark:text-slate-400">
              {totalContributions} contributions this year
            </span>
          )}
          {/* Refresh Button */}
          <button
            onClick={fetchData}
            disabled={loading}
            className="p-1.5 rounded-lg bg-gray-100 dark:bg-slate-700/70 hover:bg-gray-200 dark:hover:bg-slate-600/70 text-gray-700 dark:text-slate-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Refresh contributions"
          >
            <svg
              className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col min-h-0">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-sm text-gray-600 dark:text-slate-400">Loading contributions...</p>
          </div>
        ) : (
          <>
            <div
              ref={scrollContainerRef}
              className="flex-1 flex gap-[3px] overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent"
            >
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {week.contributionDays.map((day, dayIndex) => (
                    <a
                      key={dayIndex}
                      href={`https://github.com/A-shalchian?tab=overview&from=${day.date}&to=${day.date}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] rounded-sm transition-all duration-200 hover:ring-2 hover:ring-gray-400 dark:hover:ring-slate-500 hover:scale-125 cursor-pointer border border-gray-200 dark:border-slate-600/50"
                      style={{
                        backgroundColor: getContributionColor(day.contributionCount),
                      }}
                      title={`${day.date}: ${day.contributionCount} contributions - Click to view on GitHub`}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 mt-3 text-xs text-gray-600 dark:text-slate-400">
              <span>Less</span>
              <div className="flex gap-1">
                <div
                  className="w-3 h-3 rounded-sm border border-gray-200 dark:border-slate-600/50"
                  style={{ backgroundColor: getContributionColor(0) }}
                />
                <div
                  className="w-3 h-3 rounded-sm border border-gray-200 dark:border-slate-600/50"
                  style={{ backgroundColor: getContributionColor(2) }}
                />
                <div
                  className="w-3 h-3 rounded-sm border border-gray-200 dark:border-slate-600/50"
                  style={{ backgroundColor: getContributionColor(5) }}
                />
                <div
                  className="w-3 h-3 rounded-sm border border-gray-200 dark:border-slate-600/50"
                  style={{ backgroundColor: getContributionColor(8) }}
                />
                <div
                  className="w-3 h-3 rounded-sm border border-gray-200 dark:border-slate-600/50"
                  style={{ backgroundColor: getContributionColor(10) }}
                />
              </div>
              <span>More</span>
            </div>

            {/* Latest Commit - Only show if there's enough space */}
            {hasSpaceForCommit && latestCommit && (
              <div className="mt-4 pt-3 border-t border-gray-200 dark:border-slate-600/50 overflow-hidden">
                <div className="flex items-start gap-2 min-w-0">
                  <GitCommit className="w-4 h-4 text-gray-600 dark:text-slate-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <p className="text-[10px] text-gray-500 dark:text-slate-500 mb-1">Latest Commit</p>
                    <a
                      href={latestCommit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group/commit min-w-0"
                    >
                      <p className="text-xs text-gray-700 dark:text-slate-300 group-hover/commit:text-blue-600 dark:group-hover/commit:text-blue-400 transition-colors truncate">
                        {latestCommit.message}
                      </p>
                      <p className="text-[10px] text-gray-500 dark:text-slate-500 mt-0.5 truncate">
                        {latestCommit.repo} • {latestCommit.date}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
