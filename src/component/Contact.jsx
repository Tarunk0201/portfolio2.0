import { ArrowLeft } from "lucide-react";

export default function Contact({ setActiveSection }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission (e.g., sending data to an API) goes here
    console.log("Form submitted!");
  };

  const handleReset = () => {
    // Logic for resetting the form goes here
    document.getElementById("contact-form").reset();
  };

  return (
    <section className="min-h-screen text-gray-100 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-10 md:py-16 md:pt-16">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
        Contact
      </h2>

      {/* Tagline/Subtitle */}
      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-400 mb-10">
        Get in touch before I write another line of code!
      </h3>

      {/* Contact Form */}
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="max-w-xl w-full space-y-8"
      >
        {/* Name Input */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-lg font-semibold text-white"
          >
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name, your fame"
            required
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600 transition-colors"
          />
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-white"
          >
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Where can I reach you back?"
            required
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600 transition-colors"
          />
          <p className="text-sm text-gray-500 ml-1">
            Temporary emails are also accepted, unless you wish to hear back 😉
          </p>
        </div>

        {/* Message Textarea */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-lg font-semibold text-white"
          >
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your words, my inbox."
            required
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600 transition-colors resize-y"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-violet-600 text-white text-lg font-bold rounded-lg hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/30"
        >
          Submit
        </button>

        {/* Reset Button */}
        <button
          type="button"
          onClick={handleReset}
          className="w-full py-4 text-gray-400 text-lg font-bold rounded-lg hover:text-white transition-colors border border-transparent hover:border-gray-700"
        >
          Reset
        </button>
      </form>
      <div className="flex justify-between items-center mt-12 text-sm">
        <button
          onClick={() => setActiveSection("Experience")}
          className="hover:opacity-100 dark:text-white text-black opacity-50  flex items-center gap-1 font-medium"
        >
          <ArrowLeft size={16} /> Experience
        </button>
      </div>
    </section>
  );
}
