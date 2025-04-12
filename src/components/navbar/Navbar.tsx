export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-full w-32 bg-emerald-500">
      <div className="flex flex-col items-center justify-evenly h-full">
        <a href="" className="text-white text-lg font-bold">
          Home
        </a>
        <a href="/projects" className="text-white text-lg font-bold">
          Projects
        </a>
        <a href="/contact" className="text-white text-lg font-bold">
          Contact
        </a>
        <a href="/experience" className="text-white text-lg font-bold">
          Experience
        </a>
      </div>
    </nav>
  );
};
