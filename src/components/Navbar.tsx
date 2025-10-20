"use client";
import { useState } from "react";
import { Home, Code, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState("/");
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-10 ">
      <nav className="flex p-0.25 border justify-center border-gray-200 dark:border-slate-600/50 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl shadow-lg">
        <Link
          href="/"
          className={`nav-item ${
            activeItem === "/"
              ? "bg-gray-200 dark:bg-slate-700/70 text-gray-900 dark:text-white"
              : "hover:bg-gray-100 dark:hover:bg-slate-700/70 hover:text-gray-900 dark:hover:text-white"
          }`}
          onClick={() => setActiveItem("/")}
        >
          <Home />
        </Link>
        <Link
          href="/projects"
          className={`nav-item ${
            activeItem === "projects"
              ? "bg-gray-200 dark:bg-slate-700/70 text-gray-900 dark:text-white"
              : "hover:bg-gray-100 dark:hover:bg-slate-700/70 hover:text-gray-900 dark:hover:text-white"
          }`}
          onClick={() => setActiveItem("projects")}
        >
          <Code />
        </Link>
        <button
          onClick={toggleTheme}
          className="nav-item hover:bg-gray-100 dark:hover:bg-slate-700/70 hover:text-gray-900 dark:hover:text-white"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
      </nav>
    </div>
  );
};
