import { ArrowLeft, ArrowRight } from "lucide-react";

export default function About({ setActiveSection }) {
  return (
    <section className="min-h-screen text-gray-100 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-5">
      {/* Section Title */}
      <h2 className="text-2xl md:text-5xl font-extrabold text-black dark:text-white mb-2">
        About Tarun
      </h2>

      {/* Tagline/Subtitle */}
      <h3 className="text-xl md:text-3xl font-extrabold opacity-50 dark:text-white text-black mb-10">
        More than just a title—let's dive deeper!
      </h3>

      {/* Content */}
      <div className="max-w-4xl md:text-lg text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
        {/* Paragraph 1 */}
        <p>
          <span className="dark:text-white text-black opacity-80 font-medium">
            Hi, I’m a MERN Stack Developer based in Indore , India
          </span>
          . I build modern, responsive web apps with{" "}
          <span className="dark:text-white text-black opacity-80 font-medium">
            MongoDB
          </span>
          ,{" "}
          <span className="dark:text-white text-black opacity-80 font-medium">
            Express.js
          </span>
          ,
          <span className="dark:text-white text-black opacity-80 font-medium">
            React.js
          </span>
          , and{" "}
          <span className="dark:text-white text-black opacity-80 font-medium">
            Node.js
          </span>
          ,focusing on smooth, fast, and impactful user experiences — from UI
          design to database efficiency.
        </p>

        {/* Paragraph 2 */}
        <p className="dark:text-white text-black opacity-80 text-lg md:text-2xl font-medium pt-5">
          Here’s what I bring to the table:
        </p>

        {/* Paragraph 3 */}
        <ol className="text-md md:text-lg list-disc list-inside space-y-2">
          <li>
            Full-stack development that balances front-end elegance with
            back-end power
          </li>
          <li>
            Pixel-perfect, responsive web design that works beautifully on
            anydevice
          </li>

          <li>RESTful API development that’s secure and scalable</li>

          <li>
            Robust database management with MongoDB and NoSQL best practices
          </li>
          <li>UI/UX implementation that keeps users engaged and happy</li>
        </ol>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between items-center mt-12 text-sm">
        <button
          onClick={() => setActiveSection("Introduction")}
          className="hover:opacity-100 dark:text-white text-black opacity-50 flex items-center gap-1 font-medium"
        >
          <ArrowLeft size={16} /> Introduction
        </button>

        <button
          onClick={() => setActiveSection("Projects")}
          className="hover:opacity-100 dark:text-white text-black opacity-50 flex items-center gap-1 font-medium"
        >
          Projects <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
