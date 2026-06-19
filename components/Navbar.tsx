export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-2xl font-bold text-blue-900">
          MyPorto
        </h1>

        <ul className="flex gap-8">
          <li>
            <a href="#" className="text-slate-700 hover:text-blue-900 duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="text-slate-700 hover:text-blue-900 duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="text-slate-700 hover:text-blue-900 duration-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#certificates" className="text-slate-700 hover:text-blue-900 duration-300">
              Certificates
            </a>
          </li>
          
          <li>
            <a href="#skills" className="text-slate-700 hover:text-blue-900 duration-300">
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" className="text-slate-700 hover:text-blue-900 duration-300">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}