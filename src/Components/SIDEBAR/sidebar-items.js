import React from 'react';
import {
  Wand2,
  Scissors,
  FileCheck2,
  Palette,
  EyeOff,
  Home as HomeIcon,
  Info,
} from 'lucide-react';
import { SidebarItem } from './sidebar';

const SidebarItems = ({ activeSection, setActiveSection, toolConfig, handleToolChange }) => {
  return (
    <>
      <SidebarItem
        icon={<HomeIcon size={20} />}
        text="Home"
        active={activeSection === "home"}
        onClick={() => setActiveSection("home")}
      />
      <SidebarItem
        icon={<Info size={20} />}
        text="About"
        active={activeSection === "about"}
        onClick={() => setActiveSection("about")}
      />
      
        <SidebarItem
          icon={<Wand2 size={18} />}
          text="Enhance"
          active={toolConfig.name === "enhance"}
          onClick={() => handleToolChange({ name: "enhance", params: {} })}
        />
        <SidebarItem
          icon={<Scissors size={18} />}
          text="Remove Background"
          active={toolConfig.name === "remove_bg"}
          onClick={() => handleToolChange({ name: "remove_bg", params: { bg: "white" } })}
        />
        <SidebarItem
          icon={<FileCheck2 size={18} />}
          text="Compress Image"
          active={toolConfig.name === "compress"}
          onClick={() => handleToolChange({ name: "compress", params: { compression_level: 75 } })}
        />
        <SidebarItem
          icon={<Palette size={18} />}
          text="Colorize Image"
          active={toolConfig.name === "colorize"}
          onClick={() => handleToolChange({ name: "colorize", params: {} })}
        />
        <SidebarItem
          icon={<EyeOff size={18} />}
          text="Remove Watermark"
          active={toolConfig.name === "remove_watermark"}
          onClick={() => handleToolChange({ name: "remove_watermark", params: { auto: true } })}
        />
      
    </>
  );
};

export default SidebarItems;
