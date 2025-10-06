import { useState, useRef, useEffect } from "react";

interface WindowContainerProps {
  id: string;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  zIndex: number;
}

const WindowContainer = ({
  title,
  children,
  onClose,
  onMinimize,
  onFocus,
  zIndex,
}: WindowContainerProps) => {
  const [position, setPosition] = useState({ x: 100, y: 80 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);
  const [savedPosition, setSavedPosition] = useState({ x: 100, y: 80 });
  
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Random initial position
    const randomX = Math.floor(Math.random() * 200) + 50;
    const randomY = Math.floor(Math.random() * 100) + 50;
    setPosition({ x: randomX, y: randomY });
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    onFocus();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !isMaximized) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset, isMaximized]);

  const handleMaximize = () => {
    if (isMaximized) {
      setPosition(savedPosition);
      setIsMaximized(false);
    } else {
      setSavedPosition(position);
      setPosition({ x: 0, y: 0 });
      setIsMaximized(true);
    }
  };

  const windowStyle = isMaximized
    ? { width: "100%", height: "calc(100% - 40px)", top: 0, left: 0 }
    : { top: position.y, left: position.x, width: "700px", maxWidth: "90vw" };

  return (
    <div
      ref={windowRef}
      className="absolute bg-[#ECE9D8] rounded-t-lg shadow-2xl border-2 border-t-[#0054E3] border-l-[#0054E3] border-r-gray-600 border-b-gray-600"
      style={{
        ...windowStyle,
        zIndex,
      }}
      onClick={onFocus}
    >
      {/* Title Bar */}
      <div
        className="h-8 bg-gradient-to-r from-[#0997FF] to-[#0054E3] flex items-center justify-between px-2 cursor-move rounded-t select-none"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white rounded flex items-center justify-center text-xs">
            📄
          </div>
          <span className="text-white font-bold text-sm">{title}</span>
        </div>
        <div className="flex gap-1">
          <button
            onClick={onMinimize}
            className="w-6 h-6 bg-[#ECE9D8] hover:bg-[#D4D0C8] border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 flex items-center justify-center font-bold text-black"
          >
            _
          </button>
          <button
            onClick={handleMaximize}
            className="w-6 h-6 bg-[#ECE9D8] hover:bg-[#D4D0C8] border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 flex items-center justify-center text-black"
          >
            {isMaximized ? "❐" : "□"}
          </button>
          <button
            onClick={onClose}
            className="w-6 h-6 bg-[#ECE9D8] hover:bg-red-500 hover:text-white border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 flex items-center justify-center font-bold text-black"
          >
            ×
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="bg-white overflow-auto max-h-[calc(100vh-200px)] border-2 border-t-gray-600 border-l-gray-600 border-r-white border-b-white">
        {children}
      </div>
    </div>
  );
};

export default WindowContainer;
