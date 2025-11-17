import { ArrowLeft, ArrowRight } from "lucide-react";

// Helper component for the individual project card
const ProjectCard = ({ title, tagline, description, onClick }) => (
  <div
    className="p-6 bg-gray-800 rounded-lg shadow-xl border border-gray-700 hover:border-violet-600 transition-all duration-300 flex flex-col justify-between cursor-pointer"
    onClick={onClick}
  >
    <div>
      <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
      <p className="text-lg font-semibold text-violet-400 mb-3">{tagline}</p>
      {/* <p className="text-gray-300 text-base mb-4 line-clamp-3">{description}</p> */}
    </div>
    <div className="text-sm font-medium text-violet-500 hover:text-violet-400 transition-colors">
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
    // {
    //   title: "Portfolio | Aditya Domle",
    //   tagline:
    //     "A dynamic portfolio showcasing my projects, skills, and contributions using the latest web technologies.",
    //   description:
    //     "A dynamic portfolio showcasing my projects, skills, and contributions using the latest web technologies.",
    //   link: "#",
    //   subtitle:
    //     "A dynamic portfolio showcasing my projects, skills, and contributions using the latest web technologies.",
    //   techStack: ["React.js", "Tailwind CSS", "Vite", "Framer Motion"],
    //   features: [
    //     "Dynamic project showcase",
    //     "Skills and contributions section",
    //     "Responsive design",
    //     "Smooth animations",
    //   ],
    //   learnings: [
    //     "Advanced React state management",
    //     "Tailwind CSS for styling",
    //     "Vite for fast development",
    //   ],
    //   challenges: [
    //     "Optimizing performance for large content",
    //     "Ensuring cross-browser compatibility",
    //   ],
    //   liveLink: "#",
    //   githubLink: "#",
    // },
    // {
    //   title: "News Hub | Real-Time News Platform",
    //   tagline: "Real-Time News Platform",
    //   description:
    //     "A real-time news platform delivering the latest headlines across various categories using the News API.",
    //   link: "#",
    //   subtitle:
    //     "A real-time news platform delivering the latest headlines across various categories using the News API.",
    //   techStack: ["React.js", "News API", "Tailwind CSS"],
    //   features: [
    //     "Real-time news updates",
    //     "Category-based filtering",
    //     "Responsive design",
    //     "Search functionality",
    //   ],
    //   learnings: [
    //     "API integration",
    //     "State management for dynamic data",
    //     "UI/UX for news platforms",
    //   ],
    //   challenges: [
    //     "Handling API rate limits",
    //     "Ensuring data freshness",
    //     "Optimizing for mobile devices",
    //   ],
    //   liveLink: "#",
    //   githubLink: "#",
    // },
    // {
    //   title: "Freshmart Store | Modern Grocery Web App",
    //   tagline: "Modern Grocery Web App",
    //   description:
    //     "A clean, modern, and responsive grocery store web app built with React, Vite, Redux, and Tailwind CSS.",
    //   link: "#",
    //   subtitle:
    //     "A clean, modern, and responsive grocery store web app built with React, Vite, Redux, and Tailwind CSS.",
    //   techStack: ["React.js", "Vite", "Redux", "Tailwind CSS"],
    //   features: [
    //     "Product catalog",
    //     "Shopping cart functionality",
    //     "User authentication",
    //     "Responsive design",
    //   ],
    //   learnings: [
    //     "Redux for state management",
    //     "Building e-commerce features",
    //     "Vite for build optimization",
    //   ],
    //   challenges: [
    //     "Complex state management",
    //     "Ensuring security for payments",
    //     "Scalability for product inventory",
    //   ],
    //   liveLink: "#",
    //   githubLink: "#",
    // },
    // {
    //   title: "GitHub Profile Viewer | Instant GitHub Insights",
    //   tagline: "Instant GitHub Insights",
    //   description:
    //     "An interactive web app to instantly view GitHub profiles with clean UI built using HTML, CSS, and JavaScript.",
    //   link: "#",
    //   subtitle:
    //     "An interactive web app to instantly view GitHub profiles with clean UI built using HTML, CSS, and JavaScript.",
    //   techStack: ["HTML", "CSS", "JavaScript", "GitHub API"],
    //   features: [
    //     "Profile overview",
    //     "Repository listing",
    //     "Follower and following counts",
    //     "Clean UI design",
    //   ],
    //   learnings: [
    //     "Vanilla JavaScript for DOM manipulation",
    //     "API data fetching",
    //     "Responsive CSS",
    //   ],
    //   challenges: [
    //     "Handling API errors",
    //     "Optimizing for different screen sizes",
    //     "Ensuring fast load times",
    //   ],
    //   liveLink: "#",
    //   githubLink: "#",
    // },
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
