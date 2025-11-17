import { useState } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import { toast } from "react-toastify";

export default function Contact({ setActiveSection }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const sendRequest = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/contact/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": import.meta.env.VITE_KEY,
          },
          body: JSON.stringify({
            source: "WebSite",
            name,
            email,
            message,
          }),
        }
      );
      console.log(response);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || "Failed to send message. Please try again."
        );
      }
      return response.json();
    };

    try {
      await toast.promise(sendRequest(), {
        pending: "Sending your message...",
        success: {
          render({ data }) {
            return data.message || "Message sent successfully!";
          },
        },
        error: {
          render({ data }) {
            return data.message || "An error occurred.";
          },
        },
      });

      document.getElementById("contact-form").reset();
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    document.getElementById("contact-form").reset();
  };

  return (
    <section className="min-h-screen text-gray-100 flex flex-col justify-start py-8 px-8 md:px-16 lg:px-24 ">
      <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-2">
        Contact
      </h2>

      <h3 className="text-xl md:text-3xl font-extrabold text-gray-500 mb-5">
        Get in touch before I write another line of code!
      </h3>

      <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="max-w-xl w-full md:space-y-8 space-y-2"
      >
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block md:text-lg font-semibold text-white"
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

        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block md:text-lg font-semibold text-white"
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

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block md:text-lg font-semibold text-white"
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

        <div className="flex gap-1">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/30
                     flex items-center justify-center gap-2
                     disabled:bg-violet-400 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="w-full py-4 text-gray-400 text-lg font-bold rounded-lg hover:text-white transition-colors border border-transparent hover:border-gray-700"
          >
            Reset
          </button>
        </div>
      </form>
      <div className="flex justify-between items-center mt-12 text-sm">
        <button
          onClick={() => setActiveSection("Projects")}
          className="hover:opacity-100 text-gray-500  flex items-center gap-1 font-medium"
        >
          <ArrowLeft size={16} /> Projects
        </button>
      </div>
    </section>
  );
}
