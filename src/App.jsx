import About from "./components/About";
import ContactMe from "./components/Contact";
import CoursesAndCertifications from "./components/CoursesAndCertifications";
import CVSection from "./components/Cv";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import MyProjects from "./components/projects/MyProjects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Gradient */}
      <div className="fixed inset-0 -z-10 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Main Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        {/* <About /> */}
        <Projects />
        <MyProjects/>
        <Technologies/>
        <Experience/>
        <Education/>
        <CoursesAndCertifications/>
        <ContactMe/>
        <CVSection/>
        
        
      </div>
    </div>
  );
};

export default App;
