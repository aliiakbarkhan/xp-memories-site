const achievements = [
  {
    title: "Top 35% Globally (Leetcode Contests)",
    description: "Achieved a World Rank in the Top 35% on LeetCode.",
    date: "2025",
    icon: "🌍",
  },
  {
    title: "100+ Questions on Leetcode",
    description: "Demonstrated proficiency in Data Structures and Algorithms, Successfully solving over 100 problems on LeetCode.",
    date: "2025",
    icon: "💯",
  },
  {
    title: "3rd Position in Innovastra National Level Hackathon",
    description: "Awarded 3rd Place at the Innovastra National Level Hackathon, A distinguished achievement at Arya College of Engineering, Jaipur.",
    date: "2025",
    icon: "🥉",
  },
  {
    title: "Qualifier Position in Call2Code Hackathon",
    description: "Secured a Qualifier Position in the competitive Call2Code Hackathon, Recognition received at Manipal University, Jaipur in 2025.",
    date: "2025",
    icon: "✅",
  },
  {
    title: "2nd Position in Smart India Hackathon College Level",
    description: "Achieved 2nd Position in the Smart India Hackathon (College Level), Top-tier performance demonstrated at Arya College of Engineering, Jaipur in 2024.",
    date: "2024",
    icon: "🥈",
  },
  {
    title: "Generative AI Certification (Microsoft & LinkedIn)",
    description: "Completed comprehensive training on Generative AI principles, including foundational models, prompt engineering, and ethical deployment of AI solutions.",
    date: "2024",
    icon: "🤖",
  },
  {
    title: "Career Essentials in Data Analysis (Microsoft & LinkedIn)",
    description: "Mastered core data analysis techniques, including data wrangling, visualization, and interpretation, focusing on actionable business insights.",
    date: "2024",
    icon: "📊",
  },
  {
    title: "AWS Foundations of Prompt Engineering",
    description: "Focused on advanced prompt construction techniques to optimize LLM outputs for consistency, accuracy, and task-specific performance.",
    date: "2024",
    icon: "☁️",
  },
  {
    title: "Google Cloud Digital Transformation & Modernization",
    description: "Studied Google Cloud services for infrastructure modernization, application development, and leveraging cloud security best practices.",
    date: "2024",
    icon: "☁️",
  },
];

const AchievementsWindow = () => {
  return (
    <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
      <div className="bg-[#0054E3] text-white p-3 rounded">
        <h2 className="text-xl font-bold">🏆 Awards & Certifications</h2>
        <p className="text-sm">Recognitions that demonstrate my commitment to continuous learning and technical excellence.</p>
      </div>

      <div className="space-y-2">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-[#ECE9D8] border-l-4 border-[#0054E3] p-3 rounded hover:bg-yellow-50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl flex-shrink-0">{achievement.icon}</div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-sm text-[#0054E3]">
                    {achievement.title}
                  </h3>
                  <span className="text-xs text-gray-600 font-semibold">
                    {achievement.date}
                  </span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsWindow;
