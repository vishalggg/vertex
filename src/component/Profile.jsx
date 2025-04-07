import React, { useState } from "react";
import Overview from "./tabs/OverviewProfile";

function Profile() {
  const [activeTab, setActiveTab] = useState("Tab1");

  const tabs = [
    { id: "Tab1", label: "Overview" },
    { id: "Tab2", label: "Portfolio" },
    { id: "Tab3", label: "Experience" },
    { id: "Tab4", label: "Media" },
  ];

  const tabContent = {
    Tab1: <Overview />,
    Tab2: <h1 className="text-white p-5 text-2xl">Portfolio Content</h1>,
    Tab3: <h1 className="text-white p-5 text-2xl">Experience Content</h1>,
    Tab4: <h1 className="text-white p-5 text-2xl">Media Content</h1>,
  };

  return (
    <>
      <div className="text-white bg-black flex grow border-b-1 border-[#1D1D1D]">
        <div className="flex md:justify-start justify-center grow md:gap-0 gap-5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`md:w-[120px] md:px-0 px-2 py-3 font-medium md:text-base text-xs ${
                activeTab === tab.id
                  ? " text-white md:border-r-1 md:border-[#1D1D1D] md:border-b-0 border-b-1 border-white"
                  : "text-[#555555] hover:text-white  md:border-r-1 md:border-[#1D1D1D]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="ms-auto md:flex hidden">
          <div className="w-[120px] flex items-center justify-center h-full border-l-1 border-[#1D1D1D]">
            <a href="" className="text-white ">
              More
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="">{tabContent[activeTab]}</div>
      </div>
    </>
  );
}

export default Profile;
