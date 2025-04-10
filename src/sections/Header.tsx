import ArrowUpRightIcon from "@/assets/icons/arrow-down.svg";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          className="nav-item hover:bg-white hover:text-gray-900 transition-colors duration-300 ease-in-out target:bg-white target:text-gray-900"
        >
          Home
        </a>
        <a
          href="#projects"
          className="nav-item hover:bg-white hover:text-gray-900 transition-colors duration-300 ease-in-out target:bg-white target:text-gray-900"
        >
          Projects
        </a>
        <a
          href="#about"
          className="nav-item hover:bg-white hover:text-gray-900 transition-colors duration-300 ease-in-out target:bg-white target:text-gray-900"
        >
          About
        </a>
        <a
          href="#contact"
          className="nav-item hover:bg-white hover:text-gray-900 transition-colors duration-300 ease-in-out target:bg-white target:text-gray-900"
        >
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/12B62nEyRKasqH7VWBhoB76J6cg26Lu8b/view?usp=sharing"
          className="nav-item hover:bg-white hover:text-gray-900 transition-colors duration-300 ease-in-out target:bg-white target:text-gray-900"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
    </div>
  );
};
