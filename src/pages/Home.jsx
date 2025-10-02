// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import {
  dataHero,
  dataMovies,
  imgVertikal,
  newReleaseMovies,
  topMovies,
} from "../assets/datafilm";

export default function Home() {
  const Movies = dataMovies;
  const Heromovies = dataHero;
  const MoviesVertikal = imgVertikal;
  const Topmovies = topMovies;
  const Newmovies = newReleaseMovies;
  const footers = [
    { title: "Genre", links: ["Aksi", "Anak-anak", "Anime", "Horror"] },
    {
      title: "Bantuan",
      links: ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"],
    },
    { title: "Tentang Kami", links: ["Tentang Chill", "Blog"] },
  ];
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
    <div className="bg-[#1a1a1a] text-white min-h-screen">
      <Header />
      <Hero />
      <main className="px-6 md:px-20 py-10 space-y-10">
        <MovieSection
          title="Melanjutkan Tontonan Film series"
          moviesvertikal={MoviesVertikal}
          type="vertikal"
        />
        <MovieSection
          title="Top Rating Film dan Series Hari ini"
          movies={Movies}
          type="movies"
        />
        <MovieSection
          title="Film Trending"
          type="topmovies"
          topmovies={Topmovies}
        />
        <MovieSection
          title="Rilis Baru"
          type="newmovies"
          newmovies={Newmovies}
        />
      </main>
      <Footer footers={footers} />
    </div>
  );
}
