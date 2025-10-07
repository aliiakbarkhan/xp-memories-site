import { useEffect, useState } from "react";

interface BootScreenProps {
  onComplete: () => void;
}

const BootScreen = ({ onComplete }: BootScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center">
      {/* Windows XP Logo */}
      <div className="mb-8 md:mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            <span className="text-red-500">W</span>
            <span className="text-green-500">i</span>
            <span className="text-blue-500">n</span>
            <span className="text-yellow-500">d</span>
            <span className="text-red-500">o</span>
            <span className="text-green-500">w</span>
            <span className="text-blue-500">s</span>
            <span className="text-white ml-3">XP</span>
          </h1>
          <p className="text-white text-lg md:text-xl font-semibold mt-4">
            ALI AKBAR KHAN'S PORTFOLIO
          </p>
        </div>
      </div>

      {/* Loading Bar */}
      <div className="w-64 md:w-80 h-6 bg-gray-800 border-2 border-gray-600 rounded overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-300 transition-all duration-100"
            style={{ width: `${progress}%` }}
          >
            <div className="h-full w-full animate-pulse bg-white/20"></div>
          </div>
        </div>
      </div>

      {/* Loading Text */}
      <p className="text-white text-sm mt-4 animate-pulse">Loading...</p>
    </div>
  );
};

export default BootScreen;
