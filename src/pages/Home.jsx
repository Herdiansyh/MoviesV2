// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const continueMovies = ["1.png", "2.png", "3.png", "4.png", "5.png"];

  const topRating = ["6.png", "7.png", "8.png", "9.png", "10.png"];

  const trending = ["11.png", "12.png", "1.png", "2.png", "4.png"];

  const newRelease = ["5.png", "7.png", "6.png", "8.png", "9.png"];
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
          title="Melanjutkan Tontonan Film"
          movies={continueMovies}
          type="next"
        />
        <MovieSection
          title="Top Rating Film dan Series Hari ini"
          movies={topRating}
        />
        <MovieSection title="Film Trending" movies={trending} />
        <MovieSection title="Rilis Baru" movies={newRelease} />
      </main>
      <Footer footers={footers} />
    </div>
  );
}
