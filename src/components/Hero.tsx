import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/111Aaru11', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aarushi-thakur30/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:aaarushi817@gmail.com', label: 'Email' },
  ];

  return (
    // <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#020b1a] to-[#041b3a] relative overflow-hidden"
    >
      {/* <div className="absolute inset-0 bg-grid-pattern opacity-10"></div> */}
      <div className="absolute w-[260px] sm:w-[340px] md:w-[420px] h-[260px] sm:h-[340px] md:h-[420px] bg-cyan-500/20 blur-[120px] rounded-full top-20 left-1/2 -translate-x-1/2"></div>

      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"> */}
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-14 md:py-16 relative z-10">
        <div className="text-center animate-fade-in">
          
          {/* <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-down">
            Aarushi Thakur
          </h1> */}

          {/* <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 animate-slide-down">
            I am <span className="text-cyan-400">Aarushi Thakur</span>
          </h1> */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 animate-[fadeUp_1.2s_ease-out] leading-tight">
            I am <span className="text-cyan-400">Aarushi Thakur</span>
          </h1>

          {/* <p className="text-2xl md:text-3xl text-blue-400 mb-8 animate-slide-up"> */}
          {/* <p className="text-7xl md:text-3xl text-cyan-400 mb-10 animate-slide-up">
            Data Science Enthusiast | AI Explorer | Python Developer | ML Enthusiast
          </p> */}

          <TypeAnimation
            sequence={[
              "Data Science Enthusiast",
              1500,
              "AI Explorer",
              1500,
              "Python Developer",
              1500,
              "Machine Learning Enthusiast",
              1500,
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-400 mb-6"
          />

          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto px-2">
            {/* <p className="text-2xl md:text-1xl text-white-400 mb-8 animate-slide-up"> */}
            Passionate about leveraging data and artificial intelligence to solve real-world problems
            and create innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href="#projects"
              // className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              // className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              className="bg-transparent border-2 border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 px-8 md:px-12 py-3 text-sm md:text-base rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="/Aarushi_new_final.pdf"
              download
              // className="bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 text-blue-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              className="bg-transparent border-2 border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 px-8 md:px-12 py-3 text-sm md:text-base rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={24} className="md:w-7 md:h-7" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 md:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-cyan-400 w-7 h-7 md:w-9 md:h-9" />
      </div>
    </section>
  );
};

export default Hero;