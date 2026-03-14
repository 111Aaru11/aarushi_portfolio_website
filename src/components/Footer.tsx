import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/111Aaru11",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aarushi-thakur30/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:aarushi817@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#020617] via-[#020b1a] to-[#041b3a] border-t border-cyan-400/10 relative overflow-hidden">

      {/* Glow effect */}
      <div className="absolute w-[240px] sm:w-[320px] md:w-[380px] h-[240px] sm:h-[320px] md:h-[380px] bg-cyan-500/20 blur-[120px] rounded-full left-1/2 -translate-x-1/2 top-0"></div>

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-12 relative z-10">

        <div className="flex flex-col items-center">

          {/* Social Icons */}
          <div className="flex gap-5 mb-6">

            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#0b1b2f]/90 to-[#07101f]/90 backdrop-blur-xl border border-cyan-400/10 hover:border-cyan-400/40 hover:shadow-cyan-500/20 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1"
              >
                <social.icon size={18} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300" />
              </a>
            ))}

          </div>

          {/* Footer Text */}
          <div className="text-center">

            <p className="text-gray-300 text-sm sm:text-base flex items-center justify-center gap-2">
              Made with
              <Heart size={16} className="text-red-500 fill-current animate-pulse" />
              by <span className="text-cyan-400 font-semibold">Aarushi Thakur</span>
            </p>

            <p className="text-gray-500 text-xs mt-2">
              © {currentYear} All rights reserved.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;