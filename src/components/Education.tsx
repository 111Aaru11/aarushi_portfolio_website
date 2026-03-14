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
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-32 left-1/3"></div>

      <div className="w-full px-20 lg:px-24 py-24 relative z-10">

        <h2 className="text-6xl font-bold text-white text-center mb-20">
          My <span className="text-cyan-400">Education</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT Illustration */}
          <div className="flex justify-center">
            <video
  src="/education.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-[550px] rounded-x1 opacity-90 hover:scale-105 transition duration-500 drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]"
/>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-10">

            {education.map((edu, index) => (

              <div
                key={index}
                // className={`flex justify-between items-start gap-6 p-8 rounded-xl border border-cyan-400/10 
                // hover:border-cyan-400/40 hover:shadow-cyan-500/30 hover:shadow-xl 
                // transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]
                // ${edu.highlight ? "bg-white/10 backdrop-blur-md" : "bg-[#0b1b2f]"}`}
                className="flex justify-between items-start gap-6 p-12 rounded-xl border border-cyan-400/10 hover:border-cyan-400/40 hover:shadow-cyan-500/30 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
              >

                {/* LEFT SIDE */}
                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-full bg-[#0b1b2f] border border-cyan-400/30 flex items-center justify-center">
                    <GraduationCap className="text-cyan-400" size={28} />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-cyan-400">
                      {edu.institute}
                    </h3>

                    <p className="text-xl text-white mt-1">
                      {edu.degree}
                    </p>

                    <p className="text-lg text-gray-300 mt-1 font-medium">
                      {edu.grade}
                    </p>

                  </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="text-right">

                  <p className="text-lg text-gray-300">
                    {edu.location}
                  </p>

                  <p className="text-lg text-gray-400">
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
// import { GraduationCap } from 'lucide-react';

// const Education = () => {
//   const education = [
//     {
//       degree: 'Bachelor of Technology in Computer Science',
//       university: 'Your University Name',
//       year: '2020 - 2024',
//       description: 'Specialized in Data Science and Artificial Intelligence. Relevant coursework: Machine Learning, Data Structures, Algorithms, Database Management.',
//     },
//     {
//       degree: 'Higher Secondary Education',
//       university: 'Your School Name',
//       year: '2018 - 2020',
//       description: 'Science stream with Mathematics and Computer Science. Secured excellent grades and participated in various technical competitions.',
//     },
//   ];

//   return (
//     <section id="education" className="py-20 bg-slate-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-white text-center mb-4">
//           Education
//         </h2>
//         <p className="text-gray-400 text-center mb-12">
//           My academic journey
//         </p>

//         <div className="max-w-4xl mx-auto">
//           <div className="relative">
//             <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-600"></div>

//             {education.map((edu, index) => (
//               <div
//                 key={index}
//                 className={`relative mb-12 ${
//                   index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
//                 }`}
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-slate-900 z-10"></div>
//                   <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} w-full`}>
//                     <div className="bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-slate-700">
//                       <div className="flex items-start mb-3">
//                         <GraduationCap className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={24} />
//                         <div>
//                           <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
//                           <p className="text-blue-400 font-semibold mb-1">{edu.university}</p>
//                           <p className="text-gray-500 text-sm mb-3">{edu.year}</p>
//                           <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
