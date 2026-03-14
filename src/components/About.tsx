// import { User } from 'lucide-react';
const profileImage = "/Adobe Express - file.png";


const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020b1a] to-[#041b3a] relative overflow-hidden"
    >

      {/* glow background */}
      <div className="absolute w-[260px] sm:w-[360px] md:w-[420px] h-[260px] sm:h-[360px] md:h-[420px] bg-cyan-500/20 blur-[120px] rounded-full top-40 left-1/3"></div>

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-20 relative z-10">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16">
          About <span className="text-cyan-400">Me</span>
        </h2>

        {/* <div className="grid md:grid-cols-2 gap-20 items-center"> */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* profile placeholder */}
          <div className="flex justify-center">
            <div className="flex justify-center">
              <div className="relative group">

                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

                <img
                  src={profileImage}
                  alt="Aarushi Thakur"
                  className="relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] object-cover rounded-2xl border border-cyan-400/20 shadow-2xl transform group-hover:scale-105 transition duration-300"
                />

              </div>
            </div>
            {/* <div className="w-[380px] h-[380px] rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-800/20 flex items-center justify-center border border-cyan-400/20 shadow-2xl transform hover:scale-105 transition duration-300">

              <User size={200} className="text-cyan-400 opacity-70" />

            </div> */}
          </div>

          {/* text */}
          {/* <div className="text-gray-300 space-y-8"> */}
          <div className="text-gray-300 space-y-5 max-w-2xl">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify">
              Hello! I'm a Computer Science student passionate about data science, artificial intelligence, and solving real-world problems using technology.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify">
              I work with technologies like <span className="text-cyan-400">Python, Machine Learning, Data Analysis, and AI</span> to build intelligent applications and data-driven solutions. I enjoy transforming raw data into meaningful insights and useful systems.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify">
              My goal is to grow as a data scientist and AI developer, building impactful solutions that combine technology, analytics, and innovation while continuously improving my technical and problem-solving skills.
            </p>

            <div className="pt-4">
              <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-3">
                What I Do
              </h3>

              {/* <ul className="space-y-3 text-lg"> */}
              <ul className="space-y-3 text-sm sm:text-base md:text-lg max-w-xl">

                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full mr-3"></span>
                  Develop machine learning models for predictive analysis
                </li>

                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full mr-3"></span>
                  Analyze and visualize complex datasets
                </li>

                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full mr-3"></span>
                  Build AI-powered applications and tools
                </li>

                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full mr-3"></span>
                  Contribute to open-source projects
                </li>

              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;