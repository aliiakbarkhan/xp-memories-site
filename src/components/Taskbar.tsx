import { useState, useEffect } from "react";
import { WindowState } from "@/pages/Index";

interface TaskbarProps {
  openWindows: WindowState[];
  onWindowClick: (id: string) => void;
}

const Taskbar = ({ openWindows, onWindowClick }: TaskbarProps) => {
  const [time, setTime] = useState(new Date());
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Start Menu */}
      {startMenuOpen && (
        <div className="absolute bottom-12 left-0 w-64 bg-gradient-to-b from-[#245EDC] to-[#1941A5] rounded-tr-lg shadow-2xl border-t-2 border-l-2 border-[#3F7BF7] overflow-hidden z-[10000]">
          <div className="flex">
            <div className="w-8 bg-gradient-to-b from-[#245EDC] to-[#1941A5] flex items-end p-2">
              <span className="text-white text-xs font-bold transform -rotate-90 origin-bottom-left whitespace-nowrap">
                Windows XP
              </span>
            </div>
            <div className="flex-1 bg-[#ECE9D8]">
              <div className="p-2 space-y-1">
                <div className="flex items-center gap-2 px-3 py-2 hover:bg-blue-100 cursor-pointer rounded">
                  <span className="text-xl">👤</span>
                  <span className="text-sm font-bold">Ali Akbar Khan</span>
                </div>
                <div className="h-px bg-gray-400" />
                <div className="flex items-center gap-2 px-3 py-2 hover:bg-blue-100 cursor-pointer">
                  <span className="text-sm">📁 My Documents</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 hover:bg-blue-100 cursor-pointer">
                  <span className="text-sm">💻 My Computer</span>
                </div>
                <div className="h-px bg-gray-400" />
                <div className="flex items-center gap-2 px-3 py-2 hover:bg-blue-100 cursor-pointer">
                  <span className="text-sm">🔧 Control Panel</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#245EDC] to-[#3F7BF7] p-2 flex items-center justify-between">
                <button className="text-white text-xs font-bold hover:bg-blue-700 px-2 py-1 rounded flex items-center gap-1">
                  <span>🔌</span> Log Off
                </button>
                <button className="text-white text-xs font-bold hover:bg-blue-700 px-2 py-1 rounded flex items-center gap-1">
                  <span>⏻</span> Turn Off
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-[#245EDC] to-[#1941A5] border-t-2 border-[#3F7BF7] flex items-center px-1 gap-1 shadow-[0_-2px_10px_rgba(0,0,0,0.3)] z-[9999]">
        {/* Start Button */}
        <button
          onClick={() => setStartMenuOpen(!startMenuOpen)}
          className="h-8 px-3 bg-gradient-to-b from-[#3F7BF7] to-[#2B5FC6] hover:from-[#4A8AFF] hover:to-[#3466D7] rounded border-2 border-t-white border-l-white border-r-gray-800 border-b-gray-800 flex items-center gap-2 shadow-inner font-bold text-white text-sm"
        >
          <span className="text-base">🪟</span>
          <span className="italic">start</span>
        </button>

        {/* Window Buttons */}
        <div className="flex-1 flex gap-1 overflow-x-auto">
          {openWindows.map((window) => (
            <button
              key={window.id}
              onClick={() => onWindowClick(window.id)}
              className={`h-8 px-3 min-w-[120px] max-w-[200px] text-left truncate rounded border-2 shadow-sm text-xs font-bold ${
                window.isMinimized
                  ? "bg-[#ECE9D8] border-gray-400 text-gray-800"
                  : "bg-gradient-to-b from-[#ECE9D8] to-[#D4D0C8] border-t-white border-l-white border-r-gray-600 border-b-gray-600 text-black"
              }`}
            >
              {window.title}
            </button>
          ))}
        </div>

        {/* System Tray */}
        <div className="h-8 bg-[#0A94FF] rounded flex items-center gap-2 px-2 border-2 border-[#2B6FDD]">
          <span className="text-white text-xs">🔊</span>
          <div className="h-6 w-px bg-[#1863D7]" />
          <span className="text-white text-xs font-bold">
            {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>
      </div>
    </>
  );
};

export default Taskbar;
