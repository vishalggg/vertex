import React, { useState } from "react";

function SideHeader({ activeTab, setActiveTab }) {
  const [avatars, setAvatars] = useState([
    "https://randomuser.me/api/portraits/men/66.jpg",
    "https://randomuser.me/api/portraits/women/45.jpg",
    "https://randomuser.me/api/portraits/men/34.jpg",
  ]);

  return (
    <div className="min-w-[50px] items-center bg-black flex-col border-r-1 border-[#1D1D1D] lg:flex hidden">
      <div className="w-full flex flex-col">
        {avatars.map((src, index) => (
          <a
            href="#"
            key={index}
            onClick={index === 0 ? () => setActiveTab(5) : undefined}
            className={`h-[50px] border-b border-[#1D1D1D] ${
              activeTab === 5 && index === 0 ? "bg-[#1D1D1D]" : ""
            }`}
          >
            <div className="flex justify-center items-center h-full relative">
              <img
                src={src}
                width="30"
                height="30"
                className="rounded-full"
                alt={`Avatar ${index}`}
              />
              <div className="absolute bg-green-900 w-2 h-2 rounded-full bottom-2.5 right-2.5"></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SideHeader;
