// src/components/MovieSection.jsx
import React, { useRef } from "react";

export default function MovieSection({ title, movies, type }) {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <section className="relative">
      <h2 className="text-2xl mb-5">{title}</h2>
      {type === "next" && (
        <span
          onClick={scrollLeft}
          className="hover:bg-gray-500 hover:cursor-pointer text-lg absolute top-1/2 -left-3 z-50 inline-flex  justify-center bg-[rgba(255,255,255,0.1)] rounded-full backdrop-blur-xl p-2 h-11 items-center w-11 "
        >
          {"<"}
        </span>
      )}

      <div
        ref={containerRef}
        className={`flex gap-7 overflow-x-auto justify-center  pb-3 ${
          type === "next" ? "justify-between" : "justify-center"
        }`}
      >
        {movies.map((movie, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 ${
              type === "next" ? "w-[320px] h-[180px]" : "w-[250px] h-[350px]"
            } rounded-lg bg-gray-700 hover:scale-105 transition-transform duration-300 bg-cover bg-center`}
            style={{ backgroundImage: `url('/img/movie/${movie}')` }}
          ></div>
        ))}
      </div>
      {type === "next" && (
        <span
          onClick={scrollRight}
          className="hover:bg-gray-500 hover:cursor-pointer text-lg absolute top-1/2 -right-3 z-50 inline-flex  justify-center bg-[rgba(255,255,255,0.1)] rounded-full backdrop-blur-xl p-2 h-11 items-center w-11 "
        >
          {">"}
        </span>
      )}
    </section>
  );
}
