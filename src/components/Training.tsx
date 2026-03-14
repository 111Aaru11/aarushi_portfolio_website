import { Award } from 'lucide-react';

const Training = () => {
  const trainings = [
    {
      title: 'Machine Learning Specialization',
      organization: 'Coursera / Stanford University',
      duration: '3 months',
      year: '2023',
      description: 'Comprehensive training in supervised learning, unsupervised learning, and best practices in machine learning.',
    },
    {
      title: 'Data Science Workshop',
      organization: 'IEEE Student Chapter',
      duration: '2 weeks',
      year: '2023',
      description: 'Hands-on workshop covering data preprocessing, visualization, and statistical analysis using Python.',
    },
    {
      title: 'Python for Data Analysis',
      organization: 'DataCamp',
      duration: '6 weeks',
      year: '2022',
      description: 'Intensive training on pandas, NumPy, and data manipulation techniques for real-world datasets.',
    },
    {
      title: 'Web Development Bootcamp',
      organization: 'Online Platform',
      duration: '8 weeks',
      year: '2022',
      description: 'Full-stack web development training covering HTML, CSS, JavaScript, and React.',
    },
  ];

  return (
    <section id="training" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Training & Workshops
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Professional development and technical training
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {trainings.map((training, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-slate-700 group"
            >
              <div className="flex items-start mb-4">
                <div className="bg-blue-600 rounded-full p-3 mr-4 group-hover:bg-blue-500 transition-colors duration-300">
                  <Award className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {training.title}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-1">{training.organization}</p>
                  <div className="flex gap-4 text-sm text-gray-500 mb-3">
                    <span>{training.duration}</span>
                    <span>•</span>
                    <span>{training.year}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{training.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
