import { Award, ExternalLink } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Advance Python for ML and AI",
      organization: "CSE Pathshala",
      issueDate: "3rd August 2025",
      description:
        "Completed a 35+ hour live training on Advanced Python for Machine Learning and AI, gaining hands-on experience implementing ML concepts and solving real-world problems using Python.",
      link: "https://drive.google.com/drive/u/0/folders/15ko9-0uamLfC3dfHgYbuamjPMtU70mbh",
    },
    {
      title: "Unlocking DSA with C",
      organization: "CSE Pathshala",
      issueDate: "25th March 2024",
      description:
        "Completed a 25+ hour live course on Data Structures and Algorithms using C, strengthening problem-solving skills and core concepts like arrays, pointers and algorithmic thinking.",
      link: "https://drive.google.com/drive/u/0/folders/15ko9-0uamLfC3dfHgYbuamjPMtU70mbh",
    },
    {
      title: "Gen AI NASSCOM",
      organization: "SJF",
      issueDate: "21 February 2026",
      description:
        "Completed the Gen AI NASSCOM certification under the Skill Development Program, gaining practical exposure to Generative AI concepts and real-world industry applications.",
      link: "https://drive.google.com/drive/u/0/folders/15ko9-0uamLfC3dfHgYbuamjPMtU70mbh",
    },
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020b1a] to-[#041b3a] relative overflow-hidden"
    >
      {/* glow effect */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-32 right-1/3"></div>

      <div className="w-full px-16 lg:px-24 py-24 relative z-10">
        <h2 className="text-6xl font-bold text-white text-center mb-6">
          <span className="text-white">Certifications</span>
        </h2>

        <p className="text-xl text-gray-300 text-center mb-20">
          Professional credentials that validate my technical expertise and continuous learning journey
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <div
              key={index}
              // className="bg-[#0b1b2f] rounded-xl overflow-hidden border border-cyan-400/10 hover:border-cyan-400/40shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] group"
              // className="flex gap-8 bg-[#0b1b2f] rounded-xl p-10 border border-cyan-400/10 hover:border-cyan-400/40 shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] group"
              className="relative flex gap-8 bg-[#0b1b2f] rounded-xl p-10 border border-cyan-400/10 hover:border-cyan-400/40 shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] group"
            >
              {/* Top banner */}
              <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
                   Verified
              </div>
                <div className="flex-shrink-0">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center border border-cyan-400/30">
      <Award size={28} className="text-white" />
    </div>
  {/* </div> */}
              {/* <div className="h-36 bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center relative">
                <Award
                  size={60}
                  className="text-white opacity-40 group-hover:opacity-70 transition duration-300"
                /> */}

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
                  Verified
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300"> */}
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* <p className="text-cyan-400 font-semibold text-base mb-1"> */}
                <p className="text-cyan-400 font-semibold text-lg mb-1">
                  {cert.organization}
                </p>

                <p className="text-gray-400 text-base mb-4">{cert.issueDate}</p>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {cert.description}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  // className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-base transition duration-300"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-lg transition duration-300"
                >
                  View Credential
                  <ExternalLink size={22} className="ml-2" />
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
// import { Award, ExternalLink } from 'lucide-react';

// const Certificates = () => {
//   const certificates = [
//     {
//       title: 'Advance Python for ML and AI',
//       organization: 'CSE Pathshala',
//       issueDate: '3rd August 2025',
//       description: 'Completed a 35+ hour live training on Advanced Python for Machine Learning and AI, gaining hands-on experience in implementing ML concepts and solving real-world problems using Python',
//       link: 'https://drive.google.com/drive/u/0/folders/15ko9-0uamLfC3dfHgYbuamjPMtU70mbh',
//     },
//     {
//       title: 'Unlocking DSA with C',
//       organization: 'CSE Pathshala',
//       issueDate: '25th March 2024',
//       description: 'Completed a 25+ hour live course on Data Structures and Algorithms using C, strengthening problem-solving skills and core concepts like arrays, pointers, and algorithmic thinking',
//       link: 'https://drive.google.com/drive/u/0/folders/15ko9-0uamLfC3dfHgYbuamjPMtU70mbh',
//     },
//     {
//       title: 'Gen AI NASSCOM',
//       organization: 'SJF',
//       issueDate: '21 February 2026',
//       description: 'Completed the Gen AI NASSCOM certification under the Skill Development Program, gaining practical exposure to Generative AI concepts and real-world industry applications',
//       link: 'https://drive.google.com/drive/u/0/folders/15ko9-0uamLfC3dfHgYbuamjPMtU70mbh',
//     },
//   ];

//   return (
//     <section id="certificates" className="py-20 bg-slate-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-white text-center mb-4">
//           Certifications
//         </h2>
//         <p className="text-gray-400 text-center mb-12">
//           Professional credentials that validate my technical expertise and continuous learning journey
//         </p>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {certificates.map((cert, index) => (
//             <div
//               key={index}
//               className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-slate-700 group"
//             >
//               <div className="h-32 bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center relative overflow-hidden">
//                 <Award size={60} className="text-white opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
//                 <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
//                   Verified
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
//                   {cert.title}
//                 </h3>
//                 <p className="text-blue-400 font-semibold text-sm mb-2">{cert.organization}</p>
//                 <p className="text-gray-500 text-xs mb-3">{cert.issueDate}</p>
//                 <p className="text-gray-400 text-sm leading-relaxed mb-4">{cert.description}</p>

//                 <a
//                   href={cert.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors duration-300"
//                 >
//                   View Credential
//                   <ExternalLink size={14} className="ml-2" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certificates;
