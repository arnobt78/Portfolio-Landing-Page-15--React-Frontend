/**
 * Root layout component. Composes the single-page portfolio: fixed Navbar, scrollable
 * main sections (Hero → About → Skills → Projects → Education → Contact), and Footer.
 * selection:bg-blue-500/30 styles the text selection highlight.
 */
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
