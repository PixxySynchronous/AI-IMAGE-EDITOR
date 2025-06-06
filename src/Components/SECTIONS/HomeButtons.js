import React from 'react';

const tools = [
  { name: "enhance", label: "Enhance Image", params: {} },
  { name: "remove_bg", label: "Remove Background", params: { bg: "white" } },
  { name: "compress", label: "Compress Image", params: { compression_level: 75 } },
  { name: "colorize", label: "Colorize Image", params: {} },
  { name: "remove_watermark", label: "Remove Watermark", params: { auto: true } }
];

const HomeButtons = ({ setActiveSection, setToolConfig }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {tools.map((tool) => (
        <button
          key={tool.name}
          onClick={() => {
            setActiveSection("tools");
            setToolConfig({ name: tool.name, params: tool.params });
          }}
          className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition"
        >
          {tool.label}
        </button>
      ))}
    </div>
  );
};

export default HomeButtons;
