import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {

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
      demo: 'https://policy-pulse-demo.com',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020b1a] to-[#041b3a] relative overflow-hidden"
    >

      {/* glow effect */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-32 left-1/3"></div>

      <div className="w-full px-16 lg:px-24 py-24 relative z-10">

        <h2 className="text-6xl font-bold text-white text-center mb-6">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="text-xl text-gray-300 text-center mb-20">
          A showcase of my work spanning applications, APIs, and AI solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10"> */}

          {projects.map((project, index) => (
            <div
  key={index}
  // className="flex gap-8 bg-[#0b1b2f] rounded-xl p-10 border border-cyan-400/10 shadow-lg hover:shadow-cyan-500/20 transition duration-300"
  className="flex gap-8 bg-[#0b1b2f] rounded-xl p-10 border border-cyan-400/10 hover:border-cyan-400/40 shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] group"
>

  {/* Project Icon */}
  <div className="flex-shrink-0">
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center border border-cyan-400/30">
      <Code size={32} className="text-white" />
    </div>
  </div>

  {/* Project Content */}
  <div className="flex flex-col">

    {/* <h3 className="text-2xl font-bold text-cyan-400 mb-3"> */}
    {/* <h3 className="text-3xl font-bold text-cyan-400 mb-3"> */}
    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
      {project.title}
    </h3>

    {/* Tech stack */}
    <p className="text-gray-400 text-sm mb-3">
      Tech Stack
    </p>

    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies.map((tech, idx) => (
        <span
  key={idx}
  className="text-base bg-[#132a45] text-gray-200 px-4 py-2 rounded-full"
>
          {tech}
        </span>
      ))}
    </div>

    {/* <p className="text-gray-300 text-base leading-relaxed mb-5"> */}
    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-5">
      {project.description}
    </p>

    {/* Links */}
    <div className="flex gap-5 mt-auto">

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-cyan-400 transition"
      >
        <Github size={40} />
      </a>

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-cyan-400 transition"
        >
          <ExternalLink size={40} />
        </a>
      )}

    </div>

  </div>

</div>
            
          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;
// import { Github, ExternalLink, Code } from 'lucide-react';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'Plant Disease Classification and Detection Model',
//       description: 'Deployed an AI-powered plant disease detection python full-stack web application that allows users to upload crop images and receive real-time diagnosis, severity analysis, and treatment recommendations. The system integrates a Flask backend with a Vision AI model to classify diseases and validate non-plant images, ensuring reliable predictions for real-world agricultural use',
//       technologies: ['Python', 'Flask', 'OpenCV', 'JavaScript', 'Ngrok', 'REST API', 'YOLO'],
//       github: 'https://github.com/111Aaru11/plant-disease-detection',
//       demo: 'https://petaled-cecil-gleesome.ngrok-free.dev',
//     },
//     {
//       title: 'REAL - TIME WEATHER ANALYTICS & FORECAST DASHBOARD',
//       description: 'Designed a Real-Time Weather Analytics Dashboard in Power BI by integrating live data from the Visual Crossing Weather API. The dashboard provides interactive insights on temperature, humidity, wind speed, and rain probability, along with hourly and 7-day forecast analysis. Implemented DAX measures, Power Query transformations, and dynamic visuals for real-time monitoring and comparison across states',
//       technologies: ['PowerBI', 'DAX', 'Power Query', 'REST API'],
//       github: 'https://github.com/111Aaru11/POWER-BI',
//     },
//     {
//       title: 'Dust Data Discovery : AQI analysis',
//       description: 'Analyzed India’s air pollution data using Python to compute AQI, identify pollution hotspots, and study pollutant behavior. Applied data cleaning, statistical analysis, and visualizations to uncover key insights about PM2.5 and PM10 trends, supporting data-driven environmental decision-making',
//       technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
//       github: 'https://github.com/111Aaru11/DataAnalysis',
//     },
//     {
//       title: 'Harvest to Market : Dashboard',
//       description: 'Developed an interactive Excel dashboard to analyze daily agricultural commodity prices across Indian mandis using data from data.gov.in. The project uses PivotTables, Power Pivot, slicers, and multiple visualizations to uncover pricing trends, top markets, and state-wise commodity insights. It enables quick, data-driven understanding of market behavior in the agriculture sector',
//       technologies: ['Excel', 'EDA', 'Data Visualization'],
//       github: 'https://www.linkedin.com/in/aarushi-thakur-6ab0a0354/',
//     },
//     {
//       title: 'Talking LLM Assistant',
//       description: 'Built a Talking LLM Assistant that converts speech to text using Faster-Whisper, generates intelligent responses using an Ollama Llama2 model, and converts the response back to speech using Text-to-Speech. Built an interactive interface with Gradio to enable real-time voice conversations with an AI assistant',
//       technologies: ['Python', 'Faster-Whisper', 'Ollama(Llama2)', 'Gradio', 'TTS'],
//       github: 'https://github.com/111Aaru11/Fast-Talking-LLM',
//     },
//     {
//       title: 'Fake Video Detection',
//       description: 'Engineered a heuristic-based system that analyzes videos to detect potential deepfakes by examining blink rate, lip–audio synchronization, head movement, and frequency artifacts. The system processes video frames and audio signals to generate a fake probability score, visual analysis plots, and a detailed report, providing an explainable approach to deepfake detection',
//       technologies: ['Python', 'OpenCV', 'NumPy', 'SciPy', 'MediaPipe', 'Librosa', 'JSON'],
//       github: 'https://github.com/111Aaru11/Ml-fake-video-detection',
//     },
//     {
//       title: 'Visibility Distance Prediction Model',
//       description: 'Developed a machine learning model to predict visibility distance using meteorological features like temperature, humidity, wind speed, and pressure. Implemented models including Linear Regression, Random Forest, and XGBoost, achieving the best performance with XGBoost using evaluation metrics such as MAE, RMSE, and R² score.',
//       technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost',, 'Matplotlib', 'Seaborn'],
//       github: 'https://github.com/111Aaru11/Visibility-Distance-Prediction-Model',
//     },
//     {
//       title: 'Policy Pulse Tracker',
//       description: 'Policy Pulse is an AI-powered Public Policy Tracker that provides real-time updates on government policies across multiple sectors such as health, education, finance, and environment. The platform integrates the GNews API for latest policy news and uses the Google Gemini API to power a chatbot that answers questions about policies implemented in specific years.',
//       technologies: ['HTML', 'CSS', 'JavaSript', 'API', 'REST APIs'],
//       github: 'https://github.com/111Aaru11/Public-Pulse---Policy-Tracker',
//       demo: 'https://policy-pulse-demo.com',
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-slate-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-white text-center mb-4">
//           Featured Projects
//         </h2>
//         <p className="text-gray-400 text-center mb-12">
//           A showcase of my work spanning applications, APIs, and responsive interfaces
//         </p>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-slate-700 group"
//             >
//               <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center relative overflow-hidden">
//                 <Code size={80} className="text-white opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
//                 <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-400 mb-4 text-sm leading-relaxed">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.technologies.map((tech, idx) => (
//                     <span
//                       key={idx}
//                       className="text-xs bg-slate-800 text-blue-400 px-3 py-1 rounded-full border border-blue-900"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-4 pt-4 border-t border-slate-700">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
//                   >
//                     <Github size={18} className="mr-2" />
//                     Code
//                   </a>
//                   {project.demo && (
//                     <a
//                       href={project.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
//                     >
//                       <ExternalLink size={18} className="mr-2" />
//                       Demo
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
