import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-1 md:py-8 text-cente dark:text-gray-300 text-black border-t border-gray-800 mt-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-border-move"></div>
      <div className="flex flex-col items-center space-y-1 md:space-y-2 px-4">
        {/* Line 1 */}
        <p className="text-center text-xs md:text-sm">
          ©{new Date().getFullYear()} - Built with{" "}
          <span className="dark:text-white text-black font-medium">
            vite/react.js
          </span>{" "}
          and{" "}
          <span className="dark:text-white text-black font-medium">
            Tailwind CSS
          </span>
          . Coded in{" "}
          <span className="dark:text-white text-black font-medium">Cursor</span>{" "}
          and deployed with{" "}
          <span className="dark:text-white text-black font-medium">Vercel</span>
        </p>

        {/* Line 2 */}
        <p className="text-center text-xs md:text-sm">
          Developed by{" "}
          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
          >
            Tarun Singh
          </a>{" "}
          · Source code available on{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
          >
            github
          </a>
        </p>
      </div>
    </footer>
  );
}
