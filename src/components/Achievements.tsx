import { Trophy, Target } from 'lucide-react';

const Achievements = () => {

  const achievements = [
    {
      icon: Trophy,
      title: '50-Day Streak on LeetCode',
      date: 'March 2026',
      description:
        'Maintained a 50-day daily problem-solving streak on LeetCode, showcasing consistency and dedication.',
    },
    {
      icon: Target,
      title: '160 GfG Challenge',
      date: 'August 2025',
      description:
        'Solved 160 coding questions on GeeksforGeeks, strengthening problem-solving and algorithmic thinking.',
    },
    {
      icon: Target,
      title: 'Binary Blitz Hackathon',
      date: 'March 2024',
      description:
        'Participated in the Binary Blitz Web Hackathon, applying web development and UI/UX skills to design innovative solutions while working collaboratively under hackathon constraints.',
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020b1a] to-[#041b3a] relative overflow-hidden"
    >

      {/* glow effect */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-32 left-1/3"></div>

      <div className="w-full px-16 lg:px-24 py-24 relative z-10">

        {/* Heading */}
        <h2 className="text-6xl font-bold text-white text-center mb-6">
          My <span className="text-cyan-400">Achievements</span>
        </h2>

        <p className="text-xl text-gray-300 text-center mb-20">
          Achievements reflect excellence, persistence and problem-solving ability
        </p>

        {/* Cards */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10"> */}
        <div className="grid md:grid-cols-3 gap-10">

          {achievements.map((achievement, index) => (

            <div
              key={index}
              className="flex gap-8 bg-[#0b1b2f] rounded-xl p-12 border border-cyan-400/10 hover:border-cyan-400/40 shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] group"
            >

              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center border border-cyan-400/30">
                  {/* <achievement.icon size={28} className="text-white" /> */}
                  <achievement.icon size={36} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div>

                {/* <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300"> */}
                <h3 className="text-4xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {achievement.title}
                </h3>

                {/* <p className="text-cyan-400 text-lg font-semibold mb-4"> */}
                <p className="text-cyan-400 text-xl font-semibold mb-4">
                  {achievement.date}
                </p>

                {/* <p className="text-gray-300 text-lg leading-relaxed"> */}
                <p className="text-gray-300 text-xl leading-relaxed">
                  {achievement.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Achievements;
// import { Trophy, Target } from 'lucide-react';

// const Achievements = () => {
//   const achievements = [
//     {
//       icon: Trophy,
//       title: '50-Day Streak on LeetCode',
//       date: 'March 2026',
//       description: 'Maintained a 50-day daily problem-solving streak on LeetCode, showcasing consistency and dedication.',
//     },
//     {
//       icon: Target,
//       title: '160 GfG Challenge',
//       date: 'August 2025',
//       description: 'Solved 160 coding questions on Gfg, strengthening problem-solving and algorithmic thinking.',
//     },
//     {
//       icon: Target,
//       title: 'Binary Blitz Hackathon',
//       date: 'March 2024',
//       description: 'Participated in the Binary Blitz Web Hackathon, applying web development and UI/UX skills to design innovative solutions while working collaboratively under hackathon constraints',
//     },

//   ];

//   return (
//     <section id="achievements" className="py-20 bg-slate-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-white text-center mb-4">
//           Achievements
//         </h2>
//         <p className="text-gray-400 text-center mb-12">
//           Achievements reflect excellence and leadership
//         </p>

//         <div className="grid md:grid-cols-2 gap-8">
//           {achievements.map((achievement, index) => (
//             <div
//               key={index}
//               className="bg-slate-900 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-slate-700 group relative overflow-hidden"
//             >
//               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 group-hover:bg-blue-600/20 transition-colors duration-300"></div>

//               <div className="flex items-start relative z-10">
//                 <div className="bg-blue-600 rounded-lg p-3 mr-4 group-hover:bg-blue-500 transition-colors duration-300 flex-shrink-0">
//                   <achievement.icon className="text-white" size={24} />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
//                     {achievement.title}
//                   </h3>
//                   <p className="text-blue-400 text-sm font-semibold mb-3">{achievement.date}</p>
//                   <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Achievements;
