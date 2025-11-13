import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-4 px-4 lg:py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 lg:gap-6 flex-wrap">
        {/* Social Links */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/A-shalchian"
            target="_blank"
            rel="noopener noreferrer"
            className="mac-bounce-hover group p-2 bg-gray-100 dark:bg-slate-800/80 rounded-xl text-gray-700 dark:text-slate-300 hover:bg-gray-900 dark:hover:bg-slate-700 hover:text-white dark:hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-gray-300/50 dark:hover:shadow-slate-900/50"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/a-shalchian/"
            target="_blank"
            rel="noopener noreferrer"
            className="mac-bounce-hover group p-2 bg-gray-100 dark:bg-slate-800/80 rounded-xl text-gray-700 dark:text-slate-300 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/50 dark:hover:shadow-blue-900/50"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:shalchianarash@gmail.com"
            className="mac-bounce-hover group p-2 bg-gray-100 dark:bg-slate-800/80 rounded-xl text-gray-700 dark:text-slate-300 hover:bg-purple-600 dark:hover:bg-purple-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-300/50 dark:hover:shadow-purple-900/50"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-px h-4 bg-gradient-to-b from-transparent via-gray-300 dark:via-slate-600 to-transparent"></div>

        <p className="text-xs text-gray-600 dark:text-slate-400">
          © {currentYear} <span className="font-semibold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">Arash Shalchian</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
