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
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full left-1/2 -translate-x-1/2 top-0"></div>

      <div className="w-full px-16 lg:px-24 py-14 relative z-10">

        <div className="flex flex-col items-center">

          {/* Social Icons */}
          <div className="flex gap-8 mb-8">

            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#0b1b2f] border border-cyan-400/10 hover:border-cyan-400/40 hover:shadow-cyan-500/20 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1"
              >
                <social.icon size={22} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300" />
              </a>
            ))}

          </div>

          {/* Footer Text */}
          <div className="text-center">

            <p className="text-gray-300 text-lg flex items-center justify-center gap-2">
              Made with
              <Heart size={18} className="text-red-500 fill-current animate-pulse" />
              by <span className="text-cyan-400 font-semibold">Aarushi Thakur</span>
            </p>

            <p className="text-gray-500 text-sm mt-3">
              © {currentYear} All rights reserved.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
// import { Github, Linkedin, Mail, Heart } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
//     { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
//     { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
//   ];

//   return (
//     <footer className="bg-slate-900 border-t border-slate-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex flex-col items-center">
//           <div className="flex gap-6 mb-6">
//             {socialLinks.map((social) => (
//               <a
//                 key={social.label}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
//                 aria-label={social.label}
//               >
//                 <social.icon size={24} />
//               </a>
//             ))}
//           </div>

//           <div className="text-center">
//             <p className="text-gray-400 flex items-center justify-center gap-2">
//               Made with <Heart size={16} className="text-red-500 fill-current" /> by Your Name
//             </p>
//             <p className="text-gray-500 text-sm mt-2">
//               &copy; {currentYear} All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
