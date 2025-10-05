import React from "react";
import Header from "../components/Header";
import MovieSection from "../components/MovieSection";
import { dataMovies, topMovies } from "../assets/datafilm";
import Footer from "../components/Footer";

export default function DaftarSaya({ footer }) {
  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <Header />

      <main className="px-6 md:px-20 py-10 space-y-10">
        <MovieSection title="Daftar Saya" movies={dataMovies} type="movies" />
        <MovieSection topmovies={topMovies} type="topmovies" />
      </main>
      <Footer footers={footer} />
    </div>
  );
}
