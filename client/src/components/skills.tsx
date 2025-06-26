import { motion } from "framer-motion";
import { Code, Wrench, Layers, Trophy, Medal, Star, GitBranch } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "bg-orange-100 text-orange-600",
      skills: ["Java", "C++", "Javascript"]
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      color: "bg-blue-100 text-blue-600",
      skills: ["Git", "Github", "JIRA", "Jenkins", "Gherkin", "Gitlab"]
    },
    {
      title: "Technologies/Frameworks",
      icon: Layers,
      color: "bg-purple-100 text-purple-600",
      skills: ["NodeJS", "ReactJS", "ExpressJS", "MongoDB", "SQL", "AWS", "CI/CD", "TestNG", "Selenium WebDriver", "RestAssured", "Cucumber"]
    }
  ];

  const achievements = [
    {
      platform: "Coding Ninjas",
      level: "Expert Level",
      rating: "Max Rating: 1687",
      icon: Trophy,
      color: "bg-green-100 text-green-600",
      url: "https://www.naukri.com/code360/profile/prishika211"
    },
    {
      platform: "CodeChef",
      level: "Country Rank: 22",
      rating: "Max Rating: 1443",
      icon: Medal,
      color: "bg-yellow-100 text-yellow-600",
      url: "https://www.codechef.com/users/prishika211"
    },
    {
      platform: "GeeksforGeeks",
      level: "University Rank: 511",
      rating: "Active Contributor",
      icon: Star,
      color: "bg-orange-100 text-orange-600",
      url: "https://www.geeksforgeeks.org/user/prishikacdy10/"
    },
    {
      platform: "LeetCode",
      level: "Regular Solver",
      rating: "Max Rating: 1598",
      icon: GitBranch,
      color: "bg-blue-100 text-blue-600",
      url: "https://leetcode.com/u/prishika211/"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills & Achievements</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Technical expertise and competitive programming accomplishments
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-slate-900 mb-8 text-center"
          >
            Technical Skills
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="text-2xl" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-3">{category.title}</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-slate-100 text-slate-700 hover:bg-slate-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-slate-900 mb-8 text-center"
          >
            Competitive Programming
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-50 text-center hover:shadow-md transition-shadow duration-200 h-full">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <achievement.icon className="text-xl" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      {achievement.platform}
                    </h4>
                    <p className="text-slate-600 text-sm mb-2">
                      {achievement.level}
                    </p>
                    <p className="text-blue-600 font-bold mb-3">
                      {achievement.rating}
                    </p>
                    <a
                      href={achievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 transition-colors inline-block"
                    >
                      View Profile
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
