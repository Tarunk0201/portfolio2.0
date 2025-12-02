import { ArrowLeft, ArrowRight } from "lucide-react";

// Helper component for the individual project card
const ProjectCard = ({ title, tagline, description, onClick }) => (
  <div
    className="p-6 dark:bg-gray-800 bg-gray-200 rounded-lg shadow-xl border dark:border-gray-700 border-gray-200 hover:border-violet-600 transition-all duration-300 flex flex-col justify-between cursor-pointer"
    onClick={onClick}
  >
    <div>
      <h4 className="text-xl font-bold dark:text-white text-gray-700 mb-1">
        {title}
      </h4>
      <p className="text-lg font-semibold text-violet-400 mb-3">{tagline}</p>
      {/* <p className="text-gray-300 text-base mb-4 line-clamp-3">{description}</p> */}
    </div>
    <div className="text-sm font-medium text-violet-500 hover:text-violet-400 transition-colors duration-500">
      Learn More...
    </div>
  </div>
);

export default function Projects({ setActiveSection, setSelectedProject }) {
  const projects = [
    {
      title: "SwasthFit | Healthcare API Development",
      tagline:
        "An AI healthcare platform for real-time coach interaction and secure data.",
      description:
        "SwasthFit is a full-featured health application designed to connect users with fitness professionals and track detailed health metrics. As a core member of the backend team, my primary responsibility was developing and integrating critical APIs for real-time communication, video conferencing, and secure user verification to ensure a reliable and engaging user experience.",
      link: "",
      Role: "Backend Developer (Core APIs)",
      subtitle:
        "An AI healthcare platform for real-time coach interaction and secure data.",
      techStack: [
        "Node.js",
        "Express",
        "REST APIs",
        "Firebase",
        "Zegocloud",
        "Edamam API",
        "HealthKit ",
        "Veridas.com",
        "OTP-less Verification",
      ],
      features: [
        "Used Firebase to build a real-time chat API for users and coaches.",
        "Built secure one-on-one video calling for coaches using Zegocloud.",
        "Implemented OTP-less backend for faster, frictionless user login.",
        "Used a third-party API for secure user ID verification at registration.",
        "Developed APIs to sync nutrition Edamam and steps HealthKit.",
      ],
      learnings: [
        "Gained experience scaling real-time apps using FCM and Firebase.",
        "Gained experience integrating and sanitizing health APIs Edamam, HealthKit.",
        "Gained expertise in complex, user-friendly security flows Veridas, OTP-less.",
      ],
      challenges: [
        "Architected chat for high concurrency and low latency.",
        "Standardized all third-party APIs into one REST API for mobile.",
        "Optimized secure OTP-less and ID verification for speed.",
      ],
      liveLink: "https://play.google.com/store/apps/details?id=com.swasthfit",
      githubLink: "https://github.com/Tarunk0201/swasthfit.git",
    },
    {
      title: "DreamWheel | Full-Stack Antique Showcase Development",
      tagline:
        "A full-stack React and Node.js platform dedicated to showcasing rare and antique vehicles.",
      description:
        "DreamWheel is a comprehensive web application designed exclusively to showcase a curated collection of antique and rare vehicles. As the Sole Full-Stack Developer, I was responsible for architecting and developing the entire application, including the React.js frontend and the Node.js/Express backend APIs. I managed the database design, built the secure REST APIs to serve detailed vehicle data, and created the responsive UI to display extensive specifications, history, and high-resolution imagery.",
      link: "https://dreamwheel.tarundev.in/",
      Role: "Full-Stack Developer (React & Node.js)",
      subtitle:
        "A complete application built from the ground up using the React and Node.js stack.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "REST APIs",
        "Redux Toolkit",
      ],
      features: [
        "Developed responsive SPA using React/Tailwind CSS for high performance and visual fidelity.",
        "Designed Node.js/Express backend to serve structured vehicle data via secure REST APIs.",
        "Integrated custom frontend/backend for fetching detailed vehicle specifications and history.",
        "Created advanced React filtering components to effectively sort the antique car collection.",
        "Managed state with Redux Toolkit; implemented async data fetching from custom API.",
      ],
      learnings: [
        "Gained expertise building and deploying a complete React and Node.js full-stack application.",
        "Mastered the full development cycle: database design, API creation, and state management.",
        "Improved skills creating performant and scalable data serving layers using Node.js/Express.",
        "Learned best practices for API integration and data structure design in decoupled architecture.",
      ],
      challenges: [
        "Optimized the full-stack data pipeline architecture for speed and decoupled responsiveness.",
        "Built and documented the internal REST API to efficiently handle historical vehicle data queries.",
        "Ensured robust data synchronization and error handling between React and Node.js backend.",
      ],
      liveLink: "https://dreamwheel.tarundev.in/",
      githubLink: "https://github.com/Tarunk0201/cars-frontend",
    },
  ];

  return (
    <section className="min-h-screen dark:text-white text-black flex flex-col justify-start py-8 px-8 md:px-16 lg:px-24 ">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold dark:text-white text-black mb-2">
        Projects
      </h2>

      {/* Tagline/Subtitle */}
      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-500 mb-10">
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
            onClick={() => {
              setSelectedProject(project);
              setActiveSection("ProjectDetail");
            }}
          />
        ))}
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between items-center mt-12 text-sm">
        <button
          onClick={() => setActiveSection("Skills & Tools")}
          className="hover:opacity-100 text-gray-500 flex items-center gap-1 font-medium"
        >
          <ArrowLeft size={16} /> Skills & Tools
        </button>

        <button
          onClick={() => setActiveSection("Contact")}
          className="hover:opacity-100 text-gray-500 flex items-center gap-1 font-medium"
        >
          Contact <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
