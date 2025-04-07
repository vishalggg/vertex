import React, { useState } from "react";
import OverviewAnalytics from "./tabs/OverviewAnalytics";

export default function Analytics() {
  const [activeTab, setActiveTab] = useState("Tab1");

  const tabs = [
    { id: "Tab1", label: "Overview" },
    { id: "Tab2", label: "Demographics" },
  ];

  const tabContent = {
    Tab1: <OverviewAnalytics />,
    Tab2: <h1 className="text-white p-5 text-2xl">Demographics Content</h1>,
  };

  return (
    <>
      <div className="text-white bg-black flex grow border-b-1 border-[#1D1D1D]">
        <div className="flex md:justify-start justify-center grow md:gap-0 gap-5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={` md:px-6.5 px-2 py-3 font-medium md:text-base text-xs ${
                activeTab === tab.id
                  ? " text-white md:border-r-1 md:border-[#1D1D1D] md:border-b-0 border-b-1 border-whit"
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
