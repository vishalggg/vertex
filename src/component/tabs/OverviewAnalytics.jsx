import React from "react";
import LineChart from "../ui/LineChart";
import StatBox from "../ui/Statbox";
import ShortBtn from "../ui/ShortBtn";

function OverviewAnalytics() {
  const demographics = [
    { country: "India", percent: 40, color: "bg-[#4834D4]", icon: "/IN.svg" },
    { country: "USA", percent: 25, color: "bg-[#BD5302]", icon: "/US.svg" },
    { country: "CANADA", percent: 10, color: "bg-[#E9C16B]", icon: "/CA.svg" },
    { country: "UAE", percent: 7, color: "bg-[#01754F]", icon: "/UAE.svg" },
  ];
  return (
    <div className="text-white md:py-10 py-4 md:px-16 px-6">
      <h1 className="text-[28px] font-bold mb-6">Overview</h1>

      <div className="flex gap-4 mb-4 w-full lg:flex-nowrap flex-wrap">
        {/* Visitors Chart (mocked) */}
        <div className="bg-black sm:p-6 p-5 rounded-xl border-1 border-[#272727] grow">
          <div className="flex sm:gap-2 gap-1 mb-2">
            {/* Visitors Dropdown */}
            <div className="relative">
              <select className="sm:text-xs text-[10px] appearance-none bg-black text-white border border-[#1D1D1D] rounded-full px-4 sm:py-2 py-1 sm:pr-10 pr-4 cursor-pointer focus:outline-none  transition-all hover:border-[#ffffff60] ">
                <option>Visitors</option>
                <option>Users</option>
                <option>Pageviews</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 items-center text-white sm:flex hidden">
                <svg className="sm:w-[30px] w-[20px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect x="0" fill="none" width="24" height="24"></rect>{" "}
                    <g>
                      {" "}
                      <path d="M7 10l5 5 5-5"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>

            {/* Time Range Dropdown */}
            <div className="relative">
              <select className="sm:text-xs text-[10px] appearance-none bg-black text-white border border-[#1D1D1D] rounded-full px-4 sm:py-2 py-1 sm:pr-10 pr-9 focus:outline-none transition-all hover:border-[#ffffff60] cursor-pointer">
                <option>Last 30 days</option>
                <option>Last 7 days</option>
                <option>Last 90 days</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-white">
                <svg className="sm:w-[30px] w-[20px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect x="0" fill="none" width="24" height="24"></rect>{" "}
                    <g>
                      {" "}
                      <path d="M7 10l5 5 5-5"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>

            {/* Add Button */}
            <button className="sm:text-xs text-[10px] bg-black text-white border-dashed border-[#1D1D1D] border-2 rounded-full px-4 sm:py-2 py-1  hover:bg-white hover:text-black transition-all cursor-pointer">
              + Add
            </button>
          </div>
          <StatBox value="13.49K" percentage="+469%" subValue="897" />
          <LineChart />
        </div>

        {/* Insights */}
        <div className="bg-black sm:p-6 p-5 rounded-xl border-1 border-[#272727] lg:min-w-[340px] min-w-full">
          <div className="flex relative justify-between">
            <h3 className="text-xl font-semibold mb-5">Insights</h3>
            {/* Visitors Dropdown */}
            <div className="relative sm:hidden block">
              <select className="sm:text-xs text-[10px] appearance-none bg-black text-white border border-[#1D1D1D] rounded-full px-5 sm:py-2 py-1  sm:pr-10 pr-6 cursor-pointer focus:outline-none  transition-all hover:border-[#ffffff60] ">
                <option>Visitors</option>
                <option>Users</option>
                <option>Pageviews</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 items-center text-white sm:flex hidden">
                <svg className="sm:w-[30px] w-[20px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect x="0" fill="none" width="24" height="24"></rect>{" "}
                    <g>
                      {" "}
                      <path d="M7 10l5 5 5-5"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="sm:block flex items-center justify-between">
            <StatBox label="Founders" value="7.4K" percentage="+000%" subValue="000" />

            <StatBox label="Investors" value="6.09K" percentage="+000%" subValue="000" />
          </div>
          <div className="lg:mt-14 mt-5 border-t-1 border-[#1D1D1D] pt-5 flex justify-end">
            <ShortBtn title="View Detailed Insights" />
          </div>
        </div>
      </div>

      {/* Demographics */}
      <div className="flex gap-6 w-full bg-black sm:p-6 p-5  rounded-xl border-1 border-[#272727] lg:flex-nowrap flex-wrap">
        <div className="grow">
          <h3 className="text-xl font-semibold">Demographics</h3>
          {/* Visitors Dropdown */}
          <div className="relative sm:hidden block my-2">
            <select className="sm:text-xs text-[10px] appearance-none bg-black text-white border border-[#1D1D1D] rounded-full px-5 sm:py-2 py-1  sm:pr-10 pr-6 cursor-pointer focus:outline-none  transition-all hover:border-[#ffffff60] ">
              <option>Visitors</option>
              <option>Users</option>
              <option>Pageviews</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 items-center text-white sm:flex hidden">
              <svg className="sm:w-[30px] w-[20px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <rect x="0" fill="none" width="24" height="24"></rect>{" "}
                  <g>
                    {" "}
                    <path d="M7 10l5 5 5-5"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/map.jpg" className="lg:h-[230px]" />
          </div>
          <div className="flex sm:gap-6 xs:gap-5 gap-4 border-1 border-[#1D1D1D] py-2 px-4 rounded-4xl w-max ">
            {demographics.map((item) => (
              <div key={item.country} className="flex gap-1 items-center">
                <div className={`  w-[12px] h-[12px] ${item.color} rounded-full`}></div>
                <div className="text-xs">{item.country}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" lg:min-w-[290px] min-w-full p-3 ">
          <div className="space-y-6">
            {demographics.map((item) => (
              <div key={item.country} className="flex items-center lg:justify-between gap-2 lg:w-auto w-full">
                <div className="">
                  <img src={`${item.icon}`} alt={item.country} className="h-[28px] rounded-xs" />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-end mb-0.5">
                    <p className="text-sm">{item.country}</p>
                    <span className="text-[10px]">{item.percent}%</span>
                  </div>
                  <div className="lg:w-[210px] w-full bg-[#1D1D1D] h-2 rounded-full">
                    <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.percent}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t-1 border-[#1D1D1D] pt-4 flex justify-end">
            <ShortBtn title="View All Countries" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewAnalytics;
