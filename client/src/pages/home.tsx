import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Research from "@/components/research";
import Skills from "@/components/skills";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
