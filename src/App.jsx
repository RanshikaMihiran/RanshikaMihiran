import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects"; // Professional Tech Projects
import MyProjects from "./components/projects/MyProjects"; // Graphic Design Gallery
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Education from "./components/Education";
import CoursesAndCertifications from "./components/CoursesAndCertifications";
import ContactMe from "./components/Contact";
import CVSection from "./components/Cv";

const App = () => {
  return (
    /* 1. Main Wrapper: Ensures Zinc background and better text rendering */
    <div className="bg-[#09090b] min-h-screen text-zinc-300 antialiased selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* 2. Global Grain Texture: This adds the "Premium" look from your screenshot */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* 3. Subtle Studio Spotlight: Replaces the bright purple gradient */}
      <div className="fixed inset-0 -z-10 bg-[#09090b] bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05)_0%,transparent_50%)]"></div>

      {/* 4. Layout Container */}
      <div className="relative z-10">
        <Navbar />
        
        {/* We use a flex-col layout to ensure sections don't overlap or get cut off */}
        <main className="flex flex-col">
          <Hero />
          
          {/* I've re-enabled About and placed it in a logical professional order */}
          <About />
          
          <Technologies />
          
          {/* Section: Development Projects */}
          <Projects />
          
          {/* Section: Graphic Design Portfolio */}
          <MyProjects />
          
          <Experience />
          
          <Education />
          
          <CoursesAndCertifications />
          
          <CVSection />
          
          <ContactMe />
        </main>

        {/* 5. Minimalist Footer */}
        <footer className="py-12 border-t border-zinc-900 text-center">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">
            © 2026 Ranshika Mihiran • Built with Precision
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;