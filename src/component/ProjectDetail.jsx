import { ArrowLeft, ArrowUpRight } from "lucide-react";

// Re-usable heading component matching your style
const SectionHeading = ({ title }) => (
  <h3 className="text-lg md:text-xl font-semibold opacity-90 mb-4">{title}</h3>
);

// Re-usable list component matching your style
const ProjectList = ({ items }) => (
  <ul className="list-disc list-inside space-y-2">
    {items.map((item, index) => (
      <li key={index} className="leading-relaxed opacity-60 max-w-4xl">
        {item}
      </li>
    ))}
  </ul>
);

// Main Component
export default function ProjectDetail({ setActiveSection, project }) {
  const currentProject = project;
  return (
    <section className="min-h-screen dark:text-white text-black flex flex-col justify-start px-8 md:px-16 lg:px-24 py-8">
      {/* Back Button */}
      <button
        onClick={() => setActiveSection("Projects")}
        className="hover:opacity-100  opacity-50 flex items-center gap-1 font-medium mb-8"
      >
        <ArrowLeft size={16} /> Back to projects
      </button>

      {/* Main Title */}
      <h2 className="text-3xl md:text-5xl font-extrabold  mb-4">
        {currentProject.title}
      </h2>

      {/* Subtitle */}
      <h3 className="text-lg md:text-2xl font-medium opacity-70  mb-6">
        {currentProject.subtitle}
      </h3>

      {/* Main Description */}
      <p className="md:text-lg opacity-80  max-w-5xl leading-relaxed mb-10">
        {currentProject.description}
      </p>

      {/* Tech Stack */}
      <div className="mb-12">
        <SectionHeading title="Tech Stack" />
        <div className="flex flex-wrap gap-3">
          {currentProject.techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm font-medium px-4 py-1.5 rounded-full bg-gray-800 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {/* Left Column */}
        <div className="flex flex-col gap-12">
          {/* Features */}
          <div>
            <SectionHeading title="Features" />
            <ProjectList items={currentProject.features} />
          </div>
          {/* Learnings */}
          <div>
            <SectionHeading title="Learnings" />
            <ProjectList items={currentProject.learnings} />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-12">
          {/* Challenges */}
          <div>
            <SectionHeading title="Challenges" />
            <ProjectList items={currentProject.challenges} />
          </div>
          {/* Links */}
          <div>
            <SectionHeading title="Links" />
            <div className="flex items-center gap-4">
              {/* Live Link Button (Styled with violet from your reference) */}
              <button
                onClick={() => window.open(currentProject.liveLink, "_blank")}
                className="inline-flex items-center justify-center text-sm font-semibold px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-700  transition-colors"
              >
                Live <ArrowUpRight size={16} className="ml-1.5" />
              </button>
              {/* GitHub Link (Styled like your nav links) */}
              <button
                onClick={() => window.open(currentProject.githubLink, "_blank")}
                className="hover:opacity-100  opacity-50 flex items-center gap-1 font-medium transition-opacity"
              >
                GitHub <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
