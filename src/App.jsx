import React, { useState, useRef } from 'react';
import Sidebar from './Components/SIDEBAR/sidebar';
import Home from './Components/Home';
import ToolTitle from './Components/SECTIONS/ToolTitle';
import HomeButtons from './Components/SECTIONS/HomeButtons';
import AboutSection from './Components/SECTIONS/AboutSection';
import SidebarItems from './Components/SIDEBAR/sidebar-items';

const App = () => {
  
  const [toolConfig, setToolConfig] = useState({
    name: "enhance",
    params: {}
  });

  const enhancedImageRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");

  const handleEnhancedImageChange = (image) => {
    enhancedImageRef.current = image;
  };

  const handleToolChange = (newTool) => {
    if (enhancedImageRef.current) {
      const confirmSwitch = window.confirm(
        "Your enhanced image will be lost. Are you sure you want to switch?"
      );
      if (!confirmSwitch) return;
    }
    setActiveSection("tools");
    setToolConfig(newTool);
    enhancedImageRef.current = null;
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <Sidebar>
        <SidebarItems
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          toolConfig={toolConfig}
          handleToolChange={handleToolChange}
        />
      </Sidebar>

      {/* MAIN CONTENT */}
      <div className="flex flex-col flex-1 py-8 px-6 items-center bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="animate-fade-in w-full max-w-4xl text-center transition-opacity duration-700">

          {/* DYNAMIC TITLE */}
          <ToolTitle activeSection={activeSection} toolConfig={toolConfig} />

          {/* HOME SECTION */}
          {activeSection === "home" && (
            <div className="space-y-6 text-gray-700 max-w-3xl mx-auto pd-6">
              <p className="text-lg leading-relaxed">
                Unlock the true potential of your images with cutting-edge AI-powered tools. Whether you want to enhance details, remove backgrounds, compress files, colorize black & white photos, or remove watermarks — we have you covered.
              </p>
              <HomeButtons setActiveSection={setActiveSection} setToolConfig={setToolConfig} />
              <div className="text-sm italic text-gray-500">
                Fast, reliable, and easy to use — no downloads or installations required.
              </div>
            </div>
          )}

          {/* ABOUT SECTION */}
          {activeSection === "about" && <AboutSection />}

          {/* TOOL SECTION */}
          {activeSection === "tools" && (
            <div className="mt-4 w-full">
              <Home tool={toolConfig} onEnhancedImageChange={handleEnhancedImageChange} />
            </div>
          )}

          {/* FOOTER */}
          <div className="text-md mt-8 text-gray-500">
            Powered by @PixxySynchronous
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
