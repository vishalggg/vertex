import React from "react";

function OverviewProfile() {
  return (
    <div className=" text-white md:py-10 py-4 md:px-16 px-6">
      <h1 className="text-[28px] font-bold mb-6">Overview</h1>

      <div className="flex items-center gap-6 border-1 border-[#272727] bg-black text-white rounded-xl sm:p-6 p-5 mb-4 md:flex-nowrap flex-wrap">
        <div className="p-5 md:w-auto w-full">
          <img src="/user-ic.png" width="" />
        </div>
        <div className="md:w-auto w-full">
          <div className="flex items-center gap-[110px]">
            <h2 className="text-2xl font-semibold">Mr ABC</h2>
            <div>
              <img src="/badge.png" alt="" />
            </div>
          </div>
          <p className="text-xs text-gray-400 flex gap-2">
            Co-Founder & CEO @Vertx{" "}
            <span className="bg-white flex justify-center items-center px-1 rounded-[1px]">
              <img src="/vex-logo.png" width="8" />
            </span>
          </p>
          <div className="md:block flex items-center justify-between md:mt-0 mt-7">
            <div className="inline-block mt-1 px-3 py-0.5 text-[8px] bg-white text-black rounded">
              Entrepreneur
            </div>
            <div className="flex items-center gap-2 md:mt-7">
              <a href="">
                <div>
                  <img src="/linked.png" width="30" />
                </div>
              </a>
              <a href="">
                <div>
                  <img src="/twitter.png" width="30" />
                </div>
              </a>
              <a href="">
                <div>
                  <img src="/gmail.png" width="30" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {/* Founded Companies */}
        <div className="border-1 border-[#272727] bg-black text-white rounded-xl sm:p-6 p-5">
          <h2 className="text-lg font-semibold">Founded Companies</h2>
          <p className="text-[64px] font-bold mb-4">02</p>

          <div className="flex gap-2.5 mb-4">
            <div>
              <div className="bg-white p-2 rounded-xs">
                <img src="/vex-logo.png" alt="" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-semibold flex items-center gap-2">
                <span className="text-sm">Vertx</span>
                <span className="bg-[#579560] text-[8px] px-2 py-0 rounded-xs font-jet text-black">
                  CEO
                </span>
              </p>
              <p className="text-[10px] ">
                Founded in 2025. in{" "}
                <span className="font-semibold">Fintech</span>.
              </p>
            </div>
            <div className="h-full ms-auto">
              <a href="" className="hover:underline transition-all">
                <div className="text-[10px]">View Profile</div>
              </a>
            </div>
          </div>

          <div className="flex gap-2.5">
            <div>
              <div className="bg-white p-2 rounded-xs">
                <img src="/vex-logo.png" alt="" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-semibold flex items-center gap-2">
                <span className="text-sm">Company 1</span>
                <span className="bg-[#B1BDEB] text-[8px] px-2 py-0 rounded-xs font-jet text-[#10074F]">
                  PROPRIETOR
                </span>
              </p>
              <p className="text-[10px] ">
                Details/Information<br></br>like acquired /exit/m&a
              </p>
            </div>
            <div className="h-full ms-auto">
              <a href="" className="hover:underline transition-all">
                <div className="text-[10px]">View Profile</div>
              </a>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="border-1 border-[#272727] bg-black text-white rounded-xl sm:p-6 p-5">
          <h2 className="text-lg font-semibold">Experience</h2>
          <p className="text-[64px] font-bold mb-4">03</p>

          <div className="flex gap-2.5 mb-4 items-center">
            <div>
              <div className="bg-white p-2 rounded-xs">
                <img src="/vex-logo.png" alt="" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-semibold flex items-center gap-2">
                <span className="text-sm">Company 1</span>
              </p>
            </div>
            <div className="h-full ms-auto">
              <a href="" className="hover:underline transition-all">
                <div className="text-[10px]">View Profile</div>
              </a>
            </div>
          </div>

          <div className="flex gap-2.5 mb-4 items-center">
            <div>
              <div className="bg-white p-2 rounded-xs">
                <img src="/vex-logo.png" alt="" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-semibold flex items-center gap-2">
                <span className="text-sm">Company 2</span>
              </p>
            </div>
            <div className="h-full ms-auto">
              <a href="" className="hover:underline transition-all">
                <div className="text-[10px]">View Profile</div>
              </a>
            </div>
          </div>
          <div className="flex gap-2.5 mb-10 items-center">
            <div>
              <div className="bg-white p-2 rounded-xs">
                <img src="/vex-logo.png" alt="" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-semibold flex items-center gap-2">
                <span className="text-sm">Company 3</span>
              </p>
            </div>
            <div className="h-full ms-auto">
              <a href="" className="hover:underline transition-all">
                <div className="text-[10px]">View Profile</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewProfile;
