import React from "react";

const StatBox = ({ label, value, percentage, subValue }) => {
  return (
    <div>
      <div>{label}</div>
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-[32px] font-bold">{value}</h3>
        <div>
          <div className="text-[#01754F] text-xs">{percentage}</div>
          <div className="text-[#555555] text-xs">({subValue})</div>
        </div>
      </div>
    </div>
  );
};

export default StatBox;
