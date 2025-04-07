import React from "react";

function shortbtn({ title }) {
  return (
    <button className=" px-3 py-1 rounded  text-[10px] flex items-center gap-4 cursor-pointer hover:text-[#acacac] shortbtn">
      {title}{" "}
      <span>
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <rect x="0" fill="none" width="24" height="24"></rect>{" "}
            <g>
              {" "}
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </span>
    </button>
  );
}

export default shortbtn;
