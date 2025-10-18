import { useState, useEffect } from "react";
import { Sun, Moon, Music, Github, Menu } from "lucide-react";

export default function Navbar({
  setActiveSection,
  sidebarOpen,
  setSidebarOpen,
}) {
  const [darkMode, setDarkMode] = useState(true);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    document.documentElement.classList.toggle("light");
  };

  const formattedTime = time.toLocaleTimeString();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b dark:text-white text-black border-black/10 backdrop-blur-lg">
      <div className="flex items-center justify-between px-8 py-3 text-sm">
        {/* Left Section */}
        <div className="flex items-center gap-8">
          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden w-6 h-6 flex items-center justify-center hover:opacity-100 opacity-50 transition"
          >
            <Menu className="w-5 h-5" />
          </button>

          <a href="/" className="font-bold text-lg">
            <span className=" opacity-50">Tarun</span>Singh
          </a>

          <div className="hidden sm:flex items-center gap-5">
            <button
              onClick={() => setActiveSection("Introduction")}
              className="hover:opacity-100 opacity-50 transition"
            >
              Home
            </button>
            <a
              href="https://www.linkedin.com/in/tarun-kumar-singh-b939972a2/"
              className="hover:opacity-100 opacity-50 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="#resume"
              className="hover:opacity-100 opacity-50 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume ↗
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center opacity-0 lg:opacity-100 bg-white/5 border  border-white/10 rounded-lg px-3 py-1.5">
            <input
              type="text"
              placeholder="Search sections..."
              className="bg-transparent outline-none dark:text-white text-gray-700 placeholder-gray-500 w-0 lg:w-48"
            />
          </div>

          <div className="bg-green-500/20 text-green-400 hidden md:block px-3 py-1.5 rounded-full text-xs font-semibold">
            {formattedTime}
          </div>
          <Music className="w-4 h-4 cursor-pointer hover:opacity-100 opacity-50" />
          {darkMode ? (
            <Sun
              onClick={toggleTheme}
              className="w-4 h-4 cursor-pointer hover:opacity-100 opacity-50"
            />
          ) : (
            <Moon
              onClick={toggleTheme}
              className="w-4 h-4 cursor-pointer hover:opacity-100 opacity-50"
            />
          )}
          <a
            href="https://github.com/Tarunk0201"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4 hover:opacity-100 opacity-50" />
          </a>
        </div>
      </div>
    </nav>
  );
}
