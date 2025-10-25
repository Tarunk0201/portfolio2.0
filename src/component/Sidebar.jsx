import { useState } from "react";

export default function Sidebar({
  active,
  setActive,
  sidebarOpen,
  setSidebarOpen,
}) {
  const sections = [
    "Introduction",
    "About Me",
    "Projects",
    "Skills & Tools",
    "Experience",
    // "Education",
    "Contact",
    // "Stats",
  ];

  const handleSectionClick = (item) => {
    setActive(item);
    setSidebarOpen(false); // Close sidebar on mobile after selecting
  };

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-full w-64 p-6 backdrop-blur-lg dark:text-white text-black font-semibold z-50 transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } md:relative md:translate-x-0`}
      >
        {/* Logo */}
        <div className="mb-8 flex items-center gap-2">
          <a href="/" className="font-bold text-lg text-white">
            <span className="text-transparent">Tarun</span>
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => handleSectionClick(item)}
              className={`text-left px-3 py-2 rounded-md transition-colors ${
                active === item
                  ? "bg-white/10 opacity-100"
                  : "hover:bg-white/5 opacity-50"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
