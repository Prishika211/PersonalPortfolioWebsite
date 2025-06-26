import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Terminal, Zap } from "lucide-react";

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Software Engineer",
    "Test Automation Expert", 
    "Web Developer",
    "AI Researcher",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const codeSnippets = [
    "const developer = 'Prishika';",
    "function innovate() { return 'solutions'; }",
    "while(learning) { grow(); }",
  ];

  return (
    <section
      id="home"
      className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      {/* Floating Code Elements */}
      <div className="absolute top-20 left-16 floating-code opacity-60">
        <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg p-3 shadow-lg">
          <Code className="w-6 h-6 text-indigo-600" />
        </div>
      </div>
      
      <div className="absolute top-32 right-20 floating-code opacity-60" style={{ animationDelay: "-2s" }}>
        <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg p-3 shadow-lg">
          <Terminal className="w-6 h-6 text-emerald-600" />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-20 floating-code opacity-60" style={{ animationDelay: "-4s" }}>
        <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg p-3 shadow-lg">
          <Zap className="w-6 h-6 text-purple-600" />
        </div>
      </div>

      {/* Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className={`absolute hidden lg:block floating-code opacity-40 text-sm font-mono text-slate-400 ${
            index === 0 ? "top-40 right-32" :
            index === 1 ? "bottom-40 left-32" :
            "top-60 left-16"
          }`}
          style={{ animationDelay: `-${index * 1.5}s` }}
        >
          {snippet}
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-2">
                Hey, I'm{" "}
                <span className="gradient-text">
                  Prishika
                </span>
              </h1>
            </motion.div>
            
            <div className="text-2xl md:text-3xl text-slate-600 mb-8 h-16 flex items-center justify-center font-medium">
              <span className="mr-2">I'm a</span>
              <span className="text-indigo-600 border-r-2 border-indigo-500 pr-1 typing-cursor min-w-[280px] text-left">
                {currentText}
              </span>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Building innovative solutions and advancing AI research
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg font-medium"
              >
                <Code className="w-5 h-5 mr-2" />
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-xl transition-all duration-300 text-lg font-medium hover:border-indigo-300"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer p-2 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200 hover:bg-white/70 transition-colors"
            onClick={() => scrollToSection("about")}
          >
            <ChevronDown className="w-5 h-5 text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
