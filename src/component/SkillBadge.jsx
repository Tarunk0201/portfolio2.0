import { ArrowLeft, ArrowRight } from "lucide-react";

// Helper component for the skill badges
const SkillBadge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gray-800 text-gray-200 border border-gray-700 hover:bg-green-600 hover:border-violet-600 transition-colors cursor-default ${className}`}
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
    <section className="min-h-screen dark:text-white text-black flex flex-col justify-start py-8 px-8 md:px-16 lg:px-24">
      {/* Section Title */}
      <h2 className="text-2xl md:text-5xl font-extrabold dark:text-white text-black mb-2">
        Skills & Tools
      </h2>

      {/* Tagline/Subtitle */}
      <h3 className="text-xl md:text-3xl font-extrabold text-gray-500 mb-10">
        Learned by coding all night and debugging all day!
      </h3>

      {/* Description */}
      <p className="text-md md:text-lg dark:text-gray-300 text-black max-w-5xl leading-relaxed mb-12">
        As a full-stack Software Engineer, I specialize in building scalable web
        applications using modern technologies such as{" "}
        <span className="dark:text-white text-black  font-medium">Next.js</span>
        , <span className="dark:text-white text-black  font-medium">React</span>
        , and{" "}
        <span className="dark:text-white text-black  font-medium">
          Tailwind CSS
        </span>
        . I'm also expanding my expertise into{" "}
        <span className="dark:text-white text-black  font-medium">DevOps</span>{" "}
        and{" "}
        <span className="dark:text-white text-black  font-medium">
          cloud practices
        </span>{" "}
        to create efficient, maintainable, robust web solutions.
      </p>

      <ol className="list-disc list-inside mb-8 space-y-2">
        <label className="text-lg md:text-xl font-semibold dark:text-gray-200 text-black">
          Here’s what I bring to the table
        </label>
        <li className="leading-relaxed max-w-6xl text-gray-500">
          Full-Stack Development: Balancing front-end elegance with back-end
          performance using the MERN stack (MongoDB, Express.js, React.js,
          Node.js).
        </li>
        <li className="leading-relaxed max-w-6xl text-gray-500">
          Pixel-Perfect Design: Creating responsive, visually appealing
          interfaces that deliver consistent performance across all devices.
        </li>
        <li className="leading-relaxed max-w-6xl text-gray-500">
          API Development: Building secure, scalable RESTful and GraphQL APIs
          that power seamless data flow.
        </li>
        <li className="leading-relaxed max-w-6xl text-gray-500">
          Database Management: Implementing optimized MongoDB and NoSQL data
          structures for high performance and reliability.
        </li>
        <li className="leading-relaxed max-w-6xl text-gray-500">
          UI/UX Implementation: Turning ideas into intuitive, engaging user
          experiences with a focus on usability and aesthetics.
        </li>
        <li className="leading-relaxed max-w-6xl text-gray-500">
          DevOps & Deployment: Automating workflows with CI/CD pipelines,
          Docker, and cloud services to ensure smooth and scalable deployments.
        </li>
        <li className="leading-relaxed max-w-6xl text-gray-500">
          Version Control & Collaboration: Managing projects efficiently through
          Git, GitHub, and agile methodologies.
        </li>
      </ol>

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
          onClick={() => setActiveSection("Experience")}
          className="hover:opacity-100 text-gray-500 flex items-center gap-1 font-medium"
        >
          <ArrowLeft size={16} /> Experience
        </button>

        <button
          onClick={() => setActiveSection("Projects")}
          className="hover:opacity-100 text-gray-500 flex items-center gap-1 font-medium"
        >
          Projects <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
