import { motion } from "framer-motion";
import { Mail, Linkedin, Github, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Learn more about my background, education, and what drives my passion for technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Background</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              I'm a passionate Software Engineer and Researcher with a strong foundation in web development and AI-driven solutions. 
              Currently working as a Junior Software Test Automation Engineer at EPAM Systems, I specialize in building scalable 
              applications and conducting meaningful research in emerging technologies.
            </p>
            <p className="text-slate-600 leading-relaxed">
              My journey in technology is driven by curiosity and a desire to create solutions that make a real impact. 
              I enjoy collaborating with cross-functional teams and am always eager to learn new technologies and methodologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                  Education
                </h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-slate-900">Bachelor of Engineering</h4>
                    <p className="text-slate-600">Computer Science & Engineering</p>
                    <p className="text-slate-500">Chandigarh University • 2021 - 2025</p>
                    <p className="text-blue-600 font-semibold">CGPA: 8.24/10</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-4">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-slate-600">prishikacdy10@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="w-5 h-5 text-blue-600 mr-3" />
                    <a
                      href="https://linkedin.com/in/prishika-chaudhary"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      linkedin.com/in/prishika-chaudhary
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="w-5 h-5 text-blue-600 mr-3" />
                    <a
                      href="https://github.com/Prishika211"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      github.com/Prishika211
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
