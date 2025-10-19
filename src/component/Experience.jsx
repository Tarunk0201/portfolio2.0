import { ArrowLeft, ArrowRight, Briefcase } from "lucide-react";

// Helper component for an individual experience item
const ExperienceItem = ({
  icon: Icon,
  title,
  company,
  dates,
  description,
  latest = false,
}) => (
  <div className="flex items-start space-x-4">
    {/* Icon/Bullet Point */}
    <div className="flex-shrink-0 mt-1">
      {/* Circle background matching the style */}
      <div className="w-4 h-4 rounded-full bg-violet-600 ring-4 ring-gray-900 flex items-center justify-center">
        {/* Optional: You could use an icon here, but the image shows a simple circle */}
      </div>
    </div>

    {/* Content */}
    <div className="flex-grow pb-8">
      <div className="flex items-center space-x-2 mb-1">
        <h4 className="text-lg md:text-xl font-semibold opacity-90 dark:text-white text-black">
          {title} · {company}
        </h4>
        {latest && (
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-600 opacity-90 dark:text-white text-black tracking-wider">
            Latest
          </span>
        )}
      </div>

      <p className="text-sm  mb-2 opacity-6 0 dark:text-white text-black">
        {dates}
      </p>

      <p className=" leading-relaxed max-w-4xl opacity-60 dark:text-white text-black">
        {description}
      </p>
    </div>
  </div>
);

export default function Experience({ setActiveSection }) {
  // Combine the data from both image examples for a complete section
  const experiences = [
    {
      title: "Trainee",
      company: "Averybit",
      dates: "march 2025 - june 2025",
      description:
        "Worked as a Trainee, where I contributed to a live project using Node.js, Express.js, and Firebase, gaining hands-on experience in backend development and real-world application deployment.",
      latest: false,
    },
    {
      title: "MERN stack Developer",
      company: "Archism",
      dates: "Oct. 2025 - Present",
      description:
        "Contributing as a MERN Stack Developer, handling both frontend and backend development, API integration, and deployment for scalable web applications.",
      latest: true,
    },
  ];

  return (
    <section className="min-h-screen text-gray-100 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-5 md:py-16 md:pt-16">
      {/* Section Title */}
      <h2 className="text-2xl md:text-5xl font-extrabold dark:text-white text-black mb-2">
        Experience
      </h2>

      {/* Tagline/Subtitle */}
      <h3 className="text-xl md:text-3xl font-extrabold opacity-50 dark:text-white text-black mb-10">
        To be trusted with the secret, you must first prove you know the secret!
      </h3>

      {/* Main Description */}
      <p className="md:text-lg opacity-80 dark:text-white text-black max-w-5xl leading-relaxed mb-12">
        Driven by passion, I successfully pivoted my career from a non-technical
        background (UPSC/Humanities) to a professional developer role. I
        self-taught my way into the field, securing a traineeship and then a
        full-time position. This demonstrates my resilience and capacity to
        quickly master complex subjects and deliver successful results.
      </p>

      {/* Experience Timeline */}
      <div className="max-w-4xl">
        {experiences.map((item, index) => (
          <ExperienceItem
            key={index}
            title={item.title}
            company={item.company}
            dates={item.dates}
            description={item.description}
            latest={item.latest}
          />
        ))}
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between items-center mt-12 text-sm">
        <button
          onClick={() => setActiveSection("Skills & Tools")}
          className="hover:opacity-100 dark:text-white text-black opacity-50 flex items-center gap-1 font-medium"
        >
          <ArrowLeft size={16} /> Skills & Tools
        </button>

        <button
          onClick={() => setActiveSection("Contact")}
          className="hover:opacity-100 dark:text-white text-black opacity-50 flex items-center gap-1 font-medium"
        >
          Contact <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
