import { useState } from "react";
import Desktop from "@/components/Desktop";
import Taskbar from "@/components/Taskbar";
import WindowContainer from "@/components/WindowContainer";
import AboutWindow from "@/components/windows/AboutWindow";
import ProjectsWindow from "@/components/windows/ProjectsWindow";
import ServicesWindow from "@/components/windows/ServicesWindow";
import AchievementsWindow from "@/components/windows/AchievementsWindow";
import ResumeWindow from "@/components/windows/ResumeWindow";
import ContactWindow from "@/components/windows/ContactWindow";
import GalleryWindow from "@/components/windows/GalleryWindow";

export interface WindowState {
  id: string;
  title: string;
  component: React.ReactNode;
  isMinimized: boolean;
  zIndex: number;
}

const Index = () => {
  const [openWindows, setOpenWindows] = useState<WindowState[]>([]);
  const [nextZIndex, setNextZIndex] = useState(1);

  const openWindow = (id: string, title: string, component: React.ReactNode) => {
    const existingWindow = openWindows.find((w) => w.id === id);
    
    if (existingWindow) {
      // Restore if minimized and bring to front
      setOpenWindows((windows) =>
        windows.map((w) =>
          w.id === id
            ? { ...w, isMinimized: false, zIndex: nextZIndex }
            : w
        )
      );
      setNextZIndex((z) => z + 1);
    } else {
      // Open new window
      setOpenWindows([
        ...openWindows,
        { id, title, component, isMinimized: false, zIndex: nextZIndex },
      ]);
      setNextZIndex((z) => z + 1);
    }
  };

  const closeWindow = (id: string) => {
    setOpenWindows((windows) => windows.filter((w) => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setOpenWindows((windows) =>
      windows.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    );
  };

  const focusWindow = (id: string) => {
    setOpenWindows((windows) =>
      windows.map((w) =>
        w.id === id ? { ...w, zIndex: nextZIndex } : w
      )
    );
    setNextZIndex((z) => z + 1);
  };

  const handleIconClick = (id: string, title: string) => {
    let component: React.ReactNode;
    
    switch (id) {
      case "about":
        component = <AboutWindow />;
        break;
      case "projects":
        component = <ProjectsWindow />;
        break;
      case "services":
        component = <ServicesWindow />;
        break;
      case "achievements":
        component = <AchievementsWindow />;
        break;
      case "resume":
        component = <ResumeWindow />;
        break;
      case "contact":
        component = <ContactWindow />;
        break;
      case "gallery":
        component = <GalleryWindow />;
        break;
      default:
        component = <div>Window content</div>;
    }
    
    openWindow(id, title, component);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-b from-[#5A9F3E] via-[#88C85A] to-[#5A9F3E] font-['Tahoma',_'MS_Sans_Serif',_sans-serif]">
      <Desktop onIconClick={handleIconClick} />
      
      {openWindows.map((window) => (
        !window.isMinimized && (
          <WindowContainer
            key={window.id}
            id={window.id}
            title={window.title}
            onClose={() => closeWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
            onFocus={() => focusWindow(window.id)}
            zIndex={window.zIndex}
          >
            {window.component}
          </WindowContainer>
        )
      ))}
      
      <Taskbar
        openWindows={openWindows}
        onWindowClick={(id) => {
          const window = openWindows.find((w) => w.id === id);
          if (window?.isMinimized) {
            setOpenWindows((windows) =>
              windows.map((w) =>
                w.id === id
                  ? { ...w, isMinimized: false, zIndex: nextZIndex }
                  : w
              )
            );
            setNextZIndex((z) => z + 1);
          } else {
            focusWindow(id);
          }
        }}
      />
    </div>
  );
};

export default Index;
