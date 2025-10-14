import React from "react";
import { useMyList } from "../context/MyListContext";

export default function PopupMovie({ movie, onClose }) {
  const { addToMyList, myList, removeFromMyList } = useMyList();

  const isnMyList = myList.some((m) => m.title === movie.title);

  const handleRemove = (e) => {
    e.stopPropagation();
    removeFromMyList(movie.title);
  };
  const handleAdd = (e) => {
    e.stopPropagation();
    addToMyList(movie);
  };

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
        <div className="flex justify-between p-4  ">
          <div className="flex gap-5">
            <button className=" hover:cursor-pointer p-2 sm:w-[40px] flex items-center justify-center   bg-white rounded-full hover:bg-white/90">
              <i className="fi fi-sr-play text-black "></i>
            </button>
            {isnMyList ? (
              <button
                onClick={handleRemove}
                className="hover:cursor-pointer sm:w-[40px] border flex items-center justify-center  border-solid border-gray-500 bg-[#181A1C] rounded-full hover:bg-gray-700"
              >
                <i class="fi fi-sr-check"></i>
              </button>
            ) : (
              <button
                onClick={handleAdd}
                className="hover:cursor-pointer sm:w-[40px] border flex items-center justify-center  border-solid border-gray-500 bg-[#181A1C] rounded-full hover:bg-gray-700"
              >
                <i className="fi fi-sr-plus"></i>
              </button>
            )}
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
