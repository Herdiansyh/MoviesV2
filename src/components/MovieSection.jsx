// src/components/MovieSection.jsx
import React, { useRef, useState } from "react";
import "../index.css";

export default function MovieSection({
  type,
  title,
  moviesvertikal = [],
  movies = [],
  topmovies = [],
  newmovies = [],
}) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // fungsi untuk drag scroll
  const handleMouseDown = (e) => {
    setIsDragging(true);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grabbing";
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    if (containerRef.current) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    if (containerRef.current) {
      setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (containerRef.current) {
      const x = e.touches[0].pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  //tombol untuk scroll left dan right
  const scrollLeftButton = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRightButton = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  // pilih data sesuai type
  let datamovies = [];
  if (type === "movies") {
    datamovies = movies;
  } else if (type === "topmovies") {
    datamovies = topmovies;
  } else if (type === "newmovies") {
    datamovies = newmovies;
  } else {
    datamovies = moviesvertikal;
  }

  return (
    <section className="relative ">
      <h2 className="text-2xl mb-5">{title}</h2>

      <span
        onClick={scrollLeftButton}
        className="lg:inline-flex  hidden hover:bg-gray-500 hover:cursor-pointer text-lg absolute top-1/2 -left-3 z-50 justify-center bg-[rgba(255,255,255,0.1)] rounded-full backdrop-blur-xl p-2 h-11 items-center w-11"
      >
        {"<"}
      </span>

      <div
        ref={containerRef}
        className={`flex gap-7 overflow-x-auto  p-3 no-scrollbar hover:cursor-grab`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* Rest of your existing JSX code remains the same */}
        {datamovies.map((movie) => (
          <div
            key={movie.id}
            className={`flex-shrink-0  relative hover:cursor-pointer ${
              type === "vertikal"
                ? "w-[320px] h-[180px]"
                : " sm:w-[250px] sm:h-[350px] w-[150px] h-[220px]"
            } rounded-lg bg-gray-700 hover:scale-105 transition-transform duration-300 bg-cover bg-center`}
            style={{ backgroundImage: `url('${movie.image}')` }}
          >
            {movie.akses === "premium" && (
              <div className="sm:py[4px] sm:px[10px] py-[1.91px] px-[4.78px] w-[30%] sm:w-[78px] sm:h-[28px] left-3 absolute mt-2 h-5 inline-flex items-center justify-center bg-[#B7A207] rounded-[24px]  text-center ">
                <span className="text-[0.6rem] sm:text-[14px]">
                  {movie.akses}
                </span>
              </div>
            )}
            {movie.top && (
              <div className="w-5 h-10  absolute inline-flex right-2 px-1 py-1 bg-red-600 justify-center items-center text-center">
                <span className="text-[0.6rem]">{movie.top}</span>
              </div>
            )}

            <div className="w-full h-full flex items-end p-3 rounded-lg">
              <div className="flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold text-white">
                  {movie.title}
                </h3>
                {type === "vertikal" && (
                  <p className="text-yellow-400 text-sm">⭐ {movie.rating}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <span
        onClick={scrollRightButton}
        className="lg:inline-flex hidden hover:bg-gray-500 hover:cursor-pointer text-lg absolute top-1/2 -right-3 z-50 justify-center bg-[rgba(255,255,255,0.1)] rounded-full backdrop-blur-xl p-2 h-11 items-center w-11"
      >
        {">"}
      </span>
    </section>
  );
}
