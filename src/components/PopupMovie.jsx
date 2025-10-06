import React from "react";

export default function PopupMovie({ movie, onClose }) {
  return (
    <div className="sm:block hidden min-h-full sm:min-w-[320px] bg-[#181A1C] absolute opacity-0 hover:opacity-100 top-0 sm:-left-10 -left-6 bottom-0 scale-3d rounded-[20px] overflow-hidden">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-2 top-2 text-sm text-black  rounded-full sm:w-10 w-5 text-center hover:bg-gray-500 bg-[rgba(255,255,255,0.1)] backdrop-blur-2xl"
        aria-label={`Close details for ${movie.title}`}
      >
        x
      </button>
      <div className="w-full h-[50%] overflow-hidden">
        <img
          src={movie.image}
          className=" object-fill w-full h-full"
          alt={movie.title}
        />
      </div>
      <div>
        <div className="flex justify-between p-6  ">
          <div className="flex gap-5">
            <button className="p-3 sm:w-[55px]   bg-white rounded-full hover:bg-white/90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                className="sm:w-[45.83px]sm:h-[45.83px]"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <button className="sm:w-[54px] border flex  border-solid border-gray-500 bg-[#181A1C] rounded-full hover:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="white"
                className="sm:w-[21.25px] sm:h-[16.28px]  m-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex gap-3 m-5 items-center ">
          <span className="rounded-[29.14px] sm:py-[4px] sm:px-[12px] sm:w-[59px] sm:h-[35px] text-center  sm:text-[19.43px] leading-[140%] tracking-[0.24px]  text-gray-300 bg-gray-700">
            13+
          </span>
          <span>16 Episode</span>
        </div>
      </div>
      <div></div>
    </div>
  );
}
