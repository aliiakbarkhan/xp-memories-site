const projects = [
  {
    title: "Eye Disease Detection Model",
    description: "A trained deep learning model designed to classify and detect eye diseases from medical images. Cut prediction time from several minutes to under 2 seconds through an optimized Gradio-based pipeline.",
    github: "https://github.com/aliiakbarkhan/eye-disease-detection-DL",
    icon: "👁️",
  },
  {
    title: "Library Management System",
    description: "Built a Java Swing-based Library Management System managing 1,000+ books, automating 70% of manual library tasks.",
    github: "https://github.com/aliiakbarkhan/library-managment-system",
    icon: "📚",
  },
  {
    title: "Advanced Disease Risk Predictor",
    description: "Real-time, AI-powered health risk assessment system for Indian states and cities, provides dynamic risk analysis using live weather, air quality, and mobility data.",
    github: "https://github.com/aliiakbarkhan/disease-risk-predictor",
    icon: "🏥",
  },
  {
    title: "House Price Prediction API",
    description: "A Machine Learning API provides housing price predictions. Improved prediction accuracy from 82% to over 95% with feature engineering and model tuning.",
    github: "https://github.com/aliiakbarkhan/RandomForestRegressor-Prediction-API",
    icon: "🏠",
  },
  {
    title: "Med-E-Safe WebApp & Application",
    description: "Developed a highly secure web app for managing medical records, log in, view reports, and keep your data safe with advanced encryption.",
    github: "https://github.com/aliiakbarkhan/Med-E-Safe",
    icon: "💊",
  },
  {
    title: "Women Safety Application",
    description: "Designed and simulated a real-time SOS and location tracking application in Figma. Achieved 80% faster response simulation.",
    github: "https://github.com/aliiakbarkhan/Women-Safety-Prototype",
    icon: "🚨",
  },
];

const ProjectsWindow = () => {
  return (
    <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
      <div className="bg-[#0054E3] text-white p-3 rounded">
        <h2 className="text-xl font-bold">💻 My Projects</h2>
        <p className="text-sm">A selection of my best work, combining technical depth and practical application.</p>
      </div>

      <div className="space-y-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#ECE9D8] border-2 border-gray-400 p-4 rounded hover:border-[#0054E3] transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="text-3xl flex-shrink-0">{project.icon}</div>
              <div className="flex-1">
                <h3 className="font-bold text-base mb-1 text-[#0054E3]">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-white border-2 border-gray-600 hover:bg-[#0054E3] hover:text-white hover:border-[#0054E3] text-xs font-bold rounded transition-colors"
                  >
                    🔗 GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsWindow;
