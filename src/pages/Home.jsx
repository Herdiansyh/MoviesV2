// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import {
  dataMovies,
  imgVertikal,
  newReleaseMovies,
  topMovies,
} from "../assets/datafilm";

export default function Home({ footer, datahero }) {
  const navigate = useNavigate();
  const hasChecked = useRef(false);

  useEffect(() => {
    if (!hasChecked.current) {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      if (!user) {
        alert("Silakan login terlebih dahulu!");
        navigate("/login");
      }
      hasChecked.current = true;
    }
  }, [navigate]);
  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <Header />
      <Hero datahero={datahero} />
      <main className="px-6 md:px-20 py-10 space-y-10">
        <MovieSection
          title="Melanjutkan Tontonan Film series"
          moviesvertikal={imgVertikal}
          type="vertikal"
        />
        <MovieSection
          title="Persembahan dari chill"
          topmovies={topMovies}
          type="topmovies"
        />
        <MovieSection
          title="Top Rating Film dan Series Hari ini"
          movies={dataMovies}
          type="movies"
        />
        <MovieSection
          title="Film Trending"
          type="topmovies"
          topmovies={topMovies}
        />
        <MovieSection
          title="Rilis Baru"
          type="newmovies"
          newmovies={newReleaseMovies}
        />
      </main>
      <Footer footers={footer} />
    </div>
  );
}
