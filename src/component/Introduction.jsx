import { Mail, ExternalLink } from "lucide-react";

export default function Introduction({ setActiveSection }) {
  return (
    <section className="min-h-screen text-gray-100 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-3 lg:pt-0">
      {/* Name */}
      <h1 className="text-2xl md:text-5xl font-extrabold text-black dark:text-white mb-2">
        Tarun Singh
      </h1>

      {/* Tagline */}
      <h2 className="text-xl md:text-4xl font-extrabold opacity-50 dark:text-white text-black mb-6">
        Full-stack efficiency, end-to-end excellence.{" "}
      </h2>

      {/* Description */}
      <p className="text-md md:text-lg dark:text-white text-black max-w-4xl leading-relaxed mb-8">
        Hi, I’m{" "}
        <span className="dark:text-white text-black opacity-80 font-medium">
          Tarun Kumar Singh
        </span>
        , a{" "}
        <span className="dark:text-white text-black opacity-80 font-medium">
          MERN Stack Developer
        </span>{" "}
        based in{" "}
        <span className="dark:text-white text-black opacity-80 font-medium">
          Indore, India
        </span>
        . I build{" "}
        <span className="dark:text-white text-black opacity-80 font-medium">
          modern, responsive web applications
        </span>{" "}
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
        , with a focus on delivering{" "}
        <span className="dark:text-white text-black opacity-80 font-medium">
          smooth, fast, and impactful user experiences
        </span>
        .
      </p>

      <p className="text-md md:text-lg dark:text-white text-black max-w-4xl leading-relaxed mb-8">
        I have a strong foundation in{" "}
        <span className="dark:text-white text-black opacity-80 font-medium">
          full-stack web development
        </span>
        , combining clean code, intuitive design, and optimized performance to
        create solutions that truly make a difference. Driven by curiosity and a
        passion for technology, I’m always eager to explore new tools, refine my
        skills, and take on challenges that push the boundaries of what’s
        possible on the web.
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
