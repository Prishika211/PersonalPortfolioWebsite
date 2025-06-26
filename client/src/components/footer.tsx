import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:prishikacdy10@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/prishika-chaudhary",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/Prishika211",
      label: "GitHub"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 gradient-text">Prishika Chaudhary</h3>
          <p className="text-slate-300 mb-6">Software Engineer & Researcher</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-white/10"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          
          <div className="border-t border-slate-700/50 pt-8">
            <p className="text-slate-400 text-sm">
              © {currentYear} Prishika Chaudhary. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
