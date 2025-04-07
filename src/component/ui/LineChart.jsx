import React from "react";

const data = [
  300, 1300, 900, 800, 1300, 800, 700, 820, 710, 680, 1900, 1600, 700, 1000,
  400, 1100, 600, 1300, 700, 1600,
];

const LineChart = () => {
  const maxY = 2000;
  const yLabels = [2000, 1600, 1200, 800, 400, 200];

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - (value / maxY) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div>
      <div className="flex">
        {/* Y-Axis Labels */}
        <div className="flex flex-col justify-between text-[#555555] text-[10px] mr-2 gap-0.5">
          {yLabels.map((label, idx) => (
            <span key={idx}>{label >= 1000 ? `${label / 1000}K` : label}</span>
          ))}
        </div>

        {/* Chart */}
        {/* <svg viewBox="0 0 100 100" className="w-full h-30 ms-5" preserveAspectRatio="none">
          <polyline
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            points={points}
          />
        </svg> */}
        <div className="ps-3 pb-2">
          <img src="/graph.png" className="max-w-full lg:min-h-[150px] h-full" />
        </div>
      </div>

      {/* X-Axis Labels */}
      <div className="flex justify-between text-[#555555] text-[10px] ms-10 pt-3 border-t-1 border-[#272727]">
        <span>Mar 1</span>
        <span>Mar 5</span>
        <span>Mar 10</span>
        <span>Mar 15</span>
        <span>Mar 20</span>
        <span>Mar 25</span>
        <span>Mar 30</span>
      </div>
    </div>
  );
};

export default LineChart;
