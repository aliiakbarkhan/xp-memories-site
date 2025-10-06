const ResumeWindow = () => {
  return (
    <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
      <div className="bg-[#0054E3] text-white p-3 rounded">
        <h2 className="text-xl font-bold">📄 My Resume</h2>
        <p className="text-sm">A snapshot of my education, experience, and skills for quick reference.</p>
      </div>

      <div className="bg-[#ECE9D8] border-2 border-gray-400 p-4 rounded">
        <h3 className="font-bold text-lg mb-3 text-[#0054E3] border-b-2 border-[#0054E3] pb-1">
          📝 Summary
        </h3>
        <div className="space-y-2 text-sm text-gray-800">
          <p>
            Currently pursuing <b>B.Tech CSE</b> with an <b>8.75 CGPA</b>. Expertise in Machine Learning, full-stack Java development, and professional Graphics/UI/UX design.
          </p>
          <p>
            I focus on building scalable backend systems and creating engaging educational content for the ML community.
          </p>
        </div>
      </div>

      <div className="bg-[#ECE9D8] border-2 border-gray-400 p-4 rounded">
        <h3 className="font-bold text-lg mb-3 text-[#0054E3] border-b-2 border-[#0054E3] pb-1">
          💼 Key Experience
        </h3>
        <ul className="space-y-3 text-sm text-gray-800">
          <li className="flex gap-2">
            <span className="text-[#0054E3] font-bold">▶</span>
            <div>
              <b className="text-[#0054E3]">ML Instructor:</b> Created and launched a highly-viewed educational video series on Machine Learning algorithms and model building.
            </div>
          </li>
          <li className="flex gap-2">
            <span className="text-[#0054E3] font-bold">▶</span>
            <div>
              <b className="text-[#0054E3]">Software Developer Intern:</b> Worked on multiple Java-based projects, optimizing small-scale backend logic using Core Java and JDBC.
            </div>
          </li>
          <li className="flex gap-2">
            <span className="text-[#0054E3] font-bold">▶</span>
            <div>
              <b className="text-[#0054E3]">Graphics Designer:</b> Provided high-impact LinkedIn profile transformations and branding assets for professional clients.
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-400 p-4 rounded">
        <h3 className="font-bold text-lg mb-3 text-[#0054E3]">📥 Download Resume</h3>
        <div className="flex gap-3">
          <a
            href="https://drive.google.com/file/d/1y7Kf5Qv3q4m1g4bJH-KRfmeehQAUUFin/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#ECE9D8] border-2 border-gray-600 hover:bg-[#0054E3] hover:text-white hover:border-[#0054E3] text-sm font-bold rounded transition-colors flex items-center gap-2"
          >
            <span>👁️</span> View Full Resume
          </a>
          <a
            href="https://drive.google.com/file/d/1y7Kf5Qv3q4m1g4bJH-KRfmeehQAUUFin/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#ECE9D8] border-2 border-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 text-sm font-bold rounded transition-colors flex items-center gap-2"
          >
            <span>⬇️</span> Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeWindow;
