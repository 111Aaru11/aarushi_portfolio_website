import { Github, ExternalLink, Code } from 'lucide-react';
import { useState, useRef } from 'react';

const Projects = () => {

  const [visibleCount, setVisibleCount] = useState(3);
  const sectionRef = useRef(null);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleCount(prev => Math.max(3, prev - 3));

    setTimeout(() => {
      sectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 120);
  };

  const projects = [
    {
      title: 'Plant Disease Classification and Detection Model',
      description: 'Deployed an AI-powered plant disease detection full-stack web application that allows users to upload crop images and receive real-time diagnosis, severity analysis, and treatment recommendations.',
      technologies: ['Python', 'Flask', 'OpenCV', 'JavaScript', 'Ngrok', 'REST API', 'YOLO'],
      github: 'https://github.com/111Aaru11/plant-disease-detection',
      demo: 'https://petaled-cecil-gleesome.ngrok-free.dev',
    },
    {
      title: 'Real-Time Weather Analytics Dashboard',
      description: 'Designed a real-time weather analytics dashboard in Power BI using live data from the Visual Crossing Weather API with insights on temperature, humidity, wind speed and forecasts.',
      technologies: ['Power BI', 'DAX', 'Power Query', 'REST API'],
      github: 'https://github.com/111Aaru11/POWER-BI',
    },
    {
      title: 'Dust Data Discovery: AQI Analysis',
      description: 'Analyzed India’s air pollution data using Python to compute AQI, identify pollution hotspots, and visualize PM2.5 and PM10 trends.',
      technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
      github: 'https://github.com/111Aaru11/DataAnalysis',
    },
    {
      title: 'Harvest to Market Dashboard',
      description: 'Built an Excel dashboard to analyze agricultural commodity prices across Indian mandis using data.gov.in with PivotTables, slicers and multiple visualizations.',
      technologies: ['Excel', 'EDA', 'Data Visualization'],
      github: 'https://www.linkedin.com/in/aarushi-thakur-6ab0a0354/',
    },
    {
      title: 'ETL Pipeline',
      description: 'Developed a Python–SQL data analysis pipeline to connect with Microsoft SQL Server, perform data extraction, querying, and generate insights using Python and SQL.',
      technologies: ['Python', 'Pandas', 'Microsoft SQL Server', 'PyODBC', 'SQLAlchemy', 'Jupyter Notebook', 'Kaggle'],
      github: 'https://github.com/111Aaru11/Python-SQL-Project',
    },
    {
      title: 'Talking LLM Assistant',
      description: 'Developed a voice-based AI assistant using Faster-Whisper for speech-to-text, Ollama Llama2 for responses, and Text-to-Speech for voice replies.',
      technologies: ['Python', 'Faster-Whisper', 'Ollama(Llama2)', 'Gradio', 'TTS'],
      github: 'https://github.com/111Aaru11/Fast-Talking-LLM',
    },
    {
      title: 'Fake Video Detection',
      description: 'Engineered a system that analyzes videos to detect deepfakes using blink rate, lip synchronization, head movement, and frequency artifact analysis.',
      technologies: ['Python', 'OpenCV', 'NumPy', 'SciPy', 'MediaPipe', 'Librosa'],
      github: 'https://github.com/111Aaru11/Ml-fake-video-detection',
    },
    {
      title: 'Visibility Distance Prediction Model',
      description: 'Built a machine learning model predicting visibility distance using meteorological features with Linear Regression, Random Forest and XGBoost.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'Matplotlib', 'Seaborn'],
      github: 'https://github.com/111Aaru11/Visibility-Distance-Prediction-Model',
    },
    {
      title: 'Policy Pulse Tracker',
      description: 'AI-powered Public Policy Tracker that provides real-time updates on government policies using the GNews API and Google Gemini API chatbot.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API', 'REST APIs'],
      github: 'https://github.com/111Aaru11/Public-Pulse---Policy-Tracker',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020b1a] to-[#041b3a] relative overflow-hidden"
    >

      {/* glow effect */}
      <div className="absolute w-[260px] sm:w-[360px] md:w-[420px] h-[260px] sm:h-[360px] md:h-[420px] bg-cyan-500/20 blur-[120px] rounded-full top-32 left-1/3"></div>

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-20 relative z-10">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center mb-12 md:mb-16">
          A showcase of my work spanning applications, APIs, and AI solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10"> */}

  {projects.slice(0, visibleCount).map((project, index) => (
    <div
      key={index}
      // className="flex gap-8 bg-[#0b1b2f] rounded-xl p-10 border border-cyan-400/10 shadow-lg hover:shadow-cyan-500/20 transition duration-300"
      className="relative flex flex-col bg-gradient-to-b from-[#0b1b2f]/90 to-[#07101f]/90 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/10 shadow-lg hover:shadow-cyan-500/25 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] group overflow-hidden"
    >

      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5"></div>

      {/* Project Icon */}
      <div className="flex items-center justify-between mb-5">

        <div className="flex-shrink-0">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center border border-cyan-400/30 shadow-md shadow-cyan-500/20">
            <Code size={18} className="text-white" />
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition relative z-10"
          >
            <Github size={18} />
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition relative z-10"
            >
              <ExternalLink size={18} />
            </a>
          )}

        </div>

      </div>

      {/* Project Content */}
      <div className="flex flex-col">

        {/* <h3 className="text-2xl font-bold text-cyan-400 mb-3"> */}
        {/* <h3 className="text-3xl font-bold text-cyan-400 mb-3"> */}
        <h3 className="text-lg md:text-xl font-semibold text-white mb-3 leading-snug group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Tech stack */}
        <p className="text-gray-400 text-xs tracking-widest mb-2">
          Tech Stack
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs bg-[#132a45] text-gray-200 px-3 py-1 rounded-full border border-cyan-400/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* <p className="text-gray-300 text-base leading-relaxed mb-5"> */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          {project.description}
        </p>

      </div>

    </div>

      ))}
    </div>


        <div className="flex justify-center gap-4 mt-12">

          {visibleCount < projects.length && (
            <button
              onClick={handleShowMore}
              className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg text-sm hover:bg-cyan-400/10 transition"
            >
              Show More
            </button>
          )}

          {visibleCount > 3 && (
            <button
              onClick={handleShowLess}
              className="border border-gray-500 text-gray-300 px-6 py-2 rounded-lg text-sm hover:bg-gray-500/10 transition"
            >
              Show Less
            </button>
          )}

        </div>

      </div>

    </section>
  );
};

export default Projects;