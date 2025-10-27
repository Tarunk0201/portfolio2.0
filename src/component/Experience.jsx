import { ArrowLeft, ArrowRight, Briefcase } from "lucide-react";

// Helper component for an individual experience item
const ExperienceItem = ({
  icon: Icon,
  title,
  company,
  dates,
  description,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,
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

      <p className="text-sm  mb-2 opacity-80 font-medium dark:text-white text-black">
        {dates}
      </p>
      <ol className="list-disc">
        <li className=" leading-relaxed max-w-4xl opacity-60 dark:text-white text-black">
          {description}
        </li>
        <li className=" leading-relaxed max-w-4xl opacity-60 dark:text-white text-black">
          {description2}
        </li>
        <li className=" leading-relaxed max-w-4xl opacity-60 dark:text-white text-black">
          {description3}
        </li>
        <li className=" leading-relaxed max-w-4xl opacity-60 dark:text-white text-black">
          {description4}
        </li>
        {description5 && (
          <li className=" leading-relaxed max-w-4xl opacity-60 dark:text-white text-black">
            {description5}
          </li>
        )}
        {description6 && (
          <li className=" leading-relaxed max-w-4xl opacity-60 dark:text-white text-black">
            {description6}
          </li>
        )}
        {description7 && (
          <li className=" leading-relaxed max-w-4xl opacity-60 dark:text-white text-black">
            {description7}
          </li>
        )}
      </ol>
    </div>
  </div>
);

export default function Experience({ setActiveSection }) {
  // Combine the data from both image examples for a complete section
  const experiences = [
    {
      title: "Trainee",
      company: "Averybit",
      dates: "March 2025 - June 2025",
      description:
        "Worked as a Trainee contributing to a live project focused on backend development.",
      description2:
        "Utilized Node.js, Express.js, and Firebase to build and maintain server-side functionality",
      description3:
        "Gained hands-on experience in real-world application deployment and database integration.",
      description4:
        "Collaborated effectively with team members, improving teamwork, communication, and problem-solving skills.",
      latest: false,
    },
    {
      title: "MERN stack Developer",
      company: "Archism",
      dates: "Oct. 2025 - Present",
      description:
        "Leading the development of the company’s core real estate platform, overseeing end-to-end project execution.",
      description2:
        "Managing both frontend and backend architecture using the MERN stack to ensure a seamless, scalable system",
      description3:
        "Handling DevOps responsibilities, including CI/CD setup, deployment automation, and cloud infrastructure management.",
      description4:
        "Optimizing performance to deliver fast, reliable, and responsive user experiences across devices.",
      description5:
        "Implementing secure and efficient APIs to ensure smooth data communication between client and server.",
      description6:
        "Collaborating with cross-functional teams to translate business needs into technical solutions.",
      description7:
        "Continuously improving code quality, scalability, and maintainability through best development practices.",
      latest: true,
    },
  ];

  return (
    <section className="min-h-screen text-gray-100 flex flex-col justify-start px-8 md:px-16 lg:px-24 py-8">
      {/* Section Title */}
      <h2 className="text-2xl md:text-5xl font-extrabold dark:text-white text-black mb-2">
        Experience
      </h2>

      {/* Tagline/Subtitle */}
      <h3 className="text-xl md:text-3xl font-extrabold opacity-50 dark:text-white text-black mb-10">
        True experience speaks through execution, not explanation.
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
            description2={item.description2}
            description3={item.description3}
            description4={item.description4}
            description5={item.description5}
            description6={item.description6}
            description7={item.description7}
            latest={item.latest}
          />
        ))}
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between items-center mt-12 text-sm">
        <button
          onClick={() => setActiveSection("About Me")}
          className="hover:opacity-100 dark:text-white text-black opacity-50 flex items-center gap-1 font-medium"
        >
          <ArrowLeft size={16} /> About Me
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
