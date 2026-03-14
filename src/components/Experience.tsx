import { Heart, Users, HandHeart } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: Heart,
      title: 'Volunteer - District Red Cross Society',
      organization: 'Red Cross',
      period: '2022 - Present',
      description: 'Actively engaged in social initiatives, helping physically challenged children and participating in community outreach programs.',
      highlights: [
        'Organized educational activities for physically challenged children',
        'Participated in blood donation drives and health awareness campaigns',
        'Contributed to disaster relief and emergency response initiatives',
        'Mentored underprivileged students in basic computer skills',
      ],
    },
    {
      icon: Users,
      title: 'Community Service Leader',
      organization: 'College Social Service Club',
      period: '2023 - 2024',
      description: 'Led various community service projects aimed at social welfare and environmental conservation.',
      highlights: [
        'Coordinated tree plantation drives',
        'Organized skill development workshops for rural youth',
        'Led awareness campaigns on environmental sustainability',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Social Work & Experience
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Contributing to society and making a positive impact
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700 group"
            >
              <div className="flex items-start mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-full p-4 mr-6 group-hover:scale-110 transition-transform duration-300">
                  <exp.icon className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-1">{exp.organization}</p>
                  <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                  <p className="text-gray-400 leading-relaxed mb-6">{exp.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-white font-semibold flex items-center">
                      <HandHeart className="mr-2 text-blue-400" size={18} />
                      Key Contributions:
                    </h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-gray-400 text-sm">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
