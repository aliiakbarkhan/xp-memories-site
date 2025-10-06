interface DesktopIconProps {
  icon: string;
  label: string;
  onClick: () => void;
}

const DesktopIcon = ({ icon, label, onClick }: DesktopIconProps) => {
  return (
    <button
      onClick={onClick}
      onDoubleClick={onClick}
      className="flex flex-col items-center w-20 gap-1 group cursor-pointer"
    >
      <div className="w-12 h-12 flex items-center justify-center text-3xl bg-gradient-to-br from-blue-400 to-blue-600 rounded border-2 border-white shadow-lg group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-xs text-white font-bold text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] leading-tight px-1">
        {label}
      </span>
    </button>
  );
};

export default DesktopIcon;
