"use client";
import { Hammer } from "lucide-react";

export default function BlogPage() {
  return (
    <main className="relative w-full min-h-screen lg:h-screen lg:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-slate-500">
      {/* Animated background glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-2xl w-full text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-slate-600/50 shadow-lg">
              <Hammer className="w-16 h-16 text-gray-400 dark:text-slate-500" />
            </div>
          </div>

          {/* Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Blog Coming Soon
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-slate-400 mb-4">
            Nothing to see here yet, I&apos;m still working on it.
          </p>
          <p className="text-base text-gray-500 dark:text-slate-500">
            Check back soon for probably nothing either. (lowkey if anyone actually sees this text me on telegram @A_Shalchian.
            we can be besties or something)
          </p>
        </div>
      </div>
    </main>
  );
}
