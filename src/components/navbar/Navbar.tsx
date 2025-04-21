"use client";
import { useState } from "react";
import { Home, Code } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState("/");

  return (
    <div className="w-full flex justify-center items-center top-3 fixed z-10">
      <nav className="flex p-0.5 border border-white/15 rounded-full bg-gray-400 backdrop-blur">
        <Link
          href="/"
          className={`nav-item transition-colors duration-300 ease-in-out ${
            activeItem === "/"
              ? "bg-white text-gray-900"
              : "hover:bg-gray-500 hover:text-gray-900"
          }`}
          onClick={() => setActiveItem("/")}
        >
          <Home />
        </Link>
        <Link
          href="/projects"
          className={`nav-item transition-colors duration-300 ease-in-out ${
            activeItem === "projects"
              ? "bg-white text-gray-900"
              : "hover:bg-gray-500 hover:text-gray-900"
          }`}
          onClick={() => setActiveItem("projects")}
        >
          <Code />
        </Link>
      </nav>
    </div>
  );
};
