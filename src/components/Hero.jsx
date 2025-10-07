// src/components/Hero.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../index.css";
export default function Hero({ datahero }) {
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const handlePlay = (url) => {
    setCurrentVideo(url);
    setShowVideo(true);
  };

  const handleClose = () => {
    setShowVideo(false);
    setCurrentVideo("");
  };

  return (
    <section className="relative sm:h-[500px] pt-[20px] h-[225px]">
      {/* Modal Video */}
      {showVideo && (
        <div className="absolute w-full top-[20%]  bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-3xl h-auto">
            <iframe
              src={currentVideo}
              controls
              autoPlay
              className="w-full aspect-video rounded-2xl border-4 border-gray-700"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 hover:cursor-pointer text-white text-3xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={0}
        slidesPerView={1}
        loop
      >
        {datahero.map((hero) => (
          <SwiperSlide key={hero.id}>
            <div
              className={`active:cursor-grabbing relative h-[300px] sm:h-[587px] flex items-end justify-between p-10 md:p-20 bg-cover bg-center `}
              style={{ backgroundImage: `url(${hero.image})` }}
            >
              <div className="bg-gradient-to-b from-transparent  to-[#1a1a1a] absolute inset-0"></div>
              <div className="relative w-full z-10">
                <h1 className="text-[24px] sm:text-[48px] mb-2">
                  {hero.title}
                </h1>
                <p className="mb-5 text-[12px] max-w-md sm:text-[18px] leading-relaxed">
                  {hero.sinopsis}
                </p>
                <div className="flex items-center gap-4 justify-between ">
                  <div className="flex items-center gap-3">
                    <a
                      href={hero.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePlay(hero.url);
                      }}
                      className="bg-blue-900 lg:px-6 hover:cursor-pointer hover:bg-blue-800 lg:py-3 px-3 py-1 text-sm lg:text-lg rounded-full text-white"
                    >
                      Mulai
                    </a>
                    <button className="bg-gray-700 border hover:cursor-pointer hover:bg-gray-600 border-gray-500 lg:py-3 px-3 py-1 sm:w-[185px] sm:h-[45px] w-[144px] h-[25px] flex items-center justify-center rounded-full text-white">
                      <span className="text-[12px] sm:text-[16px] font-bold leading-[140%] tracking-[0.2px]">
                        ⓘ Selengkapnya
                      </span>
                    </button>
                    <span className="border border-white rounded-full lg:px-3 lg:py-2 px-2 py-1 text-sm">
                      18+
                    </span>
                  </div>
                  <div className=" border border-white rounded-full p-2  z-10">
                    <img
                      src="/img/volume.png"
                      alt="Volume control"
                      className="lg:w-5 w-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
