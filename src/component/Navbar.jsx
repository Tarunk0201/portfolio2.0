import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Menu, ChevronDown, Check } from "lucide-react";

export default function Navbar({
  setActiveSection,
  sidebarOpen,
  setSidebarOpen,
  showMobilePopup,
}) {
  const [darkMode, setDarkMode] = useState(true);
  const [time, setTime] = useState(new Date());
  const [selectedVersion, setSelectedVersion] = useState("v1.0");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    document.documentElement.classList.toggle("light");
  };

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const versions = ["v1.0"];
  const handleVersionSelect = (version) => {
    setSelectedVersion(version);
    // Close the menu after selection
    setIsMenuOpen(false); // TODO: Add logic here to redirect or load the corresponding portfolio version
    console.log(`Attempting to load version: ${version}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b dark:text-white text-black border-black/10 backdrop-blur-lg">
      <div className="flex items-center justify-between px-8 py-3 text-sm">
        {/* Left Section */}
        <div className="flex items-center gap-8">
          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`md:hidden w-6 h-6 flex items-center justify-center hover:opacity-100 opacity-100 md:opacity-50 transition rounded-full ${
              showMobilePopup
                ? "bg-violet-600 hover:bg-violet-700 animate-radiate shadow-lg shadow-violet-600/50 ring-2 ring-violet-600"
                : ""
            }`}
          >
            <Menu className="w-5 h-5" />
          </button>

          <button
            onClick={() => setActiveSection("About")}
            className="font-bold text-2xl"
          >
            <span className=" opacity-50">Tarun</span>Singh
          </button>

          <div className="hidden sm:flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/tarun-kumar-singh-b939972a2/"
              className="hover:opacity-100 opacity-50 transition text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/Tarunk0201"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 opacity-50 text-lg transition"
            >
              GitHub ↗
            </a>
            <a
              href="/Tarun Kumar (MERN Stack).pdf"
              className="hover:opacity-100 opacity-50 text-lg transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume ↗
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {darkMode ? (
            <Sun
              onClick={toggleTheme}
              className="w-6 h-6 cursor-pointer hover:opacity-100 opacity-50"
            />
          ) : (
            <Moon
              onClick={toggleTheme}
              className="w-6 h-6 cursor-pointer hover:opacity-100 opacity-50"
            />
          )}

          {/* Version indicator */}
          <div ref={menuRef} className="relative hidden md:block z-50">
            {/* The clickable button that shows the selected version */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-1.5 bg-violet-500/20 text-violet-400 hover:bg-violet-300 hover:text-violet-600 px-3 py-1.5 rounded-full text-sm font-medium  transition duration-150"
            >
              <span>{selectedVersion}</span>
              {/* Using ChevronDown icon instead of the custom SVG for better integration */}
              <ChevronDown
                className={`w-4 h-4 opacity-50 transition-transform ${
                  isMenuOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* The Dropdown Menu (Popover) - Conditionally rendered */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-xl shadow-2xl bg-violet-500/20 bg- hover:text-violet-600 border-gray-100 dark:border-gray-700 overflow-hidden py-2">
                {versions.map((version) => (
                  <button
                    key={version}
                    onClick={() => handleVersionSelect(version)}
                    className={`font-semibold flex items-center justify-between w-full px-4 py-2 text-sm text-violet-400 hover:text-violet-600 hover:bg-gray-50 dark:hover:bg-violet-300 transition`}
                  >
                    <span>{version}</span>
                    {/* Display the checkmark if this version is selected */}
                    {version === selectedVersion && (
                      <Check className="w-4 h-4 text-violet-600" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="w-28 text-center bg-violet-500/20 text-violet-400 hover:bg-violet-300 hover:text-violet-600 hidden md:block px-3 py-1.5 rounded-full text-xs font-semibold">
            {formattedTime}
          </div>
        </div>
      </div>
    </nav>
  );
}
