// import { User } from 'lucide-react';
const profileImage = "/Adobe Express - file.png";


const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020b1a] to-[#041b3a] relative overflow-hidden"
    >

      {/* glow background */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-40 left-1/3"></div>

      <div className="w-full px-16 lg:px-24 py-24 relative z-10">

        <h2 className="text-6xl font-bold text-white text-center mb-20">
          About <span className="text-cyan-400">Me</span>
        </h2>

        {/* <div className="grid md:grid-cols-2 gap-20 items-center"> */}
        <div className="grid md:grid-cols-2 gap-24 items-center">

          {/* profile placeholder */}
          <div className="flex justify-center">
            <div className="flex justify-center">
  <div className="relative group">

    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

    <img
      src={profileImage}
      alt="Aarushi Thakur"
      className="relative w-[380px] h-[380px] object-cover rounded-2xl border border-cyan-400/20 shadow-2xl transform group-hover:scale-105 transition duration-300"
    />

  </div>
</div>
            {/* <div className="w-[380px] h-[380px] rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-800/20 flex items-center justify-center border border-cyan-400/20 shadow-2xl transform hover:scale-105 transition duration-300">

              <User size={200} className="text-cyan-400 opacity-70" />

            </div> */}
          </div>

          {/* text */}
          {/* <div className="text-gray-300 space-y-8"> */}
          <div className="text-gray-300 space-y-8 max-w-3xl">

            <p className="text-2xl leading-relaxed text-justify">
              Hello! I'm a Computer Science student passionate about data science, artificial intelligence, and solving real-world problems using technology.
            </p>

            <p className="text-2xl leading-relaxed text-justify">
              I work with technologies like <span className="text-cyan-400">Python, Machine Learning, Data Analysis, and AI</span> to build intelligent applications and data-driven solutions. I enjoy transforming raw data into meaningful insights and useful systems.
            </p>

            <p className="text-2xl leading-relaxed text-justify">
              My goal is to grow as a data scientist and AI developer, building impactful solutions that combine technology, analytics, and innovation while continuously improving my technical and problem-solving skills.
            </p>

            <div className="pt-6">
              <h3 className="text-3xl font-semibold text-cyan-400 mb-5">
                What I Do
              </h3>

              {/* <ul className="space-y-3 text-lg"> */}
              <ul className="space-y-4 text-xl max-w-2xl">

                <li className="flex items-center">
                  <span className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></span>
                  Develop machine learning models for predictive analysis
                </li>

                <li className="flex items-center">
                  <span className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></span>
                  Analyze and visualize complex datasets
                </li>

                <li className="flex items-center">
                  <span className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></span>
                  Build AI-powered applications and tools
                </li>

                <li className="flex items-center">
                  <span className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></span>
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
// import { User } from 'lucide-react';


// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-slate-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-white text-center mb-12">
//           About Me
//         </h2>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="flex justify-center">
//             <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
//               <User size={200} className="text-white opacity-50" />
//             </div>
//           </div>

//           <div className="text-gray-300 space-y-6">
            
//             <p className="text-lg leading-relaxed">
//               Hello! I'm, a Computer Science student passionate about data science, AI, and problem solving. I enjoy learning new technologies and applying them to build practical solutions for real-world challenges.
//             </p>
//             <p className="text-lg leading-relaxed">
//               I work with technologies like Python, machine learning, data analysis, and AI to create intelligent applications and data-driven tools. I enjoy transforming raw data into meaningful insights and useful systems.
//             </p>
//             <p className="text-lg leading-relaxed">
//               My goal is to grow as a data scientist and AI developer, building impactful solutions that combine technology, analytics, and innovation while continuously improving my technical and problem-solving skills.
//             </p>
            
//             <div className="pt-4">
//               <h3 className="text-xl font-semibold text-blue-400 mb-3">What I Do:</h3>
//               <ul className="space-y-2">
//                 <li className="flex items-center">
//                   <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
//                   Develop machine learning models for predictive analysis
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
//                   Analyze and visualize complex datasets
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
//                   Build AI-powered applications and tools
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
//                   Contribute to open-source projects
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
