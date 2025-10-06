const GalleryWindow = () => {
  // Placeholder gallery items
  const galleryItems = [
    { id: 1, title: "Hackathon Award Ceremony", icon: "🏆" },
    { id: 2, title: "Team Collaboration", icon: "👥" },
    { id: 3, title: "Project Demo", icon: "💻" },
    { id: 4, title: "Certificate Collection", icon: "📜" },
    { id: 5, title: "Workshop Session", icon: "🎓" },
    { id: 6, title: "Code Review", icon: "🔍" },
    { id: 7, title: "Tech Conference", icon: "🎤" },
    { id: 8, title: "Innovation Day", icon: "💡" },
  ];

  return (
    <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
      <div className="bg-[#0054E3] text-white p-3 rounded">
        <h2 className="text-xl font-bold">🖼️ Visual Showcase</h2>
        <p className="text-sm">Photos from hackathons, certifications, and design mockups.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="aspect-square bg-gradient-to-br from-[#ECE9D8] to-[#D4D0C8] border-2 border-gray-400 rounded hover:border-[#0054E3] transition-colors flex flex-col items-center justify-center cursor-pointer group"
          >
            <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <p className="text-xs font-bold text-center px-2 text-gray-700">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-yellow-100 border-2 border-yellow-600 p-3 rounded">
        <p className="text-xs text-gray-700 text-center">
          <b>📸 Note:</b> Gallery images are represented with icons for this retro demo. Original portfolio contains actual photos from events and projects.
        </p>
      </div>
    </div>
  );
};

export default GalleryWindow;
