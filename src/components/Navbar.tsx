"use client";
import { useState, useEffect } from "react";
import { Home, Code, Moon, Sun, BookOpen, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";

export const Navbar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-4 left-4 z-50">
      <nav className="relative">
        {/* Expanding container */}
        <div
          className={`flex items-center gap-0.5 p-1 border border-gray-200 dark:border-slate-600/50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl shadow-lg rounded-full transition-all duration-500 ease-in-out ${
            isOpen ? "w-auto" : "w-12 h-12 justify-center hover:bg-gray-100 dark:hover:bg-slate-700/50"
          }`}
        >
          {/* Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full text-gray-700 dark:text-slate-300 transition-colors duration-200 ${
              isOpen ? "hover:bg-gray-100 dark:hover:bg-slate-700" : ""
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-current"
              >
                <path
                  d="M2 4h12M2 8h12M2 12h12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>

          {/* Menu Items - Only visible when open */}
          <div
            className={`flex items-center gap-0.5 transition-all duration-500 ease-in-out ${
              isOpen ? "max-w-xs opacity-100 ml-0.5" : "max-w-0 opacity-0 overflow-hidden"
            }`}
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${
                pathname === "/"
                  ? "bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white"
                  : "text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <Home className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${
                pathname.startsWith("/projects")
                  ? "bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white"
                  : "text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <Code className="w-4 h-4" />
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${
                pathname === "/blog"
                  ? "bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white"
                  : "text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <BookOpen className="w-4 h-4" />
            </Link>
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
