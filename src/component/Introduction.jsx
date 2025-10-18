import { Mail, ExternalLink } from "lucide-react";

export default function Introduction({ setActiveSection }) {
  return (
    <section className="min-h-screen text-gray-100 flex flex-col justify-center px-8 md:px-16 lg:px-24">
      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-2">
        Tarun Singh
      </h1>

      {/* Tagline */}
      <h2 className="text-3xl md:text-4xl font-extrabold opacity-50 dark:text-white text-black mb-6">
        A coder by day, problem-solver by night!
      </h2>

      {/* Description */}
      <p className="text-lg dark:text-white text-black max-w-4xl leading-relaxed mb-8">
        MERN Stack developer with a strong foundation in full-stack web
        development. Skilled in building user-friendly, responsive applications
        using{" "}
        <span className="dark:text-white text-black opacity-80 font-medium">
          MongoDB
        </span>
        ,{" "}
        <span className="dark:text-white text-black opacity-80 font-medium">
          Express.js
        </span>
        ,{" "}
        <span className="dark:text-white text-black opacity-80 font-medium">
          React.js
        </span>
        , and{" "}
        <span className="dark:text-white text-black opacity-80 font-medium">
          Node.js
        </span>
        . Although, coming from a non-technical background, my passion for tech
        and eagerness to learn drive me to adapt quickly and grow continuously
        in this field.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all"
        >
          Get Resume <ExternalLink size={16} />
        </a>

        <a
          href="mailto:youremail@example.com"
          className="inline-flex items-center gap-2 opacity-50 hover:opacity-100 dark:text-white text-black text-sm font-medium"
        >
          <Mail size={16} /> Send Mail
        </a>
      </div>

      {/* Scroll Link */}
      <div className="mt-10 flex justify-end">
        <button
          onClick={() => setActiveSection("About Me")}
          className="hover:opacity-100 dark:text-white text-black opacity-50 flex items-center gap-1 text-sm font-medium"
        >
          About Me <span className="text-lg">›</span>
        </button>
      </div>
    </section>
  );
}
