import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Feedbacks } from "./components/Feedbacks";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-green-vibrant selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Feedbacks />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
