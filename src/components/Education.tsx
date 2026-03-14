import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      institute: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      grade: "CGPA: 8.59",
      location: "Phagwara, Punjab",
      duration: "August 2023 – Present",
    },
    {
      institute: "Triple-M Public School",
      degree: "Intermediate",
      grade: "Percentage: 95.2%",
      location: "Hoshiarpur, Punjab",
      duration: "April 2020 – March 2022",
    },
    {
      institute: "St. Joseph Convent School",
      degree: "Matriculation",
      grade: "Percentage: 94.2%",
      location: "Hoshiarpur, Punjab",
      duration: "April 2018 – March 2020",
      highlight: true,
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020b1a] to-[#041b3a] relative overflow-hidden"
    >
      {/* glow */}
      <div className="absolute w-[260px] sm:w-[380px] md:w-[460px] h-[260px] sm:h-[380px] md:h-[460px] bg-cyan-500/20 blur-[120px] rounded-full top-32 left-1/3"></div>

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-20 relative z-10">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16">
          My <span className="text-cyan-400">Education</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT Illustration */}
          <div className="flex justify-center">
            <video
              src="/education.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[280px] sm:w-[360px] md:w-[460px] rounded-xl opacity-90 transition duration-500 drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-6 md:gap-8">

            {education.map((edu, index) => (

              <div
                key={index}
                // className={`flex justify-between items-start gap-6 p-8 rounded-xl border border-cyan-400/10 
                // hover:border-cyan-400/40 hover:shadow-cyan-500/30 hover:shadow-xl 
                // transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]
                // ${edu.highlight ? "bg-white/10 backdrop-blur-md" : "bg-[#0b1b2f]"}`}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-5 p-6 md:p-7 rounded-2xl border border-cyan-400/10 hover:border-cyan-400/40 hover:shadow-cyan-500/20 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.01] bg-gradient-to-b from-[#0b1b2f]/90 to-[#07101f]/90 backdrop-blur-xl"
              >

                {/* LEFT SIDE */}
                <div className="flex gap-4">

                  <div className="w-11 h-11 rounded-xl bg-[#0b1b2f] border border-cyan-400/30 flex items-center justify-center shadow-md shadow-cyan-500/20">
                    <GraduationCap className="text-cyan-400" size={20} />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-cyan-400 leading-snug">
                      {edu.institute}
                    </h3>

                    <p className="text-sm sm:text-base text-white mt-1">
                      {edu.degree}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-300 mt-1 font-medium">
                      {edu.grade}
                    </p>

                  </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="text-left sm:text-right">

                  <p className="text-xs sm:text-sm text-gray-300">
                    {edu.location}
                  </p>

                  <p className="text-xs text-gray-400">
                    {edu.duration}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;