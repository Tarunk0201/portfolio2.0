import { useState } from "react";

export default function Sidebar({ active, setActive }) {
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

  return (
    <aside className="fixed left-0 top-0 h-full w-64 p-6 backdrop-blur-lg dark:text-white text-black font-semibold">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-2">
        <a href="/" className="font-bold text-lg text-white">
          <span className="text-transparent">Tarun</span>
        </a>
      </div>

      {/* Section Title */}
      <h2 className="text-sm font-semibold opacity-50 mb-4 uppercase tracking-wide">
        Sections
      </h2>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2">
        {sections.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
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
  );
}
