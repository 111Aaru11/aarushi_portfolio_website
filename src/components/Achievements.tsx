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
      <div className="absolute w-[300px] sm:w-[420px] md:w-[500px] h-[300px] sm:h-[420px] md:h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-32 left-1/3"></div>

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 pt-20 md:pt-24 pb-40 md:pb-42 relative z-10">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4">
          My <span className="text-cyan-400">Achievements</span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center mb-12 md:mb-16">
          Achievements reflect excellence, persistence and problem-solving ability
        </p>

        {/* Cards */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10"> */}
        <div className="grid md:grid-cols-3 gap-7">

          {achievements.map((achievement, index) => (

            <div
              key={index}
              className="relative flex flex-col bg-gradient-to-b from-[#0b1b2f]/90 to-[#07101f]/90 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/10 hover:border-cyan-400/40 shadow-lg hover:shadow-cyan-500/25 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] group overflow-hidden"
            >

              {/* soft glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5"></div>

              {/* Icon */}
              <div className="flex-shrink-0 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center border border-cyan-400/30 shadow-md shadow-cyan-500/20">
                  {/* <achievement.icon size={28} className="text-white" /> */}
                  <achievement.icon size={22} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div>

                {/* <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300"> */}
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300 leading-snug">
                  {achievement.title}
                </h3>

                {/* <p className="text-cyan-400 text-lg font-semibold mb-4"> */}
                <p className="text-cyan-400 text-sm font-semibold mb-2">
                  {achievement.date}
                </p>

                {/* <p className="text-gray-300 text-lg leading-relaxed"> */}
                <p className="text-gray-300 text-sm leading-relaxed">
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