const AboutWindow = () => {
  return (
    <div className="p-6 space-y-4 font-['Tahoma',_sans-serif]">
      <div className="border-2 border-[#0054E3] bg-gradient-to-b from-blue-50 to-white p-4 rounded">
        <h2 className="text-2xl font-bold text-[#0054E3] mb-2">Ali Akbar Khan</h2>
        <p className="text-sm text-gray-700 font-semibold">
          B.Tech CSE Student | ML Instructor & Developer
        </p>
        <p className="text-sm text-gray-600 mt-1">CGPA: 8.75</p>
      </div>

      <div className="bg-[#ECE9D8] p-4 border-2 border-gray-400 rounded">
        <h3 className="font-bold text-lg mb-3 text-[#0054E3]">👨‍💻 About Me</h3>
        <div className="space-y-3 text-sm text-gray-800 leading-relaxed">
          <p>
            I am a highly motivated <b>B.Tech Computer Science Engineering student</b> currently maintaining an impressive <b>8.75 CGPA</b>. My professional focus is driven by a passion for solving complex problems through technology, spanning three primary disciplines: <b>Machine Learning Instruction, Software Development, and UI/UX Design.</b>
          </p>
          <p>
            As a <b>Machine Learning Instructor</b>, I enjoy breaking down complex algorithms into accessible video content, proving my ability to communicate technical concepts effectively (evidenced by 700+ organic views on my debut video series). Concurrently, my work as a <b>Software Developer Intern</b> has given me hands-on experience building robust Java-based backend systems.
          </p>
          <p>
            My commitment to user experience and aesthetics is fulfilled through <b>Freelance Graphics Design</b>, where I help professionals transform their brand presence. This diverse skill set allows me to contribute not just to the functionality of a project, but also to its educational value and visual appeal.
          </p>
        </div>
      </div>

      <div className="bg-[#ECE9D8] p-4 border-2 border-gray-400 rounded">
        <h3 className="font-bold text-lg mb-3 text-[#0054E3]">🔗 Connect With Me</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span>📧</span>
            <a href="mailto:aliakbarkhana79@gmail.com" className="text-blue-600 hover:underline">
              aliakbarkhana79@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>📱</span>
            <a href="tel:+918000939156" className="text-blue-600 hover:underline">
              +91 8000939156
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>💼</span>
            <a
              href="https://www.linkedin.com/in/aliiakbarkhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>🐙</span>
            <a
              href="https://github.com/aliiakbarkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;
