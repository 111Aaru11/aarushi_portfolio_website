import { Code2, Brain, GitBranch, Globe } from 'lucide-react';

const Skills = () => {

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Python', 'C++', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'Java'],
    },
    {
      title: 'Data Science',
      icon: Brain,
      skills: [
        'Machine Learning',
        'Data Analysis',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'Matplotlib',
        'Seaborn',
        'Flask',
        'Power BI',
        'Excel',
        'Data Analysis'
      ],
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['React', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Tools & Technologies',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'AWS', 'VS Code'],
    },
  ];


  const allSkills = [
    'Python', 'C++', 'Machine Learning', 'Data Analysis',
    'Pandas', 'NumPy', 'Git & GitHub', 'AWS', 'Power BI',
    'Excel', 'TensorFlow','OpenCV', 'HTML', 'CSS', 'JavaScript', 'React'
  ];


  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020b1a] to-[#041b3a] relative overflow-hidden"
    >

      {/* background glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-40 right-1/3"></div>

      <div className="w-full px-16 lg:px-24 py-24 relative z-10">

        <h2 className="text-6xl font-bold text-white text-center mb-6">
          Skills & <span className="text-cyan-400">Technologies</span>
        </h2>

        <p className="text-xl text-gray-300 text-center mb-20">
          Tools and technologies I work with
        </p>


        {/* Skill category cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">

          {skillCategories.map((category, index) => (

            <div
              key={index}
              className="bg-[#0b1b2f] rounded-xl p-8 border border-cyan-400/10 hover:border-cyan-400/40 shadow-lg hover:shadow-cyan-500/10 transition duration-300 transform hover:scale-105"
            >

              <div className="flex items-center mb-6">

                <category.icon className="text-cyan-400 mr-4" size={42} />

                <h3 className="text-3xl font-semibold text-white">
                  {category.title}
                </h3>

              </div>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, idx) => (

                  <span
                    key={idx}
                    className="text-base text-gray-200 bg-[#132a45] px-8 py-2 rounded-full"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>



        {/* Technical Skills */}

        <div>

          <h3 className="text-4xl font-semibold text-white text-center mb-10">
            Technical Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-5">

            {allSkills.map((skill, index) => (

              <div
                key={index}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 text-lg rounded-lg font-medium shadow-lg hover:shadow-cyan-500/20 transform hover:scale-110 transition duration-300 cursor-default"
              >
                {skill}
              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;
// import { Code2, Database, Brain, TrendingUp, GitBranch, Globe } from 'lucide-react';

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: 'Programming Languages',
//       icon: Code2,
//       skills: ['Python', 'C++', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'JAVA'],
//     },
//     {
//       title: 'Data Science & AI',
//       icon: Brain,
//       skills: ['Machine Learning', 'Data Analysis', 'Pandas', 'NumPy','Sci-kit learn', 'Matplotlib', 'Seaborn' ,'Flask', 'Power BI', 'Excel'],
//     },
//     {
//       title: 'Web Development',
//       icon: Globe,
//       skills: ['React', 'HTML', 'CSS', 'JavaScript'],
//     },
//     {
//       title: 'Tools & Technologies',
//       icon: GitBranch,
//       skills: ['Git', 'GitHub', 'AWS', 'VS Code'],
//     },
//   ];

//   const allSkills = [
//     'Python', 'C++', 'Machine Learning', 'Data Analysis',
//     'Pandas', 'NumPy', 'Git & GitHub','AWS', 'Power BI', 'Excel', 'TensorFlow','HTML',
//     'CSS', 'JavaScript', 'React'
//   ];

//   return (
//     <section id="skills" className="py-20 bg-slate-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-white text-center mb-4">
//           Skills & Technologies
//         </h2>
//         <p className="text-gray-400 text-center mb-12">
//           Tools and technologies I work with
//         </p>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {skillCategories.map((category, index) => (
//             <div
//               key={index}
//               className="bg-slate-800 rounded-lg p-6 hover:bg-slate-750 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-slate-700"
//             >
//               <div className="flex items-center mb-4">
//                 <category.icon className="text-blue-400 mr-3" size={24} />
//                 <h3 className="text-xl font-semibold text-white">{category.title}</h3>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {category.skills.map((skill, idx) => (
//                   <span
//                     key={idx}
//                     className="text-sm text-gray-300 bg-slate-700 px-3 py-1 rounded-full"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16">
//           <h3 className="text-2xl font-semibold text-white text-center mb-8">
//             Technical Skills
//           </h3>
//           <div className="flex flex-wrap justify-center gap-4">
//             {allSkills.map((skill, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-default"
//               >
//                 {skill}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
