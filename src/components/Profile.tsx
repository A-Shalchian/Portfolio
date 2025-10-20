import Image from "next/image";
import pfpic from "@/assets/images/pfpic.jpg";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

export const Profile = () => {
  return (
    <div className="group relative flex flex-col items-center justify-center h-full p-4 lg:p-6 bg-white dark:bg-slate-800/95 rounded-2xl border border-gray-200 dark:border-slate-600/50 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-500 hover:border-gray-300 dark:hover:border-slate-500">
      {/* Location Badge */}
      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-slate-700/70 rounded-full text-xs text-gray-700 dark:text-slate-300">
        <FaMapMarkerAlt className="w-3 h-3" />
        <span>Toronto, ON</span>
      </div>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
        <Image
          src={pfpic}
          alt="Profile Picture"
          width={120}
          height={120}
          quality={100}
          priority
          className="relative rounded-full mb-4 w-24 h-24 lg:w-32 lg:h-32 object-cover ring-4 ring-gray-200 dark:ring-slate-600 group-hover:ring-gray-300 dark:group-hover:ring-slate-500 transition-all duration-500"
        />
      </div>
      <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 dark:from-slate-100 dark:via-blue-100 dark:to-slate-100 bg-clip-text text-transparent">
        Arash Shalchian
      </h1>
      <p className="text-base lg:text-lg text-gray-600 dark:text-slate-300 mt-1">Software Developer</p>

      {/* Github and LinkedIn */}
      <div className="flex space-x-4 mt-4">
        <a
          href="https://github.com/A-shalchian"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 hover:scale-110 transition-all duration-300"
        >
          <FaGithub className="w-6 h-6 lg:w-7 lg:h-7" />
        </a>
        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/arash-shalchian/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 hover:scale-110 transition-all duration-300"
        >
          <FaLinkedin className="w-6 h-6 lg:w-7 lg:h-7" />
        </a>
      </div>
      {/* Resume */}
    </div>
  );
};
