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
      </nav>
    </div>
  );
};
