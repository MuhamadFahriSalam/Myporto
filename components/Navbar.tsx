export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-2xl font-bold text-blue-500">
          MyPorto
        </h1>

        <ul className="flex gap-8">
          <li>
            <a href="#" className="hover:text-blue-500 duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-500 duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-500 duration-300">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-500 duration-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-500 duration-300">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}