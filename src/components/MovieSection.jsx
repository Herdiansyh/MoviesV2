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

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCloseMovie = () => {
    setSelectedMovie(null);
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    console.log(selectedMovie);
  };

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

  // tombol untuk scroll left dan right
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
    <section className="relative">
      <h2 className="p-3 text-[20px] sm:text-[32px] leading-[120%] tracking-[0%] font-bold mb-5">
        {title}
      </h2>

      <span
        onClick={scrollLeftButton}
        className="lg:inline-flex z-70 hidden hover:bg-gray-500 hover:cursor-pointer text-lg absolute top-1/2 -left-3 justify-center bg-[rgba(255,255,255,0.1)] rounded-full backdrop-blur-xl p-2 h-11 items-center w-11"
      >
        {"<"}
      </span>

      <div
        ref={containerRef}
        className="flex gap-[16px] sm:gap-[32px] overflow-x-auto p-3 no-scrollbar hover:cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {datamovies.map((movie) => (
          <article
            onClick={() => handleSelectMovie(movie)}
            key={movie.id}
            className={`flex-shrink-0 relative hover:cursor-pointer ${
              type === "vertikal"
                ? "sm:w-[302px] sm:h-[162px] w-[309px] h-[151px] sm:rounded-[8px] rounded-[7px]"
                : "sm:w-[234px] sm:h-[365px] w-[95.6px] h-[143.39px] rounded-[3.82px] sm:rounded-[8px]"
            } bg-gray-700 hover:scale-105 transition-transform duration-300 bg-cover bg-center hover:z-60`}
            style={{ backgroundImage: `url('${movie.image}')` }}
          >
            {/* logo premium */}
            {movie.akses === "premium" && (
              <div className="sm:py[4px] sm:px[10px] py-[1.91px] px-[4.78px] w-[37.56px] sm:w-[78px] sm:h-[28px] left-3 absolute mt-2 h-[14px] inline-flex items-center justify-center bg-[#B7A207] rounded-[24px] text-center">
                <span className="text-[6.69px] tracking-[0.1px] leading-[140%] font-bold sm:tracking-[0.2px] sm:text-[14px]">
                  {movie.akses}
                </span>
              </div>
            )}

            {/* logo top movie */}
            {movie.top && (
              <div className="w-[14.82px] h-[21.82px] sm:w-[31px] sm:h-[48px] absolute inline-flex right-2 px-1 py-1 bg-red-600 justify-center items-center text-center">
                <span className="text-[6.69px] sm:text-[14px] leading-[140%] tracking-[0.2px]">
                  {movie.top}
                </span>
              </div>
            )}

            {/* rating and title movie */}
            {type === "vertikal" && (
              <div className="w-full h-full flex items-end p-3 rounded-lg">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-[14px] sm:text-[18px] font-bold text-white tracking-[0.2px] sm:tracking-[0%]">
                    {movie.title}
                  </h3>
                  <p className="text-yellow-400 text-sm">⭐ {movie.rating}</p>
                </div>
              </div>
            )}

            {/* pop up movie detail */}
            {selectedMovie?.id === movie.id && type !== "vertikal" && (
              <div className="min-h-full sm:min-w-[320px] bg-[#181A1C] absolute opacity-0 hover:opacity-100 top-0 -left-10 bottom-0 scale-3d rounded-[20px] overflow-hidden">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCloseMovie();
                  }}
                  className="absolute right-4 top-2 text-sm text-black border border-black rounded-full w-10 text-center hover:bg-gray-500 bg-white"
                  aria-label={`Close details for ${movie.title}`}
                >
                  x
                </button>
                <div className="w-full h-[50%] overflow-hidden">
                  <img
                    src={movie.image}
                    className="object-fill w-full h-full"
                    alt={movie.title}
                  />
                </div>
                <div>
                  <div className="flex justify-between p-6">
                    <div className="flex gap-5">
                      <button className="p-3 sm:w-[55px] bg-white rounded-full hover:bg-white/90">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="black"
                          viewBox="0 0 24 24"
                          className="sm:w-[45.83px] sm:h-[45.83px]"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                      <button className="sm:w-[54px] border flex border-solid border-gray-500 bg-[#181A1C] rounded-full hover:bg-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="white"
                          className="sm:w-[21.25px] sm:h-[16.28px] m-auto"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-3 m-5 items-center">
                    <span className="rounded-[29.14px] sm:py-[4px] sm:px-[12px] sm:w-[59px] sm:h-[35px] text-center sm:text-[19.43px] leading-[140%] tracking-[0.24px] text-gray-300 bg-gray-700">
                      13+
                    </span>
                    <span>16 Episode</span>
                  </div>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      <span
        onClick={scrollRightButton}
        className="lg:inline-flex hidden hover:bg-gray-500 hover:cursor-pointer text-lg absolute top-1/2 -right-3 z-70 justify-center bg-[rgba(255,255,255,0.1)] rounded-full backdrop-blur-xl p-2 h-11 items-center w-11"
      >
        {">"}
      </span>
    </section>
  );
}
