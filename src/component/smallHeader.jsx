import React from "react";

function smallHeader({ setActiveTab }) {
  return (
    <div className="flex bg-black justify-between p-3 items-center lg:hidden border-b-1 border-[#1D1D1D]">
      <div className="cursor-pointer" onClick={() => setActiveTab(5)} >
        <img
          src="https://randomuser.me/api/portraits/men/66.jpg"
          className="w-[30px] h-[30px] rounded-full"
        />
      </div>
      <div className="cursor-pointer">
        <img src="/small-logo.png" className="w-[30px] h-[30px]" />
      </div>
      <div className="cursor-pointer">
        <img src="/Vector.svg" className="h-[20px]" />
      </div>
    </div>
  );
}

export default smallHeader;
