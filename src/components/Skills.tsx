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
      <div className="absolute w-[260px] sm:w-[360px] md:w-[420px] h-[260px] sm:h-[360px] md:h-[420px] bg-cyan-500/20 blur-[120px] rounded-full top-40 right-1/3"></div>

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-20 relative z-10">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Skills & <span className="text-cyan-400">Technologies</span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center mb-8 md:mb-10">
          Tools and technologies I work with
        </p>


        {/* Skill category cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-3 md:mb-5">

          {skillCategories.map((category, index) => (

            <div
              key={index}
              className="bg-[#0b1b2f] rounded-xl p-5 md:p-6 border border-cyan-400/10 hover:border-cyan-400/40 shadow-lg hover:shadow-cyan-500/10 transition duration-300 transform hover:scale-105"
            >

              <div className="flex items-center mb-4">

                <category.icon className="text-cyan-400 mr-3" size={30} />

                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {category.title}
                </h3>

              </div>

              <div className="flex flex-wrap gap-2">

                {category.skills.map((skill, idx) => (

                  <span
                    key={idx}
                    className="text-xs sm:text-sm text-gray-200 bg-[#132a45] px-4 py-1.5 rounded-full"
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

          <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6 md:mb-8">
            Technical Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">

            {allSkills.map((skill, index) => (

              <div
                key={index}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-lg font-medium shadow-lg hover:shadow-cyan-500/20 transform hover:scale-110 transition duration-300 cursor-default"
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
