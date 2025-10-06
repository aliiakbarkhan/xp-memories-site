const services = [
  {
    icon: "💼",
    title: "LinkedIn Profile Transformation",
    description: "Turning your professional profile into a client-attracting, high-impact asset using brand-first design.",
  },
  {
    icon: "🧠",
    title: "Machine Learning Solutions",
    description: "From model development and training to integrating ML APIs for real-world applications and analysis.",
  },
  {
    icon: "💻",
    title: "Software Development",
    description: "Full-stack development with a focus on robust backend systems using Java and modern front-end practices.",
  },
  {
    icon: "👨‍🏫",
    title: "Teaching & Mentoring",
    description: "Providing clear, concise instruction on ML, programming, and development concepts to aspiring engineers.",
  },
  {
    icon: "🎮",
    title: "Game Development",
    description: "Creating simple, engaging games and interactive simulations using JavaScript and related libraries.",
  },
  {
    icon: "🎨",
    title: "UI/UX & Graphics Design",
    description: "Crafting intuitive user interfaces and impactful graphic assets for digital products and branding.",
  },
];

const ServicesWindow = () => {
  return (
    <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
      <div className="bg-[#0054E3] text-white p-3 rounded">
        <h2 className="text-xl font-bold">⚙️ My Expertise</h2>
        <p className="text-sm">Offering a range of high-impact services across development, design, and education.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-white to-[#ECE9D8] border-2 border-gray-400 p-4 rounded hover:border-[#0054E3] transition-colors"
          >
            <div className="text-center">
              <div className="text-4xl mb-2">{service.icon}</div>
              <h3 className="font-bold text-sm mb-2 text-[#0054E3]">
                {service.title}
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesWindow;
