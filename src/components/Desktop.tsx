import DesktopIcon from "./DesktopIcon";

interface DesktopProps {
  onIconClick: (id: string, title: string) => void;
}

const Desktop = ({ onIconClick }: DesktopProps) => {
  const icons = [
    { id: "about", title: "About Me", icon: "👤" },
    { id: "projects", title: "My Projects", icon: "💻" },
    { id: "services", title: "Services", icon: "⚙️" },
    { id: "achievements", title: "Achievements", icon: "🏆" },
    { id: "resume", title: "Resume", icon: "📄" },
    { id: "gallery", title: "Gallery", icon: "🖼️" },
    { id: "contact", title: "Contact", icon: "📧" },
    { id: "mario", title: "Mario Game", icon: "🍄" },
    { id: "minesweeper", title: "Minesweeper", icon: "💣" },
  ];

  return (
    <div className="absolute inset-0 p-2 md:p-4 grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-4 content-start pointer-events-none">
      {icons.map((icon) => (
        <div key={icon.id} className="pointer-events-auto">
          <DesktopIcon
            icon={icon.icon}
            label={icon.title}
            onClick={() => onIconClick(icon.id, icon.title)}
          />
        </div>
      ))}
    </div>
  );
};

export default Desktop;
