import { Award, ExternalLink } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Advance Python for ML and AI",
      organization: "CSE Pathshala",
      issueDate: "3rd August 2025",
      description:
        "Completed a 35+ hour live training on Advanced Python for Machine Learning and AI, gaining hands-on experience implementing ML concepts and solving real-world problems using Python.",
      link: "https://drive.google.com/file/d/1khfQ25qDSi_xb4wbRhZE2iVI8OqsZe3q/view?usp=drive_link",
    },
    {
      title: "Unlocking DSA with C",
      organization: "CSE Pathshala",
      issueDate: "25th March 2024",
      description:
        "Completed a 25+ hour live course on Data Structures and Algorithms using C, strengthening problem-solving skills and core concepts like arrays, pointers and algorithmic thinking.",
      link: "https://drive.google.com/file/d/176B37c-fJJ8LX9ePqiAMSkaMgezANRiy/view?usp=drive_link",
    },
    {
      title: "Gen AI NASSCOM",
      organization: "SJF",
      issueDate: "21 February 2026",
      description:
        "Completed the Gen AI NASSCOM certification under the Skill Development Program, gaining practical exposure to Generative AI concepts and real-world industry applications.",
      link: "https://drive.google.com/file/d/1sD0AU2E9EV3HvFOhbEcPR6wWoDGvdCMC/view?usp=drive_link",
    },
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020b1a] to-[#041b3a] relative overflow-hidden"
    >
      {/* glow effect */}
      <div className="absolute w-[300px] sm:w-[420px] md:w-[500px] h-[300px] sm:h-[420px] md:h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-32 right-1/3"></div>

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-20 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4">
          <span className="text-white">Certifications</span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center mb-12 md:mb-16">
          Professional credentials that validate my technical expertise and continuous learning journey
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {certificates.map((cert, index) => (
            <div
              key={index}
              // className="bg-[#0b1b2f] rounded-xl overflow-hidden border border-cyan-400/10 hover:border-cyan-400/40shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] group"
              // className="flex gap-8 bg-[#0b1b2f] rounded-xl p-10 border border-cyan-400/10 hover:border-cyan-400/40 shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] group"
              className="relative flex flex-col bg-gradient-to-b from-[#0b1b2f]/90 to-[#07101f]/90 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/10 hover:border-cyan-400/40 shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] group overflow-hidden"
            >
              {/* Top banner */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 text-[10px] tracking-wide text-white">
                   Verified
              </div>

              <div className="flex-shrink-0 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center border border-cyan-400/30 shadow-md shadow-cyan-500/20">
                  <Award size={20} className="text-white" />
                </div>
              {/* </div> */}
              {/* <div className="h-36 bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center relative">
                <Award
                  size={60}
                  className="text-white opacity-40 group-hover:opacity-70 transition duration-300"
                /> */}

              </div>

              {/* Content */}
              <div className="flex flex-col">

                {/* <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300"> */}
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300 leading-snug">
                  {cert.title}
                </h3>

                {/* <p className="text-cyan-400 font-semibold text-base mb-1"> */}
                <p className="text-cyan-400 font-semibold text-sm mb-1">
                  {cert.organization}
                </p>

                <p className="text-gray-400 text-xs mb-3">{cert.issueDate}</p>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  // className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-base transition duration-300"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm transition duration-300 mt-auto"
                >
                  View Credential
                  <ExternalLink size={16} className="ml-2" />
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;