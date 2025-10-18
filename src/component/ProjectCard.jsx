import { ArrowLeft, ArrowRight } from "lucide-react";

// Helper component for the individual project card
const ProjectCard = ({ title, tagline, description, link }) => (
  <div className="p-6 bg-gray-800 rounded-lg shadow-xl border border-gray-700 hover:border-violet-600 transition-all duration-300 flex flex-col justify-between">
    <div>
      <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
      <p className="text-lg font-semibold text-violet-400 mb-3">{tagline}</p>
      <p className="text-gray-300 text-base mb-4 line-clamp-3">{description}</p>
    </div>
    <a
      href={link}
      className="text-sm font-medium text-violet-500 hover:text-violet-400 transition-colors"
    >
      Learn More...
    </a>
  </div>
);

export default function Projects({ setActiveSection }) {
  const projects = [
    {
      title: "Nike Reimagined",
      tagline: "Modern Redesign Concept",
      description:
        "A sleek and modern redesign of Nike's official web experience built with React and Tailwind CSS.",
      link: "#",
    },
    {
      title: "Portfolio | Aditya Domle",
      tagline:
        "A dynamic portfolio showcasing my projects, skills, and contributions using the latest web technologies.",
      description:
        "A dynamic portfolio showcasing my projects, skills, and contributions using the latest web technologies.",
      link: "#",
    },
    {
      title: "News Hub | Real-Time News Platform",
      tagline: "Real-Time News Platform",
      description:
        "A real-time news platform delivering the latest headlines across various categories using the News API.",
      link: "#",
    },
    {
      title: "Freshmart Store | Modern Grocery Web App",
      tagline: "Modern Grocery Web App",
      description:
        "A clean, modern, and responsive grocery store web app built with React, Vite, Redux, and Tailwind CSS.",
      link: "#",
    },
    {
      title: "GitHub Profile Viewer | Instant GitHub Insights",
      tagline: "Instant GitHub Insights",
      description:
        "An interactive web app to instantly view GitHub profiles with clean UI built using HTML, CSS, and JavaScript.",
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen dark:text-white text-black flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 pt-28">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold dark:text-white text-black mb-2">
        Projects
      </h2>

      {/* Tagline/Subtitle */}
      <h3 className="text-2xl md:text-3xl font-extrabold opacity-50 dark:text-white text-black mb-10">
        A lot of ideas, but some are still under construction!
      </h3>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            tagline={project.tagline}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between items-center mt-12 text-sm">
        <button
          onClick={() => setActiveSection("About Me")}
          className="hover:opacity-100 dark:text-white text-black opacity-50 flex items-center gap-1 font-medium"
        >
          <ArrowLeft size={16} /> About
        </button>

        <button
          onClick={() => setActiveSection("Skills & Tools")}
          className="hover:opacity-100 dark:text-white text-black opacity-50 flex items-center gap-1 font-medium"
        >
          Skills & Tools <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
