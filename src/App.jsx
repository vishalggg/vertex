import React, { useState } from "react";
import SideHeader from "./component/SideHeader";
import TopHeader from "./component/TopHeader";
import Profile from "./component/Profile";
import Analytics from "./component/Analytics";
import SmallHeader from "./component/smallHeader";

const tabs = [
  { name: "Dashboard", icon: "/das-ic.svg" },
  { name: "Analytics", icon: "/ana-ic.svg" },
  { name: "Connect", icon: "/con-ic.svg" },
  { name: "Activity", icon: "/act-ic.svg" },
  { name: "Dealroom", icon: "/dea-ic.svg" },
  { name: "Profile", icon: "" },
  { name: "Settings", icon: "" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className="bg-[#080808]">
        <SmallHeader setActiveTab={setActiveTab} />
        <TopHeader activeTabName={tabs[activeTab].name} />
        <div className="flex">
          <SideHeader activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="flex grow">
            {/* Tabs Header */}
            <div className="flex-col min-w-[190px] gap-2.5 p-4 border-r-1 border-[#1D1D1D] bg-black lg:flex hidden">
              {tabs.map((tab, index) =>
                index === 3 ? null : ( // skip the 3rd index
                  <button
                    key={tab.name}
                    className={`px-4 py-2 transition-all text-left ${activeTab === index ? "text-white font-medium" : "text-[#555555] font-semibold hover:text-white"}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.name}
                  </button>
                )
              )}
            </div>

            {/* Tabs Content */}
            <div className="grow min-h-screen">
              {activeTab === 0 && (
                <div className="p-6 text-white">
                  {/* Your card-like content for Overview */}
                  <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
                  <p>This is where your Dashboard content goes.</p>
                </div>
              )}

              {activeTab === 1 && <Analytics />}

              {activeTab === 2 && (
                <div className="p-6 text-white">
                  <h2 className="text-xl font-semibold mb-2">Connect</h2>
                  <p>Connect with other users or apps.</p>
                </div>
              )}

              {activeTab === 3 && (
                <div className="p-6 text-white">
                  <h2 className="text-xl font-semibold mb-2">Activity</h2>
                  <p>Explore Activity.</p>
                </div>
              )}

              {activeTab === 4 && (
                <div className="p-6 text-white">
                  <h2 className="text-xl font-semibold mb-2">Dealroom</h2>
                  <p>Explore deals and opportunities.</p>
                </div>
              )}

              {activeTab === 5 && <Profile />}

              {activeTab === 6 && (
                <div className="p-6 text-white">
                  <h2 className="text-xl font-semibold mb-2">Settings</h2>
                  <p>Configure your app preferences here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full flex bg-black justify-between py-2 px-4 items-center lg:hidden z-50">
          {tabs.map((tab, index) =>
            index === 5 || index === 6 ? null : (
              <div key={tab.name}>
                <button className="text-white cursor-pointer" onClick={() => setActiveTab(index)}>
                  <div className="flex justify-center mb-0.5">
                    <img src={tab.icon} alt={tab.name} className="h-[24px]" />
                  </div>
                  <div className="text-[8px]">{tab.name}</div>
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
