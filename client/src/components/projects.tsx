import { motion } from "framer-motion";
import { Github, ExternalLink, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "RoboWars",
      description: "Developed a registration website using ReactJS and Tailwind CSS to promote and manage registrations for a Robot Wars Event at Chandigarh University. Features captivating animations using Framer Motion and optimized interface with ShadCN.",
      technologies: ["ReactJS", "TailwindCSS", "ShadCN", "Framer Motion"],
      githubUrl: "https://github.com/Prishika211/robowars",
      liveUrl: "https://robowars-cu.vercel.app",
      highlight: "50% increase in page responsiveness and user satisfaction scores",
      icon: "🤖",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Techeify",
      description: "Created using React.js and Tailwind CSS with modern responsive design. Features React Query for efficient API request caching and Express.js proxy server to handle backend requests seamlessly while circumventing CORS issues.",
      technologies: ["ReactJS", "TailwindCSS", "Express.js", "React Query"],
      githubUrl: "https://github.com/Prishika211/techeify",
      liveUrl: "https://techeify.vercel.app",
      highlight: "Optimized server performance with 2-hour API caching",
      icon: "💻",
      gradient: "from-emerald-500 to-blue-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work in web development and interactive applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-50 overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                {/* Project Header with Gradient */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 left-4 text-white">
                    <span className="text-3xl">{project.icon}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 text-white/80">
                    <span className="text-sm font-medium">
                      {project.title === "RoboWars" ? "Event Registration Platform" : "Full-Stack Web Application"}
                    </span>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className={`${
                          tech === "ReactJS" ? "bg-blue-100 text-blue-800" :
                          tech === "TailwindCSS" ? "bg-green-100 text-green-800" :
                          tech === "ShadCN" ? "bg-purple-100 text-purple-800" :
                          tech === "Framer Motion" ? "bg-orange-100 text-orange-800" :
                          tech === "Express.js" ? "bg-yellow-100 text-yellow-800" :
                          tech === "React Query" ? "bg-red-100 text-red-800" :
                          "bg-slate-100 text-slate-800"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mb-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex items-center"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="flex items-center bg-blue-600 hover:bg-blue-700"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>

                  {/* Highlight */}
                  <div className="text-sm text-slate-500 flex items-center">
                    {project.title === "RoboWars" ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <Clock className="w-4 h-4 mr-1" />
                    )}
                    {project.highlight}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
