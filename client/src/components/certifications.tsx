import { motion } from "framer-motion";
import { Award, Calendar, Coffee, Cloud, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Certifications() {
  const certifications = [
    {
      title: "Programming in Java Through NPTEL",
      provider: "NPTEL",
      year: "2022",
      description: "Comprehensive Java programming certification covering object-oriented programming, data structures, and advanced concepts.",
      icon: Coffee,
      color: "bg-red-100 text-red-600",
      url: "https://drive.google.com/file/d/1example/view"
    },
    {
      title: "Associate Cloud Engineer Path Through Google Cloud Platform (GCP)",
      provider: "Google Cloud Platform",
      year: "2023",
      description: "Cloud engineering path certification covering GCP services, deployment, monitoring, and cloud architecture best practices.",
      icon: Cloud,
      color: "bg-blue-100 text-blue-600",
      url: "https://cloud.google.com/learn/certification/cloud-engineer"
    },
    {
      title: "Serverless Knowledge Badge Assessment",
      provider: "Cloud Skills",
      year: "2025",
      description: "Advanced serverless architecture knowledge assessment covering modern cloud-native development practices and technologies.",
      icon: Zap,
      color: "bg-purple-100 text-purple-600",
      url: "https://cloud.google.com/learn/certification/badges"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Certifications</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 ${cert.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <cert.icon className="text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <p className="text-slate-500">{cert.provider}</p>
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {cert.year}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full flex items-center justify-center"
                  >
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Award className="w-4 h-4 mr-2" />
                      View Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
