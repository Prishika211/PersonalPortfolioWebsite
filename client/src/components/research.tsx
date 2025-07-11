import { motion } from "framer-motion";
import { FileText, Microscope, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Research() {
  const publications = [
    {
      title: "Efficient Information Digest: Exploring AI- Driven PDF Summarization through Streamlit, Open API, and LangChain",
      conference: "IICCCS",
      year: "2024",
      description: "Proposed a LangChain-powered AI web app using Streamlit for PDF summarization. Focused on combining API calls with context-aware NLP to help academics process large datasets effectively.",
      url: "https://ieeexplore.ieee.org/document/10763576",
      icon: FileText,
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Advanced Threat Detection: Leveraging Data Analytics for Cybersecurity Enhancement",
      conference: "EmergIN",
      year: "2024",
      description: "Leveraged ML techniques like XGBoost, LightGBM, and Random Forest to classify malicious URLs for phishing detection. Demonstrated high accuracy with reduced false positives to strengthen cybersecurity.",
      url: "https://ieeexplore.ieee.org/document/10961019",
      icon: Microscope,
      badgeColor: "bg-emerald-100 text-emerald-800"
    }
  ];

  return (
    <section id="research" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Research Publications</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Contributing to the academic community through research in AI and emerging technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${publication.conference === 'IEEE' ? 'bg-blue-100' : 'bg-emerald-100'} rounded-lg flex items-center justify-center mr-4`}>
                        <publication.icon className={`${publication.conference === 'IEEE' ? 'text-blue-600' : 'text-emerald-600'} text-xl`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">
                          {publication.title}
                        </h3>
                        <p className="text-slate-500">{publication.year}</p>
                      </div>
                    </div>
                    <Badge className={publication.badgeColor}>
                      {publication.conference}
                    </Badge>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {publication.description}
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex items-center w-fit"
                  >
                    <a
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Publication
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
