import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Introduction from "./component/Introduction";
import SkillsTools from "./component/SkillBadge";
import Projects from "./component/ProjectCard";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Contact from "./component/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("Introduction");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showMobilePopup, setShowMobilePopup] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setShowMobilePopup(true);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  const closePopup = () => {
    setShowMobilePopup(false);
  };

  const sections = [
    "Introduction",
    "About Me",
    "Projects",
    "Skills & Tools",
    "Experience",
    "Contact",
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "Introduction":
        return <Introduction setActiveSection={setActiveSection} />;
      case "Projects":
        return <Projects setActiveSection={setActiveSection} />;
      case "Skills & Tools":
        return <SkillsTools setActiveSection={setActiveSection} />;
      case "Experience":
        return <Experience setActiveSection={setActiveSection} />;
      case "Contact":
        return <Contact setActiveSection={setActiveSection} />;
      default:
        return <Introduction />;
    }
  };

  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar
          active={activeSection}
          setActive={setActiveSection}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="flex-1 pt-10 flex flex-col">
          <Navbar
            setActiveSection={setActiveSection}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            showMobilePopup={showMobilePopup}
          />
          <main className="flex-1">{renderSection()}</main>
          <Footer />
        </div>
      </div>
      {showMobilePopup && (
        <div
          className="fixed inset-0 bg-opacity-50 flex items-start pt-24 justify-center z-50 "
          onClick={closePopup}
        >
          <div
            className="backdrop-blur-md flex p-6 rounded-lg shadow-lg max-w-sm mx-4 text-center transform -translate-y-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h2 className="text-lg font-semibold mb-4 dark:text-white text-black">
                Ready to browse?
              </h2>
              <p className="mb-4 dark:text-gray-300 text-sm text-gray-700">
                Just tap the three lines above to open the navigation menu.
                Enjoy your mobile-friendly experience!
              </p>
              <button
                onClick={closePopup}
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-10 py-1.5 rounded-md text-sm font-semibold transition-all"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </Router>
  );
}
