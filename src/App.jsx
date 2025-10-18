import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Introduction from "./component/Introduction";
import About from "./component/About";
import SkillsTools from "./component/SkillBadge";
import Projects from "./component/ProjectCard";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Contact from "./component/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("Introduction");

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
      case "About Me":
        return <About setActiveSection={setActiveSection} />;
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
        <Sidebar active={activeSection} setActive={setActiveSection} />
        <div className="flex-1 ml-64 flex flex-col">
          <Navbar setActiveSection={setActiveSection} />
          <main className="flex-1">{renderSection()}</main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
