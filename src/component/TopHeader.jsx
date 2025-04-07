import React from "react";

function TopHeader({activeTabName }) {
  return (
    <div className="bg-black h-[50px] border-b-1 border-[#1D1D1D] lg:block hidden">
      <div className="flex items-center h-full">
        <div className="w-[50px] h-[50px] flex justify-center items-center">
          <div className="p-2 bg-white rounded-full">
            <img src="/vex-logo.png" alt="Gmail Logo" className="h-4" />
          </div>
        </div>
        <div className="flex grow h-full">
          <div className="w-[190px] border-r-1 border-[#1D1D1D] flex items-center ps-6">
            <div className="text-lg text-white font-medium">
              Vertxlabs, Inc
            </div>
          </div>
          <div className="grow flex">
            <div className="text-white flex items-center h-full ps-6">{activeTabName}</div>
            <div className="flex ms-auto">
                <div className="w-[120px] flex items-center justify-center h-full border-l-1 border-[#1D1D1D]">
                    <a href="" className="text-white ">Activity</a>
                </div>
                <div className="w-[120px] flex items-center justify-center h-full border-l-1 border-[#1D1D1D]">
                    <a href="" className="text-white">Log out</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
