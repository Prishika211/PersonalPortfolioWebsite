import { motion } from "framer-motion";
import { Calendar, CheckCircle, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      title: "Junior Software Test Automation Engineer",
      company: "EPAM Systems",
      period: "Jan 2024 - Present",
      type: "Current",
      responsibilities: [
        "Developed and implemented automated test scripts using Java, Selenium, TestNG, and Rest Assured to ensure comprehensive test coverage across both UI and API layers.",
        "Built and maintained test automation frameworks that integrated with Jenkins CI/CD pipeline, enabling continuous testing and faster feedback loops in an Agile environment.",
        "Collaborated with cross-functional teams to identify test requirements, design BDD test scenarios, and track defects using JIRA, improving communication between technical and business stakeholders."
      ]
    },
    {
      title: "Web Developer",
      company: "Indreni Social Development Forum (NGO)",
      period: "May 2024 - November 2024",
      type: "Remote",
      liveDemo: "https://indreni.org",
      responsibilities: [
        "Developed a scalable NGO website using the MERN stack with a responsive UI styled in Tailwind CSS and image storage via Cloudinary.",
        "Built a secure admin panel for managing content such as images, announcements, and project details.",
        "Used Git and GitHub for version control and collaborative development."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey and key accomplishments in software development and automation
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-blue-600 font-medium mb-1">
                        {exp.company}
                      </p>
                      {exp.type === "Remote" && (
                        <p className="text-slate-500">Remote</p>
                      )}
                    </div>
                    <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end gap-2">
                      <Badge
                        variant={exp.type === "Current" ? "default" : "secondary"}
                        className={`${
                          exp.type === "Current"
                            ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                            : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                        }`}
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </Badge>
                      {exp.liveDemo && (
                        <a
                          href={exp.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors flex items-center"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start text-slate-600">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
