import { ArrowLeft, ArrowRight } from "lucide-react";

// Helper component for the skill badges
const SkillBadge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gray-800 text-gray-200 border border-gray-700 hover:bg-violet-600 hover:border-violet-600 transition-colors cursor-default ${className}`}
  >
    {children}
  </span>
);

export default function SkillsTools({ setActiveSection }) {
  const skillsRow1 = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "React.JS",
    "Redux",
  ];
  const skillsRow2 = [
    "Node.JS",
    "Express.JS",
    "MongoDB",
    "MySQL",
    "GraphQL",
    "Firebase",
    "Docker",
  ];
  const skillsRow3 = ["Vercel", "Git", "GitHub", "Postman", "npm"];

  return (
    <section className="min-h-screen text-gray-100 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
        Skills & Tools
      </h2>

      {/* Tagline/Subtitle */}
      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-400 mb-10">
        Learned by coding all night and debugging all day!
      </h3>

      {/* Description */}
      <p className="text-lg text-gray-300 max-w-5xl leading-relaxed mb-12">
        As a full-stack Software Engineer, I specialize in building scalable web
        applications using modern technologies such as{" "}
        <span className="text-white font-medium">Next.js</span>,{" "}
        <span className="text-white font-medium">React</span>, and{" "}
        <span className="text-white font-medium">Tailwind CSS</span>. I'm also
        expanding my expertise into{" "}
        <span className="text-white font-medium">DevOps</span> and{" "}
        <span className="text-white font-medium">cloud practices</span> to
        create efficient, maintainable, robust web solutions.
      </p>

      {/* Skills Badges Container */}
      <div className="flex flex-col space-y-4 max-w-6xl">
        {/* Row 1 */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {skillsRow1.map((skill) => (
            <SkillBadge key={skill}>{skill}</SkillBadge>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {skillsRow2.map((skill) => (
            <SkillBadge key={skill}>{skill}</SkillBadge>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {skillsRow3.map((skill) => (
            <SkillBadge key={skill}>{skill}</SkillBadge>
          ))}
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between items-center mt-12 text-sm">
        <button
          onClick={() => setActiveSection("Projects")}
          className="hover:opacity-100 dark:text-white text-black opacity-50 flex items-center gap-1 font-medium"
        >
          <ArrowLeft size={16} /> Projects
        </button>

        <button
          onClick={() => setActiveSection("Experience")}
          className="hover:opacity-100 dark:text-white text-black opacity-50 flex items-center gap-1 font-medium"
        >
          Experience <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
